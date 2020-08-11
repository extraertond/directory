import React, { Component } from 'react'
import { addListener } from 'process'

export class about extends Component {
  render() {
    return (
      <div id="about" className="text-center">
        <div className="container" >
          <div className="section-title">
            <h2>Sobre Mí</h2>
            <p>
              Nacido el 2 de diciembre de 1996 en un pueblecito costero y turístico de Málaga llamado en Benalmádena. Desde muy jóven apasionado por la naturaleza y la tecnología.
              Actualmente cursando mi último año de Ingeniería del Software en la Universidad de Málaga. Especializado en desarollo web y desarrollo de aplicaciones móviles híbridas.
              He trabajado durante 6 meses en desarrollo de aplicaciones web con React e Ionic.
          </p>
            <div className="row" >

              <div className="about-text" >
                <h3> Lenguajes</h3>
                <div style={{ textAlign: "center" }}>
                  <div style={{ display: "inline-block" }}>
                    <ul style={{ textAlign: "left" }}>
                      <li>Java nivel medio</li>
                      <li>Javascript nivel medio</li>
                      <li>C nivel medio</li>
                      <li>C++ nivel medio</li>
                      <li>Haskell nivel básico</li>
                    </ul>
                  </div>
                  <div style={{ display: "inline-block", marginLeft: "100px", marginBottom: "50px" }}>
                    <ul style={{ textAlign: "left" }}>
                      <li>Python nivel básico</li>
                      <li>HTML nivel medio</li>
                      <li>CSS nivel medio</li>
                      <li>Android Nativo nivel básico</li>
                      <li>Arduino nivel básico</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" >

              <div className="about-text" >
                <h3> Tecnologías y Frameworks</h3>
                <div style={{ textAlign: "center" }}>
                  <div style={{ display: "inline-block" }}>
                    <ul style={{ textAlign: "left" }}>
                      <li>Control de versiones con GIT</li>
                      <li>Node JS</li>
                      <li>Gestión de BBDD con MySQL</li>
                      <li>Firebase (BBDD No relacionales)</li>
                      <li>Gestión de servidores Ubuntu</li>
                      <li>Gestión servidor web con Nginx y pm2</li>
                    </ul>
                  </div>
                  <div style={{ display: "inline-block", marginLeft: "100px", marginBottom: "50px" }}>
                    <ul style={{ textAlign: "left" }}>
                      <li>Java EE</li>
                      <li>React JS</li>
                      <li>Angular nivel básico (EJS)</li>
                      <li>Loopback</li>
                      <li>Ionic con React</li>
                      <li>Posix nivel básico</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default about
