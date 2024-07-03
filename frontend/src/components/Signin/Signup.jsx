import { Button } from '@mui/material';
import { useFormik } from "formik";
import React from 'react';
// import { SignUpSchema } from "../../schema/Signup";
import { useDispatch } from "react-redux";
import { register } from '../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';


const initialValue = {
  fullname: "",
  email: "",
  password: "",
};


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    
    // validationSchema: SignUpSchema,
    initialValues: initialValue,
    onSubmit: async (values, action) => {
      console.log(values,'value')
      console.log('submit')
      const { fullname, email, password } = values;
      const data = { fullname, email, password };
      console.log(data,'data')
      const result = await dispatch(register(data));
      console.log('result',result?.data?.status);
      if (result) {
        alert("Registered Successfully");
        navigate("/");
        action.resetForm();
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-fit bg-slate-100">
      <div className="w-[400px] h-[600px] rounded-l my-16 bg-white">
        <div className="flex items-center justify-center h-[60px] my-4 border-b-2 text-3xl">
          Sign Up / Create Account
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mx-8 space-y-8 my-12'>
            <div className="flex border justify-center items-center h-[50px]">
              <input
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                name='fullname'
                type="text"
                placeholder="Enter Name"
                className="flex justify-center w-full h-full text-center"
              />
              {/* {errors.fullname && touched.fullname && <div style={{ color: 'red' }}>{errors.fullname}</div>} */}
            </div>

            <div className="flex border justify-center items-center h-[50px]">
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name='email'
                type="email"
                placeholder="Enter Email ID or Username"
                className="flex justify-center w-full h-full text-center"
              />
              {/* {errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>} */}
            </div>

            <div className="flex border justify-center items-center h-[50px]">
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name='password'
                type="password"
                placeholder="Create Password"
                className="flex justify-center w-full h-full text-center"
              />
              {/* {errors.password && touched.password && <div style={{ color: 'red' }}>{errors.password}</div>} */}
            </div>
          </div>

          <div className='flex items-center justify-center my-20 h-[50px]'>
            <Button variant="outlined" type='submit'>Signup</Button>
          </div>
        </form>
        <div className='flex justify-center gap-2'>
          Already have an account?
          <p className='text-blue-500 underline underline-offset-2 cursor-pointer' onClick={() => navigate('/login')}>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
