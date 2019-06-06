
// Write a function that calculates the grade a student should
// recieve based on the following chart. The function should
// take in an array of grades or 'marks'.

// Average
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(grades) {
    const average = calculateAverageOfANumberArray(grades);

    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 60) return 'D';
    if (average >= 70) return 'C';
    return 'F';
}

function calculateAverageOfANumberArray(numbers) {
    let sum = 0;
    for (let value of numbers)
        sum += value;
    return sum / numbers.length;
}
