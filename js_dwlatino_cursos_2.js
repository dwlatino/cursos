const portadaCurso1 = document.getElementById("portada_curso_1");
portadaCurso1.innerHTML =
`
<img src="img_html5_logo_seeklogo.com.svg" alt="logo de html5" style="max-width:225px">
<h1>HTML<br> el lenguaje de construcción de la web.</h1>
<a href="#contenido_curso">
	<button>comenzar</button>
</a>
`;

let ubicacionActual = window.location.pathname;
console.log(ubicacionActual);
console.log(ubicacionActual.length);
let ubicacionActualOperable = ubicacionActual.slice(-19);
console.log(ubicacionActualOperable);

let listaDeUbicacionesCurso2 = [
"curso_html_2_0.html", 
"curso_html_2_1.html", 
"curso_html_2_2.html", 
"curso_html_2_3.html", 
"curso_html_2_4.html", 
"curso_html_2_5.html", 
"curso_html_2_6.html",
"curso_html_2_7.html",
"curso_html_2_8.html"];
console.log(listaDeUbicacionesCurso2);

ubicacionDeCursoActual=listaDeUbicacionesCurso2.indexOf(ubicacionActualOperable);
console.log(ubicacionDeCursoActual);

const menuVisible=[
"0. Introducción al curso",
"1. La semántica de HTML",
"2. Tablas en HTML",
"3. Formularios en HTML",
"4. Entradas en HTML",
"5. Entidades especiales en HTML",
"6. Sendas de archivos en HTML",
"7. Cuadros insertados en HTML",
"8. Práctica avanzada de HTML"];

const referenciaDiferente=`<a id='ubicacion_actual_resaltada' href='${listaDeUbicacionesCurso2[ubicacionDeCursoActual]}'>${menuVisible[ubicacionDeCursoActual]}</a>`;
console.log(referenciaDiferente);

let referenciasCasiCompletasMenuOriginal = [
"curso_html_2_0.html'>0. Introducción al curso</a>",
"curso_html_2_1.html'>1. La semántica de HTML</a>",
"curso_html_2_2.html'>2. Tablas en HTML</a>",
"curso_html_2_3.html'>3. Formularios en HTML</a>",
"curso_html_2_4.html'>4. Entradas en HTML</a>",
"curso_html_2_5.html'>5. Entidades especiales en HTML</a>",
"curso_html_2_6.html'>6. Sendas de archivos en HTML</a>",
"curso_html_2_7.html'>7. Cuadros insertados en HTML</a>",
"curso_html_2_8.html'>8. Práctica avanzada de HTML</a>",
];

const menuParaInsertar=referenciasCasiCompletasMenuOriginal.map(i => "<a href='" + i);
console.log(menuParaInsertar);

menuParaInsertar.splice(ubicacionDeCursoActual, 1, referenciaDiferente);
console.log(menuParaInsertar);

const navegacionCurso1= document.getElementById("navegacion_curso_1");
const navegacionSecundariaCurso1= document.getElementById("navegacion_secundaria_curso_1");
navegacionCurso1.innerHTML=menuParaInsertar.join("<br>");
navegacionSecundariaCurso1.innerHTML=menuParaInsertar.join("<br>");























