export const emailValidation = (email) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return {
      success: false,
      msg: 'Please enter email address.'
    };
  } else if (!emailPattern.test(email)) {
    return {
      success: false,
      msg: 'Please enter a valid email address.'
    };
  } else {
    return {
      success: true,
      msg: 'success'
    };
  }
};

export const passwordValidation = (password) => {
  const passReg = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-/:;<=>?@[\]^-`{|}~]).*$/;
  if (!password) {
    return {
      success: false,
      msg: 'Please enter password'
    };
  } else if (password.length < 8) {
    return {
      success: false,
      msg: 'The password must contain at least 8 characters.'
    };
  } else if (!passReg.test(password)) {
    return {
      success: false,
      msg: 'Password must contain atleast one digit,one upper case, one lower case, one special character'
    };
  } else {
    return {
      success: true,
      msg: 'sucess'
    };
  }
};

export const usernameValidation = (username) => {
  const usernamePattern = /^[a-zA-Z]((_|[a-zA-Z0-9])|[a-zA-Z0-9]){0,18}$/;
  if (!username) {
    return {
      success: false,
      msg: 'Please enter username'
    };
  } else if (username.length < 6) {
    return {
      success: false,
      msg: 'The username must contain at least 6 characters.'
    };
  } else if (!usernamePattern.test(username)) {
    return {
      status: false,
      msg: 'Please ensure that the username must not contain any space or special character. Also, it cannot start with a number'
    };
  } else {
    return {
      success: true,
      msg: 'sucess'
    };
  }
};

export const firstAndLastNameValidation = (name, type) => {
  if (type === 'Last') {
    if (name.trim().length > 0 && name.trim().length < 3) {
      return {
        success: false,
        msg: `${type} name must have atleast 3 characters`
      };
    }

    return {
      success: true,
      msg: 'success'
    };
  } else {
    if (!name) {
      return {
        success: false,
        msg: `Please enter ${type} name`
      };
    } else if (name.trim().length < 3) {
      return {
        success: false,
        msg: `${type} name must have atleast 3 characters`
      };
    } else {
      return {
        success: true,
        msg: 'success'
      };
    }
  }
};
