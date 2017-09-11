import Joi from 'joi';

export function list () {
  return {
    query: Joi.object({
      offset: Joi
        .number()
        .integer()
        .min(0)
        .default(0),
      limit: Joi
        .number()
        .integer()
        .min(1)
        .default(50)
        .max(50)
    })
  };
}

export function create () {
  return {
    payload: Joi.object().keys({
       '_replace_create_'
    }).required().meta({ className: '_replace_table_' })
  };
}

export function read () {
  return {
    params: Joi.object({
      id: Joi
        .number()
        .min(1)
        .required()
    })
  };
}

export function update () {
  return {
    params: Joi.object({
      id: Joi
        .number()
        .min(1)
        .required()
    }),
    payload: Joi.object().keys({
      '_replace_update_'
    }).required().meta({ className: '_replace_table_' })
  };
}

export function remove () {
  return {
    params: Joi.object({
      id: Joi
        .number()
        .min(1)
        .required()
    })
  };
}
