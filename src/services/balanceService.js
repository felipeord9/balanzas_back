const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

const find = async () => {
  const balance = await models.Balance.findAll()
  return balance
}

const findOne = async (id) => {
  const balance = await models.Balance.findByPk(id)

  if(!balance) throw boom.notFound('balance no encontrado')

  return balance
}

const findByParam = async (balance) => {
  const look = await models.Balance.findOne({
    where: {
      reference: balance 
    },
    include: [
      "user"
    ]
  })
 
  if(!look) throw boom.notFound('Certificado no encontrado')
 
  return look
}

const create = async (data) => {
  const newBalance = await models.Balance.create(data)
  return newBalance
}

const update = async (id, changes) => {
  const Balance = await findOne(id)
  const updatedBalance = await Balance.update(changes)

  return updatedBalance
}

const remove = async (id) => {
  const Balance = await findOne(id)
  await Balance.destroy(id)
  return id
}

module.exports = {
  find,
  findOne,
  findByParam,
  create,
  update,
  remove
}