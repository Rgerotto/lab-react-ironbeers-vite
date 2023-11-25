import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const beersApi = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {
const beersId = useParams();
const [beerDetails, setBeerDetails] = useState([]);

useEffect(() => {
    const fetchBeerDetails = async() =>{
        console.log("01");
        try{
            const response = await fetch(`${beersApi}/${beersId}`);
            console.log("02", response);
            const data = await response.json();
            console.log("03", data);
            setBeerDetails(data);
        }
        catch(error) {
            console.log(error)};
    };
    fetchBeerDetails();
}, [beersId]);

if(!beerDetails){
    return <div>Loading....</div>
}

return(
    <>
    <img src={beerDetails.image_url} alt={beerDetails.name} />
    <h2>{beerDetails.name}</h2>
    <h3>{beerDetails.tagline}</h3>
    <h3>{beerDetails.first_brewed}</h3>
    <h3>{beerDetails.attenuation_level}</h3>
    <h3>{beerDetails.description}</h3>
    <h3>{beerDetails.ontributed_by}</h3>
    </>
)

}

export default BeerDetailsPage;
