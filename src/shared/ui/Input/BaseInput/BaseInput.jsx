import clsx from "clsx";
import css from "./BaseInput.module.css";
import { forwardRef } from "react";

const BaseInput = forwardRef(({ variant, error, ...rest }, ref) => {
  return (
    <div>
      {rest?.label && (
        <label className={css.label} htmlFor={rest?.id}>
          {rest.label}
        </label>
      )}
      <div className={css.inputWrapper}>
        <input
          className={clsx(
            css.input,
            variant === "primary" && css.primary,
            variant === "normal" && css.normal
          )}
          ref={ref}
          {...rest}
        />
        {error && <span className={css.error}>{error}</span>}
      </div>
    </div>
  );
});

export default BaseInput;
