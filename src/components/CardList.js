import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardArray = robots.map((robots)=>{
        return <Card key={robots.id} id={robots.id} name={robots.name} gender={robots.gender}/>
        })
  return <div>
       {cardArray}
    </div>;
}

export default CardList;