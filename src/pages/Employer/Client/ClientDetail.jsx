import React from "react";
import Footer from "../../../components/Layouts/Footer";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  IconButton,
  Stack,
  Chip,
  colors,
  useTheme,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import EmployersLogo from "../../../assets/EmployersLogo.png";
import miko from "../../../assets/miko.jpg";
import {
  mediumTypographyProps,
  salaryTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Topbar from "../../../components/Layouts/Topbar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { tokens } from "../../../theme";
import SchoolIcon from "@mui/icons-material/School";

const skills = [
  { label: "JavaScript", color: "blueAccent[600]" },
  { label: "React", color: "blueAccent[600]" },
  { label: "Node.js", color: "blueAccent[600]" },
  { label: "CSS", color: "blueAccent[600]" },
];

const education = [
  {
    institution: "University of ABC",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    startDate: "2015",
    endDate: "2019",
  },
  {
    institution: "XYZ College",
    degree: "Master of Engineering",
    fieldOfStudy: "Software Engineering",
    startDate: "2020",
    endDate: "2022",
  },
];

const ClientDetail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Topbar />
      <Box m="50px">
        <Box maxWidth="1320px" mx="auto">
          <Grid container spacing={2}>
            {/* First Grid item */}
            <Grid item xs={12} md={9}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="12px"
                mb={4}
              >
                <img
                  src={miko}
                  alt="ClientLogo"
                  style={{
                    padding: "12px",
                    borderRadius: "80px",
                    background: "var(--Gray-50, #EDEFF5)",
                    maxWidth: "100px", // Set your desired max width here
                    maxHeight: "100px",
                  }}
                />
                <Box>
                  <Typography {...mediumTypographyProps}>
                    Michael Gashaw
                  </Typography>
                  <Typography {...smallTypographyProps}>
                    {" "}
                    <LocationOnIcon />
                    Addis Ababa
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Second Grid item */}
            <Grid item xs={12} md={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="12px"
                mb={4}
              >
                <Box
                  display="flex"
                  padding={1}
                  alignItems="flex-start"
                  gap={10}
                  borderRadius="4px"
                  sx={{ background: "var(--Primary-50, #E7F0FA);" }}
                >
                  <IconButton>
                    <BookmarkIcon />
                  </IconButton>
                </Box>
                <Button variant="contained">Hire Now</Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box mb={4}>
                <Typography {...mediumTypographyProps}>
                  Software Engineer
                </Typography>
                <Typography {...smallTypographyProps}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quis lorem ut libero malesuada feugiat. Nulla porttitor
                  accumsan tincidunt. Donec sollicitudin molestie malesuada.
                  Nulla quis Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nulla quis lorem ut libero malesuada feugiat. Nulla
                  porttitor accumsan tincidunt. Donec sollicitudin molestie
                  malesuada. Nulla quis Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
                  Nulla porttitor accumsan tincidunt. Donec sollicitudin
                  molestie malesuada. Nulla quis
                </Typography>
                <Divider sx={{ m: "10px" }} />
                <Typography {...mediumTypographyProps}>Experience</Typography>

                <Typography {...smallTypographyProps}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quis lorem ut libero malesuada feugiat. Nulla porttitor
                  accumsan tincidunt. Donec sollicitudin molestie malesuada.
                  Nulla quis Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nulla quis lorem ut libero malesuada feugiat. Nulla
                  porttitor accumsan tincidunt. Donec sollicitudin molestie
                  malesuada. Nulla quis Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.
                  Nulla porttitor accumsan tincidunt. Donec sollicitudin
                  molestie malesuada. Nulla quis
                </Typography>

                <Divider sx={{ m: "10px" }} />
                <Typography {...mediumTypographyProps}>Skills</Typography>
                <Stack direction="row" spacing={1} sx={{ marginTop: 3 }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill.label}
                      sx={{ background: colors[colors.blueAccent[600]] }}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={1} md={1}>
              <Divider orientation="vertical" flexItem variant="middle" />
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                width="100%"
                minHeight="200px" // Adjust this value according to your design
                display="flex"
                padding={32}
                justifyContent="center"
                alignItems="center"
                border="2px solid var(--Primary-50, #E7F0FA)"
                borderRadius="8px"
                bgcolor="var(--Gray-White, #FFF)"
                p={2}
              >
                <Box>
                  <Typography {...mediumTypographyProps}>Salary</Typography>
                  <Typography {...salaryTypographyProps}>
                    $100,000 - $120,000
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: "none", sm: "block" },
                    margin: "0 32px",
                  }}
                />
                <Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M14.25 27.3125L4.75 29.6875V8.3125L14.25 5.9375"
                      stroke="#0A65CC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.75 32.0625L14.25 27.3125V5.9375L23.75 10.6875V32.0625Z"
                      stroke="#0A65CC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.75 10.6875L33.25 8.3125V29.6875L23.75 32.0625"
                      stroke="#0A65CC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Typography {...mediumTypographyProps}>
                    Job Location
                  </Typography>
                  <Typography {...smallTypographyProps}>
                    San Francisco, CA
                  </Typography>
                </Box>
              </Box>

              <Box
                width="100%"
                minHeight="300px" // Adjust this value according to your design
                display="flex"
                flexDirection="column"
                padding={32}
                border="2px solid var(--Primary-50, #E7F0FA)"
                borderRadius="8px"
                bgcolor="var(--Gray-White, #FFF)"
                p={2}
                mt={4}
              >
                <Box mb={2}>
                  <Typography {...mediumTypographyProps}>Education</Typography>
                </Box>
                <Divider />
                <Box display="flex" alignItems="center" gap={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      {education?.map((edu, index) => (
                        <List key={index}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar>
                                <SchoolIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={edu.institution}
                              secondary={`${edu.degree} in ${edu.fieldOfStudy}`}
                            />
                          </ListItem>
                        </List>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ClientDetail;
