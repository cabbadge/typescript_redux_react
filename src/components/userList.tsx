import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/action-creators/user";








const UserList : React.FC= () => {
    const {users,error,loading}= useTypeSelector(state => state.user)

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if(loading){
        return <h1>Идет загрузка ...</h1>
    }
    if(error){
        <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user=> <div key={user.id}>{user.name}</div>)}

        </div>
    );
};

export default UserList;