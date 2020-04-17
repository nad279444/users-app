import {v4 as uuid} from 'uuid'

const initialState = {
    users:[
        {
          name: "mayuri",
          email: "mayuri@gmail.com",
          gen: 12,
          id: '1'

        },

        {
          name: "shunshui",
          email: "shunshui@gmail.com",
          gen: 3,
          id: '2'

        },

        {
          name: "Aizen",
          email: "aizen@gmail.com",
          gen: 2,
          id: '3'

        },

        {
          name: "yamamoto",
          email: "yamamoto@gmail.com",
          gen: 1,
          id: '4'

        },
      ]
    }
  



const userReducer = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_USER":
           const newUser = {
                id:uuid(),
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen,
    
            };
            return{...state,users:[...state.users,newUser]}
        case "REMOVE_USER":
          const filteredUsers = state.users.filter(user=> user.id !== action.payload);
          return {...state, users: filteredUsers}
        case "EDIT_USER":
           const updatedUser = state.users.map(user =>{
             if(user.id === action.user_id){
             return {...user,...action.updatedInfo}
             }else{
               return user;
             } 
           });
           return{...state, users: updatedUser}
           
        default:
            return state;
    }

}

export default userReducer