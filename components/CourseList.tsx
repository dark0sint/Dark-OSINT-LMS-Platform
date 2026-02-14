import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get('/api/courses').then(response => setCourses(response.data));
  }, []);

  return (
    <div>
      <h2>OSINT Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={`/courses/${course.id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
