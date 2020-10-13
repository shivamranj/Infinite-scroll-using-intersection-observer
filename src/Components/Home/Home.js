import React, { Component } from "react";
import CardContent from "../CardContent/CardContent";
import "./Home.css";
import data from "../../colleges.json";

export default class Home extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        collegeinfo: [],
      };
    }
  }

  //  infinite scroll logic
  componentDidMount() {
    this.setState({
      collegeinfo: data.colleges.slice(0, 10),
    });
    this.createObserver(document.querySelector("#scroll"));
  }
  createObserver = (reference) => {
    let observe = new IntersectionObserver((obj) => {
      console.log(obj[0].intersectionRatio);
      if (obj[0].intersectionRatio > 0) {
        console.log("hello");
        this.handleChange();
      }
    });
    observe.observe(reference);
  };
  handleChange = () => {
    let length = Object.keys(this.state.collegeinfo).length;
    if (this.state)
      this.setState({
        collegeinfo: [
          ...this.state.collegeinfo,
          ...data.colleges.slice(length, length + 10),
        ],
      });
  };
  render() {
    return (
      <main>
        <p className="college-title">Colleges In North India</p>
        <section className="cards">
          {this.state.collegeinfo.map((college, index) => {
            return (
              <CardContent
                key={index}
                data={college}
                onMouseOver={() => {
                  this.handleChange();
                }}
              />
            );
          })}
        </section>

        <section id="scroll"></section>
      </main>
    );
  }
}
