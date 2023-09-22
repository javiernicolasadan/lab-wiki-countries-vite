import { Fragment } from "react";
import { Link } from "react-router-dom";


const CountriesList = ({countries}) => {
  /* console.log(countries) */
 
    return ( 
        <>
        <div className="container">
        <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll", width: "200px"}}>
            <div  className="list-group" >
        {countries && 
            countries.map((eachCountry) =>  (
            <Fragment key={eachCountry.alpha3Code}>

                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag"/>
                <Link className="list-group-item list-group-item-action" to={eachCountry.alpha3Code}>{eachCountry.alpha3Code}</Link>
            </Fragment>

        ))}
           </div> 
        </div>
        </div>
        </div>
        </>
     );
}
 
export default CountriesList;