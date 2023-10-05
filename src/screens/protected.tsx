import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../config/firebasemethods";
import Loader from "../assets/loader.gif"
import { Box } from "@mui/material";

export default function Protected(props: any) {
  const { Screen } = props;
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  let checkAuth = () => {
    setLoader(true);

    fbAuth()
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        navigate("/login");
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? (
    <>
    <Box sx={{width:"100%"}}>

      <img className="h-screen w-[100%]" src={Loader} alt="" />
    </Box>
    </>
  ) : (
    <Screen />
  );
}