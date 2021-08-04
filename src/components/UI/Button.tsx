import classes from "./Button.module.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      className={classes["button"]}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
