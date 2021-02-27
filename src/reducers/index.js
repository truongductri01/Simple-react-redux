const initialState = {
  people: [], // an array with the person information and image
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return { people: [...state.people, action.person] };

    case "REMOVE_PERSON":
      const newPeople = [];
      const removePerson = action.person;
      state.people.forEach((person) => {
        if (
          !(
            person.name === removePerson.name && person.url === removePerson.url
          )
        ) {
          newPeople.push(person);
        }
      });
      return { people: newPeople };
    default:
      return state;
  }
}

export default reducer;
