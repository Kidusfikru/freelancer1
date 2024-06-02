import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import {
  mediumTypographyProps,
  smallTypographyProps,
} from "../../../../Constants";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import * as yup from "yup";
import { Formik } from "formik";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const ProfileSettings = () => {
  const initial = {
    nationality: "",
    gender: "",
    profession: "",
    dob: null,
    bio: "",
  };

  const schema = yup.object({
    nationality: yup.string().required("Nationality is required"),
    gender: yup.string().required("Gender is required"),
    profession: yup.string().required("Profession is required"),
    dob: yup.date().required("Date of Birth is required"),
    bio: yup.string().required("Bio is required"),
  });
  return (
    <div>
      <Box marginTop={3} marginRight={3}>
        <Typography {...mediumTypographyProps}>Profile Settings</Typography>
        <Divider sx={{ margin: 4 }} />
        <Formik
          initialValues={initial}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography {...smallTypographyProps}>Nationality</Typography>
                  <TextField
                    type="text"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: "100%", padding: 10 }}
                  ></TextField>
                  <Typography {...smallTypographyProps}>Gender</Typography>
                  <Select
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                      width: "100%",
                      marginTop: 10,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Typography {...smallTypographyProps}>Profession</Typography>
                  <TextField
                    type="text"
                    name="profession"
                    value={values.profession}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: "100%", padding: 10 }}
                  ></TextField>
                  <Typography {...smallTypographyProps}>
                    Date of Birth
                  </Typography>
                  <TextField
                    fullWidth={true}
                    variant="filled"
                    type="date"
                    name="dob"
                    value={values.dob}
                    onBlur={handleBlur}
                    style={{ width: "100%", padding: 10 }}
                  />
                </Grid>
                <Grid xs={12}>
                  <Typography {...smallTypographyProps}>Biography</Typography>
                  <TextField
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    style={{ width: "100%", padding: 10 }}
                  />
                </Grid>
              </Grid>
              <Box sx={{ padding: 5 }}>
                <Button variant="contained" fullWidth>
                  Save
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default ProfileSettings;
