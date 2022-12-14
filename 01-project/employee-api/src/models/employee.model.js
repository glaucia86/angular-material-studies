/**
 * file: src/models/employee.model.js
 * description: file responsible for the 'Employee' model
 * date: 11/28/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

/**
 * Employee Schema
 *
 * firstName: String
 * lastName: String
 * email: String
 * phone: Number
 * collection: employees
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 100,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      maxlength: 30,
    },
    phone: {
      type: Number,
      required: true,
      maxlength: 11,
    },
  },
  {
    timestamps: true,
    collection: 'employees',
  }
);

module.exports = mongoose.model('Employee', employeeSchema);
