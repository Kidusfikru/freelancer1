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

const BasicSettings = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCV, setSelectedCV] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropProfilePicture = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProfilePicture = () => {
    setSelectedImage(null);
  };

  const handleDropCV = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setSelectedCV(file);
    }
  };

  const handleDeleteCV = () => {
    setSelectedCV(null);
  };

  const initial = {
    fullName: "",
    title: "",
    exp: "",
    education: "",
    website: "",
  };

  const schema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    title: yup.string().required("Title is required"),
    exp: yup.string().required("Experience is required"),
    education: yup.string().required("Education is required"),
    website: yup.string().required("Website is required"),
  });

  return (
    <div>
      <Box marginTop={3} marginRight={3}>
        <Typography {...mediumTypographyProps}>Basic Settings</Typography>
        <Divider sx={{ margin: 4 }} />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography {...smallTypographyProps}>Profile Picture</Typography>
            <Box
              height={"250px"}
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent="center"
              sx={{
                border: "3px dotted grey",
                borderRadius: "8px",
                backgroundColor: "rgba(169, 169, 169, 0.3)",
                padding: "10px",
              }}
              onDragOver={handleDragOver}
              onDrop={handleDropProfilePicture}
            >
              {selectedImage ? (
                <>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "200px",
                      maxWidth: "200px",
                      objectFit: "cover",
                      marginTop: 70,
                    }}
                  />
                  <Button
                    onClick={handleDeleteProfilePicture}
                    variant="outlined"
                    color="error"
                    sx={{ marginTop: 4 }}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <CloudUploadOutlinedIcon sx={{ fontSize: 70 }} />
                  <Typography {...mediumTypographyProps}>
                    Drop photo here
                  </Typography>
                  <Typography {...smallTypographyProps}>
                    Max Photo Size 1mb
                  </Typography>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                    id="fileInput"
                  />
                  <label htmlFor="fileInput">
                    <Typography
                      {...mediumTypographyProps}
                      sx={{ cursor: "pointer" }}
                    >
                      or click to browse
                    </Typography>
                  </label>
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Formik
              initialValues={initial}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log("Form Values:", values);
                if (selectedCV) {
                  console.log("Selected CV Name:", selectedCV.name);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
                    <Box gridColumn="span 6">
                      <Typography {...smallTypographyProps}>
                        Full Name
                      </Typography>
                      <TextField
                        type="text"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", padding: 10 }}
                      />
                      {errors.fullName && touched.fullName && (
                        <div style={{ color: "red" }}>{errors.fullName}</div>
                      )}
                    </Box>
                    <Box gridColumn="span 6">
                      <Typography {...smallTypographyProps}>Title</Typography>
                      <TextField
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", padding: 10 }}
                      />
                      {errors.title && touched.title && (
                        <div style={{ color: "red" }}>{errors.title}</div>
                      )}
                    </Box>
                    <Box gridColumn="span 6">
                      <Typography {...smallTypographyProps}>
                        Experience
                      </Typography>
                      <TextField
                        type="text"
                        name="exp"
                        value={values.exp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", padding: 10 }}
                      />
                      {errors.exp && touched.exp && (
                        <div style={{ color: "red" }}>{errors.exp}</div>
                      )}
                    </Box>
                    <Box gridColumn="span 6">
                      <Typography {...smallTypographyProps}>
                        Education
                      </Typography>
                      <TextField
                        type="text"
                        name="education"
                        value={values.education}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", padding: 10 }}
                      />
                      {errors.education && touched.education && (
                        <div style={{ color: "red" }}>{errors.education}</div>
                      )}
                    </Box>
                  </Box>

                  <Typography {...smallTypographyProps}>Website</Typography>
                  <TextField
                    type="text"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: "100%", padding: 10 }}
                  />
                  {errors.website && touched.website && (
                    <div style={{ color: "red" }}>{errors.website}</div>
                  )}
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Save
                  </Button>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
          sx={{ marginTop: 2, marginLeft: 2 }}
        >
          <Typography {...mediumTypographyProps}>Your Cv/Resume</Typography>
          <Box
            height={"100px"}
            width={"300px"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "3px dotted grey",
              borderRadius: "8px",
              padding: "10px",
            }}
            onDragOver={handleDragOver}
            onDrop={handleDropCV}
          >
            {selectedCV ? (
              <>
                <Typography {...mediumTypographyProps}>
                  {selectedCV ? selectedCV.name : "Add Your Resume"}
                </Typography>
                <IconButton onClick={handleDeleteCV}>
                  <DeleteIcon />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  onClick={() => document.getElementById("cvFileInput").click()}
                >
                  <AddCircleOutlineIcon
                    style={{ color: "blue", fontSize: 40 }}
                  />
                </IconButton>
                <Box marginLeft={3}>
                  <Typography {...mediumTypographyProps}>
                    Add Your Resume
                  </Typography>
                  <Typography {...smallTypographyProps}>
                    Browse pdf file here
                  </Typography>
                </Box>
              </>
            )}
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }}
              onChange={handleDropCV}
              id="cvFileInput"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BasicSettings;
