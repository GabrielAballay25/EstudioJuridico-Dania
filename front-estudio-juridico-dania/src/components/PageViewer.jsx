import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { PDF_URL } from "./seccionesData";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const FIRST_PAGE = 222;
const LAST_PAGE = 228;

export default function PageViewer() {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(FIRST_PAGE);
  const [zoomPct, setZoomPct] = useState(100);
  const viewportRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(320);

  useEffect(() => {
    const measure = () => {
      const el = viewportRef.current;
      if (!el) return;
      const style = getComputedStyle(el);
      const paddingH =
        parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      const available = el.clientWidth - paddingH;
      if (available > 0) setBaseWidth(available);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const total = LAST_PAGE - FIRST_PAGE + 1;
  const pageIndex = page - FIRST_PAGE + 1;
  const pageOutOfRange = numPages !== null && page > numPages;
  const pageWidth = Math.floor(baseWidth * (zoomPct / 100));

  return (
    <div className="pv-wrap">
      <div className="pv-topbar">
        <span className="pv-label">Páginas del artículo</span>
        <span className="pv-counter">
          Pág. {page} · {pageIndex}/{total}
        </span>
      </div>

      <div
        className="pv-viewport"
        ref={viewportRef}
        style={{ justifyContent: zoomPct <= 100 ? "center" : "flex-start" }}
      >
        <Document
          file={PDF_URL}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div className="pv-status">Cargando PDF…</div>}
          error={
            <div className="pv-status pv-status--error">
              No se pudo cargar el PDF.
            </div>
          }
        >
          {pageOutOfRange ? (
            <div className="pv-status pv-status--error">
              La página {page} no existe en este PDF ({numPages} páginas en
              total).
              <br />
              Verificá que el archivo Cladem.pdf sea la versión completa de 338
              páginas.
            </div>
          ) : (
            <Page
              key={page}
              pageNumber={page}
              width={pageWidth}
              renderTextLayer
              renderAnnotationLayer
              className="pv-pdf-page"
              loading={<div className="pv-status">Cargando página…</div>}
              error={
                <div className="pv-status pv-status--error">
                  Error al renderizar la página.
                </div>
              }
            />
          )}
        </Document>
      </div>

      <div className="pv-controls">
        <div className="pv-arrows">
          <button
            className="pv-btn"
            onClick={() => setPage((p) => Math.max(FIRST_PAGE, p - 1))}
            disabled={page <= FIRST_PAGE}
            aria-label="Página anterior"
          >
            ←
          </button>
          <span className="pv-page-indicator">Pág. {page}</span>
          <button
            className="pv-btn"
            onClick={() => setPage((p) => Math.min(LAST_PAGE, p + 1))}
            disabled={page >= LAST_PAGE}
            aria-label="Página siguiente"
          >
            →
          </button>
        </div>
        <div className="pv-zoom">
          <button
            className="pv-zoom-btn"
            onClick={() => setZoomPct((z) => Math.max(50, z - 20))}
            aria-label="Reducir zoom"
          >
            −
          </button>
          <span className="pv-zoom-label">{zoomPct}%</span>
          <button
            className="pv-zoom-btn"
            onClick={() => setZoomPct((z) => Math.min(300, z + 20))}
            aria-label="Aumentar zoom"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
