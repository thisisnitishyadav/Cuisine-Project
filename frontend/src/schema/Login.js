// schema/Login.js
import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string().email('Invalid email').required('Please Enter Your Email'),
  password: Yup.string().min(6, 'Password too short').required('Please Enter Your Password'),
});
