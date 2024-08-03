import { useState, useEffect } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import axiosInstance, { setAccessToken } from "./axiosInstance";
import MainPage from "./pages/MainPage/MainPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import Header from "./ui/Header/Header";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance.get(`/tokens/refresh`).then((res) => {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <Navigate to="/main" />,
        },
        {
          path: "/main",
          element: <MainPage to="/main" />,
        },
        {
          path: "/signup",
          element: <SignUpPage setUser={setUser} />,
        },
        {
          path: "/signin",
          element: <SignInPage setUser={setUser} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
