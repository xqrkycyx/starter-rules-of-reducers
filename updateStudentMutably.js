const student = {
  id: 1,
  firstName: "Ahmad",
  lastName: "Salim",
  enrolled: false,
};

/** Add your code below */

// --------------------------------------------------------------------
// Method 1 (INCORRECT): Updates by mutating the (existing) state directly
// --------------------------------------------------------------------

const updateStudentMutably = (student) => {
  student.enrolled = !student.enrolled;
  return student;
};

const updatedStudent = updateStudentMutably(student);

console.log(
  `Method 1 (INCORRECT): Updates by mutating the (existing) state directly:
  
  student should show enrolled: 'false' but will instead show 'true' bc student 
  was mutated directly using fn updateStudentMutably:
  `
);

console.log(
  `student - should be 'false': \n${JSON.stringify(student, null, 2)}`
);
console.log(
  `updatedStudent - should be 'true': \n${JSON.stringify(
    updatedStudent,
    null,
    2
  )}`
);
