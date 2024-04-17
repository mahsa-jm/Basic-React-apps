import { useState, useEffect } from "react";
import youtube from "../APIs/youtube";

const useVideos = (defultSearchTerm) => {
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
         search(defultSearchTerm)
    }, [defultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search',{
            params : {
                q : term
            }
        });

        setVideos(response.data.items);
        
    };

    return [ videos, search]
};

export default useVideos;