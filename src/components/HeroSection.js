import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const HeroSection = ({ onReferClick }) => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', padding: '50px 0' }}>
      <Typography variant="h2" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h6" gutterBottom>
        Earn rewards by referring our courses to your friends!
      </Typography>
      <Button variant="contained" color="primary" onClick={onReferClick}>
        Refer Now
      </Button>
    </Container>
  );
};

export default HeroSection;
