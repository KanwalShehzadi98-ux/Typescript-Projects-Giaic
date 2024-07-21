export class Student {
    name;
    static idCounter = 0;
    studentID;
    enrolledCourses = [];
    tuitionBalance = 0;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
    }
    generateStudentID() {
        Student.idCounter++;
        return Student.idCounter.toString().padStart(5, '0');
    }
    enroll(course) {
        this.enrolledCourses.push(course);
        this.tuitionBalance += course.fee;
    }
    viewBalance() {
        return this.tuitionBalance;
    }
    payTuition(amount) {
        if (amount > 0) {
            this.tuitionBalance -= amount;
        }
    }
    showStatus() {
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Name: ${this.name}`);
        console.log('Enrolled Courses:');
        this.enrolledCourses.forEach(course => console.log(`- ${course.name}`));
        console.log(`Balance: $${this.tuitionBalance}`);
    }
}
