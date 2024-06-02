import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle, color, bold }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={color ? color : colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={color ? color : colors.greenAccent[400]}>
        {subtitle}
      </Typography>

      <Typography
        variant="h6"
        color={color ? color : colors.grey[800]}
        fontWeight="bold"
      >
        <Typography
          variant="h4"
          color={color ? color : colors.grey[800]}
          fontWeight="bold"
        >
          {bold}
        </Typography>
      </Typography>
    </Box>
  );
};

export default Header;
