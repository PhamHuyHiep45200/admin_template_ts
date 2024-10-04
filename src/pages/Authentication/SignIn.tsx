import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogoJR } from '../../images/logo/logoJR';
import SigninImg from '../../images/cards/ImgSingIn.png';
import { LockOutlined, MailFilled, UnlockOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import { ErrorMessage, Field, Formik } from 'formik';
import { validationSchema } from '../../validations/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
import { setAuth } from '../../store/authSlice';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isAuthenticated = useSelector(
  //   (state: RootState) => state.auth.isAuthenticated,
  // );

  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const [showHiddenPass, setShowHiddenPass] = useState<boolean>(false);
  const handleHiddenShowPass = () => {
    setShowHiddenPass(!showHiddenPass);
  };
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const expirationTime = localStorage.getItem('tokenExpiration');

    if (token && expirationTime) {
      const isTokenExpired = Date.now() > Number(expirationTime);
      if (!isTokenExpired) {
        navigate('/');
      }
    }
  }, [navigate]);

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('>>Values : ', values);
    const fakeEmail = 'khanh@gmail.com';
    const fakePassword = '1';
    if (values.email === 'khanh@gmail.com' && values.password === '1') {
      if (values.email === fakeEmail && values.password === fakePassword) {
        localStorage.setItem('accessToken', 'your_access_token');
        localStorage.setItem('expiation', (Date.now() + 3600000).toString());
        dispatch(setAuth(true));
        navigate('/home');
        console.log('Đăng nhập thành công!');
      } else {
        console.log('Đăng nhập thất bại!');
      }
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full  h-screen flex items-center justify-center">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <Link className="mb-5.5 inline-block" to="/">
              <div className=" flex items-center justify-between">
                <LogoJR className="" />
                <span className="text-black text-[24px] font-bold ml-2">
                  JRE Admin
                </span>
              </div>
            </Link>

            <p className="2xl:px-20">Welcome To JRE Admin</p>

            <span className="mt-15 inline-block">
              <img src={SigninImg} alt="" />
            </span>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">Start for free</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to JRE Admin
            </h2>

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <Form>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <span className="absolute right-4 top-4">
                        <MailFilled />
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showHiddenPass ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <span
                        className="absolute right-4 top-4 cursor-pointer"
                        onClick={handleHiddenShowPass}
                      >
                        {showHiddenPass ? <UnlockOutlined /> : <LockOutlined />}
                      </span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <Button
                      type="primary"
                      className="w-full h-[58px] text-[16px] font-satoshi cursor-pointer rounded-lg p-4 transition hover:bg-opacity-90"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
