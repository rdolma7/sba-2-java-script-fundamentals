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
  // here, we would process this data to achieve the desired result.

  // 1. first figure out who are the students ---LearnerSubmissions
  // generate an array of unique students ids --- use map function on the learner submission array to create a copy.
  // generate an array of students ids -> [125,125,125,132,132] -- get student ids from the learner submissions
  let studentIds = learnerSubmissions.map((student) => {
    return student.learner_id;
  });
  console.log(studentIds);
  // generate the array from submissions data then make it unique -> [125,132]
  let uniqueArray = [];
  for (let i = 0; i < studentIds.length; i++) {
    let currentStudentId = studentIds[i];
    if (uniqueArray.indexOf(currentStudentId) === -1) {
      uniqueArray.push(currentStudentId);
    }
  }
  console.log(uniqueArray);

  // 2. convert it into array of object where you have a key called id
  // then value be studentid -> [{id:125},{id:132}]
  // 3. get the assignments and calulcate the grade
  // find the assignment for each student and thier score
  // -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]
  let studentArray = uniqueArray.map((id) => {
    let obj = {
      id: id,
    };
    // console.log(studentArray);
    let assignments = learnerSubmissions.filter((submission) => id === submission.learner_id);

    assignments.forEach((element) => {
      let asssignmentId = element.assignment_id;
      let score = element.submission.score;
      obj[asssignmentId] = score;
    });
    return obj;
    // if(id ===125){

    //   let obj = {
    //     id: id,
    //     [learnerSubmissions[0].assignment_id]: learnerSubmissions[0].submission.score

    //   };

    //   return obj;
    // }else{
    //   let obj = {
    //     id: id,
    //     [learnerSubmissions[3].assignment_id]: learnerSubmissions[3].submission.score
    //   };

    //   return obj;
    // }
  });
  // console.log(studentArray);

  // console.log(assignmentGrade);
  // console.log(learnerSubmissions[0].assignment_id);
  // now you have an object for each student that has score
  // for(let i=0; i<learnerSubmissions.length; i++){
  //   if()
  // console.log(learnerSubmissions[i])
  // }
  // 4. we need to calculate the grade
  // go every student and match assignment using id to find points points_possible
  // you just divide the score by points points_possible
  // -> [{id:125,1:0.94,2:1.0}]
  // avg (add assignment scores together )/ (points possible)
  // remove not due assignments

  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0, // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833, // late: (140 - 15) / 150
  //   },
  // ];

  // let result = [];
  // write some code that makes results like that
  // for (let i = 0; i < submissions.length; i++) {
  //   //
  // }
  // result [125,125,125,32,32]
  // return result;
}

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);


// let maxScore= grade/

// students.pupil[homework_id]= ''