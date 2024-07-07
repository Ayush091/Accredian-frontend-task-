import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import ReferralForm from './ReferralForm';

const ReferModal = ({ open, onClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Refer a Course
        </Typography>
        <ReferralForm />
      </Box>
    </Modal>
  );
};

export default ReferModal;
