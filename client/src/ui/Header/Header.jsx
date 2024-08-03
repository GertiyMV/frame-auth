import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Header.module.css";
import axiosInstance, { setAccessToken } from "../../axiosInstance";

export default function Header({ user, setUser }) {
  const signOutHandler = async () => {
    const response = await axiosInstance.get(`auth/signout`);
    if (response.status === 200) {
      setUser({});
      setAccessToken("");
    }
  };

  return (
    <div className="header">
      <div>
        <Link to="/">Главная</Link>
      </div>
      {user?.email ? (
        <>
          <div>
            <Link onClick={signOutHandler}>Выйти</Link>
          </div>
          <div>{user.email}</div>
        </>
      ) : (
        <>
          <div>
            <Link to="/signin">Войти</Link>
          </div>
          <div>
            <Link to="/signup">Зарегистрироваться</Link>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}
