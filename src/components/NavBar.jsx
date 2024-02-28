import { Link } from "react-router-dom"

function NavBar(){

    return( 
        <>
         <section>
            <h1> Puppy Bowl </h1>
         </section> 

         <nav> 
            <Link to='/'>Home</Link>
            <Link to='/newplayer'>Add Player </Link>
         </nav>

        </>
    )
}

export default NavBar