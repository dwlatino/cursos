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
		<a href="curso_html_2_3.html"><li>4. Entradas en HTML</li></a>
		<a href="curso_html_2_4.html"><li>5. Entidades especiales en HTML</li></a>
		<a href="curso_html_2_5.html"><li>6. Sendas de archivos en HTML</li></a>
		<a href="curso_html_2_6.html"><li>7. Cuadros insertados en HTML</li></a>
		<a href="curso_html_2_7.html"><li>8. Práctica avanzada de HTML</li></a>
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
		<a href="curso_html_2_3.html"><li>4. Entradas en HTML</li></a>
		<a href="curso_html_2_4.html"><li>5. Entidades especiales en HTML</li></a>
		<a href="curso_html_2_5.html"><li>6. Sendas de archivos en HTML</li></a>
		<a href="curso_html_2_6.html"><li>7. Cuadros insertados en HTML</li></a>
		<a href="curso_html_2_7.html"><li>8. Práctica avanzada de HTML</li></a>
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
"curso_html_2_7.html"];
console.log(listaDeUbicacionesCurso2);























