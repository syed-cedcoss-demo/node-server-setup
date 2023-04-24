import {
  emailValidation,
  passwordValidation,
  usernameValidation
} from '../validations/fieldsValidation.js';

export const signupValidate = (req, res, next) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(406).send({
      success: false,
      msg: 'email, password and username are required'
    });
  }
  const isEmailValid = emailValidation(email);
  if (!isEmailValid?.success) {
    return res.status(406).send({
      success: false,
      msg: isEmailValid.msg
    });
  }
  const isValidPassword = passwordValidation(password);
  if (!isValidPassword?.success) {
    return res.status(406).send({
      success: false,
      msg: isValidPassword.msg
    });
  }
  const isValidUsername = usernameValidation(username);
  if (!isValidUsername?.success) {
    return res.status(406).send({
      success: false,
      msg: isValidUsername.msg
    });
  }
  next();
};
