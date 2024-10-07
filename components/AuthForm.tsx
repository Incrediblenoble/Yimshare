"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticateUser } from "@lib/firebase/auth";
import { writeUserToDb } from "@lib/firebase/database";
import { lstat } from "fs";

type AuthProps = {
  authType: string;
  authDesc: string;
  inputFields: {
    inputType: string;
    inputId: string;
    inputLabel: string;
    inputPlaceholder: string;
  }[];
  buttonLabel: string;
  authOptionPrompt: string;
  authModeText: string;
  authModeLink: string;
};

const AuthForm = ({
  authType,
  authDesc,
  inputFields,
  buttonLabel,
  authOptionPrompt,
  authModeText,
  authModeLink,
}: AuthProps) => {
  const signupSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
          path: ["confirmPassword"],
        });
      }
    });

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  type signupInputFields = z.infer<typeof signupSchema>;
  type loginInputFields = z.infer<typeof signupSchema>;

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = (
    authType === "Create account"
      ? useForm<signupInputFields>
      : useForm<loginInputFields>
  )({
    resolver:
      authType === "Create account"
        ? zodResolver(signupSchema)
        : zodResolver(loginSchema),
  });

  const onFormSubmit: SubmitHandler<signupInputFields> = async (data) => {
    try {
      if (authType === "Create account") {
        const user = await authenticateUser(
          "Create account",
          data.email,
          data.password
        );

        const userId = user?.user.uid !== undefined ? user?.user.uid : "";
        const userEmail =
          user?.user.email !== undefined && user?.user.email !== null
            ? user?.user.email
            : "";
        writeUserToDb(userId, "", "", userEmail, "", {});
      }

      const user = await authenticateUser("Login", data.email, data.password);

      authenticateUser("Login", data.email, data.password);

      if (!user) return;
      router.push("/home");
    } catch (error) {
      console.log(error);
      setError("root", { message: "This email is already taken" });
    }
  };

  return (
    <div className="w-full h-full p-8 grid flex-1 flex-col items-start self-stretch sm:bg-gray-lightest">
      <div className="w-full sm:max-w-[30rem] flex flex-col flex-1 gap-16 items-start sm:items-center sm:justify-center sm:m-auto">
        <img
          src="../logo.svg"
          alt="logo"
          className="w-[182.5px] h-[40px]object-contain"
        />

        <div className="w-full flex flex-col flex-1 gap-8 sm:p-10 items-start sm:bg-white sm:border-solid sm:border-[1px] sm:border-gray-lightest rounded-md">
          <div className="w-full">
            <h1 className="text-h-md font-extrabold text-dark-gray mb-2">
              {authType}
            </h1>
            <p className="text-gray text-h-normal font-not-bold">{authDesc}</p>
          </div>
          <div className="w-full flex flex-col gap-6 flex-start">
            <form
              action="#"
              className="flex flex-col flex-1 gap-6"
              onSubmit={handleSubmit(onFormSubmit)}
            >
              {inputFields.map((inputField) => (
                <div key={inputField.inputId}>
                  <label
                    htmlFor={inputField.inputId}
                    className="text-b-s text-dark-gray mb-1"
                  >
                    {inputField.inputLabel}
                  </label>{" "}
                  <br />
                  <input
                    type={inputField.inputType}
                    // name={inputField.inputId}
                    id={inputField.inputId}
                    placeholder={inputField.inputPlaceholder}
                    {...register(
                      inputField.inputId === "email"
                        ? "email"
                        : inputField.inputId === "password"
                        ? "password"
                        : "confirmPassword"
                    )}
                    className="w-full rounded-lg py-3 px-4 border-solid border-[1px] border-gray-light"
                  />
                  {inputField.inputId === "email" && errors.email && (
                    <p className="text-red">{errors.email?.message}</p>
                  )}
                  {inputField.inputId === "password" && errors.password && (
                    <p className="text-red">{errors.password?.message}</p>
                  )}
                  {inputField.inputId === "confirmPassword" &&
                    errors?.confirmPassword && (
                      <p className="text-red">
                        {errors.confirmPassword?.message}
                      </p>
                    )}
                </div>
              ))}
              {errors.root && (
                <p className="text-red">{errors.root?.message}</p>
              )}
              <Button
                className="bg-purple text-white pointer-events-auto cursor-pointert px-[0.69rem] py-[1.69rem] hover:bg-purple-light hover:font-bold disabled:bg-purple disabled:opacity-25 disabled:font-bold focus:bg-purple-light focus:font-bold"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : buttonLabel}
              </Button>
            </form>
            <div className="w-full text-center">
              <p className="text-gray text-h-normal font-not-bold">
                {authOptionPrompt}{" "}
                <Link
                  href={authModeLink}
                  className="text-purple font-not-bold text-h-normal"
                >
                  {authModeText}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
