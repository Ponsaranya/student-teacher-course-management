import PropTypes from 'prop-types';

function Course(props) {
    return (
        <div className="course">
            <h1>Courses</h1>
            <p>Title: {props.title}</p>
            <p>Duration: {props.duration} weeks</p>
            <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
        </div>
    );
}

Course.propTypes = {
    title: PropTypes.string,
    duration: PropTypes.number,
    isAvailable: PropTypes.bool,
}

Course.defaultProps = {
    title: "Untitled Course",
    duration: 0,
    isAvailable: false,
}

export default Course;
