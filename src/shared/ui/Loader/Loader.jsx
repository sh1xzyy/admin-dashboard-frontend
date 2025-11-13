import css from "./Loader.module.css";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <PulseLoader />
    </div>
  );
};

export default Loader;
