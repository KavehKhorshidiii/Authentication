// Store
// Counter Store
let CounterStore = 0

// To_Do Store
let ToDoStore = [
	{id:1, title:'Redux', created:'2025-02-01', isDo:false},
	{id:2, title:'Next', created:'2025-03-05', isDo:false},
	{id:3, title:'React', created:'2025-06-06', isDo:false},
]


// -----------------------------------------------------------------------

// Action
// Counter Action
let AddAction = {type:'ADD'} //  (+)
let MinusAction = {type:'MINUS'} //  (-)

// To-Do Store
let AddTodo = {type:'ADD_TODO'} // add todo
let DeleteTodo = {type:'DELETE_TODO'} // delete todo
let EditTodo = {type:'EDIT_TODO'} // Edit todo
let GetTodos = {type:'GET_TODOS'} // Get todos

// -----------------------------------------------------------------------

// Reduse
// Counter Number Reducer
function addNumberReducer (action) {

    switch (action.type) {
        case 'ADD' : {
            return newStore
        }
        case 'MINUS' : {
            return newStore
        }
        default : {
            return store
        }
    }

}

// To-Do Reducer
function TodoReducer (action){
    switch (action.type){
        case "ADD_TODO" : {
            return newState
        }
        case "DELETE_TODO" : {
            return newState
        }
        case "EDIT_TODO" : {
            return newState
        }
        case "GET_TODOS" : {
            return newState
        }
        default : {
            return state
        }
    }
}

// shpe Reducers

// -----------------------------------------------------------------------
