const addPerson = (personName, imageUrl) => {
  return {
    type: "ADD_PERSON",
    person: { name: personName, url: imageUrl },
  };
};

export default addPerson;
