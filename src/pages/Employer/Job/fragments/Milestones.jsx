// Milestones.js
import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
}));

const Milestones = ({
  milestones,
  currentMilestoneIndex,
  handleCheckboxChange,
}) => {
  const currentMilestone = milestones[currentMilestoneIndex];
  const completedTasks = currentMilestone.tasks.filter(
    (task) => task.checked
  ).length;
  const totalTasks = currentMilestone.tasks.length;
  const progressValue = (completedTasks / totalTasks) * 100;

  const completedMilestones = milestones.slice(0, currentMilestoneIndex).length;
  const totalMilestones = milestones.length;
  const overallProgressValue = (completedMilestones / totalMilestones) * 100;

  return (
    <Box marginTop={5}>
      <Box marginBottom={2}>
        <Typography variant="h6">Overall Progress</Typography>
        <BorderLinearProgress
          variant="determinate"
          value={overallProgressValue}
        />
      </Box>
      <Typography variant="h6">{currentMilestone.title}</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {currentMilestone.tasks.map((task) => (
          <Box
            key={task.id}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={task.checked}
                  onChange={() =>
                    handleCheckboxChange(currentMilestone.id, task.id)
                  }
                />
              }
              label={task.label}
            />
          </Box>
        ))}
      </Box>
      <Box marginY={2}>
        <BorderLinearProgress
          sx={{ height: 4 }}
          variant="determinate"
          value={progressValue}
        />
      </Box>
    </Box>
  );
};

export default Milestones;
