import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { IMG_URL } from '../../Redux/api/http-common';
import { createPlotOwner } from '../../Redux/slice/buyer';

const initialValues = {
  ownerName: '',
  parentName: '',
  cnic: '',
  area: '',
  phoneNo: '',
  totalAmount: '',
  monthlyInstallment: '',
  advanceAmount: '',
  totalMonths: '',
  plotNo: '',
  AgreementImg: null,
  advancePaymentImg: null,
  startDate: '',
};

const Detail = () => {
  const { state } = useLocation();
  const [values, setValues] = useState({
    ownerName: state.data.ownerName,
    parentName: state.data.parentName,
    cnic: state.data.cnic,
    area: state.data.area,
    phoneNo: state.data.phoneNo,
    totalAmount: state.data.totalAmount,
    monthlyInstallment: state.data.monthlyInstallment,
    advanceAmount: state.data.advanceAmount,
    totalMonths: state.data.totalMonths,
    plotNo: state.data.plotNo,
    AgreementImg: state.data.AgreementImg,
    advancePaymentImg: state.data.advancePaymentImg,
    startDate: state.data.startDate,
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  console.log('___state', state);

  return (
    <Stack gap={2}>
      <Typography>Detail</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.title}
                name="ownerName"
                value={values.ownerName}
                error={errors.ownerName}
                fullWidth
                label="Owner Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.parentName}
                name="parentName"
                value={values.parentName}
                error={errors.parentName}
                fullWidth
                label="Parent Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.cnic}
                name="cnic"
                value={values.cnic}
                error={errors.cnic}
                fullWidth
                label="CNIC"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.phoneNo}
                name="phoneNo"
                value={values.phoneNo}
                error={errors.phoneNo}
                type="number"
                fullWidth
                label="Phone No"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                disabled
                helperText={errors.area}
                name="area"
                value={values.area}
                error={errors.area}
                multiline
                rows={4}
                fullWidth
                label="Area"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.totalAmount}
                name="totalAmount"
                value={values.totalAmount}
                error={errors.totalAmount}
                type="number"
                fullWidth
                label="Total Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.monthlyInstallment}
                name="monthlyInstallment"
                value={values.monthlyInstallment}
                error={errors.monthlyInstallment}
                type="number"
                fullWidth
                label="Monthly Installment"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.advanceAmount}
                name="advanceAmount"
                value={values.advanceAmount}
                error={errors.advanceAmount}
                type="number"
                fullWidth
                label="Advance Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.totalMonths}
                name="totalMonths"
                value={values.totalMonths}
                error={errors.totalMonths}
                type="number"
                fullWidth
                label="Total Months"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                disabled
                helperText={errors.plotNo}
                name="plotNo"
                value={values.plotNo}
                error={errors.plotNo}
                type="number"
                fullWidth
                label="Plot No"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <Typography>Start Date</Typography>
                <Typography>{values.startDate}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack spacing={2}>
                  <Typography>Agreement Image</Typography>
                  <img src={values.AgreementImg[0]} alt="" />
                </Stack>
                <Stack spacing={2}>
                  <Typography>Advance Payment Image</Typography>
                  <img src={`${IMG_URL}${values.advancePaymentImg}`} alt="" />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Detail;
