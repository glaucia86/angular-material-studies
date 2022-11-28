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

exports.listAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).send({ message: 'List Employees', employees });
  } catch (error) {
    return res.status(500).send({
      message: 'Error: Error to list all the Employees.',
      error,
    });
  }
};

exports.findEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (employee === null) {
      return res.status(404).send({
        message: 'This employee not exists!',
      });
    } else {
      return res.status(200).send({ message: 'Employee found!', employee });
    }
  } catch (error) {
    return res.status(500).send({
      message: 'Error to list an Employee.',
      error,
    });
  }
};

exports.updateEmployeeById = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        message: 'These fields cannot be empty!',
      });
    }

    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send({ message: 'Employee updated!', employee });
  } catch (error) {
    return res.status(500).send({
      message: 'Error to update an Employee.',
      error,
    });
  }
};

exports.deleteEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (employee === null) {
      return res.status(404).send({
        message: 'This employee not exists!',
      });
    } else {
      return res.status(200).send({ message: 'Employee deleted!', employee });
    }
  } catch (error) {
    return res.status(500).send({
      message: 'Error to delete an Employee.',
      error,
    });
  }
};
