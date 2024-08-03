import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance, { setAccessToken } from "../../axiosInstance";
import styles from "./AuthForm.module.css";
import Button from "../../components/Button/Button";

export default function AuthForm({ title, type, setUser }) {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(`/auth/${type}`, inputs);
      setUser(response.data.user);
      setAccessToken(response.data.accessToken);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <h3>{title}</h3>
        {type === "signin" && (
          <>
            <input onChange={changeHandler} type="email" name="email" value={inputs?.email} placeholder="Эл.почта" />
            <input onChange={changeHandler} type="password" name="password" value={inputs?.password} placeholder="Пароль" />
          </>
        )}
        {type === "signup" && (
          <>
            <input onChange={changeHandler} name="username" value={inputs?.username} placeholder="Имя пользователя" />
            <input onChange={changeHandler} type="email" name="email" value={inputs?.email} placeholder="Эл.почта" />
            <input onChange={changeHandler} type="password" name="password" value={inputs?.password} placeholder="Пароль" />
          </>
        )}
        {type === "signin" && <Button text="Вход" type="submit" />}
        {type === "signup" && <Button text="Регистрация" type="submit" />}
      </form>
      <p>{error}</p>
    </>
  );
}
