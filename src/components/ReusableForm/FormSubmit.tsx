import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContext } from ".";

export const FormSubmit = () => {
  const double = useContext(FormElementContext);
  return (
    <div
      className={cn(" py-5 grid grid-cols-1 gap-5 justify-items-center", {
        "md:grid-cols-2": double?.double,
      })}
    >
      <div className=" w-full max-w-md justify-end col-start-1 md:col-start-2 flex">
        <Button className="w-full md:w-fit">Submit</Button>
      </div>
    </div>
  );
};
