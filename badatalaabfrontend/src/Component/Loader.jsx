import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Loader = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Regirecting you to login page in {count} sec</h1>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
