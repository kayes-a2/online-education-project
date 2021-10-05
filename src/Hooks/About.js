//useing custom hook
const { useState, useEffect } = require("react")

//usedetails custom hook component arrow function
const UseDetails = () => {

    //using state 
    const [items, setItems] = useState([]);

    //using sideeffect external hook of state
    useEffect(() => {

        //fetch for load data from public folder
        fetch('./aboutfdb.JSON')
            .then(res => res.json())
            .then(data => setItems(data));

    }, []);
    return [items, setItems];
}

//export usedetails custom hook componen
export default UseDetails;