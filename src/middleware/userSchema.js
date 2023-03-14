import * as yup from 'yup';

export const userSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    username: yup.string().min(4).max(10).required(),
    name: yup.string().min(4).max(18).required(),
    password: yup.string().min(4).max(8).required()
  }),
  header: yup.object({
    authorization: yup.string().required()
  })
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      header: req.headers
    });
    return next();
  } catch (err) {
    return res.status(500).send({ success: false, msg: err.message });
  }
};
