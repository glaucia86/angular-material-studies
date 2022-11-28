/**
 * file: src/controllers/employee.controller.js
 * description: file responsible for the 'Employee' controller
 * date: 11/28/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const Employee = require('../models/employee.model');

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const employee = await newEmployee.save();

    res
      .status(201)
      .send({ message: 'Employee successfully created!', employee });
  } catch (error) {
    res.status(500).send({ message: 'Error creating employee!', error });
  }
};
