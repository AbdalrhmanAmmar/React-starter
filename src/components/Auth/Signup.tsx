import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { AxiosError } from "axios";
import { IError, IFormSignup } from "../../interface";
import axiosInstance from "../../config/axios.config";

function Signup() {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignup>();
  const onSubmit: SubmitHandler<IFormSignup> = async (data) => {
    console.log(data);
    setisLoading(true);

    try {
      const { status } = await axiosInstance.post("/auth/local/register", data);
      console.log(status);
    } catch (error) {
      console.log(error);
      const errorObj = error as AxiosError<IError>;
      console.log(errorObj.response?.data.error.message);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="text-center mb-8">
      <h2 className="text-xl font-semibold mb-4">Create an Account</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto flex flex-col border border-blue-400 p-6 rounded-lg shadow-lg"
      >
        <input
          {...register("username", { required: "Username is required" })}
          className="border border-gray-300 rounded-md mb-4 px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Full Name"
        />
        <p>{errors?.username?.message}</p>
        <input
          {...register("email", { required: "Email is required" })}
          className="border border-gray-300 rounded-md mb-4 px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Email Address"
        />
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          className="border border-gray-300 rounded-md mb-4 px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Password"
        />

        {isLoading ? (
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
        ) : (
          <button className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Sign Up
          </button>
        )}

        <button className="bg-red-500 text-white font-semibold py-2 rounded-md mt-4 hover:bg-red-600 transition duration-300">
          Sign up with Google
        </button>
      </form>
    </div>
  );
}

export default Signup;
