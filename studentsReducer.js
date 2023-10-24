const initialState = [
  { id: 1, firstName: "Ahmad", lastName: "Salim", enrolled: false },
  { id: 2, firstName: "Gabriel", lastName: "Carlos", enrolled: true },
  { id: 3, firstName: "Cassandra", lastName: "Williams", enrolled: false },
];

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "students/addStudent": {
      return [...state, action.payload];
    }
    case "students/removeStudent": {
      return state.filter((student) => student.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

/** Add your code below */
const secondState = studentsReducer(initialState, {
  type: "students/addStudent",
  payload: {
    id: 4,
    firstName: "Ming",
    lastName: "Chan",
    enrolled: true,
  },
});

console.log(`initialState: \n${JSON.stringify(initialState, null, 2)}`);

console.log(`secondState (addStudent): \n${JSON.stringify(secondState, null, 2)}
`);

const thirdState = studentsReducer(secondState, {
  type: "students/removeStudent",
  payload: { id: 2 },
});

console.log(`thirdState (removesStudent): \n${JSON.stringify(
  thirdState,
  null,
  2
)}
`);
