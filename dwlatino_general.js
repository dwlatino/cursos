const contenidoCabecera = document.getElementById("cabecera");
const contenidoPieDePagina = document.getElementById("pie_de_pagina");

contenidoCabecera.innerHTML =
`
<a href="index.html">
<div id="logo">
  <img src="logo.svg">
</div>
</a>
<nav id="navegacion_principal">
  <ul>
    <a href="#cursos_pie_de_pagina">				
      <li>
      CURSOS
      </li>
    </a>
    <a href="#bio_pie_de_pagina">				
      <li>
      INFORMACIÓN
      </li>
    </a>
    <a href="#pie_de_pagina">				
      <li>
      CONTACTO
      </li>
    </a>
  </ul>
</nav>
`
contenidoPieDePagina.innerHTML =
`
<h2>
CONTÁCTANOS
</h2>
<p>
Correo: dwlatino.ven@gmail.com
</p>
<p>
Teléfono: +58 0414 728 1033
</p>
<p>
Whatsapp: +58 0414 728 1033
</p>
<p>
GitHub: dwlatino
</p>
<br>
<p></p>
<h2 id="cursos_pie_de_pagina">
CURSOS
</h2>
<a href="cursos_html.html">
	<p>
	Tu primer HTML
	</p>
</a>
<a href="cursos_html.html">
	<p>
	Avanzando en HTML
	</p>
</a>
<a href="cursos_html.html">
	<p>
	HTML intensivo
	</p>
</a>
<br>
<p></p>
<h2 id="bio_pie_de_pagina">
BIO
</h2>
<img src="foto_personal.png" alt="foto personal" width="100%">
<p>
Estudié arquitectura en la Universidad de los Andes, enfocándome en áreas 
de digitalización y modelado de edificaciones.
</p>
<p>
Mi trasfondo técnico-artístico junto a mi interés en el 
trabajo remoto me guió a la programación web.
</p>
<p>
Aprendí front-end development a través de tutoriales, 
aplicaciones móviles y mucho "sudor y lágrimas".
</p>
<p>
Me apasiona aprender y guiar a otros en su proceso de 
aprendizaje. Puedo impulsarte en tu proyecto de construirte en un front-end developer.
</p>
<p>
contáctame a través de la información publicada en el incio de éste 
pie de página.
</p>

`
