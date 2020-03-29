const initialState = {
    users:[
        {
          name: "mayuri",
          email: "mayuri@gmail.com",
          gen: 12

        },

        {
          name: "shunshui",
          email: "shunshui@gmail.com",
          gen: 3

        },

        {
          name: "Aizen",
          email: "aizen@gmail.com",
          gen: 2

        },

        {
          name: "yamamoto",
          email: "yamamoto@gmail.com",
          gen: 1

        },
      ]
    }
  



const userReducer = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_USER":
           const newUser = {
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen,
    
            };
            return{...state,users:[...state.users,newUser]}
    
        default:
            return state;
    }

}

export default userReducer