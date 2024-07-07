// src/App.js
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferModal from './components/ReferModal';
import { CssBaseline } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CssBaseline />
      <HeroSection onReferClick={handleOpen} />
      <ReferModal open={open} onClose={handleClose} />
    </div>
  );
}

export default App;
