import { useEffect, useState } from "react";
import UserItem from "./UserItem";

const Userlist = () => {
    const [user,setUser]= useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error)=>console.log(error))
    }, []);

    return (
        <div>
            <h2>User list</h2>
          {user.map((user)=> <UserItem key={user.id} user={user} />)}
        </div>
    );
};

export default Userlist;