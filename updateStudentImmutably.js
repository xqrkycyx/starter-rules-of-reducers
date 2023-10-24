const student = {
  id: 1,
  firstName: "Ahmad",
  lastName: "Salim",
  enrolled: false,
};

/** Add your code below */

// --------------------------------------------------------------------
// Method 2 (CORRECT): Update by returning a NEW, IMMUTABLE COPY of the state
// --------------------------------------------------------------------

const updateStudentImmutably = (student) => {
  return {
    ...student,
    enrolled: !student.enrolled,
  };
};

const updatedStudent = updateStudentImmutably(student);

console.log(
  `Method 2 (CORRECT): Update by returning a NEW, IMMUTABLE COPY of the state
  
  student should show enrolled: 'false' and will correctly show 'false' bc student
  was copied to a NEW object using fn updateStudentImmutably:
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
