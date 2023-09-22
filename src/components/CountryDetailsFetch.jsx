import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const CountryDetailsFetch = ({countries, setCountries}) => {
  
  const {alpha3Code} = useParams()  
  /* console.log(alpha3Code) */
  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);  
  const [alphaBorders, setAlphaBorders] = useState([]);
  
  
    const fetchData = () => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then(response => {
        return response.json()
        })
        .then(data => {
            setCountry(data)
            
        })
        .catch (err => {console.log(err)})
    }

    const fetchCountries = () => {
        fetch("https://ih-countries-api.herokuapp.com/countries")
        .then(response => {
            
         return response.json()
      })
        .then(data => {
        setCountries(data)
        
      })
        .catch(err => console.log(err))
    }

    const fetchBorders = () => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then(response => {
         return response.json()
      })
        .then((data) => {
            let borders = data.borders
            let bordersMap = borders.map((eachBorder) => {
                /* console.log(eachBorder) */
                let filtered = countries.filter((eachCountry) => {
                    if(eachBorder === eachCountry.alpha3Code) {
                        return eachCountry
                    }
                }) 
                /* console.log(filtered) */
                return  filtered[0].name.common
            })
            return bordersMap
        })
        .then ((nameBorders) => {
            /* console.log(nameBorders) */
            setBorders(nameBorders)
        })
        .catch(err => console.log(err))
        }

        const fetchAlphaBorders = () => {
            fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
            .then(response => {
             return response.json()
          })
            .then((data) => {
                let borders = data.borders
                let bordersMap = borders.map((eachBorder) => {
                    /* console.log(eachBorder) */
                    let filtered = countries.filter((eachCountry) => {
                        if(eachBorder === eachCountry.alpha3Code) {
                            return eachCountry
                        }
                    }) 
                    /* console.log(filtered) */
                    return  filtered[0].alpha3Code
                })
                return bordersMap
            })
            .then ((alphaBorders) => {
                setAlphaBorders(alphaBorders)
            })
            .catch(err => console.log(err))
            }

  useEffect (() => {
    fetchData()
  }, [alpha3Code])

  useEffect (() => {
    fetchCountries()
  }, [])
  
  useEffect (() => {
    fetchBorders()
  }, [alpha3Code])

  useEffect (() => {
    fetchAlphaBorders()
  }, [alpha3Code])
  


   return ( 
        <>
            <div className="col-7">
            {country &&
            <h1>{country.name.common}</h1>}
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  {country &&
                  <td>{country.capital}</td>
                  }
                </tr>
                <tr>
                  <td>Area</td>
                  {country &&
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                  }
                </tr>
                <tr>
                <td>Borders</td>
                    <td>
                    <ul>
                   {borders &&
                        borders.map((eachBorder, i) => {
                            return (
                            <Link key={i} to={`/${alphaBorders[i]}`}>
                                <li>{eachBorder}</li>
                            </Link>
                            )
                        })
                    }
                    </ul>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
     );
}
 
export default CountryDetailsFetch;