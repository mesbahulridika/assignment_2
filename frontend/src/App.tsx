import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface Student {
  id: number;
  name: string;
  cgpa: number;
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState({ name: '', cgpa: 0 });
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const createStudent = async () => {
    try {
      await axios.post('http://localhost:8080/students', newStudent);
      setNewStudent({ name: '', cgpa: 0 });
      fetchStudents();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const updateStudent = async () => {
    if (editingStudent) {
      try {
        await axios.put(`http://localhost:8080/students/${editingStudent.id}`, editingStudent);
        setEditingStudent(null);
        fetchStudents();
      } catch (error) {
        console.error('Error updating student:', error);
      }
    }
  };

  const deleteStudent = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      
      <div className="form-section">
        <h2>Add New Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="CGPA"
          value={newStudent.cgpa}
          onChange={(e) => setNewStudent({ ...newStudent, cgpa: parseFloat(e.target.value) })}
        />
        <button onClick={createStudent}>Add Student</button>
      </div>

      {editingStudent && (
        <div className="form-section">
          <h2>Edit Student</h2>
          <input
            type="text"
            value={editingStudent.name}
            onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
          />
          <input
            type="number"
            step="0.01"
            value={editingStudent.cgpa}
            onChange={(e) => setEditingStudent({ ...editingStudent, cgpa: parseFloat(e.target.value) })}
          />
          <button onClick={updateStudent}>Update Student</button>
          <button onClick={() => setEditingStudent(null)}>Cancel</button>
        </div>
      )}

      <div className="students-list">
        <h2>Students</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.id} - {student.name} - {student.cgpa}
              <button onClick={() => setEditingStudent(student)}>Edit</button>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
