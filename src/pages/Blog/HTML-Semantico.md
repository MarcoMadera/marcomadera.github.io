# HTML Semántico

Esta semana estuvo rondando por mi cabeza un comentario que no sé si entendí del todo bien, lo lei en twitter sobre que debemos crear páginas web que sean leídas por humanos, no para robots, citando a google además, no pude encontrar la referencia, pero estoy  seguro que ya lo había leído en pasadas ocasiones. Considerando los siguientes bloques de código esto aplica?


<div style="display: block;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0.5rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: var(--general-font-family);">¿Esto es un título?</div>


<h2>¿Esto es un título?</h2>

Esto luce exactamente igual, pero cómo sabemos si un robot lo lee igual?
Algo sencillo de hacer es abrir el lector de pantalla con <kbd>Cmd</kbd> + <kbd>F5</kbd> en Mac o con <kbd>ctrl</kbd> + <kbd>win</kbd> + <kbd>enter</kbd> en Windows y escuchar como lo lee. 

## ¿Qué es HTML Semántico?
<p><dfn id="-que-es-html-semantico-">HTML Semántico</dfn> es el uso de <abbr title="Hyper Text Markup Language">HTML</abbr>, pero con etiquetas, atributos y valores coherentes al contenido y estructura de nuestras páginas para que tengan un mayor significado.</p>

El uso de estas etiquetas permiten a los procesadores de HTML, usar nuestro contenido en otros contextos, por ejemplo, si una persona quiere cambiar el color de todos los parrafos a rojo, o un motor de búsqueda que quiera recolectar solo el título de nuestra página para mostrarlo.

-------

## Ventajas
- Es importante para el SEO, los motores de búsqueda pueden encontrar la información más relevante para poder posicionar mejor el sitio.
- Es usado para [accesibilidad web](https://marcomadera.com/blog/accesibilidad-web/#html-semantico)
- Es fácil de entender sin esfuerzo desde la estructura al contenido, por motivos de trabajo tengo que usar una web desactualizada en internet explorer 8 casi a diario y es horrible tener que encontrar elementos entre divs y tablas.

-----

## Estructura

<style>.section {
    display: grid;
    grid-template: 50px 70px 300px 70px / 1fr 2fr;
    gap: 15px 15px;
    height: fit-content;
    border-radius: 10px;
  }
  .header {
    background: #eddfa9;
    grid-area: 2 / 1 / 3 / 3;
    border-radius: 10px;
    
  }
  .nav {
    background: #edcfa9;
    grid-area: 1 / 1 / 2 / 3;
    border-radius: 10px;
  }
  .aside {
    grid-area: 3 / 1 / 4 / 2;
    background: #e89f71;
    border-radius: 10px;
  }
  .main {
    grid-area: 3 / 2 / 4 / 3;
    background: #d57149;
    min-height: auto;
    position: relative;
    border-radius: 10px;
  }
  .footer {
    grid-area: 4 / 1 / 5 / 3;
    background: #aa4a30;
    border-radius: 10px;
  }
  .article{
    padding: 10px;
    margin: 10px;
    background: #d5d149;
    border-radius: 10px;
  }
  .article_header{
    display: block !important;
    background: #eddfa9;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  .article_p{
    margin: 0;
  }
  .article_section{
    background: #daa149;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  .article_title{
    margin: 0;
  }
  .article_footer{
    background: #aa4a30;
    padding: 10px;
    border-radius: 10px;
  }
  .main_section{
    background: #dfa149;
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }</style>

<section class="section">
  <nav class="nav">
    <p>< Nav ></p>
  </nav>
  <header class="header">
    <p>< Header ></p>
  </header>
  <aside class="aside"><p>< Aside ></p></aside>
  <main class="main">
    <article class="article">
      <header class="article_header">
        <p class="article_p">< Header ></p>
      </header>
      <section class="article_section">
        <h3 class="article_title">< Section ></h3>
        <p class="article_p">Texto</p>
      </section>
      <footer class="article_footer">&copy; < Footer ></footer>
    </article>
    <section class="main_section">
      <h3 class="article_title">< Section ></h3>
      <p class="article_p">Texto</p>
    </section>
  </main>
  <footer class="footer">< Footer ></footer>
</section>

```HTML
<body>
  <nav><nav>
  <header></header>
  <aside></aside>
  <main>
    <article>
      <header></header>
      <section>
        <h1></h1>
        <p></p>
      </section>
      <footer></footer>
    </article>
    <section>
        <h1></h1>
        <p></p>
    </section>
  </main>
  <footer></footer>
</body>

<!-- No necesariamente tiene que seguir esta estructura -->
```

### main
Esta etiqueta señala al contenido principal de la página, solo puede existir una etiqueta de este tipo visible por página 
### section
Representa a un contenido genérico en un documento donde no es similar a otro elemento
### nav
Es la etiqueta diseñada para identificar los enlaces de navegación, puede haber varías secciones de navegación en una página, no todos los enlaces necesitan de ir dentro de una etiqueta nav
### article
Se usa esta etiqueta cuando hay contenido repetitivo e independiente, puede tener también header footer y section.
### aside
Esta es una etiqueta que designa un área en la cual hay información suplementaria al contenido principal
### header
Agrupa la introducción de la página.
### footer
El pie de página suele ser usado para añadir información extra sobre la página, el autor, copyright, avisos legales navegación, etc.


-----

### Títulos de cabecera
Estos van desde el rango h1 a h6, donde el h1 es el más importante y deben de ir en orden descendente en cada secuencia, usualmente el user-agent de los navegadores los estilan h1 como el más grande de tamaño.

Se espera tener contenido después de un título, poner varios títulos seguidos existe la etiqueta `<hgroup>` que indica un grupo de títulos.

<hgroup><h1>h1</h1><h6>h6</h6></hgroup>

```HTML
</hgroup>
  <h1>h1</h1>
  <h6>h6</h6>
</hgroup>
```

### address
Como su nombre lo dice, se usa para información de contacto.

<address>
Escrito por <a href="mailto:ejemplo@ejemplo.com">Nombre</a>.<br>
Visitanos en:<br>
Ejemplo.com<br>
Dirección<br>
</address>

```HTML
<address>
Escrito por <a href="mailto:ejemplo@ejemplo.com">Nombre</a>.<br>
Visitanos en:<br>
Ejemplo.com<br>
Dirección<br>
</address>
```

## Modificadores de texto

### Énfasís

<em>Esto es énfasis</em>

```HTML
<p>
  <em>Esto es énfasis</em>
</p>
```

### Marcado

<mark>Esto es una parte marcada porque es relevante</mark>

```HTML
<p>
  <mark>Esto es una parte marcada porque es relevante</mark>
</p>
```

### Strong

<strong>Esto es negro porque es importante</strong>

```HTML
<p>
  <strong>Esto es negro porque es importante</strong>
</p>
```

------

## Saltos

### wbr
Esta etiqueta sirve para indicar dónde está bien que suceda un salto de línea, permite separar de manera correcta palabras largas o enlaces sin que el contenido se desajuste.

<p>¿que-<wbr>pasaría-<wbr>si-<wbr>no-<wbr>quisieramos-<wbr>usar-<wbr>espacios-<wbr>entre-<wbr>palabras-<wbr>y-<wbr>no-<wbr>queremos-<wbr>que-<wbr>nuestra-<wbr>aplicación-<wbr>tenga-<wbr>overflow-<wbr>al-<wbr>verla-<wbr>en-<wbr>un-<wbr>celular-<wbr>o-<wbr>si-<wbr>tenemos-<wbr>una-<wbr>url-<wbr>como-<wbr>esta:<wbr>http://marco<wbr>madera<wbr>.com</p>

```HTML
<p>¿que-<wbr>pasaría-<wbr>si-<wbr>no-<wbr>quisieramos-<wbr>usar-<wbr>espacios-<wbr>entre-<wbr>palabras-<wbr>y-<wbr>no-<wbr>queremos-<wbr>que-<wbr>nuestra-<wbr>aplicación-<wbr>tenga-<wbr>overflow-<wbr>al-<wbr>verla-<wbr>en-<wbr>un-<wbr>celular-<wbr>o-<wbr>si-<wbr>tenemos-<wbr>una-<wbr>url-<wbr>como-<wbr>esta:<wbr>http://marco<wbr>madera<wbr>.com</p>
```

### hr
Representa una regla horizontal, un salto de tema en una sección.

<p>Texto</p> <hr /> <p>Texto</p>

```HTML
<p>Texto</p>
<hr />
<p>Texto</p>
```

-----

## Acotaciones

### blockquote

<blockquote>Bloque acotado</blockquote>

```HTML
<blockquote>Bloque acotado</blockquote>
```

### q

<q cite="https://example.com">Cuota</q>

```HTML
<q cite="https://example.com">Cuota.</q>
```

### cite

<q>Cita de texto</q> <cite>— Nombre del autor</cite>

```HTML
<q>Cita de texto</q> <cite>— Nombre del autor</cite>
```

------

## Abreviaciones y Definiciones

### Abreviación

Esto es una <abbr title="abreviación">abbr</abbr>.

```HTML
<p>Esto es una <abbr title="abreviación">abbr</abbr>.</p>
```


### Definición

<p><dfn>HTML Semántico</dfn> es el uso de <abbr title="Hyper Text Markup Language">HTML</abbr>, pero con etiquetas.</p>

```HTML
<p>
  <dfn>HTML Semántico</dfn> es el uso de 
  <abbr title="Hyper Text Markup Language">HTML</abbr>, pero con etiquetas.
</p>
```

### Diálogos

Recibe un atributo open, si no está indicado, no es mostrado.

<dialog open><p>Esto es un cuadro de diálogo</p></dialog>

&nbsp;

&nbsp;

&nbsp;

```HTML
<dialog open><p>Esto es un cuadro de diálogo</p></dialog>
```

### Detalles

Al igual que los diálogos recibe un atributo open para que pueda estar por defecto abierto.



<details>
  <summary>Elemento</summary>
  <p>Contenido del elemento</p>
</details>

```HTML
<details>
  <summary>Elemento</summary>
  <p>Contenido del elemento</p>
</details>
```

------

## Imágenes

### Img

<img
  src="https://picsum.photos/100"
  alt="Imagen"
/>

```HTML 
<img
  src="https://picsum.photos/100"
  alt="Imagen"
/>
```

### Figure
Figure es una etiqueta de flujo de contenido, puede ser imagen, video, diagrama, código, una cita, etc, puede estar acompañado por la etiqueta figcaption que es la leyenda del contenido.

<figure>
  <img src="https://picsum.photos/200" alt="Figura">
  <figcaption>Imagen Aleatoria</figcaption>
</figure>

```HTML
<figure>
  <img src="https://picsum.photos/200" alt="Figura">
  <figcaption>Imagen Aleatoria</figcaption>
</figure>
```

### Picture
La etiqueta source puede tener el atributo de cualquier media query, por lo tanto se puede customizar imagenes especiales para modo oscuro, puedes probar reescalar la imagen

<picture>
  <source srcSet="https://picsum.photos/100" media="(max-width: 500px)" />
  <source srcSet="https://picsum.photos/200" media="(max-width: 876px)" />
  <img
    src="https://picsum.photos/300"
    alt="Imagen Adaptable"
  />
</picture>

```HTML 
<picture>
  <source srcSet="https://picsum.photos/100" media="(max-width: 500px)" />
  <source srcSet="https://picsum.photos/200" media="(max-width: 876px)" />
  <img
    src="https://picsum.photos/300"
    alt="Imagen Adaptable"
  />
</picture>
```

--------

## Formularios de entrada
Hay diversos tipos de entrada, button, checkbox, date, email, password, range, text, entre otros, la mayoría se pueden tan fácil como lo siguiente.
#### Color

<input type="color">

```HTML
<input type="color">
```

#### Números

<input type="number" min="1" max="5" />

```HTML
<input type="number" min="1" max="5" />
```

------

## Barras

#### meter
La etiqueta meter es utilizada como indicador de una escala conocida, así que cuando el indicador está en un punto específico, puede variar los colores.

<meter min="10" max="20" value="18">18 puntos</meter>

```HTML
<meter min="10" max="20" value="18">18 puntos</meter>
```

### progress
La barra de progreso es utilizada para mostrar el avance de una tarea. Existen dos valores indeterminada y determinada
<p>Determinada:</p>

<progress value="66" max="100">Determinate</progress>

<p>Indeterminada:</p>

<progress>Indeterminada</progress>

```HTML
<p>Determinada:</p>

<progress value="66" max="100">Determinada</progress>

<p>Indeterminada:</p>

<progress>Indeterminada</progress>
```

### Select
La etiqueta `<select>` nos da la oportunidad de hacer listas despegables que pueden contener la etiqueta `<optgroup>` para agrupar entre opciones.

<select name="elementos">
<optgroup label="Grupo 1">
  <option value="elemento1">Elemento1</option>
  <option value="elemento2">Elemento2</option>
  </optgroup>
  <optgroup label="Grupo 2">
  <option value="elemento3">Elemento3</option>
  <option value="elemento4">Elemento4</option>
  </optgroup>
</select>

```HTML
<select name="elementos">
  <optgroup label="Grupo 1">
    <option value="elemento1">Elemento1</option>
    <option value="elemento2">Elemento2</option>
  </optgroup>
  <optgroup label="Grupo 2">
    <option value="elemento3">Elemento3</option>
    <option value="elemento4">Elemento4</option>
  </optgroup>
</select>
```

------

## Listas
En las listas el orden puede importar representado por `<ol>` o no representado por `<ul>`, debe de tener como hijo al menos un elemento de lista `<li>`

<p>Lista ordenada</p>
<ol>
 <li>objeto1
 <li>objeto2
 <li>objeto3
 <li>objeto4
</ol>

```HTML
<p>Lista ordenada</p>
<ol>
 <li>objeto1
 <li>objeto2
 <li>objeto3
 <li>objeto4
</ol>
```

<p>Lista sin orden</p>
<ul>
 <li>objeto1
 <li>objeto2
 <li>objeto3
 <li>objeto4
</ul>

```HTML
<p>Lista sin orden</p>
<ul>
 <li>objeto1
 <li>objeto2
 <li>objeto3
 <li>objeto4
</ul>
```

------

## Tablas 

<table><caption>Precio de cosas</caption><colgroup><col span="0" style="background-color:#e0ece4"><col span="1" style="background-color:#ebecf1"><col span="2" style="background-color:#f1f3de"></colgroup><thead><tr><th>Nombre</th><th>Precio</th><th>IVA</th></tr></thead><tbody><tr><td>Elemento 1</td><td>100</td><td>12</td></tr><tr><td>Elemento 2</td><td>200</td><td>24</td></tr></tbody><tfoot><tr><td>Total</td><td colspan="2" style="background-color:#e0ece4">$336</td></tr></tfoot></table>

```HTML
<table>
  <caption>Precio de cosas</caption>
  <colgroup>
    <col span="0" style="background-color:#e0ece4">
    <col span="1" style="background-color:#ebecf1">
    <col span="2" style="background-color:#f1f3de">
  </colgroup>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>IVA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Elemento 1</td>
      <td>100</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Elemento 2</td>
      <td>200</td>
      <td>24</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td colspan="2" style="background-color:#e0ece4">$336</td>
    </tr>
  </tfoot>
</table>
```

-------

## Conclusiones
Hemos cubierto varias etiquetas de HTML semántico y escribir con él es mucho más legible y limpio que escribir con solo divs, siempre y cuando sea apropiado. Los elementos mostrados son pocos de todos los que existen, es importante conocerlos y usarlos de manera correcta, para que los procesadores de HTML hagan sus tareas bien.

Respecto al comentario sobre que debemos hacer web para humanos y no robots, pienso que no es muy acertado, que la computadora entienda lo que estamos haciendo es también importante, porque puede comunicar este significado a las [tecnologías asistivas](https://marcomadera.com/blog/accesibilidad-web#tecnologias-asistivas) que de igual forma son utilizadas para que humanos lean la web de una mejor manera, o hacer llegar a más personas a través del SEO de nuestra página o mejorar el sitio reconociendo los elementos que usamos fácilmente.