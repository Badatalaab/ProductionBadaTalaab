import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import { useAuth } from "../../Context/auth";

export default function AdminRoutes() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/admin/admin-auth`
      );

      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loader path="" />;
}
