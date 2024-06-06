const RestroCard = (props) =>
{
    const {resData} = props;  
    const {avgRating,cuisines,name,areaName,cloudinaryImageId,sla} = resData?.info; 
    console.log(resData)

    return(

           <div className="card d-inline-block" style={{width:320}} key={areaName}>
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} height={273} className="card-img-top" alt="..." />

  <div className="card-body">
    <h5 className="card-title">{resData.info.name}</h5>
    <p className="card-text text-bold">Start Rating - {resData.info.avgRating} . EST Time - {sla.deliveryTime} Min</p>

    <p className="card-text text-muted"><span className="mx-1">{cuisines.join(', ')}</span></p>

    <a href="#" className="btn btn-primary">Place Order</a>
  </div>
</div>
    )
}

export default RestroCard;