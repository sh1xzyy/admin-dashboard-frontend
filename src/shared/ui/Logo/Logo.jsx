import clsx from "clsx";
import css from "./Logo.module.css";
const Logo = ({ variant }) => {
  const currentPage = "Dashboard";
  const adminsEmail = "vendor@gmail.com";

  return (
    <Link
      className={clsx(
        css.logoWrapper,
        variant === "auth" ? css.authWrapper : css.commonWrapper
      )}
      to="/"
    >
      {variant === "auth" ? (
        <picture>
          <source
            srcSet="/logos/auth-logo-tablet@1x.png 1x, /logos/auth-logo-tablet@2x.png 2x"
            media="(min-width: 768px)"
          />
          <img
            className={css.logo}
            src="/logos/auth-logo-mobile@1x.png"
            srcSet="/logos/auth-logo-mobile@1x.png 1x, /logos/auth-logo-mobile@2x.png 2x"
            alt="e-pharmacy"
          />
        </picture>
      ) : (
        <picture>
          <source
            srcSet="/logos/common-logo-tablet@1x.png 1x, /logos/common-logo-tablet@2x.png 2x"
            media="(min-width: 768px)"
          />
          <img
            className={css.logo}
            src="/logos/common-logo-mobile@1x.png"
            srcSet="/logos/common-logo-mobile@1x.png 1x, /logos/common-logo-mobile@2x.png 2x"
            alt="e-pharmacy"
          />
        </picture>
      )}

      {variant === "auth" ? (
        <span className={css.authLogoText}>E-pharmacy</span>
      ) : (
        <div className={css.commonLogoTextWrapper}>
          <span className={css.commonLogoText}>Medicine store</span>
          <div className={css.subtitle}>
            <span>{currentPage}</span>
            <span>|</span>
            <span>{adminsEmail}</span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
