const USER_KEY = "users"
const CURRENT_USER = "current_user"

export const userSignIn = ({name,email,password}) => {
    
    let users = localStorage.getItem(USER_KEY) || '[]';
    let isExist = false;
    users = JSON.parse(users)
    isExist = users.find(item => item.email == email)? true :false;

    if(isExist){return false}

    users.push({name,email,password})
    localStorage.setItem(USER_KEY, JSON.stringify(users))
    localStorage.setItem(CURRENT_USER, email)
    return true

   }


export const userLogin = ({email,password}) => {
    let users = localStorage.getItem(USER_KEY)
    if(users){  //to check if field is empty
        users = JSON.parse(users)
        const userExists = users.find(item => item.email == email)
        if(userExists && userExists.password == password){                //Checking for existing user && checking password
            localStorage.setItem(CURRENT_USER, email)
            return userExists
        }
        return false
    }
    return false
}


export const saveUser = ({name, email, password}) => {
    let users = localStorage.getItem(USER_KEY)
    users = JSON.parse(users)
    users.push({name,email,password})
    localStorage.setItem(USER_KEY, JSON.stringify(users))
    return true
}

export const checkLogin = () => {
    return localStorage.getItem(CURRENT_USER);
}

