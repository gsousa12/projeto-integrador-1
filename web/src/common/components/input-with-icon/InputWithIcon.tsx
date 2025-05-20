import { Eye, EyeOff } from "lucide-react";

export const InputWithIcon = ({
  id,
  type,
  icon: Icon,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  showPassword,
  setShowPassword,
  error,
  autoComplete,
}: any) => {
  const isPassword = type === "password";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-medium mb-1"
      >
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      <div className="flex items-center border border-gray-200 rounded-lg bg-white focus-within:ring-2 focus-within:ring-rose-400 transition">
        <Icon className="w-5 h-5 text-gray-400 ml-3" />
        <input
          id={id}
          type={
            isPassword && showPassword !== undefined
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          className="flex-1 px-3 py-2 bg-transparent outline-none text-gray-800"
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
        {isPassword && setShowPassword && (
          <button
            type="button"
            tabIndex={-1}
            className="mr-3 focus:outline-none"
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            onClick={() => setShowPassword((v: any) => !v)}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-gray-400" />
            ) : (
              <Eye className="w-5 h-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
      {error && (
        <span className="text-rose-600 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
};
