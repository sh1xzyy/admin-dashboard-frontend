import css from "./Loader.module.css";
import { Spinner } from "@blueprintjs/core";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <Spinner size={50} intent="primary" />
    </div>
  );
};

export default Loader;
