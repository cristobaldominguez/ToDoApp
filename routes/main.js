import express from 'express'

import { get_todos } from '../db/queries/todo.js'

// Router Creation
const router = express.Router()

// body-parser -> From Express 4.16+
router.use(express.urlencoded({ extended: true }))
router.use(express.json())
router.use('/assets', express.static('views/assets/'))

// Routes
router.get('/', async(req, res) => {
    const todos = await get_todos()
    res.render('index', { layout: 'main', title: 'Cábalas de Año Nuevo', text: 'Cábalas de Año Nuevo', todos: todos })
})

router.get("*", (req, res) => {
    res.render('404', { title: 'Oh no! a 404 :(' })
})

export default router
