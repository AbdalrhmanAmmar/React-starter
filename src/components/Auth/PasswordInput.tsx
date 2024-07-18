import { ChangeEvent, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

interface Iprops {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
}

function PasswordInput({ onChange, value, name }: Iprops) {
  const [isPassword, setisPassword] = useState(false);
  const onPasswordchanger = () => {
    setisPassword((prev) => !prev);
  };
  return (
    <div className="relative w-[100%] mb-4 ">
      <input
        className="input-box"
        type={isPassword ? "text" : "password"}
        placeholder="password"
        onChange={onChange}
        value={value}
        name={name}
      />
      <span className="input-icon">
        <IoKeyOutline />
      </span>
      <span
        className="input-icon left-[auto] right-4 cursor-pointer"
        onClick={onPasswordchanger}
      >
        {isPassword ? (
          <span>
            <FaRegEye size={20} />
          </span>
        ) : (
          <FaEyeSlash size={20} />
        )}
      </span>
    </div>
  );
}

export default PasswordInput;
