<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo y protección de datos

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7
        .cajon.color-acento-botones.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La  legislación en Colombia está orientada a la protección integral del manejo de información y datos de carácter personal, lo anterior es definido en la Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales, procurado la protección integral de la información de la persona natural o jurídica y se busca dar un respaldo a la protección de sus datos, tomando como referencia la compilación de argumentos jurídicos. 
        p(data-aos="fade-down") Además, el país dispone de la Superintendencia de Industria y Comercio que es un es la autoridad nacional de protección de la competencia, los datos personales y la metrología legal, protege los derechos de los consumidores y administra el Sistema Nacional de Propiedad Industrial, a través del ejercicio de sus funciones administrativas y jurisdiccionales. Esta entidad define el manejo de la información personal ‘Habeas Data’ como el derecho que tiene toda persona de conocer, actualizar y rectificar la información que se haya recogido sobre ella en archivos y bancos de datos de naturaleza pública o privada. Es por ello que el tratamiento de la información es limitada, y para un manejo correcto debe velar por el cumplimiento de seis principios basados en la finalidad, restricción, temporalidad, interpretación, seguridad y confidencialidad.
 
      .col-lg-5
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/img13.png', alt='')

    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img14.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Dado lo anterior, para el acceso a la información se debe partir del cuidado de los datos y es aplicable a los diferentes ámbitos organizaciones que requieren las entidades o las personas (naturales o jurídicas); por ello es importante validar los parámetros que establece la organización y las políticas de tratamientos de información y datos personales gestionados de manera física y digital. En adición, es importante aclarar que el mecanismo digital se ha desarrollado con una constante de innovación y está presente en toda organización pues ha sido asociada al desarrollo tecnológico de la cuarta revolución industrial y a una aceleración motivada por la pandemia del SARS-CoV-2 COVID-19.

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Clasificación de los datos

    p(data-aos="fade-down") Finalmente llegamos al ejercicio de clasificar los datos, esta acción permite dar organización y secuencia lógica o funcional; en algunos escenarios los datos son limitados debido a la existencia de información restringida, pero es posible tener acceso a ella mediante los parámetros preestablecidos por la organización, y de acuerdo al cumplimiento a los requerimientos de ley. 

    p(data-aos="fade-down").mb-5 Para establecer un esquema de clasificación de los datos se debe iniciar por analizar la naturaleza organizacional y el enfoque de información que se requiere administrar y seguido de ello se debe generar esquemas integrales que se adapten a las necesidades. Por consiguiente, a continuación se exponen algunas de las generalidades a tener en cuenta:

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img15.svg', alt='')

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Recomendaciones para establecer un sistema de clasificación de datos en las organizaciones

    p(data-aos="fade-down") Ahora bien, tomando como referencia lo expuesto por AWS (2019), un sistema de clasificación de datos parte de las generalidades de lo que se pretenda organizar y a la información que se obtendrá, este ejercicio implica inventariar la naturaleza y la funcionalidad del dato, evaluar su comportamiento y nivel de riesgo; de esta forma se define el nivel requerido de protección de la información y determinando la gestión integral de los datos y su ciclo.

    p(data-aos="fade-down").mb-5 Lo invitamos a ver el siguiente video que presenta el esquema de clasificación de los datos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    p(data-aos="fade-down").mb-5 Sintetizando, una vez dispuesta la primera estandarización de las generalidades se debe implementar la clasificación de los datos con la particularidad de considerar y ponderar los beneficios de la integración de tecnologías emergentes que van surgiendo. Además, se debe tener una fase de monitoreo constante orientada a la supervisión y debe velar por la garantía de calidad de los datos, desencadenado en ejercicios de mejora continua que motiven a un proceso de integridad de la información. Así mismo, como última fase se debe tener en cuenta la revisión y ajuste bajo esquemas de periodicidad con el fin de ponderar la integralidad de todo el sistema de clasificación de los datos y la protección necesaria para la información.

    .row.justify-content-center.align-items-center   
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a desarrollar la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.                      
</template>

<script>
export default {
  name: 'Tema4',
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
