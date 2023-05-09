import "./button.styles.scss";

const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};
function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
