import { Button } from "@blueprintjs/core";
import css from "./DotPagination.module.css";
import { useState } from "react";
import clsx from "clsx";
const DotPagination = ({ total = 5, setPage }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={css.dotWrapper}>
      {Array.from({ length: total }).map((_, index) => (
        <Button
          key={index}
          className={clsx(css.dotButton, index === active && css.active)}
          minimal
          onClick={() => {
            setActive(index);
            setPage(index + 1);
          }}
        />
      ))}
    </div>
  );
};

export default DotPagination;
