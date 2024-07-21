import { Course } from './course.js';

export class Student {
    private static idCounter: number = 0;
    public readonly studentID: string;
    private enrolledCourses: Course[] = [];
    private tuitionBalance: number = 0;

    constructor(public name: string) {
        this.studentID = this.generateStudentID();
    }

    private generateStudentID(): string {
        Student.idCounter++;
        return Student.idCounter.toString().padStart(5, '0');
    }

    enroll(course: Course): void {
        this.enrolledCourses.push(course);
        this.tuitionBalance += course.fee;
    }

    viewBalance(): number {
        return this.tuitionBalance;
    }

    payTuition(amount: number): void {
        if (amount > 0) {
            this.tuitionBalance -= amount;
        }
    }

    showStatus(): void {
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Name: ${this.name}`);
        console.log('Enrolled Courses:');
        this.enrolledCourses.forEach(course => console.log(`- ${course.name}`));
        console.log(`Balance: $${this.tuitionBalance}`);
    }
}
