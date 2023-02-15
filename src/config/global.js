export default {
  global: {
    componenteFormativo: 'Manejo de datos',
    descripcionCurso:
      'El registro de la información contiene varios criterios que permiten interpretar muchos datos. Para su máxima potenciación, es necesario comprender sus componentes, ciclos y objetivos, efectuando parámetros preestablecidos, apoyándose en técnicas y fuentes para la recolección de información; estos deben estar bajo criterios y modelos científicamente validados, porque serán de gran ayuda para el desarrollo académico y laboral del aprendiz.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Datos',
        desarrolloContenidos: true,
        subMenu: [
          //{
          //icono: 'far fa-file-alt',
          //numero: '1.1',
          //titulo: 'Tipos de datos y agrupación ',
          //hash: 't_1_1',
          //},
          //{
          //icono: 'far fa-file-alt',
          //numero: '1.2',
          //titulo: 'Principios de clasificación de los datos e información ',
          //hash: 't_1_2',
          //},
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fuentes y técnicas de recolección de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Instrumentos de recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          //{
          // icono: 'far fa-file-alt',
          // numero: '3.1',
          //titulo: 'Tipos de preguntas',
          //hash: 't_3_1',
          // },
          //{
          //icono: 'far fa-file-alt',
          // numero: '3.2',
          // titulo: 'Aplicación de instrumentos',
          // hash: 't_3_2',
          // },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manejo y protección de datos',
        desarrolloContenidos: true,
        subMenu: [
          //{
          // icono: 'far fa-file-alt',
          // numero: '4.1',
          // titulo: 'Clasificación de los datos',
          // hash: 't_4_1',
          //},
          //{
          // icono: 'far fa-file-alt',
          // numero: '4.2',
          // titulo:
          //  'Recomendaciones para establecer un sistema de clasificación de datos en las organizaciones',
          // hash: 't_4_2',
          // },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fuentes y técnicas de recolección de información',
      referencia:
        'Marketing 2.0. (2019). <em>Fuentes primarias y secundarias (Datos primarios y secundarios) tipos de información</em> [video]. YouTube ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=88DpgQxCq0E ',
    },
    {
      tema: 'Instrumentos de recolección de datos',
      referencia:
        'TeoCom. (2021). <em>Confiabilidad y validez de un instrumento de investigación I Metodología de la Investigación</em> [video]. YouTube ',
      tipo: 'Video',
      link: 'https://youtu.be/yZH6WGoQMhk',
    },
    {
      tema: 'Instrumentos de recolección de datos',
      referencia:
        'Jibaro X. (2019). <em>Tipos de preguntas en una encuesta</em> [video]. YouTube ',
      tipo: 'Video',
      link: 'https://youtu.be/mwnQuUi9014 ',
    },
    {
      tema: 'Manejo y protección de datos',
      referencia: 'AWS (2019). <i>Data Classification</i>. ',
      tipo: 'PDF',
      link: 'https://www.oas.org/en/sms/cicte/docs/ENG-Data-Classidication.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de vida de los datos',
      significado:
        'esquema que permitirá la objetividad de la información, integrando la vida útil del dato, características de almacenamiento, conservación, respaldo y eliminación bajo términos, protocolos y criterios establecidos.',
    },
    {
      termino: 'Clasificación de los datos',
      significado:
        'organización de la información con secuencia lógica, funcional; en algunos escenarios limitada.',
    },
    {
      termino: 'Fuente primaria',
      significado: 'información original de primera mano.',
    },
    {
      termino: 'Fuente secundaria',
      significado: 'contenidos procesados de una fuente primaria.',
    },
    {
      termino: 'Fuente terciaria',
      significado:
        'se utilizan para buscar datos o para obtener una idea general.',
    },
    {
      termino: 'Instrumento',
      significado:
        'elemento que sirve de herramienta para el levantamiento de información.',
    },
    {
      termino: 'Método',
      significado:
        'secuencia de procesos, procedimientos o actividades, ordenada para el desarrollo de un ejercicio ejecutando un protocolo establecido.',
    },
    {
      termino: 'Proceso',
      significado:
        'secuencia de actividades que requieren ser desarrolladas bajo mecanismos controlados.',
    },
    {
      termino: 'Sistema de clasificación de datos',
      significado:
        'mecanismo para organizar la proyección de la información que se obtendrá, con criterios de funcionalidad del dato, la evaluar su comportamiento y nivel de riesgo.',
    },
    {
      termino: 'Técnica',
      significado:
        'características para el desarrollo de una actividad específica que parte de la pericia y la secuencia para adelantar actividades. ',
    },
  ],
  referencias: [
    {
      referencia:
        'AWS, (2019). <i>Data Classification.</i> ENG-Data-Classidication.pdf (oas.org)',
    },
    {
      referencia:
        'Dagnino S. (2015). Tipos de datos y escalas de medida. <i>Rev Chil Anest</i>, 43. p.109-111.',
    },
    {
      referencia:
        'Hernández, R. et al. (2014). <i>Metodología de la investigación: las rutas cuantitativa, cualitativa y mixta</i> (6ta ed.). McGraw Hill México.',
    },
    {
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Rivera, M. & Fernández, M. (2015). <i>Fuentes de Información.</i> ',
      link:
        'https://repository.uaeh.edu.mx/bitstream/bitstream/handle/123456789/16700/LECT132.pdf',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio de Colombia. (2022). <i>Argumentos y concepto aplicación del derecho de habeas data.</i> ',
      link: 'https://www.sic.gov.co/manejo-de-informacion-personal',
    },
    {
      referencia:
        'Tamayo, C. & Siesquén, I. (s.f.). <i>Técnicas e Instrumentos de Recolección de Datos.</i> ',
      link:
        'https://www.postgradoune.edu.pe/pdf/documentos-academicos/ciencias-de-la-educacion/22.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
