import css from "./Customers.module.css";
const Customers = ({ item }) => {
  return (
    <>
      <td className={css.td}>
        <div className={css.userInfo}>
          <img className={css.photo} src={item?.photo} alt={item?.name} />
          <span className={css.text}>{item?.name}</span>
        </div>
      </td>
      <td className={css.td}>{item?.email}</td>
      <td className={css.td}>{item?.address}</td>
      <td className={css.td}>{item?.phone}</td>
      <td className={css.td}>{item?.register_date}</td>
    </>
  );
};

export default Customers;
