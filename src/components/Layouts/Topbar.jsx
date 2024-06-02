import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Link,
  MenuItem,
  Select,
  Typography,
  useTheme,
  Menu,
  Popover,
  ListItemIcon,
  Divider,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";
import user from "../../assets/user.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import i18n from "../../utils/i8n";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const theme = useTheme();

  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState(() => {
    const savedBreadcrumbIndex = localStorage.getItem("selectedBreadcrumb");
    return savedBreadcrumbIndex !== null
      ? parseInt(savedBreadcrumbIndex)
      : null;
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("en");

  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Find FreeLancer",
      href: "/employer/client-list",
    },
    { label: "Find Job", href: "/employee/job-list" },
    { label: "Post Job", href: "/employer/job-post" },
    { label: "Dashboard", href: "/employee/dashboard" },
    { label: "Dashboard Employer", href: "/employer/dashboard" },
  ];

  const handleClick = (event, index) => {
    if (selectedBreadcrumb === index) {
      event.preventDefault();
      console.info("You clicked a breadcrumb.");
    } else {
      setSelectedBreadcrumb(index);
    }
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    localStorage.setItem("selectedBreadcrumb", selectedBreadcrumb);
  }, [selectedBreadcrumb]);

  const handleProfileClick = () => {
    navigate("/profile");
    handleClose();
  };

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "60px",
        padding: "0px 16px",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--Gray-50, #F1F2F4)",
      }}
    >
      {isSmallScreen ? (
        <Select
          value={selectedBreadcrumb}
          onChange={(event) => setSelectedBreadcrumb(event.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "breadcrumb" }}
        >
          {breadcrumbs.map((breadcrumb, index) => (
            <MenuItem key={index} value={index}>
              {breadcrumb.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs.map((breadcrumb, index) => (
            <Link
              key={index}
              underline="hover"
              color={selectedBreadcrumb === index ? "primary" : "inherit"}
              href={breadcrumb.href}
              onClick={(event) => handleClick(event, index)}
            >
              {breadcrumb.label}
            </Link>
          ))}
        </Breadcrumbs>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ marginRight: "16px" }}>
          <Avatar
            alt="User Avatar"
            src={user}
            onClick={handleAvatarClick}
            sx={{ cursor: "pointer" }}
          />
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box sx={{ p: 2 }}>
              <MenuItem onClick={handleProfileClick}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Box>
          </Popover>
        </Box>
        <Select
          value={language}
          onChange={(event) => handleChangeLanguage(event.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "select language" }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="am">Amharic</MenuItem>
        </Select>
      </div>
    </Box>
  );
};

export default Topbar;
