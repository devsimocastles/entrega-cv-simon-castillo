// Contenedor 
const contenido_dinamico = document.querySelector(".dynamic__content");

// Iconos
const iconos = document.querySelectorAll(".fa-solid");

const contenido_perfil = `
<section class="perfil__contenido">
<header>
    <h2>Información personal</h2>
</header>
<ul class="datos">
    <li><span class="subtitulo">Nombre:</span> Jimmie Ferguson</li>
    <li><span class="subtitulo">Edad:</span> 34</li>
    <li><span class="subtitulo">Fecha de nacimiento:</span> 3/10/1988 </li>
    <li><span class="subtitulo">Nacionalidad:</span> Estadounidense</li>
    <li><span class="subtitulo">Nombre:</span> Jimmie Ferguson</li>
    <li><span class="subtitulo">Lugar de residencia:</span> Billings, Michigan, USA</li>
</section>
</ul>
</section>
`;

const contenido_contacto = `
<section class="perfil__contenido">
<header>
    <h2>Información de contacto</h2>
</header>
<ul class="datos">
    <li><span class="subtitulo">Número de teléfono:</span> +1 (653) 332-9901</li>
    <li><span class="subtitulo">Correo Electrónico: </span>jimmie.ferguson@mail.com</li>
    <li><span class="subtitulo">Twitter:</span> @jimmie_ferguson12</li>
    <li><span class="subtitulo">GitHub:</span> jimmieDev</li>
</ul>
</section>`

const contenido_portafolio = `
<section class="perfil__contenido">
<header>
    <h2>Experiencia Laboral</h2>
</header>
<ul class="datos">
    <li><span class="subtitulo">Tres años como FullStack Developer en Apple</span></li>
    <li><span class="subtitulo">6 meses como Frontend Developer en Google</span></li>
    <li><span class="subtitulo">Siete años como Frontend Developer en MercadoLibre</span></li>
    <li><span class="subtitulo">Cuatro meses como Asistente en desarrollo de Frontend en PayPal</span></li>
</ul>
</section>
`;

function cambiarContenido(event){
    const data = event.target.dataset.content
    switch (data){
        case "user":
            contenido_dinamico.innerHTML = contenido_perfil;
            break
        case "contact":
            contenido_dinamico.innerHTML = contenido_contacto
            break
        case "portfolio":
            contenido_dinamico.innerHTML = 
            contenido_portafolio
            break
    }
}

iconos.forEach(icono => icono.addEventListener("mouseover", cambiarContenido))