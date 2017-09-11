'use strict';
import jano from 'jano-mysql';

module.exports = (connect) =>{
  return {
    getAtributes: (schema, table) =>{
      return jano(connect).executeString(`SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = '${schema}' AND TABLE_NAME = '${table}'`);
    }
  };
};
