import React from "react";
import { Typography, Box, useTheme, Container, Divider } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../utils/Header";
import { useFormik } from "formik";
import * as yup from "yup";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const initial = {
    email: "",
    password: "",
  };

  const schema = yup.object({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Header bold="Log in to FreeLancer" color="#FFFFFF" />
          </Box>

          <Formik
            initialValues={initial}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Box display="grid" gap="10px">
                  <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Email"
                    name="email"
                    autoComplete="email"
                    error={!!formik.touched.email && !!formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                    {...formik.getFieldProps("email")}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{
                      style: { color: "#585858" },
                    }}
                  />

                  <TextField
                    id="filled-basic"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    error={
                      !!formik.touched.password && !!formik.errors.password
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    {...formik.getFieldProps("password")}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{
                      style: { color: "#585858" },
                    }}
                  />
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Grid container>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                      <Link href="#" color="#5F5F5F">
                        {"Forgot your Password"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Button
                    variant="contained"
                    style={{
                      height: "45px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                    type="submit"
                  >
                    {
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        fontWeight="bold"
                      >
                        Log in{" "}
                      </Typography>
                    }
                  </Button>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Divider light={true}>
                    <Typography
                      variant="body2"
                      display="block"
                      sx={{ color: "#5F5F5F" }}
                    >
                      or continue with
                    </Typography>{" "}
                  </Divider>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Button
                    variant="contained"
                    style={{
                      height: "45px",
                      backgroundColor: "#3B5998",
                      color: "white",
                    }}
                  >
                    {
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        fontWeight="bold"
                      >
                        Facebook
                      </Typography>
                    }
                  </Button>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Button
                    variant="contained"
                    style={{
                      height: "45px",
                      backgroundColor: "#DB4437",
                      color: "white",
                    }}
                  >
                    {
                      <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        fontWeight="bold"
                      >
                        Google
                      </Typography>
                    }
                  </Button>
                </Box>
                <Box
                  display="grid"
                  gap="10px"
                  mt="70px"
                  mb="10px"
                  textAlign="center"
                >
                  <Typography variant="caption" display="block" color="#5F5F5F">
                    Don't have an account? &nbsp;
                    <Link href="/signup" color="#FFFFFF">
                      {"Sign up"}
                    </Link>
                  </Typography>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
