import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import Divider from "@mui/material/Divider";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            fontSize="50px"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: "2px",
            borderColor: colors.grey[500],
            animation: "blink 2.5s infinite",
          }}
        />
        <Box>{icon}</Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.blueAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.blueAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
      <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default StatBox;
