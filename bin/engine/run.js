import {readFileSync} from 'fs';

const template = readFileSync(__dirname.replace('/engine','')+'/template/joi.js').toString();
let repl = template.replace(/'_replace_table_'/g,'\'tabela\'');
console.log(repl);