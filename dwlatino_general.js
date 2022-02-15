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
    <a href="#curso_html">				
      <li>
      CURSOS
      </li>
    </a>
    <a href="#bio">				
      <li>
      EQUIPO
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
<p>
CONTÁCTANOS
</p>
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
`
