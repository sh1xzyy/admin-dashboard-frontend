import { Button } from "@blueprintjs/core";
import css from "./DotPagination.module.css";
import { useState } from "react";
const DotPagination = ({ total = 5 }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={css.dotWrapper}>
      {Array.from({ length: total }).map((_, index) => (
        <Button
          key={index}
          className={css.dotButton}
          style={{
            backgroundColor: index === active ? "#59B17A" : "#E7F1ED",
          }}
          minimal
          onClick={() => setActive(index)}
        />
      ))}
    </div>
  );
};

export default DotPagination;
