// import * as React from 'react';
import React, { useState } from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GetDetailModal from "../Modal/GetDetailModal";

// import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SideBar from "../Sidebar/SideBar.js";

const Header = () => {
  const location = useLocation();
  const screen = location.pathname.split("/")[1];
  console.log(screen);
  const [Select, setSelect] = useState([true, false, false, false]);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // model
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  // sidebar
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (React.KeyboardEvent.key === "Tab" ||
          React.KeyboardEvent.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="Header_container">
      <div className="header_left">
        {screen ? (
          <Button className="selected" variant="text" onClick={handleClick}>
            menu
          </Button>
        ) : (
          <Button className=" selected " variant="text" onClick={handleClick}>
            menu
          </Button>
        )}
        <Popover
          className="popover"
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List
            className="popover_list"
            sx={{
              width: "500px",
              color: "rgba(234, 180, 30)",
              bgcolor: "rgba(8, 46, 78)",
              fontSize: "10px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {screen ? (
              <ListItemButton
                onClick={() => {
                  handleClose();
                }}
              >
                <div
                  className=" selected "
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Home
                </div>
              </ListItemButton>
            ) : (
              ""
            )}
            {screen ? (
              <ListItemButton
                onClick={() => {
                  handleClose();
                }}
              >
                <div
                  className=" selected"
                  onClick={() => {
                    history.goBack("/");
                  }}
                >
                  Back
                </div>
              </ListItemButton>
            ) : (
              ""
            )}

            <ListItemButton
              onClick={() => {
                handleClose();
              }}
            >
              <div
                className=" selected"
                onClick={() => {
                  history.push("/");
                }}
              >
                Logout
              </div>
            </ListItemButton>
          </List>
        </Popover>
      </div>
      <div className="header_right bigscreen">
        {screen ? (
          <>
            <Button
              className="selected"
              variant="text"
              onClick={handleModalOpen}
            >
              ADD Detail
            </Button>
            <GetDetailModal
              className="selected"
              handleModalOpen={handleModalOpen}
              handleModalClose={handleModalClose}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </>
        ) : (
          <>
            <Button className="selected" onClick={toggleDrawer("right", true)}>
              setting
            </Button>
            <SideBar toggleDrawer={toggleDrawer} state={state} list={list} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
