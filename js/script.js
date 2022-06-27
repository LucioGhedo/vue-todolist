var app = new Vue({
    el: '#root',
    data: {
      newTodoText:[
        {
          text: '',
          done: false,
        },
      ],
            todos: [
                {
                  text: 'Fare i compiti',
                  done: false,
                },
                {
                  text: 'Fare la spesa',
                  done: true,
                },
                {
                  text: 'Fare il bucato',
                  done: true,
                },
                {
                  text: 'Fare la todolist',
                  done: false,
                }
            ]
        },
        methods: {
            addNewTodo() {
                if(this.newTodoText.text === undefined) {
                  alert('Non hai scritto nulla')
                } else if(this.newTodoText.text.length > 0 ) {
                  // Pushare nell'array newTodoText
                  this.todos.push(this.newTodoText);
                  this.newTodoText = [
                    {
                      text: '',
                      done: false,
                    },
                  ];
              }
                
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            }
        }
  
  })