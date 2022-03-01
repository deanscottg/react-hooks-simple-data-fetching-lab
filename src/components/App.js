// create your App component here
import React, {useState, useEffect} from 'react'

function App(){
    const [dogImage, setDogImage]= useState(null)
    const [dogLoaded, setDogLoaded] = useState(false)
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            return data
        } )
        .then(dogData =>setDogImage(dogData.message))
        setDogLoaded(true)
        

    },[])
    if (!dogLoaded) return <p>Loading...</p>  

    return(
        <div>
            <img src={dogImage} alt="A Random Dog">
    
            </img>

        
        
        </div>

    )

}







export default App;