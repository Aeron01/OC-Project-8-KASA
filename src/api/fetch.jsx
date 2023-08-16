import { useState, useEffect } from 'react';

const readLs = (key, defaultValue=undefined) => {
    const ls = localStorage.getItem(key);
    if(ls) {
        return JSON.parse(ls);
    }
    return defaultValue
}

function QueryLogements() {
    const [data, setData] = useState(readLs("logements",[]));
    
    useEffect(() => {
        const ls_data = readLs('logements', null);
        if(ls_data) {
            setData(ls_data)
        } else {
    fetch("../../datas/logements.json")

    .then(response => response.json())
    .then(data => {
        localStorage.setItem('logements', JSON.stringify(data));
         setData(data)
        })
        }
    }, [])

    return data;
}

export default QueryLogements;