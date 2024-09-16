import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "bg-emerald-100 w-full p-1 border-b-2 rounded-sm border-emerald-300 text-stone-600 focus:outline-none focus:border-emerald-700";

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="font-bold text-md text-stone-500 uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </div>
  );
});

export default Input;
