import { createContext } from "react";
import cn from "../../utils/cn";
import { TForm } from "../../types";
export const FormElementContext = createContext<TDouble>(null);

export type TDouble = {
  double: boolean;
} | null;

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn("border border-red-500 mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
