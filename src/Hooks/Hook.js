const { useState, useEffect } = require("react")

const UseService = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        //fetch for load data from public folder
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));

    }, []);
    return [courses, setCourses];
}
export default UseService;