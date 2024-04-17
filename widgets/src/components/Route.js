import { useState, useEffect } from "react";

const Route = ({path, children}) => {
    // just to get out route to update
    const [ currentPath, setCurrentPath ] = useState(window.location.pathname);

    
    useEffect(()=> {
        const onLocationchange = () => {
            setCurrentPath(window.location.pathname);
            console.log('hi');
        };

        window.addEventListener('popstate', onLocationchange);

        return () => {
            window.removeEventListener('popstate', onLocationchange)
        }; 
    }, []);


    return currentPath === path
     ? children
     : null ;
};

export default Route;