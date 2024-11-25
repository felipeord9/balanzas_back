const BalanceService = require("../services/balanceService");

const findAllBalance = async (req, res, next) => {
  try {
    const data = await BalanceService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneBalance = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await BalanceService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
};

const findOneByParam = async (req, res, next) => {
  try {
    const { params: { balance } } = req;

    const data = await BalanceService.findByParam(balance);

    res.status(200).json({
      message: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
};

const createBalance = async (req, res, next) => {
  try {
    const { body } = req
    console.log(JSON.stringify(body.reference))
    const data = await BalanceService.create(body)
    
    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const updateBalance = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await BalanceService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteBalance = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await BalanceService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllBalance,
  findOneBalance,
  findOneByParam,
  createBalance,
  updateBalance,
  deleteBalance
};