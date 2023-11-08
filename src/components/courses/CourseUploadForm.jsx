import React, { useState } from 'react';

const CourseUploadForm = ({ onCourseSubmit }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseTitle && file) {
      const courseData = {
        title: courseTitle,
        file,
        uploader: 'User', // This should be replaced with the actual user's name
        date: new Date().toLocaleDateString()
      };
      onCourseSubmit(courseData);
      setCourseTitle('');
      setFile(null);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="courseTitle" className="form-label">Course Title</label>
        <input
          type="text"
          className="form-control"
          id="courseTitle"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="courseFile" className="form-label">Course File (PDF only)</label>
        <input
          type="file"
          className="form-control"
          id="courseFile"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Course</button>
    </form>
  );
};
