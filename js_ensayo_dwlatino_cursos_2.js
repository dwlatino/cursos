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


// IDENTIFICAR UBICACIÓN ACTUAL EN NAVEGADOR Y CONVERTIRLA EN UNA VARIABLE
let ubicacionActual = window.location.pathname;
console.log(ubicacionActual);

// IDENTIFICAR LONGITUD DE UBICACIÓN ACTUAL
console.log(ubicacionActual.length);

// MODIFICAR UBICACIÓN ACTUAL PARA COINCIDIR CON ELEMENTOS DEL ARRAY
let ubicacionActualOperable = ubicacionActual.slice(-19);
console.log(ubicacionActualOperable);

// CREAR ARRAY CON UBICACIONES DEL CURSO
let UbicacionesOriginalesCurso1 = [
"0. Introducción al curso",
"1. La semántica de HTML",
"2. Tablas en HTML",
"3. Formularios en HTML",
"4. Entradas en HTML",
"5. Entidades especiales en HTML",
"6. Sendas de archivos en HTML",
"7. Cuadros insertados en HTML",
"8. Práctica avanzada de HTML"];

let UbicacionesOriginalesCurso2 = [
"curso_html_2_0.html", 
"curso_html_2_1.html", 
"curso_html_2_2.html", 
"curso_html_2_3.html", 
"curso_html_2_4.html", 
"curso_html_2_5.html", 
"curso_html_2_6.html",
"curso_html_2_7.html",
"curso_html_2_8.html"];
console.log(UbicacionesOriginalesCurso2);

// RECORRER ARREGLO PARA IDENTIFICAR UBICACION COINCIDENTE CON UBICACION ACTUAL
let ubicacionCoincidente = UbicacionesOriginalesCurso2.indexOf(ubicacionActualOperable);
console.log(ubicacionCoincidente);

// NUEVA VARIABLE CON ID MODIFICADO
let ubicacionDiferente = `<a id="ubicacion_actual_resaltada" href="${ubicacionActualOperable}">a</a>`;
console.log(ubicacionDiferente);

// CAMBIAR EL ARRAY ORGINAL PREPARÁNDOLO PARA INSERTAR COMO HTML
UbicacionesOriginalesCurso2 = UbicacionesOriginalesCurso2.map(function (i) {
		return `<a href='${i}'>${UbicacionesOriginalesCurso1}</a>`
	}
);
console.log(UbicacionesOriginalesCurso2);

// NUEVOA ARRAY CON UBIICACION DIFERENTE
UbicacionesOriginalesCurso2.splice(ubicacionCoincidente, 1, ubicacionDiferente);
console.log(UbicacionesOriginalesCurso2);

// RECORRER ARREGLO PARA IDENTIFICAR UBICACION COINCIDENTE CON UBICACION ACTUAL
const parrafoDeInsercion = document.getElementById("insertado");
parrafoDeInsercion.innerHTML = UbicacionesOriginalesCurso2.join("<br>");




















