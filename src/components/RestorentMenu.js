import { useEffect,useState } from "react"
import { ShimmerCard, ShimmerCategoryList } from "react-shimmer-effects";
export const RestorentMenu = () =>
{
    const [restInfo, setresInfo] = useState(null);
    useEffect(() =>
    {
        getRespnse();
    }, [])

     getRespnse = async() =>
    {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=719639&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        console.log(json)
        setresInfo(json)
    }
    const url =restInfo?.data?.cards[2]?.card?.card?.info;
    return restInfo == null ?(<h1>Loading....</h1>):(
    <>
        <h1>{url?.name}</h1>
        <h2>{url?.costForTwoMessage}</h2>
        <p>{url.cuisines.join(', ')}</p>
        </>
    )
}