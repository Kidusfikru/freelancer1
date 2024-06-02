import React, { useState } from "react";
import Topbar from "../../../components/Layouts/Topbar";
import Search from "../../../utils/Search";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Grid,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../theme";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useSelector } from "react-redux";
import StatBox from "./fragments/Statbox";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {
  mediumTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import LineChart from "./fragments/LineChart";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";

const mockData = [
  { id: 1, name: "John Doe", position: "Software Engineer", status: "Applied" },
  { id: 2, name: "Jane Smith", position: "UI/UX Designer", status: "Applied" },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Data Analyst",
    status: "In Review",
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Project Manager",
    status: "Rejected",
  },
  {
    id: 5,
    name: "David Brown",
    position: "Frontend Developer",
    status: "Hired",
  },
];

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "position", headerName: "Position", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
];

// ...

<DataGrid
  rows={mockData}
  columns={columns}
  components={{ Toolbar: GridToolbar }}
/>;

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Overview = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      {" "}
      <Box marginTop={5} marginRight={3}>
        <Typography {...mediumTypographyProps}>Hello, User</Typography>
        <Typography {...smallTypographyProps}>
          Here is your activities & career opportunities
        </Typography>
        <Divider sx={{ mt: "10px" }} />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          marginTop={5}
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={8}
          >
            <StatBox
              title={"43"}
              subtitle="Jobs Applied"
              icon={
                <WorkHistoryIcon
                  sx={{ color: colors.blueAccent[600], fontSize: "55px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={8}
          >
            <StatBox
              title={"10"}
              subtitle="Favorites"
              icon={
                <BookmarkAddedIcon
                  sx={{ color: colors.blueAccent[600], fontSize: "55px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={8}
          >
            <StatBox
              title={"6"}
              subtitle="Jobs Completed"
              icon={
                <AddTaskIcon
                  sx={{ color: colors.blueAccent[600], fontSize: "55px" }}
                />
              }
            />
          </Box>
          {/* ROW 2 */}
          <Box
            gridColumn="span 12"
            gridRow="span 2"
            // backgroundColor={colors.primary[400]}
          >
            {/* <Typography {...mediumTypographyProps}>Earnings</Typography> */}
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box height="250px" width="100%">
                {" "}
                {/* Adjust the width as needed */}
                <LineChart />
              </Box>
            </Box>
          </Box>
          {/* ROW 3 */}
          <Box
            gridColumn="span 12"
            gridRow="span 4"
            // backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                m="40px 0 0 0"
                height="75vh"
                width="100%"
                sx={{
                  "& .MuiDataGrid-root": {
                    border: "none",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                  },
                  "& .name-column--cell": {
                    color: colors.blueAccent[300],
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                  },
                  "& .MuiCheckbox-root": {
                    color: `${colors.blueAccent[200]} !important`,
                  },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                  },
                }}
              >
                <Typography {...mediumTypographyProps}>
                  Recently Applied
                </Typography>
                <DataGrid
                  rows={mockData}
                  columns={columns}
                  components={{ Toolbar: GridToolbar }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Overview;
