import React from "react";
import "./style.css";


/*
props={

  removeFriend, 
            id,
            key, 
            name, 
            image, 
            occupation, 
            location 
}
*/
function FriendCard(props) {
  return (
    <div className="card">
     
        <img alt={props.name} className="card-img-top" src={props.image} />
      
      
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        click
      </span>
   
   
    </div>
  );
}

export default FriendCard;
