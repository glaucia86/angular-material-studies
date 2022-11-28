/**
 * file: src/routes/employee.routes.js
 * description: file responsible for the 'Employee' routes
 * date: 11/28/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// (POST): localhost:3000/api/v1/employees
router.post('/employees', employeeController.createEmployee);

// (GET): localhost:3000/api/v1/employees
router.get('/employees', employeeController.listAllEmployees);

// (GET): localhost:3000/api/v1/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById);

// (PUT): localhost:3000/api/v1/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById);

// (DELETE): localhost:3000/api/v1/employees/:id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;
