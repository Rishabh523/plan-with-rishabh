import React, {useState} from "react";


function Card({info,id,image,name,price,removeTour}) {
    const [ReadMore, setReadMore]=useState(false);

    const description= ReadMore? info: `${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadMore(!ReadMore);
    }
    return (
        <div className="card">
           <img src={image} className="imge" ></img>
           <div className="tour-info">
            <div className="tour-details"> 
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
            </div>
            <div className="tour-desc">
                {description}
                <span className="readmore" onClick={readmoreHandler}>
                   {ReadMore ? 'Show less' : 'Read More'}
                </span>
            </div>
        </div>
        <button className="" onClick={() => removeTour(id)}>
            Not Interested
        </button>
    </div>
    );
}

export default Card;