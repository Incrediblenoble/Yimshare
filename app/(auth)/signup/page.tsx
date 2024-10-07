import AuthForm from "@components/AuthForm";

const Signup = () => {
  return (
    <AuthForm
      authType="Create account"
      authDesc="Let's get you started sharing your"
      inputFields={[
        {
          inputId: "email",
          inputType: "email",
          inputLabel: "Email address",
          inputPlaceholder: "e.g. alex@email.com",
        },
        {
          inputId: "password",
          inputType: "password",
          inputLabel: "Password",
          inputPlaceholder: "At least 8 characters",
        },
        {
          inputId: "confirmPassword",
          inputType: "password",
          inputLabel: "Confirm password",
          inputPlaceholder: "Re-enter your password",
        },
      ]}
      buttonLabel="Create new account"
      authOptionPrompt="Already have an account?"
      authModeText="Login"
      authModeLink="/login"
    />
  );
};

export default Signup;
