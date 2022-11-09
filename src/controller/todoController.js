
const todoModel = require("../models/todoModel");


    const createTodoList = async function(req,res){
       let todo = req.body;
       let TodoCreate= await todoModel.create(todo);
       res.status(201).send({status:true, data:TodoCreate}); 
    }
    
    const getTodo = async function(req,res){
      let query = req.query;
      let getRecord = await todoModel.find(query)
      res.status(201).send({status:true, data:getRecord})
    }

    const updatedTodo = async function(req,res){
      try{
            
      const todoId = req.params.id;
      console.log(todoId)
      const details = req.body;
      const updatedDetails = await todoModel.findByIdAndUpdate({
        _id: todoId},{
       Todo:details.Todo,
    })
    res.status(200).send({status:true,data:updatedDetails})
  }catch (err) {
      console.log("This is the error 1", err);
      res.status(500).send({ status: false, data: err.message });
    }
};
  
  const deleteTodo = async function(req,res){
     let todosId = req.params.id;
     let deletetodo = await todoModel.findByIdAndDelete({
      _id:todosId
     })
     res.status(200).send({status:true,data:deletetodo})
  }
module.exports.createTodoList = createTodoList;
module.exports.getTodo = getTodo;
module.exports.updatedTodo = updatedTodo;
module.exports.deleteTodo = deleteTodo;

    
    