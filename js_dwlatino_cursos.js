const portadaCurso1 = document.getElementById("portada_curso_1");
portadaCurso1.innerHTML =
`<img src="img_html5_logo_seeklogo.com.svg" alt="logo de html5" style="max-width:225px">
<h1>HTML<br> el lenguaje de construcción de la web.</h1>
<a href="#contenido_curso">
	<button>comenzar</button>
</a>`;

/*SENDA Y LONGITUD DE UBIACIÓN ACTUAL*/
const ubicacionActual=window.location.pathname;

/*HREF DE UBIACIÓN ACTUAL PARA VINCULAR AL DOCUMENTO RESPECTIVO*/
const ubicacionActualRecortada=ubicacionActual.slice(-19, 49);

/*CADENA DE HREFS A INSERTAR*/
const listaDeHrefsOriginales=[
"curso_html_1_0.html",
"curso_html_1_1.html",
"curso_html_1_2.html",
"curso_html_1_3.html",
"curso_html_1_4.html",
"curso_html_1_5.html",
"curso_html_1_6.html"];
/*COMPROBAR COINCIDENCIA DE UBICACIÓN ACTUAL CON ÍNDICE DE MENÚ*/
const ubicacionCoincidente=listaDeHrefsOriginales.indexOf(ubicacionActualRecortada);

/*CADENA SOLO CON NOMBRES DE CURSOS*/
const listaSoloConNombres=[
"0. Introducción al curso",
"1. Tu primer documento HTML",
"2. Tus primeros elementos en HTML",
"3. Tu primer 'head' en HTML",
"4. Tu primer 'body' en HTML",
"5. Tu primer formateado en HTML",
"6. Tu primera web en HTML"];
const nombreCoincidente=listaSoloConNombres[ubicacionCoincidente];

/*CADENA DE NOMBRES DE CURSOS A INSERTAR*/
const listaConNombresYhrefs=[
"curso_html_1_0.html'>0. Introducción al curso</a>",
"curso_html_1_1.html'>1. Tu primer documento HTML</a>",
"curso_html_1_2.html'>2. Tus primeros elementos en HTML</a>",
"curso_html_1_3.html'>3. Tu primer 'head' en HTML</a>",
"curso_html_1_4.html'>4. Tu primer 'body' en HTML</a>",
"curso_html_1_5.html'>5. Tu primer formateado en HTML</a>",
"curso_html_1_6.html'>6. Tu primera web en HTML</a>"];	

/*GENERACIÓN DE LISTA PREELIMINAR PARA INSERTAR*/
const listaCasiParaInsertar=listaConNombresYhrefs.map(a => "<a href='" + a);

/*HREF EDITADA PARA INSERTAR EN CADENA DE CURSOS*/
const ubicacionActualRecortadaParaInsertar=`<a id='ubicacion_actual_resaltada' href='${ubicacionActualRecortada}'>${nombreCoincidente}</a>`;

/*GENERACIÓN DE LISTA DEFINITIVA PARA INSERTAR*/
listaCasiParaInsertar.splice(ubicacionCoincidente, 1, ubicacionActualRecortadaParaInsertar);

/*UBICACIONES PARA INSERTAR*/
const navegacionCurso1 = document.getElementById("navegacion_curso_1");
const navegacionSecundariaCurso1 = document.getElementById("navegacion_secundaria_curso_1");
/*INSERCIÓN DE NUEVA LISTA DINÁMICA*/
navegacionCurso1.innerHTML = listaCasiParaInsertar.join("<br>");
navegacionSecundariaCurso1.innerHTML =listaCasiParaInsertar.join("<br>");




