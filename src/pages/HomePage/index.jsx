import React, { useEffect, useRef, useState } from "react";
import Topbar from "../../components/Layouts/Topbar";
import Search from "../../utils/Search";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import {
  largeTypographyProps,
  mediumTypographyProps,
  smallTypographyProps,
} from "../../Constants";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import intro from "../../assets/intro.jpg";
import Footer from "../../components/Layouts/Footer";
import StatBox from "./StatBox";
import { briefcaseSvg } from "../../svg";
import cta1 from "../../assets/cta1.png";
import cta2 from "../../assets/cta2.png";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ArrowForward, CalendarMonth, Google } from "@mui/icons-material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import star from "../../assets/star.png";
import employersLogo from "../../assets/EmployersLogo.png";
import google from "../../assets/google.png";
import { useTranslation } from "react-i18next";

const mockData = [
  { title: "Total Jobs", count: 200000, img: briefcaseSvg },
  { title: "Companies", count: 50, img: briefcaseSvg },
  { title: "Candidates", count: 30, img: briefcaseSvg },
  { title: "New Jobs", count: 30, img: briefcaseSvg },
];

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const cta1Ref = useRef(null);
  const cta2Ref = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true); // Set isVisible to true when component mounts
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === cta1Ref.current) {
          setIsVisible1(entry.isIntersecting);
        } else if (entry.target === cta2Ref.current) {
          setIsVisible2(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(cta1Ref.current);
    observer.observe(cta2Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Topbar />
      {/* <Search /> */}
      <Stack spacing={2}>
        <Box
          width="100%"
          height="auto"
          flexShrink={0}
          sx={{ background: "rgba(241, 242, 244, 0.60)" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={7}>
              <Box
                display="inline-flex"
                flexDirection="column"
                alignItems="flex-start"
                gap={5}
                mt={10}
                mr={40}
                mb={20}
                ml={10}
              >
                <Typography
                  color="var(--Gray-900, #18191C)" /* Display/01 */
                  fontFamily="Inter"
                  fontSize="56px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="64px" /* 114.286% */
                  width={"652px"}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(-50px)",
                    transition: "opacity 1s ease, transform 1s ease",
                  }}
                >
                  {t("Find a job that suits your interest & skills.")}
                </Typography>
                <Typography
                  color="var(--Gray-900, #18191C)" /* Display/01 */
                  fontFamily="Inter"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px" /* 150% */
                  width={"536px"}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(-50px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}
                >
                  Aliquam vitae turpis in diam convallis finibus in at risus.
                  Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
                </Typography>
                <Box
                  display="flex"
                  padding={2}
                  alignItems="center"
                  gap={3}
                  borderRadius="8px"
                  border="1px solid var(--Gray-100, #E4E5E8)"
                  background="var(--Gray-Scale-White, #FFF)"
                  boxShadow="0px 12px 40px 0px rgba(0, 44, 109, 0.04)"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(50px)", // Move from bottom to top
                    transition: "opacity 1s ease, transform 1s ease", // Set transition duration to 1 second
                  }}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Job Title, Key Word..."
                    inputProps={{ "aria-label": "Job Title, Key Word..." }}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <LocationOnIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Location"
                    inputProps={{ "aria-label": "Location" }}
                  />
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "4px",
                      background: "var(--Primary-500, #0A65CC)",
                    }}
                  >
                    Find
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Box
                flexShrink={0}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(100%)", // Move from right to left
                  transition: "opacity 1s ease, transform 1s ease", // Set transition duration to 1 second
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  src={intro}
                  alt="intro"
                />
              </Box>
            </Grid>
          </Grid>
          <Box mr={10} mb={5} ml={10}>
            <Grid container spacing={4}>
              {mockData?.map((data, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <StatBox
                    title={data.title}
                    numCount={data.count}
                    img={data.img}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        {/* Become Candidate and Employer box */}
        <Box
          display="flex"
          width="auto"
          padding="50px 104px"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} ref={cta1Ref}>
              <Box
                display="flex"
                padding="50px"
                flexDirection="column"
                alignItems="flex-start"
                gap="19.486px"
                sx={{
                  // background: `url(${cta1}) lightgray 489.508px -11.848px / -101.583% 111.193% no-repeat`,
                  backgroundImage: `url(${cta1})`,
                  borderRadius: "8px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  opacity: isVisible1 ? 1 : 0,
                  transform: isVisible1 ? "translateX(0)" : "translateX(-100%)",
                  transition: "opacity 1s ease, transform 1s ease",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="11.992px"
                >
                  <Typography
                    color="var(--Gray-Scale-900, #191F33)"
                    fontFamily="Inter"
                    fontSize="23.983px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="29.979px"
                  >
                    Become a Candidate
                  </Typography>
                  <Typography {...smallTypographyProps} width="233.837px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras cursus a dolor convallis efficitur.
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      background: "white",
                      borderRadius: "4px",
                      color: "var(--Primary-500, #0A65CC)",
                      padding: "10px 20px",
                      "&:hover": {
                        color: "white", // Change text color to white on hover
                      },
                    }}
                    onClick={handleClick}
                  >
                    Register Now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} ref={cta2Ref}>
              <Box
                display="flex"
                padding="50px"
                flexDirection="column"
                alignItems="flex-start"
                gap="19.486px"
                sx={{
                  // background: `url(${cta1}) lightgray 489.508px -11.848px / -101.583% 111.193% no-repeat`,
                  backgroundImage: `url(${cta2})`,
                  borderRadius: "8px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                  opacity: isVisible2 ? 1 : 0,
                  transform: isVisible2 ? "translateX(0)" : "translateX(100%)",
                  transition: "opacity 1s ease, transform 1s ease",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="11.992px"
                >
                  <Typography
                    color="var(--Gray-Scale-900, #191F33)"
                    fontFamily="Inter"
                    fontSize="23.983px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="29.979px"
                  >
                    Become Employer
                  </Typography>
                  <Typography {...smallTypographyProps} width="233.837px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras cursus a dolor convallis efficitur.
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      background: "white",
                      borderRadius: "4px",
                      color: "var(--Primary-500, #0A65CC)",
                      padding: "10px 20px",
                      "&:hover": {
                        color: "white", // Change text color to white on hover
                      },
                    }}
                    onClick={handleClick}
                  >
                    Register Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* How freelancer work */}
        <Box
          display="flex"
          width="auto"
          padding="50px 75px"
          flexDirection="column"
          alignContent="center"
          sx={{ background: "rgba(241, 242, 244, 0.60)" }}
        >
          <Box mt={7} textAlign="center">
            <Typography {...largeTypographyProps}>
              How Freelancer work
            </Typography>
          </Box>
          <Grid container spacing={0}>
            {/* create acc */}
            <Grid item xs={12} sm={6} md={2}>
              <Box
                display="inline-flex"
                padding="24px"
                flexDirection="column"
                alignItems="center"
                gap="24px"
                sx={{ borderRadius: "12px", position: "relative" }}
              >
                <Box
                  display="flex"
                  padding="20px"
                  align-items="flex-start"
                  gap="10px"
                  sx={{
                    background: "var(--Gray-Scale-White, #FFF)",
                    borderRadius: "80px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_10_6033)">
                      <path
                        opacity="0.2"
                        d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                        fill="#0A65CC"
                      />
                      <path
                        d="M22 7H28"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25 4V10"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.87366 26.9988C5.10311 24.8708 6.87092 23.1037 8.99951 21.8752C11.1281 20.6467 13.5425 20 16.0002 20C18.4578 20 20.8722 20.6468 23.0008 21.8754C25.1294 23.1039 26.8971 24.871 28.1265 26.9991"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23.5063 14.7728C22.9716 16.2167 22.0313 17.4754 20.7985 18.3979C19.5657 19.3203 18.0928 19.8672 16.5568 19.9728C15.0207 20.0784 13.4868 19.7383 12.1394 18.9933C10.7919 18.2483 9.68822 17.1301 8.96088 15.773C8.23353 14.416 7.91346 12.8778 8.03913 11.3432C8.1648 9.80864 8.73086 8.34301 9.6693 7.12236C10.6077 5.90172 11.8787 4.97798 13.3294 4.46212C14.7801 3.94627 16.3489 3.86023 17.8473 4.21436"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_6033">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography {...mediumTypographyProps}>
                  Create account
                </Typography>
                <Typography {...smallTypographyProps}>
                  Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                </Typography>
              </Box>
            </Grid>
            {/* Dotted arrow */}
            <Grid item xs={12} sm={6} md={1} sx={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="49"
                viewBox="0 0 223 49"
                fill="none"
              >
                <g opacity="0.4">
                  <path
                    d="M0.999997 40.8082C0.999997 40.8082 43.9587 1.00001 108.877 1.00001C173.795 1.00001 216.754 40.8083 216.754 40.8083"
                    stroke="#0A65CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="12 8"
                  />
                  <path
                    d="M215.551 28.6098L217.502 41.5913L204.555 43.4272"
                    stroke="#0A65CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Grid>
            {/* upload */}
            <Grid item xs={12} sm={6} md={2}>
              <Box
                display="inline-flex"
                padding="24px"
                flexDirection="column"
                alignItems="center"
                gap="24px"
                sx={{ borderRadius: "12px" }}
              >
                <Box
                  display="flex"
                  padding="20px"
                  align-items="flex-start"
                  gap="10px"
                  sx={{
                    background: "var(--Gray-Scale-White, #FFF)",
                    borderRadius: "80px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="#0A65CC" // Change fill color to blue
                    stroke="#0A65CC" // Change stroke color to blue
                  >
                    <g clip-path="url(#clip0_10_6045)">
                      <path
                        opacity="0.2"
                        d="M10 15.9981C10 14.0202 10.5865 12.0868 11.6854 10.4423C12.7842 8.79786 14.346 7.51613 16.1732 6.75926C18.0005 6.00238 20.0111 5.80435 21.9509 6.1902C23.8908 6.57605 25.6726 7.52846 27.0711 8.92698C28.4696 10.3255 29.422 12.1073 29.8079 14.0471C30.1938 15.987 29.9957 17.9976 29.2388 19.8249C28.482 21.6521 27.2002 23.2139 25.5557 24.3127C23.9113 25.4116 21.9779 25.9981 20 25.9981H9.00005C8.00734 25.9971 7.0262 25.785 6.12173 25.3758C5.21727 24.9667 4.41017 24.3698 3.75402 23.6249C3.09786 22.88 2.60765 22.004 2.31593 21.0551C2.02421 20.1063 1.93764 19.1062 2.06198 18.1213C2.18631 17.1364 2.51871 16.1892 3.0371 15.3426C3.55549 14.496 4.24802 13.7694 5.06873 13.2109C5.88943 12.6524 6.81954 12.2749 7.79731 12.1033C8.77508 11.9318 9.77816 11.9702 10.74 12.216"
                      />
                      <path d="M11.9993 25.998H8.99931C8.00661 25.9971 7.02547 25.785 6.121 25.3758C5.21654 24.9667 4.40944 24.3698 3.75329 23.6249C3.09713 22.88 2.60692 22.004 2.3152 21.0551C2.02347 20.1063 1.93691 19.1062 2.06124 18.1213C2.18558 17.1364 2.51797 16.1892 3.03637 15.3426C3.55476 14.496 4.24729 13.7694 5.06799 13.2109C5.8887 12.6524 6.8188 12.2749 7.79658 12.1033C8.77435 11.9318 9.77742 11.9702 10.7392 12.216" />
                      <path d="M9.99927 15.998C9.99942 14.4136 10.3761 12.8518 11.0982 11.4415C11.8203 10.0312 12.8672 8.81262 14.1527 7.88625C15.4381 6.95988 16.9253 6.35221 18.4916 6.11333C20.0579 5.87445 21.6586 6.01118 23.1618 6.51227C24.6649 7.01335 26.0275 7.86445 27.1372 8.99541C28.2468 10.1264 29.0719 11.5048 29.5444 13.0172C30.0168 14.5296 30.1231 16.1326 29.8546 17.6941C29.586 19.2557 28.9502 20.731 27.9996 21.9986" />
                      <path d="M14.7566 20.2408L18.9992 15.998L23.2418 20.2408" />
                      <path d="M18.9993 25.998V15.998" />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_6045">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography {...mediumTypographyProps}>
                  Upload CV/Resume
                </Typography>
                <Typography {...smallTypographyProps}>
                  Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                </Typography>
              </Box>
            </Grid>
            {/* Dotted arrow */}
            <Grid
              item
              xs={12}
              sm={6}
              md={1}
              sx={{ position: "relative", marginTop: "50px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="49"
                viewBox="0 0 223 49"
                fill="none"
                style={{ bottom: "100px" }}
              >
                <g opacity="0.4">
                  <path
                    d="M0.999997 8.19175C0.999997 8.19175 43.9587 48 108.877 48C173.795 48 216.754 8.19174 216.754 8.19174"
                    stroke="#0A65CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="12 8"
                  />
                  <path
                    d="M215.551 20.3902L217.502 7.40872L204.555 5.57275"
                    stroke="#0A65CC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </Grid>
            {/* Find Job */}
            <Grid item xs={12} sm={6} md={2}>
              <Box
                display="inline-flex"
                padding="24px"
                flexDirection="column"
                alignItems="center"
                gap="24px"
                sx={{ borderRadius: "12px", position: "relative" }}
              >
                <Box
                  display="flex"
                  padding="20px"
                  align-items="flex-start"
                  gap="10px"
                  sx={{
                    background: "var(--Gray-Scale-White, #FFF)",
                    borderRadius: "80px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_10_6057)">
                      <path
                        opacity="0.2"
                        d="M14.4994 24.9995C20.2984 24.9995 24.9994 20.2985 24.9994 14.4995C24.9994 8.70052 20.2984 3.99951 14.4994 3.99951C8.7004 3.99951 3.99939 8.70052 3.99939 14.4995C3.99939 20.2985 8.7004 24.9995 14.4994 24.9995Z"
                        fill="#0A65CC"
                      />
                      <path
                        d="M10.4994 14.5H18.4994"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.4994 10.5V18.5"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.4994 24.9995C20.2984 24.9995 24.9994 20.2985 24.9994 14.4995C24.9994 8.70052 20.2984 3.99951 14.4994 3.99951C8.7004 3.99951 3.99939 8.70052 3.99939 14.4995C3.99939 20.2985 8.7004 24.9995 14.4994 24.9995Z"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.9236 21.9246L27.9987 27.9996"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_6057">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography {...mediumTypographyProps}>
                  Find suitable job
                </Typography>
                <Typography {...smallTypographyProps}>
                  Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                </Typography>
              </Box>
            </Grid>
            {/* Dotted arrow */}
            <Grid item xs={12} sm={6} md={1} sx={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="49"
                viewBox="0 0 223 49"
                fill="none"
              >
                <g opacity="0.4">
                  <path
                    d="M0.999997 40.8082C0.999997 40.8082 43.9587 1.00001 108.877 1.00001C173.795 1.00001 216.754 40.8083 216.754 40.8083"
                    stroke="#0A65CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="12 8"
                  />
                  <path
                    d="M215.551 28.6098L217.502 41.5913L204.555 43.4272"
                    stroke="#0A65CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Grid>
            {/* apply */}
            <Grid item xs={12} sm={6} md={2}>
              <Box
                display="inline-flex"
                padding="24px"
                flexDirection="column"
                alignItems="center"
                gap="24px"
                sx={{ borderRadius: "12px", position: "relative" }}
              >
                <Box
                  display="flex"
                  padding="20px"
                  align-items="flex-start"
                  gap="10px"
                  sx={{
                    background: "var(--Gray-Scale-White, #FFF)",
                    borderRadius: "80px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_10_6069)">
                      <path
                        opacity="0.2"
                        d="M6.80761 25.1924C5.65711 24.0419 6.42019 21.6265 5.8346 20.2111C5.22755 18.744 3 17.5631 3 16C3 14.4368 5.22756 13.256 5.8346 11.7888C6.4202 10.3735 5.65711 7.95811 6.80761 6.80761C7.95811 5.65711 10.3735 6.42019 11.7889 5.8346C13.256 5.22755 14.4369 3 16 3C17.5632 3 18.744 5.22756 20.2112 5.8346C21.6265 6.4202 24.0419 5.65711 25.1924 6.80761C26.3429 7.95811 25.5798 10.3735 26.1654 11.7889C26.7725 13.256 29 14.4369 29 16C29 17.5632 26.7724 18.744 26.1654 20.2112C25.5798 21.6265 26.3429 24.0419 25.1924 25.1924C24.0419 26.3429 21.6265 25.5798 20.2111 26.1654C18.744 26.7725 17.5631 29 16 29C14.4368 29 13.256 26.7724 11.7888 26.1654C10.3735 25.5798 7.95811 26.3429 6.80761 25.1924Z"
                        fill="#0A65CC"
                      />
                      <path
                        d="M6.80761 25.1924C5.65711 24.0419 6.42019 21.6265 5.8346 20.2111C5.22755 18.744 3 17.5631 3 16C3 14.4368 5.22756 13.256 5.8346 11.7888C6.4202 10.3735 5.65711 7.95811 6.80761 6.80761C7.95811 5.65711 10.3735 6.42019 11.7889 5.8346C13.256 5.22755 14.4369 3 16 3C17.5632 3 18.744 5.22756 20.2112 5.8346C21.6265 6.4202 24.0419 5.65711 25.1924 6.80761C26.3429 7.95811 25.5798 10.3735 26.1654 11.7889C26.7725 13.256 29 14.4369 29 16C29 17.5632 26.7724 18.744 26.1654 20.2112C25.5798 21.6265 26.3429 24.0419 25.1924 25.1924C24.0419 26.3429 21.6265 25.5798 20.2111 26.1654C18.744 26.7725 17.5631 29 16 29C14.4368 29 13.256 26.7724 11.7888 26.1654C10.3735 25.5798 7.95811 26.3429 6.80761 25.1924Z"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.5 13L14.1666 20L10.5 16.5"
                        stroke="#0A65CC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_6069">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography {...mediumTypographyProps}>Apply job</Typography>
                <Typography {...smallTypographyProps}>
                  Aliquam facilisis egestas sapien, nec tempor leo tristique at.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Featured Job */}
        <Box padding="50px 75px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"

            // sx={{ background: "rgba(241, 242, 244, 0.60)" }}
          >
            <Typography {...largeTypographyProps}>Featured Jobs</Typography>
            <Button
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
                "&:hover, &:focus": {
                  boxShadow: "none",
                },
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1976d2")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              View All Jobs
              <ArrowRightAltIcon />
            </Button>
          </Box>
          <Stack spacing={2} sx={{ marginTop: 5 }}>
            <Box
              sx={{
                marginTop: 4,
                borderRadius: "8px",
                transition: "box-shadow 0.3s, border-color 0.3s",
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Add box shadow on hover
                  borderColor: "#1976d2", // Change border color on hover
                },
                borderWidth: "1px", // Set initial border width
                borderStyle: "solid", // Set initial border style
                borderColor: "rgba(241, 242, 244, 0.60)", // Set initial border color
              }}
            >
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={6} md={2}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    src={google}
                    alt="job"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                  <Box display="flex" flexDirection="column">
                    <Box display="flex" sx={{ marginBottom: 2 }}>
                      <Typography
                        {...mediumTypographyProps}
                        sx={{ marginRight: 2 }}
                      >
                        Senior Programmer
                      </Typography>
                      <Chip
                        sx={{
                          borderRadius: "40px",
                          background: "var(--Success-50, #E7F6EA)",
                        }}
                        label={
                          <Typography
                            color="var(--Success-500, #0BA02C)"
                            fontFamily="Inter"
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="600"
                            lineHeight="12px"
                            textTransform="uppercase"
                          >
                            Part-time
                          </Typography>
                        }
                      />
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{ marginRight: 2 }}
                        {...smallTypographyProps}
                      >
                        $ 10000 - 12000
                      </Typography>
                      <CalendarMonth />
                      <Typography {...smallTypographyProps}>
                        1 month ago
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  container
                  justifyContent="flex-end"
                >
                  <IconButton>
                    <BookmarkIcon />
                  </IconButton>
                  <Button
                    variant="outlined"
                    sx={{
                      background: "#E7F0FA",
                      marginRight: 2,
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                      },
                      "&:hover, &:focus": {
                        boxShadow: "none",
                      },
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#1976d2")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    Apply Now
                    <ArrowRightAltIcon />
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                marginTop: 4,
                borderRadius: "8px",
                transition: "box-shadow 0.3s, border-color 0.3s",
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Add box shadow on hover
                  borderColor: "#1976d2", // Change border color on hover
                },
                borderWidth: "1px", // Set initial border width
                borderStyle: "solid", // Set initial border style
                borderColor: "rgba(241, 242, 244, 0.60)", // Set initial border color
              }}
            >
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={6} md={2}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    src={google}
                    alt="job"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                  <Box display="flex" flexDirection="column">
                    <Box display="flex" sx={{ marginBottom: 2 }}>
                      <Typography
                        {...mediumTypographyProps}
                        sx={{ marginRight: 2 }}
                      >
                        Senior Programmer
                      </Typography>
                      <Chip
                        sx={{
                          borderRadius: "40px",
                          background: "var(--Success-50, #E7F6EA)",
                        }}
                        label={
                          <Typography
                            color="var(--Success-500, #0BA02C)"
                            fontFamily="Inter"
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="600"
                            lineHeight="12px"
                            textTransform="uppercase"
                          >
                            Part-time
                          </Typography>
                        }
                      />
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{ marginRight: 2 }}
                        {...smallTypographyProps}
                      >
                        $ 10000 - 12000
                      </Typography>
                      <CalendarMonth />
                      <Typography {...smallTypographyProps}>
                        1 month ago
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  container
                  justifyContent="flex-end"
                >
                  <IconButton>
                    <BookmarkIcon />
                  </IconButton>
                  <Button
                    variant="outlined"
                    sx={{
                      background: "#E7F0FA",
                      marginRight: 2,
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                      },
                      "&:hover, &:focus": {
                        boxShadow: "none",
                      },
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#1976d2")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    Apply Now
                    <ArrowRightAltIcon />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Box>
        {/* Most popular vacancies */}
        <Box
          display="flex"
          flexDirection="column"
          padding="50px 75px"
          sx={{ background: "rgba(241, 242, 244, 0.60)" }}
        >
          <Typography {...largeTypographyProps} sx={{ marginBottom: 6 }}>
            Most Popular Vacancies
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography {...mediumTypographyProps} sx={{ marginBottom: 3 }}>
                Frontend Developer
              </Typography>
              <Typography {...smallTypographyProps}>
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography {...mediumTypographyProps} sx={{ marginBottom: 3 }}>
                Backend Developer
              </Typography>
              <Typography {...smallTypographyProps}>
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography {...mediumTypographyProps} sx={{ marginBottom: 3 }}>
                UI designer
              </Typography>
              <Typography {...smallTypographyProps}>
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography {...mediumTypographyProps} sx={{ marginBottom: 3 }}>
                AI Developer
              </Typography>
              <Typography {...smallTypographyProps}>
                Aliquam facilisis egestas sapien, nec tempor leo tristique at.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
};

export default Index;
