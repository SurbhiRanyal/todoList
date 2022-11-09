
// var todos = [{id:1, title:'buy the milk'}, {id:2, title:'rent a car'}, {id:3, title:'feed the cat'}];

// app.get('/', function(request, response){
//       Todo.all((err, todos) => response.status(200).json(todos));
//     });
    
//     app.post('/', (request, response) => {
//         console.log(request.body);
//         var newTodo = JSON.parse(request.body);
//         Todo.add(newTodo);
//         response.status(201).json();
//     });
    
//     app.put('/:id', (request, response) => {
//       var id = request.params.id;
//       var updatedTodo = JSON.parse(request.body);
//       updatedTodo.id = parseInt(id);
//       Todo.update(updatedTodo, (err, data) => {
//         if(err)
//         {
//           response.status(404, 'The task is not found').send();
//         } else {
//         response.status(204).send(data);
//       }
//     });
//     });
    
//     app.delete('/:id', (request, response) => {
//       var id = parseInt(request.params.id);
//       Todo.delete(id, (err) => {
//         if(err){
//           response.status(404).send();
//         }else{
//               response.status(200).send();
//         }
//       });
//     });
    