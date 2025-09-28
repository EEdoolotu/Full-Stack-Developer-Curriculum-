function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum/arr.length;

}
function getGrade(score) {
  if (score === 100) {
    return "A+"
  } else if (score >= 90 && score <100) {
    return "A"
  } else if (score >= 80 && score <90) {
    return "B" 
  } else if (score >= 70 && score <80) {
    return "C" 
  } else if (score >= 60 && score <70) {
    return "D" 
  } else {
    return "F"
  }

}

function hasPassingGrade(score) {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(arr, score) {
  if (hasPassingGrade(score) === true) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`
  } else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`

  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))