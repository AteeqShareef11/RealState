import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../Redux/slice/user';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const initialState = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    console.log('res');

    e.preventDefault();
    try {
      const res = await dispatch(loginUser(values));
      if (res.payload.success) {
        localStorage.setItem('realStateToken', res.payload.access_token);
        navigate('/dashboard', { replace: true });
      }
      console.log('res', res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box component={'form'} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" value={values.email} onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link> */}
      </Stack>

      <Button fullWidth size="large" type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}
