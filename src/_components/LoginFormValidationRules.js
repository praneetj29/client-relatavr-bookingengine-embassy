export default function validate(values) {
    let errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
      } else if (!/^[a-zA-Z\s]+$/.test(values.email)) {
        errors.name = 'Name allow only characters';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (!values.phone) {
      errors.phone = 'phone is required';
    } else if (values.password.length != 10) {
      errors.phone = 'phone must be 10 Digit';
    }
    return errors;
  };