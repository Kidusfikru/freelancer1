import React, { useState, useEffect } from "react";
import Search from "../../../utils/Search";
import StatBox from "../../../components/Common/StatBox";
import { Grid, Box, useTheme, Button } from "@mui/material"; // Import Button
import { tokens } from "../../../theme";
import { mockUpDataJobs } from "../../../data/mockData";
import Footer from "../../../components/Layouts/Footer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../../../components/Common/ConfirmationModal";

const mockUpData = [
  {
    id: 1,
    job: "Software Engineer",
    candidate: "John Doe",
    dateApplied: "2022-01-01",
    status: "Applied",
    action: "Accept",
  },
  {
    id: 2,
    job: "Web Developer",
    candidate: "Jane Smith",
    dateApplied: "2022-01-02",
    status: "In Progress",
    action: "Accept",
  },
  {
    id: 3,
    job: "Data Analyst",
    candidate: "Michael Johnson",
    dateApplied: "2022-01-03",
    status: "Rejected",
    action: "Accept",
  },
];

const HireRequests = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(mockUpData);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMessageErr, setToastMessageErr] = useState("");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [decline, setDecline] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      toast.success(toastMessage);
      setToastMessage(""); // Reset the toast message after displaying
    }
  }, [toastMessage]);

  useEffect(() => {
    if (toastMessageErr) {
      toast.error(toastMessageErr);
      setToastMessageErr(""); // Reset the toast message after displaying
    }
  }, [toastMessageErr]);

  const handleSearch = (searchQuery) => {
    const filtered = mockUpData.filter((item) =>
      item.job.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleAccept = (id, job, candidate) => {
    setSelectedJob({ id, job, candidate });
    setConfirmationOpen(true);
  };

  const handleDecline = (id, job, candidate) => {
    setSelectedJob({ id, job, candidate });
    setDecline(true);
    setConfirmationOpen(true);
  };

  const handleConfirm = () => {
    console.log("Accept confirmed for id:", selectedJob.id, selectedJob.job);
    setToastMessage(
      `You have accepted the application for ${selectedJob.candidate} for ${selectedJob.job}`
    );
    setConfirmationOpen(false);
  };

  const handleDeclineConfirm = () => {
    console.log("Decline confirmed for id:", selectedJob.id, selectedJob.job);
    setToastMessageErr(
      `You have declined the application for ${selectedJob.candidate} for ${selectedJob.job}`
    );
    setConfirmationOpen(false);
  };

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    { field: "candidate", headerName: "Candidate", width: 200 },
    { field: "job", headerName: "Job", width: 200 },
    { field: "dateApplied", headerName: "Date Applied", width: 200 },
    {
      field: "accept",
      headerName: "Accept",
      width: 150,
      renderCell: (params) => (
        <Button
          onClick={() =>
            handleAccept(params.row.id, params.row.job, params.row.candidate)
          }
          variant="contained"
          color="success"
          style={{ textTransform: "none" }}
        >
          Accept
        </Button>
      ),
    },
    {
      field: "decline",
      headerName: "Decline",
      width: 150,
      renderCell: (params) => (
        <Button
          onClick={() => handleDecline(params.row.id, params.row.job)}
          variant="contained"
          color="error"
          style={{ textTransform: "none" }}
        >
          Decline
        </Button>
      ),
    },
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
      <ToastContainer />
      <ConfirmationModal
        open={confirmationOpen}
        onClose={handleCloseConfirmation}
        onConfirm={decline ? handleDeclineConfirm : handleConfirm}
        title="Confirm Action"
        content={
          decline
            ? `Are you sure you want to decline the request by ${
                selectedJob ? selectedJob.candidate : ""
              }`
            : `Are you sure you want to accept the request by ${
                selectedJob ? selectedJob.candidate : ""
              }?`
        }
      />
    </div>
  );
};

export default HireRequests;
