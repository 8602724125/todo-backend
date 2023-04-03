const Todo = require("../models/todo.model");

const TodoService = {
    getTodo: async (req, res) => {
        let todos
        try {
            todos = await Todo.find({});
            if (todos) {
                res.send({status: 200, data: todos})
            }
        } catch (ex) {
            res.send({status: 200, error: ex})
        }
    },
    addTodo: async (req, res) => {
        const todoData = req.body;
        console.log("todoData: ", todoData)
        let newTodo
        try {
            newTodo = new Todo({
                title: todoData.title,
                description: todoData.description,
    
            });
            const detail =  newTodo.save()
            if (detail) {
                res.send({status: 200, data: "Successfully saved"})
            }
        } catch (ex) {
            res.send({status: 200, error: ex})
        }
    },
    updateTodo: async (req, res) => {
        const todoId = req.params.todoId;
        const todoData = req.body;
        let todos
        try {
            todos = await Todo.findByIdAndUpdate({_id: todoId}, {$set: {title: todoData.title, description: todoData.description}}, {new: 1});
            if (todos) {
                res.send({status: 200, data: todos})
            }
        } catch (ex) {
            res.send({status: 200, error: ex})
        }
    },
    deleteTodo: async (req, res) => {
        const todoId = req.params.todoId;
        let todos
        try {
            todos = await Todo.findOneAndDelete({_id: todoId});
            if (todos) {
                res.send({status: 200, data: "Delete successfully"})
            }
        } catch (ex) {
            res.send({status: 200, error: ex})
        }

    }   
}

module.exports = TodoService;