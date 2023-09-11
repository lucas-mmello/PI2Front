import EstudioAccount from "../../components/Account/EstudioAccount";
import UserAccount from "../../components/Account/UserAccount";
import "../../styles/account.scss";

export default function Account() {
  const isPermited = sessionStorage.getItem("permission");
  return <>{isPermited === "1" ? <EstudioAccount /> : <UserAccount />}</>;
}
