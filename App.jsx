import React, { useState } from 'react';
import { FaUser, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import './styles.css'; // Import your CSS file for styling
import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="stud">
            <FaUser size={30} />
            <h1>STUDENT</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

function Teacher(props) {
    return (
        <div className="teacher">
            <FaChalkboardTeacher size={30} />
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
};

Teacher.defaultProps = {
    name: "Guest Teacher",
    subject: "Unknown",
    isFullTime: false,
};

function Course(props) {
    return (
        <div className="course">
            <FaBook size={30} />
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
};

Course.defaultProps = {
    title: "Untitled Course",
    duration: 0,
    isAvailable: false,
};

function App() {
    const [students, setStudents] = useState([
        { name: "Saranya", age: 30, isStudent: true },
        { name: "Sharr", age: 45, isStudent: false },
        { name: "John Doe", age: 25, isStudent: true },
        { name: "Jane Doe", age: 28, isStudent: true },
        { name: "Alice Smith", age: 22, isStudent: true },
        { name: "Michael Brown", age: 27, isStudent: true },
        { name: "Emily White", age: 32, isStudent: false },
        { name: "David Lee", age: 26, isStudent: true },
        { name: "Sophia Johnson", age: 24, isStudent: true },
        { name: "Daniel Miller", age: 29, isStudent: true },
    ]);

    const [teachers, setTeachers] = useState([
        { name: "Mr. Smith", subject: "Java Programming", isFullTime: true },
        { name: "Mrs. Johnson", subject: "Python Programming", isFullTime: false },
        { name: "Dr. Brown", subject: "Data Structures and Algorithms", isFullTime: true },
        { name: "Prof. Williams", subject: "Web Development", isFullTime: true },
        { name: "Ms. Lee", subject: "Computer Graphics", isFullTime: false },
        { name: "Mr. Taylor", subject: "C++ Programming", isFullTime: true },
        { name: "Dr. Garcia", subject: "Artificial Intelligence", isFullTime: true },
        { name: "Mrs. Martinez", subject: "Database Management", isFullTime: false },
        { name: "Mr. Davis", subject: "Software Engineering", isFullTime: true },
        { name: "Ms. Clark", subject: "Mobile App Development", isFullTime: false },
    ]);

    const [courses, setCourses] = useState([
        { title: "React Basics", duration: 8, isAvailable: true },
        { title: "Advanced CSS", duration: 4, isAvailable: false },
        { title: "JavaScript Fundamentals", duration: 6, isAvailable: true },
        { title: "HTML5 Essentials", duration: 5, isAvailable: true },
        { title: "Python Programming", duration: 10, isAvailable: false },
        { title: "Data Structures in Java", duration: 7, isAvailable: true },
        { title: "Database Design", duration: 6, isAvailable: false },
        { title: "Machine Learning Basics", duration: 8, isAvailable: true },
        { title: "Web Development Fundamentals", duration: 5, isAvailable: true },
        { title: "Software Engineering Principles", duration: 9, isAvailable: false },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const toggleFilter = () => {
        setShowAvailableOnly(!showAvailableOnly);
    };

    let filteredCourses = courses;

    // Apply search filter
    if (searchTerm) {
        filteredCourses = filteredCourses.filter(course =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Apply availability filter
    if (showAvailableOnly) {
        filteredCourses = filteredCourses.filter(course => course.isAvailable);
    }

    // Sort courses to display available ones first
    filteredCourses.sort((a, b) => {
        if (a.isAvailable && !b.isAvailable) return -1;
        if (!a.isAvailable && b.isAvailable) return 1;
        return 0;
    });

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" placeholder="Search courses..." value={searchTerm} onChange={handleSearch} />
                <button className="toggle-btn" onClick={toggleFilter}>
                    {showAvailableOnly ? "Show All Courses" : "Show Available Courses"}
                </button>
            </div>
            <div className="columns-container">
                <div className='column'>
                    {/* Rendering Student components */}
                    {students.map((student, index) => (
                        <Student key={index} name={student.name} age={student.age} isStudent={student.isStudent} />
                    ))}
                </div>
                <div className='column'>
                    {/* Rendering Teacher components */}
                    {teachers.map((teacher, index) => (
                        <Teacher key={index} name={teacher.name} subject={teacher.subject} isFullTime={teacher.isFullTime} />
                    ))}
                </div>
                <div className='column'>
                    {/* Rendering Course components */}
                    {filteredCourses.map((course, index) => (
                        <Course key={index} title={course.title} duration={course.duration} isAvailable={course.isAvailable} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
