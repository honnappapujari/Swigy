import RestroCard from './Restrocard';
import {resObj} from '../utils/mockdata'
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import { useState, useEffect } from 'react';

const Body = () =>
{
    const [usestateList, setUseStateList] = useState([]);
    useEffect(() => {getData()}, []);

    const getData = async() =>
    {
        const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setUseStateList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    if(usestateList == 0)
    {
            return <ShimmerSimpleGallery card imageHeight={300} caption />
          
    }
    return (
        <div className="body">
            <div className='form-group'>
                <button type='button' className='btn btn-sm btn-primary' onClick={ () =>
                {
                    const newList = resObj.filter((restorent) => restorent.info.avgRating < 4);
                    setUseStateList(newList)

                } 
                    
                }
                >****</button>
            </div>
            <div className="restro-container">
                {/* Note :Dont use index as key */}
                {
usestateList.map((restorent) => <RestroCard key={restorent.info.id} resData ={restorent} />)}           
                
            </div>
        </div>
    )
}

export default Body;