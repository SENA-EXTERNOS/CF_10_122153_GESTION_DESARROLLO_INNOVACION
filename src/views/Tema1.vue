<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Datos
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img2.svg', alt='')               
      .col-lg-7
        p(data-aos="fade-down") Para empezar, hagamos la siguiente pregunta: ¿qué hacen las organizaciones para reconocer la denominación de los registros? 
        .cajon.color-acento-botones.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Como respuesta, afirmaríamos que ellas se han orientado al almacenamiento de todo tipo de información reconocida y dispuesta a ser funcional, estos datos los traducen en variables de información para ser analizadas e interpretadas bajo componentes estadísticos, los cuales son un insumo transcendental en el enfoque organizacional.
        p(data-aos="fade-down") En el entorno actual el manejo adecuado de los datos permite realizar proyecciones, marcar objetivos, reconocer brechas, identificar y evaluar la gestión de los resultados, entre otras necesidades que surjan en el mercado; y es así como las organizaciones que administran, manejan y analizan de forma responsable los datos tienen altas posibilidades de sobresalir en los segmentos donde ofertan sus servicios o funciones, bien sean organizaciones de ámbito público, privado, con ánimo, o sin ánimo de lucro.  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Por consiguiente, para que la identificación de los datos se convierta en una acción que genere valor a la organización se debe partir respondiendo a la pregunta: ¿qué es lo que se quiere analizar?, ya que los datos recopilados por sí mismos, en muchas ocasiones, no tienen sentido y generan reprocesos en la ejecución de actividades; es por ello que la selección correcta de los datos y el medio de obtención son trascendentales para la toma de decisiones, además estos deben estar de acuerdo con la necesidades trazadas dentro de la organización.  

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Tipos de datos y agrupación 
    p(data-aos="fade-down") La caracterización de esos datos parte de la naturalidad de la obtención de los mismos y son definidos como cualitativos o cuantitativos. Los primeros se agrupan en dicotómicos o politómicos y los segundos en continuos o discretos; cabe aclarar que en los datos cualitativos los sujetos se pueden clasificar sin ningún orden. 
    p(data-aos="fade-down").mb-5 Para mayor comprensión se presenta la siguiente gráfica: 
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Principios de clasificación de los datos e información 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Las organizaciones con el objetivo de gestionar integralmente la información han volcado sus esfuerzos en la clasificación de los datos, este ordenamiento varía particularmente en el tipo de organización y su oferta de servicios; así como también en los procesos y procedimientos que desarrolle para el cumplimiento de su misión.   

    p(data-aos="fade-down").mb-5 Para que el desarrollo correcto de la clasificación de datos se realice correctamente se sugiere seguir los principios establecidos por American Welding Society (AWS). El siguiente esquema está basado en Data Classification (2019, AWS) y explica los seis principios fundamentales para la categorización de los datos, “estos deben usarse como punto de referencia permanente en la construcción y/o refinamiento de una gestión de la información y estrategia de clasificación de datos.” (p. 7)i  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/img4.svg', alt='Principios de clasificación de los datos')

          .tarjeta.color-secundario.p-3(x="23%" y="12.5%" numero="+")
            h4 Enfoque de gestión de riesgos 
            p En la actualidad, el manejo de los datos debe protegerse de acuerdo con el nivel con el nivel de sensibilidad, valor y criticidad de la información; así mismo se manejar criterios de niveles de riesgo y sensibilidad, para la administración de mecanismos de protección y reserva. 
          .tarjeta.color-acento-contenido.p-3(x="17.5%" y="50%" numero="+")
            h4 Datos con contenido y neutral
            p Los datos deben poder ser clasificados de acuerdo con su contenido, dado que puede generar sensibilidad en el manejo de la información. Además deben tener carácter de generalidades y no de particularidades independientemente del modelo de obtención. No debe haber ninguna discriminación basada en el formato o soporte de la información.
          .tarjeta.color-secundario.p-3(x="22%" y="86%" numero="+") 
            h4 Apertura, transparencia y valores sociales
            p La clasificación parte de la utilización detallada y precavida, la cual debe ser tratada de manera sensible, con respeto y tacto por la importancia y criticidad de la información. Para ello, la clasificación debe tener una objetividad ética y diferenciada a sus canales de acceso, buscando siempre la integridad y transparencia para el manejo de todo.

          .tarjeta.color-acento-contenido.p-3(x="76.5%" y="12.5%" numero="+")
            h4 Proporcionalidad 
            p La administración de los datos, el almacenamiento y el manejo de la información física o digital deben ser proporcionales al objetivo organizacional y a los históricos, que en algunos casos pueden ser regulados por la ley o por las capacidades económicas. 
          .tarjeta.color-secundario.p-3(x="81.5%" y="50%" numero="+")
            h4 Funciones y responsabilidades  
            p Es importante tener la claridad de la funcionalidad y la oportunidad que puede brindar el dato y la información que contiene, ya que de acuerdo con el mecanismo de acceso se puede entregar información objetiva o sensible de acuerdo al nivel requerido y autorizado. 
            
          .tarjeta.color-acento-contenido.p-3(x="77%" y="86%" numero="+") 
            h4 Enfoque del ciclo de vida 
            p Generar un esquema de inicio y enfoque del dato permitirá la objetividad de la información que contiene; no obstante, la vida útil del dato es de carácter trascendental para la oportunidad de la información. Por consiguiente, para su almacenamiento se debe contar con criterios de conservación, respaldo y evaluación del momento de eliminación bajo términos, protocolos y criterios establecidos.         

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
