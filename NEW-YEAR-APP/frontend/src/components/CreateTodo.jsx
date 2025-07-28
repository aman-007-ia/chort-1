import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            padding: "10px",
            margin: "10px",
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}/> <br /><br />
        <input style={{
            padding: "10px",
            margin: "10px",
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}/>
        <br /><br />
        <button style={{
            padding: "10px",
            margin: "10px",
        }} onClick={()=>{
            fetch('http://localhost:3000/todo', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }} >Add a Todo</button>
    </div> 
}