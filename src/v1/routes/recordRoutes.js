const express = require("express");
const RecordController = require("../../controllers/recordController");

const router = express.Router();

router
  .get("/checkList", RecordController.findCheckList)
  .get("/", RecordController.findAllRecord)
  .get("/:id", RecordController.findOneRecord)
  .post('/', RecordController.createRecord)
  .patch('/:id', RecordController.updateRecord)
  .delete('/:id', RecordController.deleteRecord);

module.exports = router