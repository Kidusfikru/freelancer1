import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
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
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const CompanyInfo = () => {
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

  const initial = {
    companyName: "",
    bio: "",
    companyUrl: "",
  };

  const schema = yup.object({
    companyName: yup.string().required("Company Name is required"),
    bio: yup.string().required("Bio is required"),
    companyUrl: yup.string().required("Company Url is required"),
  });

  return (
    <div>
      <Box marginTop={3} marginRight={3}>
        <Typography {...mediumTypographyProps}>Company Info</Typography>
        <Divider sx={{ margin: 4 }} />
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
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography {...smallTypographyProps}>
                    Company Logo{" "}
                  </Typography>
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
                  <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
                    <Box gridColumn="span 12">
                      <Typography {...smallTypographyProps}>
                        Company Name
                      </Typography>
                      <TextField
                        type="text"
                        name="companyName"
                        value={values.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", padding: 10 }}
                      />
                      {errors.companyName && touched.companyName && (
                        <div style={{ color: "red" }}>{errors.companyName}</div>
                      )}
                    </Box>
                    <Box gridColumn="span 12">
                      <Typography {...smallTypographyProps}>
                        Company Url
                      </Typography>
                      <TextField
                        type="text"
                        name="companyUrl"
                        value={values.companyUrl}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ width: "100%", padding: 10 }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <InsertLinkIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {errors.companyUrl && touched.companyUrl && (
                        <div style={{ color: "red" }}>{errors.companyUrl}</div>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box marginTop={3}>
                <Typography {...mediumTypographyProps}>
                  Company Biography
                </Typography>
                <TextField
                  name="bio"
                  fullWidth
                  id="outlined-multiline-static"
                  label="Bio"
                  multiline
                  rows={7}
                  // defaultValue="Default Value"
                  sx={{ marginTop: 2 }}
                />
                {errors.bio && touched.bio && (
                  <div style={{ color: "red" }}>{errors.bio}</div>
                )}
              </Box>
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
      </Box>
    </div>
  );
};

export default CompanyInfo;
