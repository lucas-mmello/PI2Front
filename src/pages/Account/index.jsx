import EstudioAccount from "../../components/Account/EstudioAccount";
import UserAccount from "../../components/Account/UserAccount";
import "../../styles/account.scss";
import CookiesService from "../../services/cookies";

export default function Account() {
  const userData = CookiesService.getCookie("userdata");
  const isPermited = userData ? userData.permission : null;

  return <>{isPermited === "1" ? <EstudioAccount /> : <UserAccount />}</>;
}
