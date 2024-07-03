import { Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
// import { LoginSchema } from '../../schema/Login';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';

const Login = ({ setDialogOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClear = () => {
    setDialogOpen(false);
  };

  const initialValue = {
    email: '',
    password: '',
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValue,
    // validationSchema: LoginSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      const result = await dispatch(login(values));
    console.log('login', result);
      if (result) {
        alert('LogIn Successfully');
        localStorage.setItem('accessToken', result.token);
        navigate('/');
        handleClear();
        action.resetForm();
      }
      console.log(result);
    },
  });

  return (
    <>
      <div className="flex justify-center items-center min-h-fit  bg-slate-100">
        <div className="w-[400px] h-[600px] rounded-l my-16 bg-white">
          <div className="flex items-center justify-center h-[60px] my-4 border-b-2 text-3xl">
            Login to Account
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mx-8 space-y-8 my-12">
              <div className="flex border justify-center items-center h-[50px]">
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="email"
                  placeholder="Enter Username or Email ID"
                  className="flex justify-center w-full h-full text-center"
                />
                {/* {errors.email && touched.email && (
                  <div style={{ color: 'red' }}>{errors.email}</div>
                )} */}
              </div>
              <div className="flex border justify-center items-center h-[50px]">
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  className="flex justify-center w-full h-full text-center"
                />
                {/* {errors.password && touched.password && (
                  <div style={{ color: 'red' }}>{errors.password}</div>
                )} */}
              </div>
            </div>
            <div className="flex items-center justify-center my-24 h-[50px]">
              <Button variant="outlined" type="submit">
                Login
              </Button>
            </div>
          </form>
          <div className="flex justify-center gap-2">
            Don't have an account?
            <p
              className="text-blue-500 underline underline-offset-2 cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Signup
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
