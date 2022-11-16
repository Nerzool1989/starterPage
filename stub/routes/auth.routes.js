const { Router } = require('express')
const router = Router()

// /api/auth/register
// in router.post [] are middlewares for functions
//НЕ ЗАБЫТЬ ЧТО У НАС ОШИБКИ идут через свою схему с пустотой в true с ЛЕХОЙ обсудить
router.post('/register', [], async (req, res) => {
  try {
    console.log('req!', req.body)
    const { user, password } = req.body

    if (user) {
      return res.status(400).json({ message: 'already has' })
    }
    res.status(201).json({ message: 'Пользователь создан' })
  } catch (e) {
    res.status(500).json({ message: 'wtf' })
  }
})

// router.post('./login', async (req, res) => {})

module.exports = router
