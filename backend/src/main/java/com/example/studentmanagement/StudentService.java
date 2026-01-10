package com.example.studentmanagement;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

@Service
public class StudentService {
    private List<Student> students = new ArrayList<>();
    private Comparator<Student> cgpaComparator = Comparator.comparingDouble(Student::getCgpa).reversed();
    private long nextId = 106; // Assuming IDs start from 106 for new students

    @PostConstruct
    public void loadStudentsFromCSV() {
        Set<Integer> ids = new HashSet<>();
        Resource resource = new ClassPathResource("students.csv");
        try (BufferedReader br = new BufferedReader(new InputStreamReader(resource.getInputStream()))) {
            String line;
            boolean firstLine = true;
            while ((line = br.readLine()) != null) {
                if (firstLine) {
                    firstLine = false;
                    continue; // Skip header
                }
                String[] parts = line.split(",");
                if (parts.length == 3) {
                    int id = Integer.parseInt(parts[0].trim());
                    String name = parts[1].trim();
                    double cgpa = Double.parseDouble(parts[2].trim());
                    if (ids.add(id)) {
                        students.add(new Student(id, name, cgpa));
                        if (id >= nextId) nextId = id + 1;
                    }
                }
            }
            // Sort by id after loading
            Collections.sort(students);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Student> getAllStudents() {
        return new ArrayList<>(students);
    }

    public Student getStudentById(int id) {
        return students.stream().filter(s -> s.getId() == id).findFirst().orElse(null);
    }

    public Student createStudent(Student student) {
        student.setId((int) nextId++);
        students.add(student);
        Collections.sort(students);
        return student;
    }

    public Student updateStudent(int id, Student updatedStudent) {
        for (int i = 0; i < students.size(); i++) {
            if (students.get(i).getId() == id) {
                updatedStudent.setId(id);
                students.set(i, updatedStudent);
                return updatedStudent;
            }
        }
        return null;
    }

    public Student partialUpdateStudent(int id, Map<String, Object> updates) {
        Student student = getStudentById(id);
        if (student != null) {
            if (updates.containsKey("name")) {
                student.setName((String) updates.get("name"));
            }
            if (updates.containsKey("cgpa")) {
                student.setCgpa((Double) updates.get("cgpa"));
            }
            return student;
        }
        return null;
    }

    public boolean deleteStudent(int id) {
        Iterator<Student> iterator = students.iterator();
        while (iterator.hasNext()) {
            Student student = iterator.next();
            if (student.getId() == id) {
                iterator.remove();
                return true;
            }
        }
        return false;
    }

    public List<Student> getStudentsSortedByCgpa() {
        return students.stream().sorted(cgpaComparator).toList();
    }
}