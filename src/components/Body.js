import RestroCard from './Restrocard';
import resObj from '../utils/mockdata'

const Body = () =>
{
    return (
        <div className="body">
            <div className="restro-container grid gap-3">
                {/* Note :Dont use index as key */}
                {resObj.map((restorent) => <RestroCard key={restorent.info.id} resData ={restorent} />)}           


            </div>
        </div>
    )
}

export default Body;