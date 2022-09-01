import "./Button.scss";

const BUTTON_TYPES_CLASSES: any = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...props }: any) => {
  return (
    <>
      <button
        className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
