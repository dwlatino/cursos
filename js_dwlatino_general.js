const contenidoCabecera = document.getElementById("cabecera");
const contenidoPieDePagina = document.getElementById("pie_de_pagina");
const navegacionMovil = document.getElementById("navegacion_movil");

contenidoCabecera.innerHTML =
`
<a href="index.html">
	<div id="contenedor_logo">
	  <img src="img_logo.svg" alt="Logo de dwlatino" style="max-width:300px">
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
<h3 id="cursos_pie_de_pagina">CURSOS</h3>
<a href="curso_html_1_0.html">
	<p>1. Tu primer HTML</p>
</a>
<a href="curso_html_2_0.html">
	<p>2. Avanzando en HTML</p>
</a>
<br>


<img src="img_foto_personal.png" alt="foto personal" style="max-width:250px">
<p>Me apasiona aprender y guiar a otros. Puedo impulsarte en tu proyecto de convertirte en un front-end developer.</p>
<p>Contáctame a través de la información que encontrarás más abajo.</p>
<hr>
<br>	

<h3 id="contacto_pie_de_pagina">CONTACTO</h3>
<ul>
<li><b>Correo:</b> dwlatino.ven@gmail.com</li>
<li><b>Teléfono:</b> +58 0414 728 1033</li>
<li><b>Whatsapp:</b> +58 0414 728 1033</li>
<li><b>GitHub:</b> dwlatino</li>
</ul>
`
