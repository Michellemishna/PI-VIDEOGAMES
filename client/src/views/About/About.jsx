import React from "react";
import style from "./About.module.css"

const About = ()=> {
    
    return(
        <div className={style.About}>
            <h1 >Welcome to About</h1>
            <p>Bienvenido a esta página web de videojuegos: un lugar donde podrás explorar y disfrutar de una amplia variedad de títulos de la manera más fácil y conveniente posible. He creado esta plataforma como proyecto individual en Henry dirigida a los apasionados del mundo de los videojuegos, ofreciendo una experiencia completa y enriquecedora.</p><br />
            <p>Esta página web se conecta a una API que recopila información sobre todos los videojuegos disponibles. Esto nos permite brindarte una extensa colección de juegos, todos en un solo lugar. Cada juego se presenta en una tarjeta que muestra el nombre del juego, una imagen de referencia atractiva y su rating según las calificaciones recibidas. Con un simple clic en el nombre del juego, podrás acceder a una página detallada con toda la información relevante.
Pero no nos detenemos ahí. Sabemos que los jugadores también tienen ideas creativas y desean contribuir con sus propios videojuegos. Por eso, hemos habilitado la opción de crear y guardar videojuegos nuevos directamente en nuestra base de datos. ¡La imaginación es el límite! Así que si tienes una idea genial para un nuevo juego, podrás materializarla y compartirlo con otros entusiastas de los videojuegos.</p> <br />
        <p>Entendemos que la búsqueda de juegos específicos puede resultar abrumadora dada la gran cantidad de opciones disponibles. Para facilitar tu experiencia, hemos incorporado una columna de búsqueda que te permitirá encontrar rápidamente los juegos que más te interesan. Además, estos filtros te permiten ordenar los juegos alfabéticamente, por género y por tipo de almacenamiento (API o base de datos), brindándote opciones de personalización y control sobre tus preferencias.</p> <br />
        <p>Esta página web está diseñada para ser intuitiva, accesible y entretenida. Queremos que disfrutes de la exploración y descubrimiento de nuevos videojuegos, al tiempo que te brindamos las herramientas necesarias para crear tus propias experiencias digitales. Únete a nuestra comunidad y sumérgete en un mundo lleno de aventuras, competencias y diversión sin límites.</p><br />
        <p>¡Esperamos que disfrutes de tu estancia en esta página web de videojuegos y que encuentres todo lo que buscas y más! Si tienes alguna pregunta o necesitas asistencia, en la barra de navegación encontraras mi información de contacto, estare encantada de ayudarte!.</p>
        </div>
    )
}

export default About;
