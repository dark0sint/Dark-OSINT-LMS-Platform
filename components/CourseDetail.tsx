import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Lesson {
  id: number;
  title: string;
  content: string;
  quiz: string; // JSON string
}

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    axios.get(`/api/courses/${id}/lessons`).then(response => setLessons(response.data));
  }, [id]);

  return (
    <div>
      <h2>Course Lessons</h2>
      {lessons.map(lesson => (
        <div key={lesson.id}>
          <h3>{lesson.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
          <p>Quiz: {lesson.quiz}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;
