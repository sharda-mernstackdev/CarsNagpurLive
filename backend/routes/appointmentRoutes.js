const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');

router.post('/book', appointmentController.bookAppointment);
router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getAppointment);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;