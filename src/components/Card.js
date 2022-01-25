import React from "react";


const Card = ({name, gender, id, insta}) => {
    var url = (gender=='m')? `${id}?set=set3` : `${id}?set=set4`;
    const idurl = id+url;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-3" style={{height: 'auto'}}>
            <img alt="robots" src={`https://robohash.org/${idurl}`} width="200" height="200"/>
            <div>
                <h2>{name}</h2>
                <h3><a href={`https://instagram.com/${insta}`}>@{insta}</a></h3>
            </div>
        </div>
    )
}

export default Card;


