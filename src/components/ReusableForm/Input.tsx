export const Input = ({ errors, register, label, type }) => {
  // console.log(register.name);
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor={label}>
        {label}
      </label>
      <input type={type} id={label} {...register} />
      {errors[register.name] && (
        <span className="text-xs text-red-500">
          {errors[register.name].message}
        </span>
      )}
    </div>
  );
};
