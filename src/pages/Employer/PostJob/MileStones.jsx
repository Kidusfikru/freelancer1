import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { mediumTypographyProps } from "../../../Constants";
import { tokens } from "../../../theme";
import { useNavigate } from "react-router-dom";

const MileStones = ({ setStatus }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();

  const [milestones, setMilestones] = useState("");
  const [jobLevel, setJobLevel] = useState("");

  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    setIsNextDisabled(milestones.trim() === "" || jobLevel.trim() === "");
  }, [milestones, jobLevel]);

  const handleNextClick = () => {
    const data = {
      milestones,
      jobLevel,
    };
    console.log(data);
    setStatus("completed");
    navigate("/employer/dashboard");
  };

  const handleClick = (value) => {
    setJobLevel(value);
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
            Number of Milestones & Job Level
          </Typography>
        </Grid>
        <Grid item md={1}>
          <div style={{ height: "100%", borderLeft: "1px solid #000" }}></div>
        </Grid>
        <Grid item xs={12} sm={4} md={5}>
          <Stack spacing={2}>
            <Typography {...mediumTypographyProps}>
              How many milestones will the job have?
            </Typography>
            <TextField
              id="outlined-basic"
              type="number"
              label="Milestones"
              variant="outlined"
              value={milestones}
              onChange={(e) => setMilestones(e.target.value)}
              required
            />

            <Typography {...mediumTypographyProps}>
              Select the level for this job
            </Typography>
            {["Easy", "Medium", "Hard"].map((label, index) => {
              const value = label.toLowerCase().replace(" ", "-");
              const levelColors = {
                easy: colors.greenAccent[500], // Accessing the green color from the theme
                medium: colors.redAccent[700], // Accessing the yellow color from the theme
                hard: colors.redAccent[500], // Accessing the red color from the theme
              };
              return (
                <Chip
                  key={index}
                  label={label}
                  value={value}
                  onClick={() => handleClick(value)}
                  sx={{
                    backgroundColor:
                      jobLevel === value
                        ? theme.palette.primary.main
                        : levelColors[value],
                    color: jobLevel === value ? "white" : "black",
                    "&:hover": {
                      backgroundColor:
                        jobLevel === value
                          ? theme.palette.primary.main
                          : levelColors[value],
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

export default MileStones;
