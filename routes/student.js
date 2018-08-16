'use strict';

const express = require('express');
const Student = require('../models/student');

const router = express.Router();

// GET ALL STUDENTS
router.get('/', (req, res, next) => {
  Student.find()
    .populate('period')
    .then(students => {
      res.json(students.map(student => student.toObject()));
    })
    .catch(err => {
      // console.error(err);
      next(err);
    });
});

// CREATE A STUDENT
router.post('/', (req, res, next) => {
  const { firstname, lastname, period } = req.body;
  const newStudent = { firstname, lastname, period };

  const requiredFields = ['firstname', 'lastname'];
  const missingField = requiredFields.find(field => !(field in req.body));

  if (missingField) {
    const err = new Error(`Missing ${missingField} in request body`);
    err.status = 422;
    // console.error(err);
    return next(err);
  }

  Student.create(newStudent)
    .then(student => {
      return res.status(201)
        .location(`/api/students/${student.id}`)
        .json(student);            
    })
    .catch(err => {
      if (err.code === '11000') {
        err = new Error('This student already exists');
        err.status = 400;
      }
      // console.error(err);
      next(err);
    });
});

// UPDATE A STUDENT
router.put('/:id/periods', (req, res, next) => {
  const { id } = req.params;
  const { period } = req.body;

  Student.findByIdAndUpdate(id, { $push: { periods: period }}, { new: true })
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      // console.error(err);
      next(err);
    });
});

router.delete('/:id/periods/:periodId', (req, res, next) => {
  const { id, periodId } = req.params;

  Student.findByIdAndUpdate(id, { $pull: { periods: periodId }}, { new: true })
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      // console.error(err);
      next(err);
    });
});

// DELETE A STUDENT BY ID
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Student.findOneAndRemove({ _id: id })
    .then(() => {
      res.json({
        message: 'Deleted student'
      });
      res.status(204).end();
    })
    .catch(err => {
      // console.error(err);
      next(err);
    });
});

module.exports = router;