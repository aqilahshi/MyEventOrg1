import "../App.css";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';
 
const ViewFeed = () => {
    const [todos, setTodos] = useState([]);
 
  
 
    const fetchPost = async () => {
        await getDocs(collection(db, "addevents"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                console.log(todos, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])
 
 
    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>
   
                
   
                <div className="todo-content">
                    {
                        todos?.map((name,organization,i)=>(
                            <p key={i}>
                                {name.name},
                                {organization.organization}
                                <br/><br/>
                            </p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
 
export default ViewFeed