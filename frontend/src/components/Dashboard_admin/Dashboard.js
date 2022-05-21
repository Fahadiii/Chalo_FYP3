import React from "react";
import "./Dashboard.css";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";

const Dashboard = () => {
  const rows = [
    {
      PKG_ID: 1,
      Tour_Guide_ID: 1,
      Pkg_Title: "Three Days Tour to Naran",
      Pkg_duration: "3 days",
      pkg_pricing: "12,000 pkr",
      pkg_from_city: "Islamabad",
      pkg_to_city: "Naran",
      status: "Approved",
    },
    {
      PKG_ID: 2,
      Tour_Guide_ID: 2,
      Pkg_Title: "Five Days Tour to Gilgit",
      Pkg_duration: "5 Days",
      pkg_pricing: "20,000 pkr",
      pkg_from_city: "Lahore",
      pkg_to_city: "Gilgit",
      status: "Pending",
    },
    {
      PKG_ID: 3,
      Tour_Guide_ID: 3,
      Pkg_Title: "Kaghan Package",
      Pkg_duration: "7 Days",
      pkg_pricing: "12,000 pkr",
      pkg_from_city: "Karachi",
      pkg_to_city: "Kaghan",
      status: "Rejected",
    },
    {
      PKG_ID: 4,
      Tour_Guide_ID: 4,
      Pkg_Title: "Visit Skardu",
      Pkg_duration: "6 Days",
      pkg_pricing: "16,000 pkr",
      pkg_from_city: "Islamabad",
      pkg_to_city: "Skardu",
      status: "Pending",
    },
    {
      PKG_ID: 5,
      Tour_Guide_ID: 5,
      Pkg_Title: "weekly tour to murree",
      Pkg_duration: "1 Day",
      pkg_pricing: "4,000 pkr",
      pkg_from_city: "Islamabad",
      pkg_to_city: "Murree",
      status: "Approved",
    },
  ];

  return (
    <div>
      <div className="listContainer">
        <div className="listTitle">Pending Packages</div>
        <TableContainer component={Paper} className="table"></TableContainer>
        <Table
          className="table"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Package ID</TableCell>
              <TableCell className="tableCell">Tour Guide ID</TableCell>
              <TableCell className="tableCell">Package Title</TableCell>
              <TableCell className="tableCell">
                Package Duration (Days)
              </TableCell>
              <TableCell className="tableCell">Package Amount</TableCell>
              <TableCell className="tableCell">From (City)</TableCell>
              <TableCell className="tableCell">To (City)</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.PKG_ID}</TableCell>
                <TableCell className="tableCell">{row.Tour_Guide_ID}</TableCell>
                <TableCell className="tableCell">{row.Pkg_Title}</TableCell>
                <TableCell className="tableCell">{row.Pkg_duration}</TableCell>
                <TableCell className="tableCell">{row.pkg_pricing}</TableCell>
                <TableCell className="tableCell">{row.pkg_from_city}</TableCell>
                <TableCell className="tableCell">{row.pkg_to_city}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableContainer />
      </div>
    </div>
  );
};

export default Dashboard;
