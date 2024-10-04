export interface REGEXCUSTOM {
  EMAIL: RegExp;
}
export const regex_Custom: REGEXCUSTOM = {
  EMAIL: /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,}$/,
};
export interface ErrorMessages {
  invalidEmail: string;
  requiredEmail: string;
  emailTooLong: string;
  requiredPassword: string;
  passwordMinLength: string;
}

export const errorMessages: ErrorMessages = {
  invalidEmail: 'Invalid email',
  requiredEmail: 'Please enter your email',
  emailTooLong: 'Email must not exceed 40 characters',
  requiredPassword: 'Please enter your password',
  passwordMinLength: 'Password must be at least 6 characters long',
};
