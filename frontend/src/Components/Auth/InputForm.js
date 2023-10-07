import { useState } from "react";
import { BiShowAlt, BiSolidHide } from "react-icons/bi";
import c from "classnames";

export default function InputForm({
  id,
  placeholder,
  value,
  onChange,
  type,
  className,
}) {
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword);

  if (type !== "password")
    return (
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        className={c(
          "input bg-white text-black input-bordered border-gray-300 w-full focus:outline-none py-6",
          className
        )}
      />
    );

  return (
    <div className="relative">
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        className="input bg-white text-black input-bordered border-gray-300 w-full focus:outline-none py-6 pr-10"
      />
      {showPassword ? (
        <BiSolidHide
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 right-0 cursor-pointer text-gray-500"
          size={26}
          onClick={() => {
            setShowPassword(false);
          }}
        />
      ) : (
        <BiShowAlt
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 right-0 cursor-pointer text-gray-500"
          size={26}
          onClick={() => {
            setShowPassword(true);
          }}
        />
      )}
    </div>
  );
}
