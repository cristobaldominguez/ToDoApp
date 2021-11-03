import express from 'express'

// import queries
import {
  get_todo,
  get_todos,
  new_todo,
  update_todo,
  delete_todo,
  toggle_done
} from '../db/queries/todo.js'

// Router Creation
const router = express.Router()

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

// Routes
// GET /api/v1/todos/new
router.get('/new', async (req, res) => {
  const todo = [{ id: 0, content: '' }]

  if (req.accepts('html')) {
    res.set({ 'content-type': 'text/html; charset=utf-8' })
    res.render('todos/new', { layout: 'clean', todos: todo });
  }
})

// GET /api/v1/todos/1
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await get_todo(id)

  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(todo))
})

// GET /api/v1/todos/
router.get('/', async (req, res) => {
  const todos = await get_todos()

  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(todos))
})

// POST /api/v1/todos/1/toggle_done
router.post('/:id/toggle_done', async (req,res) => {
  const { id } = req.params
  const todo = await toggle_done(id)

  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.status(201).send(JSON.stringify(todo))
})

// POST /api/v1/todos/
router.post('/', async (req,res) => {
  const { content, done } = req.body
  const todo = await new_todo(content, done)

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
