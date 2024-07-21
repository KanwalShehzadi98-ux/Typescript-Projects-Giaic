// src/index.ts
import { StudentManagementSystem } from './studentManagementSystem.js';
const sms = new StudentManagementSystem();
// Add students
const student1 = sms.addStudent('Kanwal Shehzadi');
const student2 = sms.addStudent('Mishal Shehzadi');
// Enroll students in courses
const courses = sms.getCourses();
student1.enroll(courses[0]); // Enroll in Math 101
student1.enroll(courses[1]); // Enroll in History 101
student2.enroll(courses[2]); // Enroll in Science 101
// View balances
console.log(`Balance for ${student1.name}: $${student1.viewBalance()}`);
console.log(`Balance for ${student2.name}: $${student2.viewBalance()}`);
// Pay tuition
student1.payTuition(300);
console.log(`Balance for ${student1.name} after payment: $${student1.viewBalance()}`);
// Show status
student1.showStatus();
student2.showStatus();
