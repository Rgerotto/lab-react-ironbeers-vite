import { Link } from 'react-router-dom';
import './HomePage.css'
function HomePage() {
    return (
        <>

            <ul>
                <li>
                    <div className="img-homepage allbeers">
                    </div>
                    <Link to='/beers' className='text-homepage'>All Beers</Link>
                    <p className='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid minima, nostrum error dolore ullam iure atque culpa. Nulla repellat totam amet aperiam similique consectetur esse, saepe architecto eum facere voluptas!</p>
                </li>
                <li>
                    <div className="img-homepage random">

                    </div>
                    <Link to='/random-beer' className="text">Random Beer</Link>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veniam velit inventore. Perspiciatis esse eos totam odio numquam alias, sapiente dolore labore non, maiores velit soluta ex assumenda. Pariatur, perspiciatis!</p>
                </li>
                <li>
                    <div className="new-beer">

                    </div>
                    <Link to='/new-beer' className="text">New Beer</Link>
                    <p className='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima veniam incidunt earum culpa, consequatur perferendis aliquid illo deserunt repellendus odio, praesentium enim cupiditate architecto ducimus id fugiat vel cum magnam?</p>
                </li>
            </ul>
        </>
    )
}

export default HomePage;
