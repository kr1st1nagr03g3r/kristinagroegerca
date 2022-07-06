import React from "react";

export default function Today() {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  
  return (
<small>Available for hire today ↪ {date}</small>
  );
}