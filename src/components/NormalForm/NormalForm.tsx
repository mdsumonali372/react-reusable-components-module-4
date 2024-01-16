import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./FormValidation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const double = true;
  return (
    <div>
      <h1 className="text-center">This is form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("border border-red-500 mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn(" p-5 grid grid-cols-1 gap-5 justify-items-center", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input type="text" id="email" {...register("email")} />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input type="text" id="password" {...register("password")} />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>
        </div>

        <div
          className={cn(" py-5 grid grid-cols-1 gap-5 justify-items-center", {
            "md:grid-cols-2": double,
          })}
        >
          <div className=" w-full max-w-md justify-end col-start-1 md:col-start-2 flex">
            <Button className="w-full md:w-fit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NormalForm;
