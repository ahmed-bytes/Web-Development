let marksMass = 95;
let marksHeight = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

let marksBMI = marksMass / (marksHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

if (marksBMI > johnBMI) {
    console.log(`Mark's BMI is higher with ${marksBMI}`);
}
else {
    console.log(`John's BMI is higher with ${johnBMI}`);
}