import React from "react";
import "./GetDetailModal.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserState } from "../../context/UserProvider";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const GetDetailModal = ({ handleModalClose, handleModalOpen, modalOpen }) => {
  const { userDetail, setUserDetail } = UserState();

  const btnstyle = { margin: "20px 0", backgroundColor: "green" };
  const textstyle = { margin: "20px 0" };

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  // const history = useHistory();
  const resetForm = (event) => {
    setEmail("");
    setUserName("");
  };

  const handleClick = () => {
    console.log(userName, email);
    let newUser = {
      userName: userName,
      email: email,
    };
    let DetailCopy = [...userDetail];
    DetailCopy.push(newUser);
    setUserDetail(DetailCopy);

    handleModalClose();
    resetForm();
  };
  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal_box">
        <h2 align="center">Enter Details Here</h2>
        <TextField
          label="userName"
          placeholder="Enter Name"
          style={textstyle}
          type="text"
          fullWidth
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <TextField
          label="Email"
          placeholder="Enter Email"
          style={textstyle}
          fullWidth
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Button
          type="submit"
          className="btn-color"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleClick}
        >
          submit
        </Button>
      </Box>
    </Modal>
  );
};

export default GetDetailModal;
