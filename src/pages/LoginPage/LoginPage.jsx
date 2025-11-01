import { HealthCareCard, LoginForm } from "../../modules/auth";
import Logo from "../../shared/ui/Logo/Logo";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className="authContainer">
      <div className={css.logoWrapper}>
        <Logo variant="auth" />
      </div>
      <div className={css.pageWrapper}>
        <HealthCareCard />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
