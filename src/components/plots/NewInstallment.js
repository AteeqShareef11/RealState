import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { createPlotOwner } from '../../Redux/slice/buyer';
import { createInstallment } from '../../Redux/slice/installment';

const initialValues = {
  amount: '',
  recieptNo: '',
  recieptPic: null,
  date: '',
};

const NewInstallment = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'file') {
      setValues({
        ...values,
        [e.target.name]: e.target.files[0],
      });
    }
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handledDateChange = (date) => {
    setValues({
      ...values,
      date: moment(date).format('DD/MM/YYYY'),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', event);
    try {
      const res = dispatch(createInstallment(values));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack gap={2}>
      <Typography>New Installment</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} component={'form'} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.amount}
                name="amount"
                value={values.amount}
                onChange={handleChange}
                error={errors.amount}
                fullWidth
                type="number"
                label="Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.recieptNo}
                name="recieptNo"
                value={values.recieptNo}
                onChange={handleChange}
                error={errors.recieptNo}
                fullWidth
                label="Reciept No"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ pt: 0 }} components={['DatePicker']}>
                  <DatePicker
                    slotProps={{ textField: { fullWidth: true, padding: 0 } }}
                    onChange={handledDateChange}
                    label="Start Date"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack spacing={2}>
                  <Typography>Reciept Pic</Typography>
                  <input name="recieptPic" type="file" onChange={handleChange} />
                </Stack>
              </Box>
            </Grid>
            <Grid mt={8} display={'flex'} justifyContent={'flex-end'} item xs={12}>
              <Button variant="contained" type="submit">
                SAVE
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default NewInstallment;
