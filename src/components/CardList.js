import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardArray = robots.map((robots)=>{
        return <Card key={robots.id} id={robots.id} name={robots.name} email={robots.email}/>
        })
  return <div>
       {cardArray}
    </div>;
}

export default CardList;