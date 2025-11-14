import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ variant, text, children, ...rest }) => {
  return (
    <button
      className={clsx(
        css.button,
        variant === "primary" && css.primary,
        variant === "secondary" && css.secondary,
        variant === "outline" && css.outline
      )}
      {...rest}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
