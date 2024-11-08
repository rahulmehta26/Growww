export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  export const validatePasswordLength = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return regex.test(password);
  };

  export const validatePassword = (
    password,
    name,
    email
  ) => {
    if (!validatePasswordLength(password)) {
      return { msg: "Password length must be 8 to 20 characters", result: false };
    }
    if (name && password.toLowerCase().includes(name.toLowerCase())) {
      return { msg: "Must not contain user's name", result: false };
    }
  
    if (email && password.toLowerCase().includes(email.toLowerCase())) {
      return { msg: "Must not contain user's email id", result: false };
    }
  
    return { msg: "Passed Local Test!", result: true };
  };