const contenidoCabecera = document.getElementById("cabecera");
const contenidoPieDePagina = document.getElementById("pie_de_pagina");
const navegacionMovil = document.getElementById("navegacion_movil");

contenidoCabecera.innerHTML =
`
<a href="index.html">
	<div id="contenedor_logo">
	  <img src="logo.svg" alt="Logo de dwlatino" style="max-width:300px">
	</div>
</a>
<div id="boton_menu_cabecera">
	<div></div>
	<div></div>
	<div></div>
</div>
<nav id="navegacion_principal">
	<ul>
		<a href="#cursos_pie_de_pagina">				
			 <li>CURSOS</li>
		 </a>
		<a href="#contacto_pie_de_pagina">				
			 <li>CONTACTO</li>
		</a>
	</ul>
</nav>
`

navegacionMovil.innerHTML = 
`
<nav
	<ul>
		<a href="#cursos_pie_de_pagina">				
			 <li>CURSOS</li>
		 </a>
		<a href="#contacto_pie_de_pagina">				
			 <li>CONTACTO</li>
		</a>
	</ul>
</nav>
`
const botonMenuCabecera = document.getElementById("boton_menu_cabecera");
botonMenuCabecera.addEventListener('click', function() {
		if(navegacionMovil.style.display == 'block') {
			navegacionMovil.style.display = 'none';
		} else {
			navegacionMovil.style.display = 'block';}
	}
);

contenidoPieDePagina.innerHTML =
`
<h2 id="cursos_pie_de_pagina">CURSOS</h2>
<a href="cursos_html_1.html">
	<p>1. Tu primer HTML</p>
</a>
<a href="cursos_html_2.html">
	<p>2. Avanzando en HTML</p>
</a>
<br>

<img src="foto_personal.png" alt="foto personal" style="max-width:250px">
<p>Me apasiona aprender y guiar a otros en su proceso de 
aprendizaje. Puedo impulsarte en tu proyecto de construirte en un front-end developer.</p>
<p>Contáctame a través de la información que encontrarás más abajo.</p>

<h2 id="contacto_pie_de_pagina">CONTACTO</h2>
<p>Correo: dwlatino.ven@gmail.com</p>
<p>Teléfono: +58 0414 728 1033</p>
<p>Whatsapp: +58 0414 728 1033</p>
<p>GitHub: dwlatino</p>
`
