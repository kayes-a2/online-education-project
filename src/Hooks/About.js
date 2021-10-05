const { useState, useEffect } = require("react")

const UseDetails = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        //fetch for load data from public folder
        fetch('./aboutfdb.JSON')
            .then(res => res.json())
            .then(data => setItems(data));

    }, []);
    return [items, setItems];
}
export default UseDetails;