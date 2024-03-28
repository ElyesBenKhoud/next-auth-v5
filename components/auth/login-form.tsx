import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  //TODO style this component
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/login"
      showSocial
    >
      login form
    </CardWrapper>
  );
};
