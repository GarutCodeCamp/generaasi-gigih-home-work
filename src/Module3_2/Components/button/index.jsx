import React from 'react'
import "../index.css"

const Button_link =({link,name,onClick})=>{
    return(
        <a className="btn btn-success" href={link} onClick={onClick} > {name} </a>
    )
}
const Button_toggle = ({UnGetItems,GetItems,selected})=>{
    return(
        <button className="btn btn-primary"  oncClick={selected ? UnGetItems : GetItems} > {selected? "move": "selected"} </button>
    );
}

export  {
    Button_link,
    Button_toggle
};
