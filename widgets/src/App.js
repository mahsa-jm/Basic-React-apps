import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title : 'What is React?',
        content : 'React is a front end Javascript framework'
    },
    {
        title : 'Why use React?',
        content : 'React is a favorite JS library among engineers'
    },
    {
        title : 'How do you use React?',
        content : 'You use React by creating components'
    }
];

const options = [
    {
        label : 'The Color Red',
        value : 'red',
    },
    {
        label : 'The Color Green',
        value : 'green',
    },
    {
        label : 'A Shade of Blue',
        value : 'blue',
    },
];


const App = () => {
    const [ selected, setSelected ] = useState(options[0]);

    return (
    <div>
        <Header/> 
        <Route path='/'>
            <Accordion items={items}/>
        </Route>
        <Route path='/Search'>
            <Search />
        </Route>
        <Route path='/Dropdown'>
            <Dropdown  selected={selected}
                       options={options}
                       onSelectedChange={setSelected}
                       label='Select A Color' />
        </Route>
        <Route path='/Translate'>
            <Translate/>
        </Route>
    </div>);
};

export default App;