// src/components/ReferralForm.js
import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

const ReferralForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
      <TextField
        margin="normal"
        fullWidth
        label="Your Name"
        {...register('referrerName', { required: true })}
        error={!!errors.referrerName}
        helperText={errors.referrerName ? 'Your Name is required' : ''}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Your Email"
        {...register('referrerEmail', { required: true })}
        error={!!errors.referrerEmail}
        helperText={errors.referrerEmail ? 'Your Email is required' : ''}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Friend's Name"
        {...register('refereeName', { required: true })}
        error={!!errors.refereeName}
        helperText={errors.refereeName ? 'Friend\'s Name is required' : ''}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Friend's Email"
        {...register('refereeEmail', { required: true })}
        error={!!errors.refereeEmail}
        helperText={errors.refereeEmail ? 'Friend\'s Email is required' : ''}
      />
      <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ReferralForm;
