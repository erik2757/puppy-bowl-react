import axios from "axios"

export const getAllPlayers = async () => { 
    const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players')

}

export const getSinglePlayer = async(playerId) => { 

    const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players/' + playerId)

    return data.data.player
}

export const addPlayer = async (player) => { 
    await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players', player)
}

export const deletePlayer = async(playerId) => { 
    await axios.delete('https://fsa-puppy-bowl.herokuapp.com/api/erik-rodriguez/players/' + playerId)
}