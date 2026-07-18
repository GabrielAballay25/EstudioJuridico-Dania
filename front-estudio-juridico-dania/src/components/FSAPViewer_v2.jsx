import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { SECTIONS, PDF_URL } from "./seccionesData";
import PageViewer from "./PageViewer";
import SectionContent from "./SectionContent";

export default function FSAPViewer() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const sec = SECTIONS[current];
  const progress = ((current + 1) / SECTIONS.length) * 100;

  return (
    <motion.div
      className="fsap-wrap"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >

      {/* Header */}
      <div className="fsap-header">
        <div className="fsap-eyebrow">Artículo · CLADEM 2025</div>
        <h2 className="fsap-title">
          Falso Síndrome de Alienación Parental en casos de abuso sexual en la infancia en Argentina
        </h2>
        <p className="fsap-author">
          <strong>Dania Guadalupe Villanueva</strong> – Abogada penalista, UNC · Presidenta Fundación Vivir Libres
        </p>
      </div>

      {/* Layout: dos columnas en desktop */}
      <div className="fsap-layout">

        {/* Col izquierda: artículo */}
        <div className="fsap-col-article">

          {/* Abstract */}
          <div className="fsap-abstract">
            <div className="fsap-abstract-label">Resumen</div>
            <p >
              Desde la experiencia litigante en Córdoba, este artículo analiza cómo el falso SAP
              se aplica en causas de ASIAJ para descalificar el relato de niñas y niños, culpar
              a las madres protectoras y garantizar impunidad a los agresores.
            </p>
          </div>

          {/* Nav tabs */}
          <div className="fsap-nav" role="tablist">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === current}
                className={`fsap-tab${i === current ? " fsap-tab--active" : ""}`}
                onClick={() => setCurrent(i)}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Progress */}
          <div className="fsap-progress-wrap">
            <span className="fsap-counter">Sección {current + 1} de {SECTIONS.length}</span>
            <div className="fsap-progress-bar">
              <div className="fsap-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Content */}
          <SectionContent sec={sec} />

          {/* Arrows */}
          <div className="fsap-arrows">
            <button
              className="fsap-arrow-btn"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
            >
              ← Anterior
            </button>
            <button
              className="fsap-arrow-btn"
              onClick={() => setCurrent((c) => Math.min(SECTIONS.length - 1, c + 1))}
              disabled={current === SECTIONS.length - 1}
            >
              Siguiente →
            </button>
          </div>

          {/* Download */}
          <div className="fsap-download-bar">
            <div className="fsap-dl-icon">
              <FileText size={28} strokeWidth={1.5} />
            </div>
            <div className="fsap-dl-info">
              <div className="fsap-dl-title">CLADEM 2025 — Publicación completa</div>
              <div className="fsap-dl-sub">PDF · Violencias de género y acceso a la justicia</div>
            </div>
            <a
              href={PDF_URL}
              download
              className="fsap-dl-btn"
            >
              <Download size={14} />
              Descargar
            </a>
          </div>

        </div>

        {/* Col derecha: visualizador de páginas */}
        <div className="fsap-col-viewer">
          <PageViewer />
        </div>
      </div>
    </motion.div>
  );
}
