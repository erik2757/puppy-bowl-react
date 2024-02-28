import axios from "axios"
import { useState, useEffect } from "react"
import Players from "./Players"
import { deletePlayer, getSinglePlayer } from "../API"
import { useNavigate, useParams } from "react-router-dom"


function SinglePlayer () {
    // const navigate = useNavigate()
    const{id} = useParams()
    const [player, setPlayer] = useState(null)

    const navigate = useNavigate()

    /*async function fetchPlayer() {

        const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players/' + players.id)
        
    
        setSinglePlayer(data)
    
    }*/ 

    useEffect(() => { 
        async function updatePlayer() {
            try {
              const player = await getSinglePlayer(id)
              setPlayer(player)
            } catch (e) {
              console.error(e)
            }
          }
          updatePlayer()
        }, [])
        /*
        async function updatePlayer(){ 
            try{ 
                const player = await getSinglePlayer(id)
                setPlayer(player)

            } catch(e){
                console.error(e)
            }

        }


        updatePlayer()
       
       
    },[])
    */



    if(!player) {
        return<div> Loading...</div>
    }

   async function deleteHandle (playerId){
        await deletePlayer(playerId)
            navigate('/')
    }

    return( 
        <>
        <main className="single-player">
     <h1> Single Player</h1> 
     <article key={player.id} >
        <h2 className="card1">
          <img src={player.imageUrl} />
          {player.name}
        </h2>
        <h3>{player.breed}</h3>
        <button className="btn3" onClick={() => deleteHandle(id)}>DELETE!</button>
      </article>
      </main>
        </>
    )
}

export default SinglePlayer