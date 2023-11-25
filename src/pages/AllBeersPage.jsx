import {useState, useEffect} from 'react'
import './AllBeersPage.css'
import { Link } from 'react-router-dom';
const beersApi = "https://ih-beers-api2.herokuapp.com/beers";
function AllBeersPage() {
    const [allBeers, setAllBeers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(beersApi);
                const data = await response.json();
                setAllBeers(data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])
    return (
        <>

            <div className="App">
                <h1>LAB | React IronBeers</h1>
            </div>
            {allBeers.map((eachBeer) => {
                return(

                    <section key={eachBeer._id}>
                    <div className='cards'>
                        <div className="img-allbeerspage">
                        <img src={eachBeer.image_url} alt={eachBeer.name} />
                        </div>
                        <div className="text-allbeerspage">
                        <h2>{eachBeer.name}</h2>
                        <h3>{eachBeer.tagline}</h3>
                        <h4>{eachBeer.contributed_by}</h4>
                        <Link to={'/beers/${eachBeer._id}'}>
                        <button>go to</button>
                        </Link>
                        </div>
                    </div>
                    </section>
                )
                
            })}
        </>
    )


}

export default AllBeersPage;
