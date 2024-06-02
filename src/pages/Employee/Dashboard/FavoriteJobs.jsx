import React, { useState } from "react";
import Search from "../../../utils/Search";
import StatBox from "../../../components/Common/StatBox";
import { Grid, Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { mockUpDataJobs } from "../../../data/mockData";
import Footer from "../../../components/Layouts/Footer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";

const mockUpData = [
  {
    id: 1,
    job: "Software Engineer",
    dateApplied: "2022-01-01",
    status: "Applied",
    action: "View",
  },
  {
    id: 2,
    job: "Web Developer",
    dateApplied: "2022-01-02",
    status: "In Progress",
    action: "View",
  },
  {
    id: 3,
    job: "Data Analyst",
    dateApplied: "2022-01-03",
    status: "Rejected",
    action: "View",
  },
  // Add more mock data here
];

const FavoriteJobs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(mockUpData);

  const handleSearch = (searchQuery) => {
    const filtered = mockUpData.filter((item) =>
      item.job.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    { field: "job", headerName: "Job", width: 200 },
    { field: "dateApplied", headerName: "Date Applied", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "action", headerName: "Action", width: 150 },
  ];

  return (
    <div>
      <Box m="50px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Search
            data={mockUpData}
            setData={setFilteredData}
            placeholder="Search jobs..."
            searchKeys={["job", "dateApplied", "status"]}
          />
        </Box>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
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
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid rows={currentItems} columns={columns} />
        </Box>
      </Box>
    </div>
  );
};

export default FavoriteJobs;
