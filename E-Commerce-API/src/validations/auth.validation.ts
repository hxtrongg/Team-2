import Joi from 'joi';
import { passwordStrong } from './custom.validation';

const login = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export default  {
  login,
};