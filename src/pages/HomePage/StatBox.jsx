import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { briefcaseSvg } from "../../svg";

const StatBox = ({ img, title, numCount }) => {
  const [count, setCount] = useState(0);
  const targetCount = numCount;

  useEffect(() => {
    let start = 0;
    const end = targetCount;
    const duration = 2500; // Animation duration in milliseconds
    const step = Math.max(Math.ceil(end / duration), 1);

    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 1);

    return () => clearInterval(timer);
  }, [targetCount]);
  return (
    <div>
      <Paper
        sx={{
          width: "100%",
          //   minWidth: "300px",
          display: "flex",
          padding: "20px",
          alignItems: "center",
          gap: "2px",
          borderRadius: "8px",
          background: "var(--Gray-White, #FFF)",
          transition:
            "box-shadow 0.3s ease" /* Added transition for smooth effect */,
          boxShadow: "none" /* Initial box-shadow set to none */,
          "&:hover": {
            boxShadow:
              "0px 4px 6px rgba(0, 0, 0, 0.3)" /* Box-shadow effect on hover */,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "16px",
            alignItems: "flex-start",
            gap: "10px",
            background: "var(--Primary-50, #E7F0FA)",
            transition: "background-color 0.3s ease",
            "&:hover": {
              background: "var(--Primary-500, #0A65CC)",
            },
            borderRadius: "8px",
          }}
          mr={3}
        >
          {img}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="6px"
          flex="1"
        >
          <Typography
            color="var(--Gray-900, #18191C)"
            /* Heading/04 */
            fontFamily="Inter"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="32px" /* 133.333% */
          >
            {" "}
            {count?.toLocaleString()}
          </Typography>
          <Typography
            color="var(--Gray-500, #767F8C)"
            /* Body/Medium/400 */
            font-family="Inter"
            font-size="16px"
            font-style="normal"
            font-weight="400"
            line-height="24px"
          >
            {" "}
            {title}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default StatBox;
