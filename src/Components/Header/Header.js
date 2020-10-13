import React, { Component } from "react";
import img from "../../Assets/college_02.jpg";
import "./Header.css";

export default function Header(props) {
  return (
    <main>
      <section className="card-header">
        <section className="promoted">Promoted</section>
        <section className="card-image">
          <img src={img} alt="college photo missing" />
        </section>
        {props.data.tags.map((status, index) => {
          return index == 0 ? (
            <section className="college-status">{status}</section>
          ) : (
            <section className="college-distance">{status}</section>
          );
        })}

        <section className="college-rank">{props.data.ranking}</section>
        <section className="college-rating">
          <span className="college-rating-1">
            {" "}
            {props.data.rating}
            <span className="small-size">/5</span>
          </span>
          <br />
          <span className="college-rating-2">{props.data.rating_remarks}</span>
        </section>
      </section>
    </main>
  );
}
