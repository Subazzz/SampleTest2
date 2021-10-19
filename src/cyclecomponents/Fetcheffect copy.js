import axios from "axios";
import React ,{useState, useEffect } from "react";



function Fetcheffect2() {
    const [post,setPost] = useState({})
    const [id, setId]= useState("Sports")
    const [categorybut, setCategorybut]= useState("Sports")

    
   const handle =()=> { 
    setCategorybut(id)
}

   useEffect(( )=> {
    axios.get(`http://localhost:8080/home/${id}`)
      .then(response => {
          console.log(response)
          setPost(response.data)}).catch(error => {
            console.log(error)})

   },[id]) 

   

    return (
        <div>
            <input type ='text' value={id} onChange ={ e=> setId(e.target.value)} />
            <button type='button' onClick ={handle}>Search by id</button>
            <p> {post.categorybut}</p>
        </div>
    );
    }

export default Fetcheffect2;