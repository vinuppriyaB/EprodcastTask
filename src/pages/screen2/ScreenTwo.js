import React from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import "./ScreenTwo.css";
import { UserState } from "../../context/UserProvider";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ScreenTwo = () => {
  const { userDetail, setUserDetail } = UserState();
  return (
    <div className="ScreenTwo_Container">
      <Header />
      <div className="table_content">
        <Table
          sx={{ minWidth: 200, maxWidth: 600 }}
          // align="center"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="table_head"> Name</TableCell>
              <TableCell className="table_head"> Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDetail.map((user, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.userName}
                </TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default ScreenTwo;
