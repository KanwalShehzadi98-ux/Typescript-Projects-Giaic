// src/StudentManagementSystem.ts
import { Student } from './student.js';
import { Course } from './course.js';

export class StudentManagementSystem {
    private students: Student[] = [];
    private courses: Course[] = [
        new Course('Math 101', 500),
        new Course('History 101', 600),
        new Course('Science 101', 700),
    ];

    addStudent(name: string): Student {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        return newStudent;
    }

    getCourses(): Course[] {
        return this.courses;
    }

    findStudent(studentID: string): Student | undefined {
        return this.students.find(student => student.studentID === studentID);
    }
}
