//useing custom hook
const { useState, useEffect } = require("react")

//useservice custom hook component arrow function
const UseService = () => {

    //using state 
    const [courses, setCourses] = useState([]);

    //using sideeffect external hook of state
    useEffect(() => {

        //fetch for load data from public folder
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);
    return [courses, setCourses];
}

//export useservice custom hook componen
export default UseService;