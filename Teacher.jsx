import PropTypes from 'prop-types';

function Teacher(props) {
    return (
        <div className="teacher">
            <h1>TEACHER</h1>
            <p>Name: {props.name}</p>
            <p>Subject: {props.subject}</p>
            <p>Full-time: {props.isFullTime ? "Yes" : "No"}</p>
        </div>
    );
}

Teacher.propTypes = {
    name: PropTypes.string,
    subject: PropTypes.string,
    isFullTime: PropTypes.bool,
}

Teacher.defaultProps = {
    name: "Guest Teacher",
    subject: "Unknown",
    isFullTime: false,
}

export default Teacher;
