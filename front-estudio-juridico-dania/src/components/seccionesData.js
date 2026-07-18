// ─────────────────────────────────────────────
//  PDF del artículo publicado en CLADEM 2025
export const PDF_URL = "/Cladem.pdf";

export const SECTIONS = [
  {
    id: "prueba",
    label: "Prueba y relato",
    icon: "Scale",
    content: `
      <div class="fsap-prose">
        En los delitos de abuso sexual —como en la violencia familiar y de
        género— los hechos ocurren en espacios de intimidad sin testigos. Por
        eso, el relato de la víctima es la columna vertebral probatoria.
      </div>
      <blockquote class="fsap-quote">
        <p>
          Las particulares características de los hechos de violencia doméstica
          y de género hace que cobre especial relevancia, como sucede con la
          violencia sexual, física y psicológica, el relato de la víctima. Este
          adquiere un valor convictivo de preferente ponderación en la medida
          que resulte fiable y se encuentre corroborado por indicios.
        </p>
        <cite>Tribunal Superior de Justicia de Córdoba — múltiples precedentes</cite>
      </blockquote>
      <p class="fsap-prose">
        La prueba de contexto refuerza ese relato y debe ser debidamente
        valorada, especialmente en fenómenos pluriofensivos donde los hechos
        raramente ocurren a la vista de terceros.
      </p>
    `,
  },
  {
    id: "datos",
    label: "Datos Argentina",
    icon: "BarChart2",
    stats: [
      { num: "74,2%", label: "Agresores del entorno cercano de la víctima" },
      { num: "56,5%", label: "Familiares directos" },
      { num: "44,4%", label: "NNyA agredidas por padre o padrastro" },
    ],
    content: `
      <blockquote class="fsap-quote">
        <p>Las personas afectadas por delitos sexuales en contexto familiar con
        frecuencia callan, por miedo, culpa, impotencia o vergüenza.</p>
        <cite>UFEM — Protocolo de investigación y litigio, 2023</cite>
      </blockquote>
      <p class="fsap-prose">
        Es precisamente aquí donde el falso SAP se vuelve estratégico para
        descalificar el relato del niño y culpar a la progenitora.
      </p>
    `,
  },
  {
    id: "actos",
    label: "Actos procesales",
    icon: "Search",
    listItems: [
      {
        title: "Puntos de pericia sesgados",
        text: `Se ordena indagar si la niña "ha sido objeto de determinación psicológica por parte de la progenitora con ideas de rechazo y acusatorias hacia el imputado".`,
      },
      {
        title: "Cámara Gesell instrumentalizada",
        text: `La niña expresó que "su mamá le había enseñado a decir la palabra vulva", por lo que el defensor solicitó una pericia a la madre por supuesta manipulación.`,
      },
      {
        title: "Pericias a las madres",
        text: `Se les realizan pericias psicológicas buscando determinar si tienen "tendencia a la manipulación o influenciabilidad" sobre sus hijos/as.`,
      },
    ],
  },
  {
    id: "institucional",
    label: "Violencia institucional",
    icon: "Landmark",
    content: `
      <p class="fsap-prose">
        Dos niveles de vulneración se superponen: primero la violación a la
        integridad sexual de la infancia; luego, el sistema judicial vulnera su
        derecho a ser oída (Art. 12, Convención sobre los Derechos del Niño).
      </p>
      <blockquote class="fsap-quote">
        <p>Violencia institucional: aquella realizada por funcionarios/as de
        cualquier órgano público que tenga como fin retardar, obstaculizar o
        impedir que las mujeres ejerzan los derechos previstos en esta ley.</p>
        <cite>Ley nacional 26.485, Art. 6 inc. B</cite>
      </blockquote>
      <p class="fsap-prose">
        Los estereotipos más frecuentes: la "mujer mentirosa o mendaz" y la
        "mujer instrumental", acusada de usar el derecho penal para perjudicar
        al progenitor.
      </p>
    `,
  },
  {
    id: "casos",
    label: "Casos documentados",
    icon: "FolderOpen",
    cases: [
      {
        name: "Flavia Saganías",
        desc: "Condenada a 23 años de prisión. Denunció el abuso sexual de su hija; la justicia archivó la causa. Al hacer un escrache en Facebook quedó involucrada como instigadora de la violencia posterior.",
      },
      {
        name: 'Caso "Lila"',
        desc: "La madre denunció abuso sexual del progenitor. La justicia no le creyó. Desde febrero de 2023 tiene suspendida la responsabilidad parental y no ve a su hija.",
      },
    ],
  },
  {
    id: "propuestas",
    label: "Propuestas",
    icon: "Lightbulb",
    listItems: [
      {
        title: "Posicionamiento científico",
        text: "Lograr pronunciamientos de organismos internacionales, poderes del Estado y colegios profesionales en contra del falso SAP y pseudoteorías similares.",
      },
      {
        title: "Capacitación judicial",
        text: "Generar espacios de formación crítica para magistrados, fiscales y operadores judiciales sobre derechos de infancias y mujeres.",
      },
      {
        title: "Participación activa de víctimas",
        text: "Legislación que garantice escucha activa de infancias y madres protectoras, con asesoramiento y patrocinio jurídico gratuito.",
      },
      {
        title: "Litigios estratégicos",
        text: "Acompañar causas donde se intenten implementar estas pseudoteorías para generar precedentes jurisprudenciales en todas las instancias.",
      },
    ],
  },
];
