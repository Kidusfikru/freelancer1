import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../../theme";

const ChatModal = ({ open, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dialogBackdropStyle = {
    backdropFilter: "blur(10px)", // Adjust the blur strength as needed
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the opacity as needed
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      BackdropProps={{
        sx: dialogBackdropStyle, // Apply the backdrop style
      }}
    >
      <DialogTitle>Chat</DialogTitle>
      <DialogContent>
        {/* Chat content */}
        <Box>
          {/* Messages */}
          <Box mb={2}>
            {/* Replace this with your actual messages */}
            <div>User 1: Hello!</div>
            <div>User 2: Hi there!</div>
          </Box>
          {/* Text input for sending messages */}
          <TextField label="Type your message" fullWidth />
        </Box>
      </DialogContent>
      <DialogActions>
        {/* Button to close the modal */}
        <Button>Send</Button>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        {/* Additional actions can be added here */}
      </DialogActions>
    </Dialog>
  );
};

export default ChatModal;
