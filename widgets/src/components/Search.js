import React,{ useState, useEffect } from "react";
import axios from "axios";


const Search = () => {
    const [ term, setTerm ] = useState('programming');
    const [ debouncedTerm, setDebouncedTerm ] = useState(term);
    const [ results, setResaults ] = useState([]);


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        },1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch: debouncedTerm,
                },
            });

            setResaults(data.query.search);
            
        };
        search();

    }, [debouncedTerm]);

    const renderedResaults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                     href={`https://en.wikipedia.org?curid=${result.pageid}`}
                     className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}} ></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term}
                           onChange={(e) => setTerm(e.target.value)}
                           className="input"/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResaults}
            </div>           
        </div>
    );
};


export default Search;