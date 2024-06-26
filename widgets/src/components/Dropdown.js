import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {
    const [ open, setOpen ] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (e)=> {
            if(ref.current.contains(e.target)) {
                return;
            }
            setOpen(false)
        }, { capture : true })
    },[]) 

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        };
        
        return (
            <div 
               key={option.value} 
               className='item'
               onClick={() => 
                onSelectedChange(option)}
               >
                {option.label}
            </div>
        )
    });
    
    return (
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">{label}</label>
            <div onClick ={() => setOpen(!open)} 
                 className= {`ui selection dropdown ${ open ? 'active visible' : '' }`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className= {`menu ${ open ? 'transition visible' : ''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    </div>)
};

export default Dropdown;