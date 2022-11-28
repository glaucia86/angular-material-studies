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

module.exports = router;
