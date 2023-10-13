<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fuentes y técnicas de recolección de información

    p(data-aos="fade") Rivera, M. & Fernández, M. (2015) en Fuentes de información indican que: 

    p(data-aos="fade").mb-4 “La fuente de información es todo aquello que nos proporciona datos para reconstruir hechos y las bases del conocimiento, afirmando que las fuentes de información son un instrumento para el conocimiento, la búsqueda y el acceso de la información”. (p. 2)

    p(data-aos="fade-down").mb-5 A continuación, se presentan los diferentes tipos de fuentes de información según lo expuesto por Rivera, M. & Fernández, M. (2015), estas serán de gran apoyo al investigador para la focalización de la información.

    .row.justify-content-center.align-items-start.mb-3          
      .col-lg-7
        AcordionA(data-aos="fade-right").mb-5(tipo="a" clase-tarjeta="tarjeta bg1")
          .row.justify-content-center.align-items-center(titulo="Fuentes primarias")
            .col-11
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-0 Información original de primera mano.
                li 
                  i.fas.fa-check
                  p.mb-0 Información original resultado del trabajo.
                li 
                  i.fas.fa-check
                  p.mb-0 Las principales fuentes de información primarias son: libros, monografías, publicaciones periódicas, documentos oficiales o informes técnicos de instituciones públicas o privadas, tesis, trabajos presentados en conferencias o seminarios, testimonios de expertos, artículos periodísticos, videos documentales y foros.        
          .row.justify-content-center.align-items-center(titulo="Fuentes secundarias")
            .col-11
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-0 Contenidos procesados de una fuente primaria.
                li 
                  i.fas.fa-check
                  p.mb-0 Producto del análisis o interpretación de una fuente de información primaria.                
          .row.justify-content-center.align-items-center(titulo="Fuentes terciarias")
            .col-11
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-0 Se utilizan para buscar datos o para obtener una idea general.
                li 
                  i.fas.fa-check
                  p.mb-0 Las principales fuentes de información terciaria son: bibliografías, almacenes, directorios, donde se encuentran las referencias de otros documentos, títulos de revistas y otras publicaciones.
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img5.svg', alt='')

    p(data-aos="fade-down") Es importante que para la selección de la fuente de información adecuada se consideren algunos criterios.        
    p(data-aos="fade-down").mb-5 De acuerdo con Rivera & Fernández (2015), los criterios para la selección de la fuente de información, están basados en tres criterios fundamentales, los cuales serán expuestos a continuación:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img6.png", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 Coherencia, pertinencia y suficiencia
            p.mb-0 Leer, entender, comparar y evaluar la información seleccionada para verificar si es coherente, pertinente, suficiente e imparcial; si existen sobre ella planteamientos o puntos de vista contrarios entre uno o más autores. Si los conceptos fundamentales se explican con claridad y profundidad suficiente, o si es necesario buscar más información.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img7.png", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 Respuesta a necesidades
            p.mb-0 Expresar conclusiones o respuestas a la necesidad de información que se pretendía resolver.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/img8.png", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 Idoneidad de las fuentes
            p.mb-0 Quienes elaboran fuentes secundarias o terciarias, son especialistas en las áreas a las que estas corresponden; por ende, se debe aprovechar al máximo, el esfuerzo.

    p(data-aos="fade-down") Cuando se tiene la información ubicada a través de las fuentes enunciadas anteriormente, es necesario desarrollar métodos para recolectar esa información de manera correcta, estos son conocidos comúnmente como técnicas de recolección de información, las cuales permiten tener un panorama integral de la información que es objeto de estudio, y respaldan el análisis de información que soportan la investigación.

    p(data-aos="fade-down") Ahora bien, la metodología es un pilar que participa de forma directa en el tratamiento de los datos, por este motivo el modelo investigativo desarrolla una serie de técnicas que le van a permitir organizar la información.

    p(data-aos="fade-down").mb-5 Previa a la selección de las técnicas de información es necesario considerar y conocer ciertas características:

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img9.png', alt='')
      .col-lg-12.my-3
        TabsC.color-acento-contenido.mb-5.tamano-tabs
          .tarjeta.color-primario--borde.p-4.my-3(titulo="La naturaleza del objeto de estudio")
            h4 La naturaleza del objeto de estudio 
            p En esta característica se deben articular los métodos para el desarrollo de la obtención de información y tipos de datos según el objeto de estudio. 
          .tarjeta.color-primario--borde.p-4.my-3(titulo="Acceso con los investigados o responsables de la información")
            h4 Acceso con los investigados o responsables de la información 
            p Se debe prever cómo se puede obtener el acceso de información que sea objeto de análisis. Es importante aplicar recursos como los consentimientos informados, ya que con ellos se podrá tener un panorama aprobado para la aplicación de instrumentos a utilizar.  
          .tarjeta.color-primario--borde.p-4.my-3(titulo="El tamaño de la población o muestra")
            h4 El tamaño de la población o muestra 
            p Con el fin de tener claridad en los datos y determinar la magnitud de los instrumentos requeridos para su análisis se debe articular la población, muestreo y determinación de la muestra, de modo que se pueda definir cuál técnica será la más favorable para el levantamiento, el tratamiento y el análisis de la información.  
          .tarjeta.color-primario--borde.p-4.my-3(titulo="Los recursos con los que cuenta y requiere la investigación")
            h4 Los recursos con los que cuenta y requiere la investigación 
            p Los recursos con que cuenta la organización, son vitales para la disposición de herramientas. Cuando hablamos de recursos, debemos tener presentes los económicos, humanos, tecnológicos, logísticos, entre muchos otros; además de estos, se debe comprender que en la investigación se pueden necesitar recursos que no se administren, y para no carecer de ellos, se deben planificar y gestionar de manera oportuna su consecución. 
          .tarjeta.color-primario--borde.p-4.my-3(titulo="La oportunidad de obtener datos")
            h4 La oportunidad de obtener datos 
            p Las variables de tiempo y oportunidad en muchas ocasiones no se planifican y son determinantes en la obtención de datos. No es lo mismo realizar levantamiento de información en trabajos de campo cuando el clima es de invierno o verano, o llegar en momentos de afectaciones empresariales al desarrollo de una entrevista; estas situaciones pueden desencadenar la concesión de recursos no proyectados.  
          .tarjeta.color-primario--borde.p-4.my-3(titulo="Tipo y naturaleza de la fuente de datos")
            h4 Tipo y naturaleza de la fuente de datos 
            p Verificar el desarrollo de la temática de los tipos de fuentes de información es la característica más importante, porque aquí se evalúa de dónde vamos a obtener la información. Esta característica permitirá focalizar de forma correcta los recursos y técnicas que se vayan a aplicar.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-primario.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Una vez analizadas las características, se estudiarán las técnicas que permitirán recolectar la información bajo métodos prácticos, estos facilitarán realizar los análisis de información en los diferentes modelos estadísticos.

    p(data-aos="fade-down").mb-5 Conozcamos cuáles son las técnicas de recolección de información:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/img10.svg', alt='Técnicas de recolección de información')

      .tarjeta.color-acento-contenido.p-3(x="9.1%" y="68.7%" numero="+")
        p Esta técnica de recolección de datos da lugar a establecer contacto con las unidades de observación por medio de los cuestionarios previamente establecidos. 
      .tarjeta.color-secundario.p-3(x="29.6%" y="33.2%" numero="+")
        p Es una situación de interrelación o diálogo entre el entrevistador y el entrevistado. Esta técnica presenta diversas modalidades: asistemática o libre, estructurada, focalizada, simultánea y sucesiva.    
      .tarjeta.color-acento-contenido.p-3(x="50.1%" y="68.7%" numero="+")
        p Una diferencia muy notoria entre esta y las otras técnicas que se están tratando, es que en estas últimas se obtienen datos de fuente primaria y, contrastando con el análisis documental, los datos se recolectan de fuentes secundarias.
      .tarjeta.color-secundario.p-3(x="70.7%" y="33.2%" numero="+")
        p Está técnica se utiliza para profundizar en el conocimiento del comportamiento de exploración. Un ejemplo claro es que en una investigación exploratoria se ha encontrado que los clientes de una empresa no están conformes con el tiempo que deben esperar para ser atendidos.         
      .tarjeta.color-acento-contenido.p-3(x="91.2%" y="68.7%" numero="+")
        p La observación experimental es una poderosa técnica de investigación científica y se diferencia de la no experimental porque elabora datos en condiciones relativamente controladas por el investigador, particularmente porque este puede manipular la o las variables. 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
