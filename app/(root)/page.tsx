import AuthForm from "@components/AuthForm";

const Login = () => {
  return (
    <AuthForm
      authType="Login"
      authDesc="Add your details below to get back into the app"
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
          inputPlaceholder: "Enter your password",
        },
      ]}
      buttonLabel="Login"
      authOptionPrompt="Don’t have an account?"
      authModeText="Create account"
      authModeLink="/signup"
    />
  );
};

export default Login;
