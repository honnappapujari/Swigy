import RestroCard from './Restrocard';
import {resObj} from '../utils/mockdata'
import { useState } from 'react';

const Body = () =>
{
    const [usestateList, setUseStateList] = useState(resObj);
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
            <div className="restro-container grid gap-3">
                {/* Note :Dont use index as key */}
                {

usestateList.map((restorent) => <RestroCard key={restorent.info.id} resData ={restorent} />)}           
                
            </div>
        </div>
    )
}

export default Body;