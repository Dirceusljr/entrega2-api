import { Joi } from "celebrate";

const validadorSchema = (schema, campo = {}, booleano=false) => {
    if(booleano) {
      schema[campo] = Joi.any().optional();
    }
    return Joi.object(schema).min(1);
  }

export default validadorSchema;