import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InstagramIcon from "../../assets/instagram1.svg";
import { Check } from "@mui/icons-material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const handleBrowseCandidates = () => {
    console.log("browse clicked");
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ThemeProvider theme={theme}>
      <footer>
        <Box
          display="flex"
          width="auto"
          flexDirection="column"
          alignItems="center"
          flexShrink={0}
          sx={{ background: "var(--Gray-900, #18191C)" }}
        >
          <Box width="100%" height="300px" flexShrink={0} pl={10} pr={10}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  display="inline-flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap={5}
                  pt={5}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_197_1256)">
                        <path
                          d="M33.7512 11.25H6.25122C5.56086 11.25 5.00122 11.8096 5.00122 12.5V32.5C5.00122 33.1904 5.56086 33.75 6.25122 33.75H33.7512C34.4416 33.75 35.0012 33.1904 35.0012 32.5V12.5C35.0012 11.8096 34.4416 11.25 33.7512 11.25Z"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35.0012 19.7358C30.4423 22.3734 25.2669 23.7583 20 23.75C14.7339 23.7583 9.55935 22.3739 5.00098 19.7372"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.125 18.75H21.875"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_197_1256">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <Typography
                      color="var(--Gray-White, #FFF)"
                      fontFamily="Inter"
                      fontSize="24px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="40px"
                    >
                      {" "}
                      Freelancer
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    gap={2}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <Typography
                        color="var(--Gray-600, #5E6670)"
                        /* Body/Large/400 */
                        fontFamily="Inter"
                        fontSize="18px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="28px"
                      >
                        Call now:
                      </Typography>
                      <Typography
                        color="var(--Gray-White, #FFF)"
                        /* Body/Large/500 */
                        fontFamily="Inter"
                        fontSize="18px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="28px"
                      >
                        (319) 555-0115
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Typography
                        color="var(--Gray-500, #767F8C)"
                        /* Body/Small/400 */
                        fontFamily="Inter"
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="20px"
                      >
                        6391 Elgin St. Celina, Delaware 10299, New York, United
                        States of America
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              {isSmallScreen && (
                <>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap={5}
                      pt={5}
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <Typography
                          color="var(--Gray-White, #FFF)"
                          fontFamily="Inter"
                          fontSize="24px"
                          fontStyle="normal"
                          fontWeight="600"
                          lineHeight="40px"
                        >
                          {" "}
                          Quick Links
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        gap={2}
                      >
                        <Box display="flex" alignItems="center" gap={2}>
                          <Typography
                            color="var(--Gray-600, #5E6670)"
                            /* Body/Large/400 */
                            fontFamily="Inter"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="28px"
                          >
                            Home
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Typography
                            color="var(--Gray-600, #5E6670)"
                            /* Body/Large/400 */
                            fontFamily="Inter"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="28px"
                          >
                            About
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Typography
                            color="var(--Gray-600, #5E6670)"
                            /* Body/Large/400 */
                            fontFamily="Inter"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="28px"
                          >
                            Contact
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap={5}
                      pt={5}
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <Typography
                          color="var(--Gray-White, #FFF)"
                          fontFamily="Inter"
                          fontSize="24px"
                          fontStyle="normal"
                          fontWeight="600"
                          lineHeight="40px"
                        >
                          Employers
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={2}
                      >
                        <Box display="flex" alignItems="center" gap={2}>
                          <Typography
                            color="var(--Gray-600, #5E6670)"
                            /* Body/Large/400 */
                            fontFamily="Inter"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="28px"
                          >
                            Post a Job
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Typography
                            color="var(--Gray-600, #5E6670)"
                            /* Body/Large/400 */
                            fontFamily="Inter"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="28px"
                            onClick={() => handleBrowseCandidates()}
                          >
                            Browse Candidates
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Typography
                            color="var(--Gray-600, #5E6670)"
                            /* Body/Large/400 */
                            fontFamily="Inter"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight="28px"
                          >
                            Applications
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
          <Box
            display="flex"
            width="100%"
            padding="24px 10%"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              background: "var(--Gray-900, #18191C)",
              boxShadow: "0px 1px 0px 0px #2F3338 inset;",
            }}
          >
            <Typography
              color="var(--Gray-500, #767F8C)"
              /* Body/Small/400 */
              fontFamily="Inter"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="20px" /* 142.857% */
            >
              @ 2021 Jobpilot - Job Portal. All rights Rserved
            </Typography>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
              >
                <path
                  d="M8.17415 3.32083H9.99998V0.140833C9.68498 0.0975 8.60165 0 7.33998 0C4.70748 0 2.90415 1.65583 2.90415 4.69917V7.5H-0.000854492V11.055H2.90415V20H6.46581V11.0558H9.25331L9.69581 7.50083H6.46498V5.05167C6.46581 4.02417 6.74248 3.32083 8.17415 3.32083Z"
                  fill="#767F8C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_10_6668)">
                  <path
                    d="M19.5879 5.19872C19.3574 4.34194 18.6819 3.66659 17.8252 3.43588C16.2602 3.00757 9.99981 3.00757 9.99981 3.00757C9.99981 3.00757 3.73961 3.00757 2.17452 3.41955C1.33438 3.65011 0.642392 4.3421 0.411833 5.19872C0 6.76366 0 10.0092 0 10.0092C0 10.0092 0 13.271 0.411833 14.8197C0.642545 15.6763 1.3179 16.3518 2.17467 16.5825C3.75609 17.0108 9.99996 17.0108 9.99996 17.0108C9.99996 17.0108 16.2602 17.0108 17.8252 16.5988C18.682 16.3683 19.3574 15.6928 19.5881 14.8361C19.9999 13.271 19.9999 10.0257 19.9999 10.0257C19.9999 10.0257 20.0164 6.76366 19.5879 5.19872Z"
                    fill="#767F8C"
                  />
                  <path
                    d="M8.00659 13.0077L13.2124 10.0093L8.00659 7.01099V13.0077Z"
                    fill="#18191C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_6668">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_10_6671)">
                  <path
                    d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0923 0.0117516 12.7525 0 10.0371 0C7.32172 0 6.98185 0.0117516 5.9152 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48904 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812742 2.78573 0.562602 3.44992C0.31643 4.0868 0.144583 4.81341 0.0977294 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812742 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82088 19.2265 3.48507 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97788 19.9883 7.31791 19.9999 10.0333 19.9999C12.7486 19.9999 13.0885 19.9883 14.1552 19.9413C15.2178 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9726 14.1239C20.0195 13.0572 20.0312 12.7173 20.0312 10.002C20.0312 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8355 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.585 17.9372 15.0538 18.1012 14.0808 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.0522 18.1911 6.00113 18.1441C5.02437 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31704 17.3862 2.9967 17.0541C2.6646 16.7298 2.41065 16.3391 2.2504 15.9055C2.11365 15.5539 1.94959 15.0225 1.9067 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.9067 5.96995C1.94959 4.99319 2.11365 4.46575 2.2504 4.11412C2.41065 3.68038 2.6646 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03231 1.9184 6.00509 1.87537C7.05999 1.82851 7.37651 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9406 2.21921C16.3742 2.37931 16.7689 2.63327 17.0892 2.96536C17.4213 3.28967 17.6753 3.68038 17.8355 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2262 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2262 12.9908 18.1794 14.0457Z"
                    fill="#767F8C"
                  />
                  <path
                    d="M10.0371 4.86414C7.20074 4.86414 4.89941 7.16531 4.89941 10.0019C4.89941 12.8384 7.20074 15.1396 10.0371 15.1396C12.8737 15.1396 15.1749 12.8384 15.1749 10.0019C15.1749 7.16531 12.8737 4.86414 10.0371 4.86414ZM10.0371 13.3346C8.19702 13.3346 6.70442 11.8421 6.70442 10.0019C6.70442 8.16159 8.19702 6.66915 10.0371 6.66915C11.8774 6.66915 13.3698 8.16159 13.3698 10.0019C13.3698 11.8421 11.8774 13.3346 10.0371 13.3346Z"
                    fill="#767F8C"
                  />
                  <path
                    d="M16.5775 4.6611C16.5775 5.32346 16.0404 5.86052 15.3779 5.86052C14.7155 5.86052 14.1785 5.32346 14.1785 4.6611C14.1785 3.99858 14.7155 3.46167 15.3779 3.46167C16.0404 3.46167 16.5775 3.99858 16.5775 4.6611Z"
                    fill="#767F8C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_6671">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_10_6675)">
                  <path
                    d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
                    fill="#767F8C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_6675">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* <img
              src={InstagramIcon}
              alt="Instagram Icon"
              width="20"
              height="20"
            /> */}
            </Box>
          </Box>
        </Box>
      </footer>
    </ThemeProvider>
  );
};

export default Footer;
