import { FaRegUser } from "react-icons/fa";

import PasswordInput from "./PasswordInput";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import axiosInstance from "../../config/axios.config";
import CookiesService from "../../service/Cookies";
import { IUserCredentials } from "../../interface";

function Login() {
  const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    const cookiesService = new CookiesService();
    e.preventDefault();

    // ** Action => I/O Operations
    try {
      const { data } = await axiosInstance.post<IUserCredentials>(
        "/auth/local",
        userCredentials
      );
      console.log(data);

      location.replace("/");

      // * 1. Store the token in the cookies
      const expireAt = new Date();
      expireAt.setDate(expireAt.getDate() + 1);

      cookiesService.set("userCredentials", JSON.stringify(data), {
        expires: expireAt,
        path: "/",
        secure: true,
      });

      // * 2. Handle the case when the credentials are invalid or the user is not found
      // * 3. Redirect the user to the dashboard page
    } catch (error) {
      console.error(error);
      setError("Invalid credentials or user not found");
    }
    // setUserCredentials({ identifier: "", password: "" });
  };
  return (
    <section className="h-cover flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-[80%] max-w-[400px] ">
        <h1 className="text-4xl font-gelasio capitalize text-center">
          Wlcome back
        </h1>
        {error && <div className="mb-4 text-purple text-center">{error}</div>}
        <div className="relative w-[100%] mb-4">
          <input
            className="input-box"
            type="email"
            placeholder="Email Address"
            onChange={onChange}
            name="identifier"
            value={userCredentials.identifier}
          />
          <span className="input-icon">
            <FaRegUser />
          </span>
        </div>
        <div>
          <PasswordInput
            onChange={onChange}
            value={userCredentials.password}
            name={"password"}
          />
        </div>
        <button className="btn-dark center">Login</button>
        <p className="mt-6 text-dark-grey text-xl text-center">
          {" "}
          Don't have an account ?
          <Link className="underline text-black text-xl ml-1" to="/signup">
            Create an account now!
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
