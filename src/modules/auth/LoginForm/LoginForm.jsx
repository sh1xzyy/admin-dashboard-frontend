import { useForm } from "react-hook-form";
import css from "./LoginForm.module.css";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import Button from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginSchema } from "../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values) => {
    try {
      console.log(values);

      toast.success(`Welcome back, Test!`);
      reset();
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <BaseInput
          variant="primary"
          type="email"
          placeholder="Email address"
          {...register("email")}
          error={errors.email?.message}
        />
        <BaseInput
          variant="primary"
          type="password"
          placeholder="Password"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>
      <div className={css.actionButtonsWrapper}>
        <Button variant="primary" text="Log in" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
