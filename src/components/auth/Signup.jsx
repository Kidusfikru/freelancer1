import React, { useState, useEffect } from "react";
import { Typography, Box, useTheme, Container, Divider } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../utils/Header";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [role, setRole] = useState("employee");

  const schema = yup.object({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup
      .string("Enter your password")
      .required("Password is required"),
    confirm_password: yup
      .string("Enter your password")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
    username: yup.string().required("Required"),
    name: yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    try {
      const datas = {
        ...values,
        is_employee: role === "employee",
        is_employer: role === "employer",
      };
      const response = await axios.post(
        "http://localhost:8000/api/register/",
        datas
      );
      console.log(response.data);
      toast.info(
        "Thank you for joining us. We have sent you a verification link to your email, please verify your email by clicking the link!"
      );
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  const handleFacebookLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          const { accessToken, userID } = response.authResponse;

          axios
            .post("http://localhost:8000/social_auth/facebook/", {
              accessToken,
              userID,
            })
            .then((res) => {
              console.log(res.data);
              navigate("/dashboard");
            })
            .catch((error) => {
              console.error("Error:", error.response.data);
            });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "email" }
    );
  };

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "YOUR_APP_ID", // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });
      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={{ paddingTop: 8, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Header bold="Sign up to FreeLancer" color="#FFFFFF" />
          </Box>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirm_password: "",
              username: "",
              name: "",
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Box display="grid" gap="10px">
                  <TextField
                    id="name"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name}
                    helperText={touched.name && errors.name}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{ style: { color: "#585858" } }}
                  />
                  <TextField
                    id="username"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && errors.username}
                    helperText={touched.username && errors.username}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{ style: { color: "#585858" } }}
                  />
                  <TextField
                    id="email"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{ style: { color: "#585858" } }}
                  />
                  <TextField
                    id="password"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{ style: { color: "#585858" } }}
                  />
                  <TextField
                    id="confirm_password"
                    variant="filled"
                    margin="normal"
                    fullWidth
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    autoComplete="current-password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirm_password && errors.confirm_password}
                    helperText={
                      touched.confirm_password && errors.confirm_password
                    }
                    InputProps={{
                      sx: { backgroundColor: "#2B2B2B", borderRadius: "8px" },
                    }}
                    InputLabelProps={{ style: { color: "#585858" } }}
                  />
                </Box>
                <Box display="grid" gap="10px" m="20px">
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant={role === "employer" ? "contained" : "outlined"}
                        style={{
                          height: "65px",
                          backgroundColor: "#0055FF",
                          color: "white",
                          borderRadius: "8px",
                        }}
                        onClick={() => setRole("employer")}
                      >
                        <Typography
                          variant="button"
                          display="block"
                          gutterBottom
                          fontWeight="bold"
                        >
                          Employer
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant={role === "employee" ? "contained" : "outlined"}
                        style={{
                          height: "65px",
                          backgroundColor: "#D1DEFD",
                          color: "#0055FF",
                          borderRadius: "8px",
                        }}
                        onClick={() => setRole("employee")}
                      >
                        <Typography
                          variant="button"
                          display="block"
                          gutterBottom
                          fontWeight="bold"
                        >
                          Employee
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      height: "45px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    <Typography
                      variant="button"
                      display="block"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Sign Up
                    </Typography>
                  </Button>
                </Box>
                <Box display="grid" gap="10px" mt="20px">
                  <Divider light>
                    <Typography
                      variant="body2"
                      display="block"
                      sx={{ color: "#5F5F5F" }}
                    >
                      or continue with
                    </Typography>
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
                    onClick={handleFacebookLogin}
                  >
                    <Typography
                      variant="button"
                      display="block"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Facebook
                    </Typography>
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
                    <Typography
                      variant="button"
                      display="block"
                      gutterBottom
                      fontWeight="bold"
                    >
                      <Link href="/google" color="#FFFFFF">
                        Google
                      </Link>
                    </Typography>
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
                    Already have an account?&nbsp;
                    <Link href="/login" color="#FFFFFF">
                      Login
                    </Link>
                  </Typography>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Signup;
