import express from 'express'

// import queries
import {
  get_todo,
  get_todos,
  new_todo,
  update_todo,
  delete_todo
} from '../db/queries/todo.js'

// Router Creation
const router = express.Router()

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

// Routes
// GET /api/v1/todos/1
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await get_todo(id)

  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(todo))
})

// GET /api/v1/todos/1
router.get('/', async (req, res) => {
  const todos = await get_todos()

  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(todos))
})

// POST /api/v1/todos/
router.post('/', async (req,res) => {
  const { content } = req.body
  const todo = await new_todo(content)

  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.status(201).send(JSON.stringify(todo))
})

// PUT /api/v1/todos/1
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { content, done } = req.body;
  const todo = await (await update_todo(id, content, done))
  res.status(200).send(JSON.stringify(todo))
})

// DELETE /api/v1/todos/1
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await delete_todo(id)

  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(todo))
})

export default router
