import React, { useState } from "react";
import { Modal, Button } from "@mui/material";

const ConfirmationModal = ({ open, onClose, onConfirm, title, content }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          padding: 16,
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <h2 id="confirmation-modal-title">{title}</h2>
        <p id="confirmation-modal-description">{content}</p>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="primary"
          style={{ marginRight: 10 }}
        >
          Confirm
        </Button>
        <Button onClick={onClose} variant="contained" color="secondary">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
