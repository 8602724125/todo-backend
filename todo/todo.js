const express =  require('express');
const router =  express.Router();
const TodoService = require('../service/todo.service')

router.get('/', TodoService.getTodo)

router.post('/', TodoService.addTodo)

router.put('/:todoId', TodoService.updateTodo)

router.delete('/:todoId', TodoService.deleteTodo)

module.exports = router;


