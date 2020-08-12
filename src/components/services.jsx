import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Proyectos</h2>
            <p>
              Listado de proyectos propios creados con diferentes tecnologías
              para el aprendizaje.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4" style={{ textAlign: "center" }}>
              {" "}
                <img
                src="img/projects/react.png"
                style={{ height: 100, textAlign: "center" }}
                alt="React"
              />{" "}
              <div className="service-desc">
                <h3>React + Loopback</h3>
                <p>
                  Ejercicio de una tienda donde se agregan productos a un carro
                  (Redux). Puedes ver el listado de productos y tu carro
                  personal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
