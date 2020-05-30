import React, { Component } from "react";
import data from "../../images/Portfolio/SRE/Data.png";
import reporte from "../../images/Portfolio/SRE/Reporte Diario.png";
import datos from "../../images/Portfolio/SRE/SRE Datos.png";
import genGraph from "../../images/Portfolio/SRE/SRE Gen Graph.png";
import genReporte from "../../images/Portfolio/SRE/SRE Gen Reporte.png";
import graphGen from "../../images/Portfolio/SRE/SRE Graph Generada.png";
import programacion from "../../images/Portfolio/SRE/SRE Programacion.png";
import registro from "../../images/Portfolio/SRE/SRE Registro.png";
import reportePDF from "../../images/Portfolio/SRE/SRE Reporte PDF.png";

import ImageZoom from "image-zoom-react";

import "./styles/sreExcel.css";

export default class sreExcel extends Component {
  render() {
    return (
      <div className="sreExcel">
        <div className="container">
          <div className="row">
            <div className="sreExcel__col col-11.75 col-md-8">
              <h1>Registro de trámites en Excel</h1>
              <p>
                Se creó un bookmarklet que arranca un script que va recogiendo
                la información necesaria, y al final de la jornada se puede
                acceder a la siguiente pagína para filtrar solamente la
                información necesaria.
              </p>
              <ImageZoom
                className="sreExcel__image"
                src={reporte}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={data}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={registro}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={datos}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={genGraph}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={graphGen}
                magnify={1.75}
                alt="Reporte Diario"
              />

              <ImageZoom
                className="sreExcel__image"
                src={genReporte}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={reportePDF}
                magnify={1.75}
                alt="Reporte Diario"
              />
              <ImageZoom
                className="sreExcel__image"
                src={programacion}
                magnify={1.75}
                alt="Reporte Diario"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}