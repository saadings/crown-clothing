import { BaseButton, GoogleSignInButton, InvertedButton } from "./ButtonStyles";

export const BUTTON_TYPES_CLASSES: any = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButtonStyles: any = (
  buttonType: string = BUTTON_TYPES_CLASSES.base
) => {
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);
};

const Button = ({ children, buttonType, ...props }: any) => {
  const CustomButton = getButtonStyles(buttonType);
  return (
    <>
      <CustomButton {...props}>{children}</CustomButton>
    </>
  );
};

export default Button;
