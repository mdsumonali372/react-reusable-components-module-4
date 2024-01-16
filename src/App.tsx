import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import Container from "./components/ui/Container";
import {
  SignUpSchema,
  TNormalForm,
} from "./components/NormalForm/FormValidation";
import { zodResolver } from "@hookform/resolvers/zod";

// const SignUpSchema = z.object({
//   name: z.string().min(1, { message: "Name is required" }),
//   email: z.string().email().min(1, { message: "Email is required" }),
//   password: z.string().min(8, "To short"),
// });

// type TTestSchema = z.infer<typeof SignUpSchema>;

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });
  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onsubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
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
          <Input
            type="email"
            label="Email"
            register={register("email")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
      {/* <NormalForm /> */}
    </Container>
  );
}

export default App;
