// schema/index.js
import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Please enter name'),
  email: Yup.string().email('Invalid email').required('Please enter your email'),
  password: Yup.string().min(6, 'Password too short').required('Please enter your password'),
});
