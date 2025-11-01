import css from "./HealthCareCard.module.css";
const HealthCareCard = () => {
  return (
    <div className={css.card}>
      <p className={css.description}>
        Your medication, delivered Say goodbye to all&nbsp;
        <span>your healthcare</span> worries with us
      </p>

      <picture>
        <source
          srcSet="/auth/pill-desktop@1x.png 1x, /auth/pill-desktop@2x.png 2x"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/auth/pill-tablet@1x.png 1x, /auth/pill-tablet@2x.png 2x"
          media="(min-width: 768px)"
        />

        <img
          className={css.pill}
          src="/auth/pill-mobile@1x.png"
          srcSet="/auth/pill-mobile@1x.png 1x, /auth/pill-mobile@2x.png 2x"
          alt="pill"
        />
      </picture>
    </div>
  );
};

export default HealthCareCard;
