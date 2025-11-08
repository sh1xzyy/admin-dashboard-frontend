import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SharedLayoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);
};

export default SharedLayoutPage;
