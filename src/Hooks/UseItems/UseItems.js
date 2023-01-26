import { useEffect, useState } from "react";

const UseItems = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://biker-s-world-client.onrender.com/inventory')
        .then(res=>res.json())
        .then(data=>setItems(data));
    },[]);
    return [items, setItems]
};

export default UseItems;