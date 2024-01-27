import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";

export default function ToastNotify() {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      message="Something when wrong!!!"
    />
  );
}
