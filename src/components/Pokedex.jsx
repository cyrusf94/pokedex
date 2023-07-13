import React, { useEffect, useState } from 'react'

function Pokedex({ name }) {

    // Stores data from fetch
    const [data, setData] = useState([])
    // Flag handling the race condition of fetch
    const [loading, setLoading] = useState(false)

        useEffect(() => {
            // prevents fetch triggering before ot has pokemon value
            if (name !== "") {
                setLoading(true)
                fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    .then(res => res.json())
                    .then(data => {
                        setData(data)
                        setLoading(false)
                        loading ? null : console.log(data)
                    })
                    .catch(err => console.log(err))
            }
            // dependency causes useEffect trigger when name value changes
        }, [name])
    
        /* 
            REturn statements only allow expressions
            Expressions only allow singular values to be expressed 
            thats why we wrap them in () and Fragments <> </>
        */
    
    return (
        <> { data == ""
        ? (<><h1>Loading</h1></>)
        : (<>
            <h1>Name: {data.name}</h1>
        </>)
        }
        </>
    )
}

export default Pokedex