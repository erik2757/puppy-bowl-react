import axios from "axios";
import { useNavigate } from "react-router-dom";

function Players({players}){

    const navigate = useNavigate()
    

    async function deletePlayer(){
        try{
            const {data} = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players/${players.id}`)
            navigate('/')
        }catch(err){
            console.error(err)
        }
      
    }


        function moreDetails(){
        navigate(`/players/${players.id}`)
        }

    return( 
        
        
        <div key={players.id} className="player-card"> 
        <h3>{players.id}</h3>
        <h3>{players.name}</h3>
        <h3>{players.breed}</h3>
        <img src={players.imageUrl}/>
        <button className="btn1" onClick={deletePlayer}>DELETE</button>
        <button className="btn2" onClick={moreDetails}>More Details </button>
        
        </div>
        
    )

}

export default Players 