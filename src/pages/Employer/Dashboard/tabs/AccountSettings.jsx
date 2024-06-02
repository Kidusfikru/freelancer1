import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
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

const AccountSettings = () => {
  const initial = {
    location: "",
    phone: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  };

  const schema = yup.object({
    location: yup.string().required("Location is required"),
    phone: yup.string().required("Phone is required"),
    email: yup.string().email().required("Email is required"),
    newPassword: yup.string().required("New Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });
  return (
    <div>
      <Box marginTop={3} marginRight={3}>
        <Typography {...mediumTypographyProps}>Account Settings</Typography>
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
                <Grid item xs={12} md={12}>
                  <Typography {...smallTypographyProps}>Location</Typography>
                  <TextField
                    fullWidth
                    // label="Location"
                    variant="outlined"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.location && Boolean(errors.location)}
                    helperText={touched.location && errors.location}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography {...smallTypographyProps}>Phone</Typography>

                  <TextField
                    fullWidth
                    // label="Phone"
                    variant="outlined"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography {...smallTypographyProps}>Email</Typography>

                  <TextField
                    fullWidth
                    // label="Email"
                    variant="outlined"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography {...mediumTypographyProps}>
                    Change Password
                  </Typography>
                  <Divider sx={{ margin: 4 }} />
                </Grid>

                <Grid item xs={12} md={6}>
                  {/* <Typography {...smallTypographyProps}>Email</Typography> */}

                  <TextField
                    fullWidth
                    label="New Password"
                    variant="outlined"
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.newPassword && Boolean(errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                </Grid>
              </Grid>
              <Box marginTop={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginRight: 2 }}
                >
                  Save Changes
                </Button>
                <Grid item xs={12}>
                  <Typography
                    {...mediumTypographyProps}
                    sx={{ marginTop: 10, color: "red" }}
                  >
                    Delete Account
                  </Typography>
                  <Divider sx={{ margin: 4, borderColor: "red" }} />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography {...smallTypographyProps}>
                        If you delete your account, you will no longer be able
                        to get information about the matched jobs, following
                        employers, and job alert, shortlisted jobs and more. You
                        will be abandoned from all the services of application
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box justifyContent={"center"} display={"flex"}>
                        <Button variant="contained" color="error">
                          Close Account
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Button variant="contained" color="error">
                  Cancel
                </Button> */}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default AccountSettings;
