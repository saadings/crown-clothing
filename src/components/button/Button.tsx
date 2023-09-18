import { BaseButton, GoogleSignInButton, InvertedButton } from "./ButtonStyles";

export const BUTTON_TYPES_CLASSES: any = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonStyles: any = (
  buttonType: string = BUTTON_TYPES_CLASSES.base
) => {
  return {
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

const Button = ({ children, buttonType, isLoading, ...props }: any) => {
  const CustomButton = getButtonStyles(buttonType);
  return (
    <>
      <CustomButton disabled={isLoading} {...props}>
        {children}
      </CustomButton>
    </>
  );
};

export default Button;
