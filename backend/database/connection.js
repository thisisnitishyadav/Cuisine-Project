import mongoose from 'mongoose';

// Established Database connection
export default async () => {
  return mongoose.connect(process.env.DB_URL, {
    //required elements
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
  });
};
