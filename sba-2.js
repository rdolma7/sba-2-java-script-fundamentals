const courseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const learnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  let studentIDs = learnerSubmissions.map((student) => {
    return student.learner_id;
  });
  // console.log(studentIDs);

  let uniqueIDs = [];
  for (let i = 0; i < studentIDs.length; i++) {
    let currentStudentId = studentIDs[i];
    if (uniqueIDs.indexOf(currentStudentId) === -1) {
      uniqueIDs.push(currentStudentId);
    }
  }
  // console.log(uniqueIDs);

  let students = uniqueIDs.map((num) => {
    //students is now the object with learner id from learner submissions as it's property and its value is set to the unique learner id.
    let obj = {
      id: num,
    };
    return obj;
  });
  // console.log(students);
  learnerSubmissions.forEach((id) => {
    //id is the parameter that loops through each element inside learner submissions array.
    let pupilId = id.learner_id; //id.learner_id is the learner_id elements inside learner submission.  ex: 125
    let homeworkId = id.assignment_id; // id.assignment_id is the assignment_id elements inside learner submission. ex: 1.
    // console.log(homeworkId)
    let grade = id.submission.score; //score of students
    // let submittedTime = project.submission.submitted_at; //what time the assingment was submitted.
    students.forEach((student) => {
      // students ex:[ { id: 125, homeworkId:grade}, { id: 132 } ], pupil ex: { id: 125 }
      if (student.id === pupilId) {
        student[homeworkId] = grade; // this will create a new attribute in every student element when the condition is met.
      }
    });
    // console.log(students);
  });

  // 4. we need to calculate the grade
  // go every student and match assignment using id to find points points_possible
  // you just divide the score by points points_possible
  // -> [{id:125,1:0.94,2:1.0}]
  // avg (add assignment scores together )/ (points possible)
  // remove not due assignments

  
     // Loop through each student in the students array
    students.forEach((student) => {
        // Initialize variables to calculate average score
        let avgScoreForAllAssignments = 0;
        let numberOfAssignments = 0;
        // Loop through each assignment in the assignment group
        assignmentGroup.assignments.forEach((assignment) => {
            let id = assignment.id;
            let studentScore = student[id];
            // Check if the student has a numeric score for this assignment
            if (typeof studentScore === 'number') {
                // Convert raw score to percentage of max possible points
                let assignmentMaxScore = assignment.points_possible;
                const percentage = studentScore / assignmentMaxScore;
                student[id] = percentage.toFixed(2);
                // Add to total and count assignments
                avgScoreForAllAssignments += percentage;
                numberOfAssignments++;
            }
        })
        // Calculate and store the average score across all assignments for this student
        student.avg = (avgScoreForAllAssignments / numberOfAssignments).toFixed(3);
    })
    console.log(students)
}