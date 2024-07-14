import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="stud">
            <h1>STUDENT</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: "false",
}
export default Student
//app is parent and student is child component