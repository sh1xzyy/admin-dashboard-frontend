import css from "./RecentCustomers.module.css";
const RecentCustomers = ({ item }) => {
  return (
    <>
      <td className={css.td}>
        <div className={css.userInfo}>
          <img className={css.photo} src={item?.photo} alt={item?.name} />
          <span className={css.text}>{item?.name}</span>
        </div>
      </td>
      <td className={css.td}>{item?.email}</td>
      <td className={css.td}>{item?.spent}</td>
    </>
  );
};

export default RecentCustomers;
