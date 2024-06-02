import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Divider, Typography } from "@mui/material";
import { mediumTypographyProps } from "../../../Constants";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import BasicSettings from "./tabs/BasicSettings";
import ProfileSettings from "./tabs/ProfileSettings";
import AccountSettings from "./tabs/AccountSettings";

const Settings = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box marginTop={5} marginRight={10}>
      <Typography {...mediumTypographyProps} sx={{ marginBottom: 3 }}>
        Hello, User
      </Typography>
      {/* <Typography {...smallTypographyProps}>
          Here is your activities & career opportunities
        </Typography> */}
      {/* <Divider sx={{ mt: "10px" }} /> */}

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab icon={<PersonIcon />} label="Basic" value="1" />
              <Tab icon={<AccountCircleIcon />} label="Profile" value="2" />
              <Tab icon={<SettingsIcon />} label="Account Setting" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BasicSettings />
          </TabPanel>
          <TabPanel value="2">
            <ProfileSettings />
          </TabPanel>
          <TabPanel value="3">
            <AccountSettings />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Settings;
