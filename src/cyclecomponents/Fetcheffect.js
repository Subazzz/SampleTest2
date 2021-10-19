import axios from "axios";
import React ,{useState, useEffect } from "react";



function Fetcheffect() {
    const [post,setPost] = useState({})
    const [id, setId]= useState(1)
    const [idbut, setIdbut]= useState(1)

    
   const handle =()=> { 
    setIdbut(id)
}

   useEffect(( )=> {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idbut}`)
      .then(response => {
          console.log(response)
          setPost(response.data)}).catch(error => {
            console.log(error)})

   },[idbut]) 

   

    return (
        <div>
            <input type ='text' value={id} onChange ={ e=> setId(e.target.value)} />
            <button type='button' onClick ={handle}>Search by id</button>
            <div>{post.title} </div>
        </div>
    );
    }

export default Fetcheffect;