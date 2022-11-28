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

    if (!employee) {
      return res.status(400).json({
        message: 'Error: Employee not created!',
      });
    } else {
      return res
        .status(201)
        .send({ message: 'Employee created successfully!', employee });
    }
  } catch (error) {
    return res.status(500).send({
      message: 'Error: Employee not created!',
      error,
    });
  }
};