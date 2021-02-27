import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import addPerson from "./actions/addPerson";
import Person from "./Person";

function App() {
  const [personName, setPersonName] = useState();
  const [imageUrl, setImageUrl] = useState();
  // return the data from the state that we want to use
  const people = useSelector((state) => state.people);
  const dispatch = useDispatch();

  const fetchNewPerson = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        const result = data.results[0];
        const name = result.name.first + " " + result.name.last;
        const url = result.picture.large;
        setPersonName(name);
        setImageUrl(url);
        console.log(data.results[0]);
      });
  };

  const addPersonToStore = () => {
    dispatch(addPerson(personName, imageUrl));
    setPersonName();
    setImageUrl();
  };

  const renderPeople = () => {
    const peopleJSX = people.map((person) => (
      <Person name={person.name} url={person.url}></Person>
    ));
    return <div>{peopleJSX}</div>;
  };
  return (
    <div className="App">
      <button onClick={fetchNewPerson}>Fetch new Person</button>
      {personName && (
        <div>
          <h1>New User fetched</h1>
          <h2>Name: {personName}</h2>
          <img src={`${imageUrl}`} alt="Person" />
          <button onClick={addPersonToStore}>Add the person to the list</button>
        </div>
      )}

      <hr />
      {people && renderPeople()}
    </div>
  );
}

export default App;
