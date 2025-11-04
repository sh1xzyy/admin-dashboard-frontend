import clsx from "clsx";
import css from "./SmallCard.module.css";
import Coins from "./assets/coins.svg?react";
import Users from "./assets/users.svg?react";
const SmallCard = ({ number, type }) => {
  const textByType =
    type === "products"
      ? "All products"
      : type === "suppliers"
      ? "All suppliers"
      : type === "customers" && "All Customers";

  const iconByType =
    type === "products" ? (
      <Coins className={css.icon} role="img" aria-label="coins" />
    ) : type === "suppliers" ? (
      <Coins className={css.icon} role="img" aria-label="coins" />
    ) : (
      type === "customers" && (
        <Users className={css.icon} role="img" aria-label="users" />
      )
    );

  return (
    <div className={clsx(css.wrapper, type === "products" && css.active)}>
      <div className={css.headerWrapper}>
        {iconByType}
        <span className={css.text}>{textByType}</span>
      </div>
      <span className={css.number}>{number}</span>
    </div>
  );
};

export default SmallCard;
