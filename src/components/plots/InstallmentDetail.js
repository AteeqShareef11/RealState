import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPlotOwner } from '../../Redux/slice/buyer';
import { createInstallment, getBuyerInstallment } from '../../Redux/slice/installment';
import { IMG_URL } from '../../Redux/api/http-common';

const InstallmentDetail = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log('state', state);
  const installment = useSelector((s) => s.installment?.installmentDetail);
  console.log(installment);

  const getInstallMentDetail = async () => {
    try {
      const res = await dispatch(getBuyerInstallment(state.id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInstallMentDetail();
  }, []);

  return (
    <Stack gap={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography>Amount</Typography>
                <Typography>{installment.amount}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Reciept No</Typography>
              <Typography>{installment.recieptNo}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Date</Typography>
              <Typography>{installment.date}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack spacing={2}>
                  <Typography>Reciept Pic</Typography>
                  <img src={IMG_URL + installment.recieptPic} alt="" />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default InstallmentDetail;
