
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import LoginPage from "./Pages/LoginPage";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, setIsAuthenticated } from "./store/auth.reducer";
import RegisterPage from "./Pages/RegisterPage";
import Destinations from "./Pages/Destinatii";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute redirectTo="/login" />}>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations/>}/>
          </Route>
        </Route>
      </Route>
    </>
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setIsAuthenticated());
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
export default App;

