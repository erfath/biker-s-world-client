import { useEffect, useState } from 'react';

const UseItemDetails = itemId => {
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `http://localhost:3000/item/${itemId}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data));
    }, [itemId])
    return [item]
}

export default UseItemDetails;