import React, { Component } from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <main>
      <section className="card-content">
        <section className="college-name">
          {props.data.college_name}
          {[0, 1, 2, 3, 4].map((elem) => {
            return (
              <svg
                height="22"
                width="22"
                className={elem < props.data.rating ? "star" : ""}
              >
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
              </svg>
            );
          })}
        </section>

        <section className="college-location-fees">
          <section className="location">
            <section className="college-location">
              {props.data.nearest_place.map((place, index) => {
                return index == 0 ? (
                  <div style={{ color: "#444444" }}>{place} |</div>
                ) : (
                  <div>{place} </div>
                );
              })}
            </section>
            <section className="college-location-details">
              <span style={{ color: "#37b396" }}>93%Match:</span>{" "}
              {props.data.famous_nearest_places}
            </section>
          </section>
          <section className="college-fees">
            <span className="college-fees-1">
              {" "}
              ₹{props.data.discounted_fees}
            </span>

            <span className="college-fees-2">{props.data.fees_cycle}</span>
          </section>
        </section>
        <section className="college-discount-amenties">
          <section className="college-discount">{props.data.offertext}</section>
          <section className="college-amenties">
            {" "}
            {props.data.amenties.map((amenties, index) => {
              return index == 0 ? (
                <section>{amenties} - </section>
              ) : (
                <section> {amenties} </section>
              );
            })}
          </section>
        </section>
      </section>
    </main>
  );
}
