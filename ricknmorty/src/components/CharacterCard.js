import React from "react";
import '../styles/rick.css';

export default function CharacterCard(props) {
  return (
    <div>
      <h1>Name:{props.chars.name}</h1>
      <img src={props.chars.image} alt="rick and morty" />
      <h1>{props.chars.gender}</h1>
      <h1>{props.chars.status}</h1>
    </div>
  );
}