import * as yup from 'yup';

export const userSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(4).max(30).required(),
    password: yup.string().min(4).max(10).required()
  })
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body
    });
    return next();
  } catch (err) {
    return res.status(500).send({ success: false, msg: err.message });
  }
};
