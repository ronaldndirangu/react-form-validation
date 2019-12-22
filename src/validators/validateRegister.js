export const validateRegister = values => {
  const errors = {};
  // Email errors
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  // Firstname errors
  if (!values.firstname) {
    errors.firstname = 'Firstname is required';
  }
  // Lastname errors
  if (!values.lastname) {
    errors.lastname = 'Lastname is required';
  }
  // Password errors
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }
  if (!values.confirm) {
    errors.confirm = 'Confirm password is required';
  }
  if (values.password !== values.confirm) {
    errors.confirm = 'Passwords should match';
  }
  return errors;
};
