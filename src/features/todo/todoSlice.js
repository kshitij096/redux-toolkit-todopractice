import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  edit: { id: null, text: null },
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        // isEditing: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
      state.edit = { id: null, text: null };
    },
    editTodo: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [],
//   isEditing: false,
//   editedTodoId: null,
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },

//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },

//     updateTodo: (state, action) => {
//       const { id, text } = action.payload;
//       const todoToUpdate = state.todos.find((todo) => todo.id === id);
//       if (todoToUpdate) {
//         todoToUpdate.text = text;
//       }
//     },
//     toggleEditMode: (state, action) => {
//       state.isEditing = !state.isEditing;
//       state.editedTodoId = action.payload;
//     },
//   },
// });

// export const { addTodo, removeTodo, updateTodo, toggleEditMode } =
//   todoSlice.actions;

// export default todoSlice.reducer;
