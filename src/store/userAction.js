export const addUser = (user) => {
    return{
        type:'ADD_USER',
        payload:  user
    }
}
export const removeUser = (user_id) => {
    return{
        type:'REMOVE_USER',
        payload:  user_id
    }
}
 
export const editUser = (user_id,updatedInfo) => {
    return{
        type:'EDIT_USER',
        user_id,
        updatedInfo
    }
}
 