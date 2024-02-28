import { useState, useEffect } from "react"
import axios from "axios"
import Players from "./Players"
import { useNavigate } from "react-router-dom"

function AllPlayers(){
    const [players, setPlayers] = useState([])
    const navigate = useNavigate()
    

    async function fetchPlayers() {
        
        
        const {data: players}  = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players')
        
    
        setPlayers(players.data.players)
    
    }
    useEffect(() => { 


        fetchPlayers()
       
    },[])

    console.log('players', players)
    

    if (players.length === 0){ 
      return <h1> Loading Players ...</h1>
    }


    

    
    return( 
        <>
        
        
        <section className='all-players'>
            <h1>ALL PLAYERS</h1> 
            
        {
            players.map(player => <Players key={player.id} players={player}/>)
        }  
        
      </section>
      
      </>
    )
}

export default AllPlayers 