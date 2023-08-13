import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { getDashboardData } from '../Redux/slice/dashboard';
// components
import Iconify from '../components/iconify';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const dashboard = useSelector((s) => s.dashboard?.data);
  console.log('dashboard', dashboard);

  const dashboardData = async () => {
    try {
      const res = await dispatch(getDashboardData());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dashboardData();
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard | Real Estate UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Amounts" total={dashboard?.totalAmount} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Customers"
              total={dashboard?.totalCustomers}
              color="info"
              icon={'ant-design:apple-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Received Amount"
              total={dashboard?.totalReceivedAmount}
              color="warning"
              icon={'ant-design:windows-filled'}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
