import React from "react";
import { useDispatch } from "react-redux";
import removePerson from "./actions/removePerson";

function Person(props) {
  const name = props.name;
  const url = props.url;
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Name: {name}</h2>
      <img src={`${url}`} alt="Person" />
      <button onClick={() => dispatch(removePerson(name, url))}>
        Remove Person
      </button>
    </div>
  );
}

export default Person;
