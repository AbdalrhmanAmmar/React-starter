import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PasswordInput from "./PasswordInput";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import axiosInstance from "../../config/axios.config";
import { IError, IUserRegister } from "../../interface";
import axios from "axios";

export default function Register() {
  const [userRegister, setUserRegister] = useState<IUserRegister>({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    if (
      !userRegister.username ||
      !userRegister.email ||
      !userRegister.password
    ) {
      setError("All fields are required");
      return;
    }

    try {
      await axiosInstance.post<IUserRegister>(
        "/auth/local/register",
        userRegister
      );
      location.replace("/signin");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const responseError = err.response?.data as IError;
        const errorMessage =
          responseError.error?.message ||
          responseError.error?.details?.errors[0]?.message ||
          "An unexpected error occurred";
        setError(errorMessage);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <section className="h-cover flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio capitalize text-center">
          Join Us Today
        </h1>
        {error && (
          <div className="mb-4 text-red font-semibold text-center">{error}</div>
        )}
        <div className="relative w-[100%] mb-4">
          <input
            className="input-box"
            type="text"
            placeholder="Full Name"
            name="username"
            onChange={onChange}
            value={userRegister.username}
          />
          <span className="input-icon">
            <FaRegUser />
          </span>
        </div>
        <div className="relative w-[100%] mb-4">
          <input
            className="input-box"
            type="email"
            placeholder="Email"
            onChange={onChange}
            name="email"
            value={userRegister.email}
          />
          <span className="input-icon">
            <MdEmail />
          </span>
        </div>
        <div>
          <PasswordInput
            onChange={onChange}
            name="password"
            value={userRegister.password}
          />
        </div>
        <button className="btn-dark center">Sign up</button>
        <p className="mt-6 text-dark-grey text-xl text-center">
          Already a member?
          <Link className="underline text-black text-xl ml-1" to="/login">
            Sign in here.
          </Link>
        </p>
      </form>
    </section>
  );
}
