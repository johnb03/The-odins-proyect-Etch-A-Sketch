# Reglas

**1.** Crea una página web con una cuadrícula de 16x16 de divs cuadrados.

* Crea los divs con JavaScript. ¡No intentes crearlos a mano copiándolos y pegándolos en tu archivo HTML!

* Lo mejor es colocar los cuadrados de la cuadrícula dentro de un div "contenedor". Este div se puede escribir en el archivo HTML.

* Utilice Flexbox para hacer que los divs aparezcan como una cuadrícula (en lugar de solo uno en cada línea). A pesar del nombre, no se sienta tentado a investigar o usar CSS Grid, ya que se enseñará en una lección posterior después de la ruta de los fundamentos. ¡Este proyecto es una oportunidad específicamente para practicar Flexbox!

* ¡Ten cuidado con los bordes y márgenes, ya que pueden ajustar el tamaño de los cuadrados!

* "Dios mío, ¿por qué no se crea mi cuadrícula?" ¿Vinculaste tu hoja de estilos CSS?

* Abra las herramientas para desarrolladores de su navegador.

* Compruebe si hay algún error en la consola de JavaScript.

* Revisa el panel de “elementos” para ver si los elementos realmente han aparecido pero están ocultos de alguna manera.

* Vaya a su antojo y agregue console.logdeclaraciones en su JavaScript para ver si realmente se está cargando.


**2.**  Configure un efecto de “desplazamiento” para que los divs de la cuadrícula cambien de color cuando el mouse pase sobre ellos, dejando un rastro (pixelado) a través de la cuadrícula como lo haría un bolígrafo.

*  **Sugerencia** : “Pasar el mouse por encima” es lo que sucede cuando el mouse ingresa a un div y termina cuando el mouse lo abandona. Puede configurar detectores de eventos para cualquiera de esos eventos como punto de partida.

* Hay varias formas de cambiar el color de los divs, entre ellas:
- Agregar una nueva clase al div.
- Cambiar el color de fondo del div usando JavaScript.
---
**3.** Agregue un botón en la parte superior de la pantalla que le enviará al usuario una ventana emergente solicitando la cantidad de cuadrados por lado para la nueva cuadrícula. Una vez ingresada, se debe eliminar la cuadrícula existente y se debe generar una nueva cuadrícula en el mismo espacio total que antes (por ejemplo, 960 píxeles de ancho) para que tenga un nuevo bloc de dibujo.

* Consejo : Establezca el límite de entrada del usuario en un máximo de 100. Una mayor cantidad de cuadrados da como resultado que se utilicen más recursos de la computadora, lo que puede causar demoras, congelamientos o fallas que queremos evitar.

* Investigue buttonlas etiquetas en HTML y cómo puede hacer que una función de JavaScript se ejecute cuando se hace clic en una.

* Consulte también prompts.

* Deberías poder ingresar **64** y tener una nueva cuadrícula de **64x64** emergente sin cambiar la cantidad total de píxeles utilizados.

* ¡Envía tu proyecto a GitHub!
---
## Crédito adicional
Transforma el comportamiento de un cuadrado al interactuar con el ratón introduciendo una serie de modificaciones.

**1.** En lugar de que los cuadrados tengan el mismo color en toda la cuadrícula, aleatorice los valores RGB de los cuadrados con cada interacción.

**2.** Además, implementa un efecto de oscurecimiento progresivo en el que cada interacción oscurece el cuadrado en un 10 %. El objetivo es lograr un cuadrado completamente negro (o completamente coloreado) en solo diez interacciones.

* Sugerencia : La propiedad CSS opacidad es útil en este caso. Para aprender a usarla, [consulta este 
artículo de la documentación de MDN sobre la propiedad CSS opacidad](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) .
Puedes elegir hacer uno o ambos de estos desafíos, tú decides.