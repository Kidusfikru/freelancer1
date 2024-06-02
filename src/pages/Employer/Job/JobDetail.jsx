import React from "react";
import Footer from "../../../components/Layouts/Footer";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import EmployersLogo from "../../../assets/EmployersLogo.png";
import {
  mediumTypographyProps,
  salaryTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Topbar from "../../../components/Layouts/Topbar";

const JobDetail = () => {
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
                  src={EmployersLogo}
                  alt="EmployersLogo"
                  style={{
                    padding: "12px",
                    borderRadius: "4px",
                    background: "var(--Gray-50, #EDEFF5)",
                  }}
                />
                <Box>
                  <Typography {...mediumTypographyProps}>
                    Senior UX Designer
                  </Typography>
                  <Typography {...smallTypographyProps}>at Google</Typography>
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
                <Button variant="contained">Apply Now</Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box mb={4}>
                <Typography {...mediumTypographyProps}>
                  Job Description
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
                <Typography {...mediumTypographyProps}>Requirements</Typography>

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
                  <Typography {...mediumTypographyProps}>Payment</Typography>
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
                  <Typography {...mediumTypographyProps}>
                    Job Overview
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22 3V7"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 3V7"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5 11H27"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <Typography {...smallTypographyProps}>
                          Job Posted:
                        </Typography>
                        <Typography {...mediumTypographyProps}>
                          14 Jun, 2021
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                        >
                          <path
                            d="M16.6665 27C22.7416 27 27.6665 22.0751 27.6665 16C27.6665 9.92487 22.7416 5 16.6665 5C10.5914 5 5.6665 9.92487 5.6665 16C5.6665 22.0751 10.5914 27 16.6665 27Z"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M16.6665 16L21.6163 11.0502"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.6665 1H19.6665"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <Typography {...smallTypographyProps}>
                          Job Expire in
                        </Typography>
                        <Typography {...mediumTypographyProps}>
                          14 Jun, 2021
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                        >
                          <path
                            d="M4.3335 22L16.3335 29L28.3335 22"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.3335 16L16.3335 23L28.3335 16"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.3335 10L16.3335 17L28.3335 10L16.3335 3L4.3335 10Z"
                            stroke="#0A65CC"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <Typography {...smallTypographyProps}>
                          Job Level:
                        </Typography>
                        <Typography {...mediumTypographyProps}>
                          Entry Level
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_10_4165)">
                            <path
                              d="M27.001 9.00006H5.00098C4.44869 9.00006 4.00098 9.44778 4.00098 10.0001V26.0001C4.00098 26.5523 4.44869 27.0001 5.00098 27.0001H27.001C27.5533 27.0001 28.001 26.5523 28.001 26.0001V10.0001C28.001 9.44778 27.5533 9.00006 27.001 9.00006Z"
                              stroke="#0A65CC"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9"
                              stroke="#0A65CC"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M28.0012 15.7891C24.354 17.8992 20.2137 19.0071 16.0002 19.0005C11.7873 19.0071 7.64768 17.8996 4.00098 15.7902"
                              stroke="#0A65CC"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14.5 15H17.5"
                              stroke="#0A65CC"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_10_4165">
                              <rect width="32" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <Typography {...smallTypographyProps}>
                          Education:
                        </Typography>
                        <Typography {...mediumTypographyProps}>
                          Graduation
                        </Typography>
                      </Box>
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

export default JobDetail;
