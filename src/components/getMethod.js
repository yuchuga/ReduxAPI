import React, {useState, useEffect} from 'react'
import axios from 'axios'

const GetMethod = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

 const fetchData = async () => {
   try {
   const data = await axios.get('https://swapi.dev/api/people/')
   console.log('Data', data)
   setPeople(data.data?.results)
   } catch (e) {
    console.error(e)
   }
 }
  return (
    <>
    {people.map((person, index) => (
      <h1 key={index}>{person.name}</h1>
    ))}
    </>
  )
}

export default GetMethod;