import React from "react";
import Card from "./card";



const CardList = ({roboti}) => {

    return(
        <div>
           {
            roboti.map(( user, i) => {
                return  (
                        <Card 
                            key={i} 
                            id={roboti[i].id} 
                            name={roboti[i].name}
                            email={roboti[i].email}
                        />
                );
            })
           }
        </div>
       
    );
}

export default CardList;