import React, { useState } from "react";
import { Box } from "@mui/material";
import Topbar from "../../../components/Layouts/Topbar";
import Footer from "../../../components/Layouts/Footer";
import PostTitle from "./PostTitle";
import JobType from "./JobType";
import Education from "./Education";
import MileStones from "./MileStones";

const SinglePost = () => {
  const [status, setStatus] = useState("initial");

  return (
    <div>
      <Topbar />
      <Box sx={{ m: 10 }}>
        {status === "initial" && <PostTitle setStatus={setStatus} />}
        {status === "jobType" && <JobType setStatus={setStatus} />}
        {status === "education" && <Education setStatus={setStatus} />}
        {status === "milestones" && <MileStones setStatus={setStatus} />}
      </Box>
      <Footer />
    </div>
  );
};

export default SinglePost;
