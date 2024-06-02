import React, { useState } from "react";
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

  // Mock chat data
  const initialMessages = [
    { id: 1, user: "User 1", message: "Hello!" },
    { id: 2, user: "User 2", message: "Hi there!" },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageObject = {
        id: messages.length + 1,
        user: "User 1", // Assuming "User 1" is the current user for this example
        message: newMessage,
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage(""); // Clear the input field
    }
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
        <Box>
          {/* Messages */}
          <Box mb={2} maxHeight="300px" overflow="auto">
            {messages.map((msg) => (
              <Box
                key={msg.id}
                display="flex"
                justifyContent={
                  msg.user === "User 1" ? "flex-end" : "flex-start"
                }
                mb={1}
              >
                <Box
                  p={1}
                  borderRadius="8px"
                  bgcolor={
                    msg.user === "User 1"
                      ? colors.blueAccent[600]
                      : colors.grey[300]
                  }
                  color={msg.user === "User 1" ? "white" : "black"}
                  maxWidth="75%"
                >
                  <strong>{msg.user}:</strong> {msg.message}
                </Box>
              </Box>
            ))}
          </Box>
          {/* Text input for sending messages */}
          <TextField
            label="Type your message"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevent form submission
                handleSendMessage();
              }
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSendMessage} color="primary">
          Send
        </Button>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChatModal;
