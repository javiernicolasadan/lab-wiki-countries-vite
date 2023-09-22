import { Route, Routes} from 'react-router-dom'
import './App.css'
import CountriesList from './components/CountriesList'
/* import CountryDetails from './components/CountryDetails' */
import Navbar from './components/Navbar'
/* import countries from "./countries.json" */
import { useEffect, useState} from 'react'
import CountryDetailsFetch from './components/CountryDetailsFetch'

function App() {
const [countries, setCountries] = useState([]);



/* useEffect(() => {
   
    fetch("https://ih-countries-api.herokuapp.com/countries")
    .then(response => {
     return response.json()
  })
    .then(data => {
    setCountries(data)
    
  })
    .catch(err => console.log(err))
   
 }, []) */
  
  
  return (
    <>
      <Navbar/>
      <div className='App'>
      <div>

      <CountriesList countries={countries}/>
      </div>
      <Routes>
        {/* <Route path='/:alpha3Code' element={<CountryDetails countries={countries}/>}/> */}
        <Route path='/:alpha3Code' element={<CountryDetailsFetch countries={countries} setCountries={setCountries}/>}/>
      </Routes>
      </div>
    </>
    )
}
export default App
