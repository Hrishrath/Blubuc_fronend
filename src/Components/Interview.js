import React from 'react'
import axios from 'axios'




const Interview = () => {
    const [randomData, setRandomData] =  React.useState({
        randomData:"",
        error:""
    })
    const [userData, setUserData] =  React.useState([])

    const [counter, setCounter] = React.useState(1)

    const getRandomData = () => {

       
         axios.get('https://randomuser.me/api/')
           .then(res => {
            console.log("USERDATA: "+ userData);
               
               setRandomData({
                  randomData:JSON.stringify(res.data, null, 4),
                   error:""
               })
               setUserData([...userData, res.data])
               console.log(userData)
             } )
           .catch(err => {
            setRandomData({
                ...randomData,randommData:"",
                error:"No data found" + err
            })
           })
     }


     const getUserDetails = (user) => {
         console.log(user.results[0].email)
     }


    const showUser = userData.map((user, index) => {
        return(
                <div className = "row flex-row" key = {index}>
                <div className = "col-4">
                   <img src = {user.results[0].picture.thumbnail} onClick = {() =>getUserDetails(user)}></img>
                </div>
                <div className = "col-4">
                {user.results[0].name.first+ " " +user.results[0].name.last}
                </div>
                </div>
        )
    }
    )

  return (
    <div>
    <div className="row">
  <div className="col-9">
  {/* <pre>{randomData.randomData || randomData.error}</pre> */}
 userLength {userData.length}
 {showUser}
  </div>
  <div className="col-3">
  <button onClick = {getRandomData}>Get RandomData</button>
  {/* <button onClick = {nextUser}>nextUser</button> */}
  </div>
</div>
      
      {counter}
     
    </div>
  )
}

export default Interview


//https://randomuser.me/api/?page=3