import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function NewPlayerForm () {

    const [name,setName] = useState('')
    const [breed,setBreed] = useState('')
    const [id,setId] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    


    const navigate = useNavigate()

    function clearForm(){ 
        setName('')
        setBreed('')
        setId('')
        setImageUrl('')
    }
    

    async function handleSubmit(event){ 
        event.preventDefault();

        /*
        const payload = {
            id: id
            name:name
            breed:breed
            imageUrl:imageUrl
        }
        const playerObject = {
          name,
          breed,
          imageUrl  
        }
        await addPlayer(playerObject)
        */

        try{ 
            /* 
            const {data: players }  = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players/', {payload} )
            
            navigate('/')


            */

            const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players",
            { 
                method: 'POST',
                headers: { 
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify({ 
                    id,
                    name,
                    breed,
                    imageUrl
                })
            });
            const result = await response.json();
        
            navigate('/')

        }catch(err){
        console.error(err.response.data)
    }}
    
    console.table({name,breed,id,imageUrl})
    
  

    return( 
        <> 
        <form onSubmit={handleSubmit}> 
        <h1>ADD NEW PLAYER</h1>
        <br></br>
            <label> 
                ID: 
                <input value={id} name="id" onChange={(e) => setId(e.target.value)}/>
            </label>
            <label> 
                Breed:
                <input value={breed} name="breed" onChange={(e) => setBreed(e.target.value)}/>
            </label>
            <label> 
                Name: 
                <input value={name} name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label> 
                ImageURL
                <input value={imageUrl} name="imageUrl" onChange={(e) => setImageUrl(e.target.value)}/> 
            </label>

            <button type='button' onClick={clearForm}>Clear Form</button>
            <button type='submit'>Add Player</button>
        </form>
        </> 
        
    )
}

export default NewPlayerForm