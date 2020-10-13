import React, { Component } from "react";
import "./cardcontent.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function CardContent(props) {
  return (
    <main>
      <section className="card">
        <Header data={props.data} />
        <Footer data={props.data} />
      </section>
    </main>
  );
}
