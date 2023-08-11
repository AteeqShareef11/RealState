import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
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

const NewPlotOwner = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handledDateChange = (date) => {
    setValues({
      ...values,
      startDate: moment(date).format('DD/MM/YYYY'),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit', event);
    try {
      const res = dispatch(createPlotOwner({ ...values, AgreementImg: images }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    console.log('name---', event.target.name);
    setValues({
      ...values,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleMoreImages = (e) => {
    const imagefile = e.target.files[0];
    setImages([...images, imagefile]);
  };

  const handleDeletImg = (index) => {
    const res = images.filter((item, ind) => ind !== index);
    setImages(res);
  };

  return (
    <Stack gap={2}>
      <Typography>New Plot Owner</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} component={'form'} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.title}
                name="ownerName"
                value={values.ownerName}
                onChange={handleChange}
                error={errors.ownerName}
                fullWidth
                label="Owner Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.parentName}
                name="parentName"
                value={values.parentName}
                onChange={handleChange}
                error={errors.parentName}
                fullWidth
                label="Parent Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.cnic}
                name="cnic"
                value={values.cnic}
                onChange={handleChange}
                error={errors.cnic}
                fullWidth
                label="CNIC"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.phoneNo}
                name="phoneNo"
                value={values.phoneNo}
                onChange={handleChange}
                error={errors.phoneNo}
                type="number"
                fullWidth
                label="Phone No"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                helperText={errors.area}
                name="area"
                value={values.area}
                onChange={handleChange}
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
                helperText={errors.totalAmount}
                name="totalAmount"
                value={values.totalAmount}
                onChange={handleChange}
                error={errors.totalAmount}
                type="number"
                fullWidth
                label="Total Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.monthlyInstallment}
                name="monthlyInstallment"
                value={values.monthlyInstallment}
                onChange={handleChange}
                error={errors.monthlyInstallment}
                type="number"
                fullWidth
                label="Monthly Installment"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.advanceAmount}
                name="advanceAmount"
                value={values.advanceAmount}
                onChange={handleChange}
                error={errors.advanceAmount}
                type="number"
                fullWidth
                label="Advance Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.totalMonths}
                name="totalMonths"
                value={values.totalMonths}
                onChange={handleChange}
                error={errors.totalMonths}
                type="number"
                fullWidth
                label="Total Months"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                helperText={errors.plotNo}
                name="plotNo"
                value={values.plotNo}
                onChange={handleChange}
                error={errors.plotNo}
                type="number"
                fullWidth
                label="Plot No"
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
                {/* <Stack spacing={2}>
                  <Typography>Agreement Image</Typography>
                  <input name="AgreementImg" type="file" onChange={handleFileChange} />
                </Stack> */}
                <Stack spacing={2}>
                  <Typography>Agreement Image</Typography>
                  <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} gap={4}>
                    {images.map((item, index) => (
                      <Box display={'flex'} position={'relative'} key={index}>
                        <img
                          style={{ width: '128px', height: '128px', borderRadius: '10px' }}
                          src={URL.createObjectURL(item)}
                          alt=""
                        />
                        <Box
                          style={{
                            position: 'absolute',
                            top: 2,
                            right: 2,
                            cursor: 'pointer',
                            borderRadius: '50px',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'red',
                          }}
                          onClick={() => handleDeletImg(index)}
                        >
                          x
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Box display={'flex'} justifyContent={'center'}>
                    <input name="more" type="file" onChange={handleMoreImages} />
                  </Box>
                </Stack>
                <Stack spacing={2}>
                  <Typography>Advance Payment Image</Typography>
                  <input name="advancePaymentImg" type="file" onChange={handleFileChange} />
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

export default NewPlotOwner;
