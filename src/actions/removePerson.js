const removePerson = (personName, imageUrl) => {
  return {
    type: "REMOVE_PERSON",
    person: { name: personName, url: imageUrl },
  };
};

export default removePerson;
