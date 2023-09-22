
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({countries}) => {
    const {alpha3Code} = useParams()
     /* console.log(alpha3Code)  */
    let country = countries.filter((eachCountry) => {
        return eachCountry.alpha3Code === alpha3Code
    })
    /* console.log(country) */

    let borders = country[0].borders.map((eachBorder) => {
         let filtered = countries.filter((eachCountry) => {
            if(eachBorder === eachCountry.alpha3Code) {
                return eachCountry
            }
        }) 
        /* console.log(filtered[0].name.common) */
        return {name: filtered[0].name.common, alpha3Code: filtered[0].alpha3Code}
    })
    /* console.log("borders", borders) */
     

    return ( 

        <>
            <div className="col-7">
            <h1>{country[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {borders ?
                        borders.map((eachBorder) => {
                        return (
                            <Link key={eachBorder.name} to={`/${eachBorder.alpha3Code}`}>
                                <li >{eachBorder.name}</li>
                            </Link>)
                     }) : null
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
 
export default CountryDetails;