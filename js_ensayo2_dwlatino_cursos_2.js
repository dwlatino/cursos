const navegacionCurso1 = document.getElementById("navegacion_curso_1");
const navegacionSecundariaCurso1 = document.getElementById("navegacion_secundaria_curso_1");

navegacionCurso1.innerHTML = 
`
<h1>Menú de curso</h1>
	<ul>
		<a href="curso_html_2_0.html"><li>0. Introducción al curso</li></a>
		<a href="curso_html_2_1.html"><li>1. La semántica de HTML</li></a>
		<a href="curso_html_2_2.html"><li>2. Tablas en HTML</li></a>
		<a href="curso_html_2_3.html"><li>3. Formularios en HTML</li></a>
		<a href="curso_html_2_4.html"><li>4. Entradas en HTML</li></a>
		<a href="curso_html_2_5.html"><li>5. Entidades especiales en HTML</li></a>
		<a href="curso_html_2_6.html"><li>6. Sendas de archivos en HTML</li></a>
		<a href="curso_html_2_7.html"><li>7. Cuadros insertados en HTML</li></a>
		<a href="curso_html_2_8.html"><li>8. Práctica avanzada de HTML</li></a>
	</ul>
`;

navegacionSecundariaCurso1.innerHTML = 
`
<h1>Menú de curso</h1>
	<ul>
		<a href="curso_html_2_0.html"><li>0. Introducción al curso</li></a>
		<a href="curso_html_2_1.html"><li>1. La semántica de HTML</li></a>
		<a href="curso_html_2_2.html"><li>2. Tablas en HTML</li></a>
		<a href="curso_html_2_3.html"><li>3. Formularios en HTML</li></a>
		<a href="curso_html_2_4.html"><li>4. Entradas en HTML</li></a>
		<a href="curso_html_2_5.html"><li>5. Entidades especiales en HTML</li></a>
		<a href="curso_html_2_6.html"><li>6. Sendas de archivos en HTML</li></a>
		<a href="curso_html_2_7.html"><li>7. Cuadros insertados en HTML</li></a>
		<a href="curso_html_2_8.html"><li>8. Práctica avanzada de HTML</li></a>
	</ul>
`;

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

ubicacionOperable = ubicacionActual.slice(-19);
console.log(ubicacionOperable);

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

let nombresCompletosMenuOriginal = [
"0. Introducción al curso",
"1. La semántica de HTML",
"2. Tablas en HTML",
"3. Formularios en HTML",
"4. Entradas en HTML",
"5. Entidades especiales en HTML",
"6. Sendas de archivos en HTML",
"7. Cuadros insertados en HTML",
"8. Práctica avanzada de HTML",
];

let referenciasMenuOriginal = [
"curso_html_2_0.html",
"curso_html_2_1.html",
"curso_html_2_2.html",
"curso_html_2_3.html",
"curso_html_2_4.html",
"curso_html_2_5.html",
"curso_html_2_6.html",
"curso_html_2_7.html",
"curso_html_2_8.html",
];
console.log(referenciasMenuOriginal);

referenciaIdentificadaMenuOriginal = referenciasMenuOriginal.indexOf(ubicacionOperable);
console.log(referenciaIdentificadaMenuOriginal);

referenciaDiferente = `<a id='ubicacion_actual_resaltada' href="${ubicacionOperable}">${nombresCompletosMenuOriginal[referenciaIdentificadaMenuOriginal]}</a>`;
console.log(referenciaDiferente);

menuCasiCompletoParaInsertar = referenciasCasiCompletasMenuOriginal.map(i => "<a href='" + i);
console.log(menuCasiCompletoParaInsertar);

menuCasiCompletoParaInsertar.splice(referenciaIdentificadaMenuOriginal, 1, referenciaDiferente);
console.log(menuCasiCompletoParaInsertar);

const elementoDocumentoParaInsercion = document.getElementById("insertado");
elementoDocumentoParaInsercion.innerHTML = menuCasiCompletoParaInsertar.join("<br>");




















