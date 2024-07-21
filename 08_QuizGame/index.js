import inquirer from 'inquirer';
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4",
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
];
async function askQuestions() {
    let correctAnswers = 0;
    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'response',
                message: question.question,
                choices: question.choices,
            },
        ]);
        if (answer.response === question.answer) {
            correctAnswers++;
        }
    }
    console.log(`You answered ${correctAnswers} out of ${questions.length} questions correctly.`);
}
askQuestions().catch((error) => {
    console.error("An error occurred while running the quiz:", error);
});
