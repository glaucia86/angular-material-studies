/**
 * file: src/controllers/employee.controller.js
 * description: file responsible for the 'Employee' controller
 * date: 11/28/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Employee = require('../models/employee.model');

// ==> Method responsible for creating a new 'Employee':
exports.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  const employee = await newEmployee.save();
  res
    .status(201)
    .send({ message: 'New Employee created successfully!', employee });
};
