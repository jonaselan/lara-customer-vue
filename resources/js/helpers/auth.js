// import { setAuthorization } from "./general";

export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                // setAuthorization(response.data.access_token);
                res(response.data);
            })
            .catch((err) =>{
                rej("Wrong email or password");
            })
    })
}

export function getLocalUser() {
    const user = localStorage.getItem("user");

    if(!user)
      return null;

    return JSON.parse(user);
}
