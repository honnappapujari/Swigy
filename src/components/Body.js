import RestroCard from './Restrocard';
import {resObj} from '../utils/mockdata'
// import { ShimmerSimpleGallery } from "react-shimmer-effects";

import { useState, useEffect } from 'react';

const Body = () =>
{

    const [usestateList, setUseStateList] = useState([]);
    const [searchUsestateList, setSearchUseStateList] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {getData()}, []);
    const getData = async() =>
    {
        const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setUseStateList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setSearchUseStateList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
}
    return usestateList == 0 ? <h1>Loading...</h1> :( 
        <div className="body">
            <div className="input-group mt-2 w-50">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Restorent Name" aria-describedby="button-addon2" value={searchText} onChange={(e) => {
    return setSearchText(e.target.value)
  }}/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {
   let newFilterList = usestateList.filter((a) => {
        return a.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
    })
    // setUseStateList(newFilterList);
    setSearchUseStateList(newFilterList)

  }}>Search</button>
</div>
            <div className='form-group mb-2'>
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
searchUsestateList.map((restorent) => <RestroCard key={restorent.info.id} resData ={restorent} />)}           
                
            </div>
        </div>
    )
}

export default Body;