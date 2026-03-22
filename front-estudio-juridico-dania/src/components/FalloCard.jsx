import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const FalloCard = ({ caso, descripcion, urlPdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="fallo-card">

      <div className="fallo-descripcion-lado">
        <h3 className="fallo-titulo">Caso: {caso}</h3>
        <ul className="fallo-lista">
          {descripcion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="fallo-indicacion">
          Deslizá el PDF para ver el detalle de la resolución.
        </p>
      </div>

      <div className="fallo-visor-lado">
        <h4 className="fallo-visor-titulo">Resolución Judicial</h4>

        <div className="fallo-controles">
          <button
            className="fallo-zoom-btn"
            onClick={() => setScale(s => Math.max(s - 0.2, 0.6))}
            disabled={scale <= 0.6}
          >
            -
          </button>
          <span className="fallo-zoom-label">Zoom: {(scale * 100).toFixed(0)}%</span>
          <button
            className="fallo-zoom-btn"
            onClick={() => setScale(s => Math.min(s + 0.2, 2.0))}
            disabled={scale >= 2.0}
          >
            +
          </button>
        </div>

        <div className="fallo-visor-contenedor">
          <Document
            file={urlPdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Cargando documento..."
            noData="No se pudo cargar el PDF."
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={true}
              renderAnnotationLayer={false}
              scale={scale}
            />
          </Document>
          {numPages && (
            <p className="fallo-paginacion">
              Página {pageNumber} de {numPages}
            </p>
          )}
        </div>

        {numPages > 1 && (
          <div className="fallo-nav-paginas">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
              className="fallo-pag-btn"
              title="Página anterior"
            >
              &larr;
            </button>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}
              className="fallo-pag-btn"
              title="Página siguiente"
            >
              &rarr;
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default FalloCard;