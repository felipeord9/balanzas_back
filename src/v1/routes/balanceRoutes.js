const express = require("express");
const BalanceController = require("../../controllers/balanceController");

const router = express.Router();

router
  .get("/", BalanceController.findAllBalance)
  .get("/:id", BalanceController.findOneBalance)
  .get("/gramera/:balance", BalanceController.findOneByParam)
  .post('/', BalanceController.createBalance)
  .patch('/:id', BalanceController.updateBalance)
  .delete('/:id', BalanceController.deleteBalance);

module.exports = router