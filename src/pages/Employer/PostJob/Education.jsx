import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mediumTypographyProps } from "../../../Constants";

const Education = ({ setStatus }) => {
  const [educationLevel, setEducationLevel] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    setIsNextDisabled(educationLevel.trim() === "");
  }, [educationLevel]);

  const handleNextClick = () => {
    console.log(educationLevel);
    setStatus("milestones");
  };

  const handleClick = (value) => {
    setEducationLevel(value);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={5}>
          <Typography
            fontFamily="Ink Free"
            fontSize="38px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="28px"
            sx={{ marginTop: "100px" }}
          >
            Education Level Required
          </Typography>
        </Grid>
        <Grid item md={1}>
          <div style={{ height: "100%", borderLeft: "1px solid #000" }}></div>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Stack spacing={2}>
            <Typography {...mediumTypographyProps}>
              Select the minimum education level required for this job
            </Typography>
            {[
              "Primary Education",
              "Higher Education",
              "Graduate Degree",
              "Masters Degree",
              "Doctoral Degree",
            ].map((label, index) => {
              const value = label.toLowerCase().replace(" ", "-");
              return (
                <Chip
                  key={index}
                  label={label}
                  value={value}
                  onClick={() => handleClick(value)}
                  sx={{
                    backgroundColor:
                      educationLevel === value
                        ? "var(--01-Dark, #05F)"
                        : "default",
                    color: educationLevel === value ? "white" : "default",
                    "&:hover": {
                      backgroundColor:
                        educationLevel === value
                          ? "var(--01-Dark, #05F)"
                          : "#e0e0e0",
                    },
                  }}
                />
              );
            })}
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={10}>
        <Grid item md={8}></Grid>
        <Grid item md={2}>
          <Button
            onClick={() => setStatus("jobType")}
            sx={{
              borderRadius: "8px",
              background: "var(--01-Dark, #05F)",
              color: "white",
              "&:hover": {
                background: "#0044cc",
              },
            }}
          >
            <Typography color={"white"} fontSize={"14px"}>
              Back
            </Typography>
          </Button>
        </Grid>
        <Grid item md={2}>
          <Button
            disabled={isNextDisabled}
            onClick={handleNextClick}
            sx={{
              borderRadius: "8px",
              background: isNextDisabled ? "grey" : "var(--01-Dark, #05F)",
              color: "white",
              cursor: isNextDisabled ? "not-allowed" : "pointer",
              "&:hover": {
                background: isNextDisabled ? "grey" : "#0044cc",
              },
            }}
          >
            <Typography color={"white"} fontSize={"14px"}>
              Next
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
