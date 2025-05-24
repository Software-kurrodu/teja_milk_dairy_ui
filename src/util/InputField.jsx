import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

 export  const InputField=({ label, name, type, value, onChange,pattern,title })=>{
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="relative z-0 w-full mb-5 group">
        <input
          type={type==="password"? showPassword?"text" : type : type}
          name={name}
          id={name}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          title={title}
          inputMode="tel"
          maxLength={type==="tel"?10:undefined}
          value={value}
          onChange={onChange}
          required="true"
        />
        {type==="password" && <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className=" absolute right-0 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>}
        <label
          htmlFor={name}
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
    );
  }