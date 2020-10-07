# ecolang

Lenguaje para crear economías realistas. En castellano.

## ¿Por qué nace `ecolang`?

Evidentemente, la economía actual es una mofa de vuestra cobardía, un ensalzamiento de vuestra ruindad, y un esputo a vuestra inteligencia. 8 personas no pueden tener lo mismo que media humanidad (4.000.000.000 personas). Pero sois esclavos, no podéis hacer nada, os tienen acorralados entre las leyes, y la economía del Mercado Libre.

Sobre todo, esclavos mentales, os tienen bien atados.

Este lenguaje permite hacer análisis realistas de los recursos, y comprender la economía de la naturaleza, la verdadera economía, no la mierda esclavista que tenéis ahora, donde los ratios de desigualdad son irrisorios.

Ojalá os sirva, ni que sea de inspiración, pasando por eclipsar a mi persona del mundo del dinero (de lo cual no me acostumbro, pero bueno, no conozco otra cosa en realidad que vivir siempre con lo justo, y no saber a qué huele la libertad financiera). Ojalá os sirva, y no le hagáis pasar a otros lo que a mí, pero tampoco que los que están peor queden en un segundo plano en vuestros sucios medios de comunicación elitistas putrefactos. Hablo ya no de marginación, que es mi caso, sino de esclavitud pura y dura desde la niñez. Pero esos cerdos de la televisión no se meten ahí, no hablan de las empresas a las que les interesa mantener en inopia y esclavitud a ciertas regiones del globo.

## Instalación

```bash
$ npm i -g ecolang
```

## Uso

Puedes usar `ecolang` por línea de comandos o por programas.

### Por línea de comandos

```bash
$ ecolang fichero1.eco fichero2.eco fichero3.eco
```

### Por vía programática

**Síncronamente, contra un fichero:**

```js
const { ast, questions } = require("ecolang").parseFileSync(fichero);
```

**Asíncronamente, contra un fichero:**

```js
const { ast, questions } = await require("ecolang").parseFile(fichero);
```

**Contra un texto:**

```js
const { ast, questions } = require("ecolang").parseText(texto);
```

## Sintaxis

Este proyecto empieza como un lenguaje de programación en castellano, por ser mi lengua materna.

Quizá, más adelante, se traduzca a otros idiomas. De momento, no hay ninguna intención, ya me lo copiará algún oportunista en otra lengua materna, pues así funciona la asquerosa industria del software si no tienes contactos en las altas esferas. Y si no, pregúntenselo a Bill Gates/Microsoft, propietario de Github y NPM, cunas de las ideas del software. Pero, como ya digo en mi perfil, nadie merece la fortuna que acumula este señor, y ahí lo tienen, y nadie le mira cual criminal. Eso sí, todos sabemos que DOS no era suyo, que se lo compró a un mataillo de garaje. Nadie conoce al mataillo, todos conocen a la rata gorda.

Todo, menos darme puto trabajo o puto dinero sucio vuestro para poder moverme por el globo. Sí, es lo que hay, en un sistema de ratas, como digno humano no te quieren. Se entiende, los pobrecillos se han creído la esclavitud, algunos hasta bailan sobre ella y todo. ¿Eh, Billy (The Silly) Gates, Microsoft Mobile, República del Congo, coltán, niños en la mina, sabes por dónde voy no, sucia rata, escoria inmunda?

Vamos a explicar la sintaxis.

### Tipos de sentencia

Los programas en `ecolang` soportan, actualmente, las siguientes sentencias:

  - `Definición de recurso`. Sirve para definir un `recurso`, y listar las vías de obtenerlo, así como características propias. En un sentido amplio, un `proceso` se define de igual modo que un `recurso`.
  - `Definición de existencia`. Sirve para declarar las actuales existencias que se encuentran a disposición. Típicamente, se toma un `recurso` ya definido, y se le cuantifica con algún tipo de `magnitud`.
  - `Preguntas`. Sirve para interrogar a `ecolang` sobre:
     - `posibilidad`: es una pregunta que del tipo: `¿se puede obtener tal recurso?`
     - `necesidad`: es una pregunta que del tipo: `¿qué se necesita para obtener tal recurso?`


### Cuantificadores de magnitud

Los cuantificadores de magnitud permiten ahorrarse muchos `0`. Van pegados a la unidad de magnitud, que las listaremos a continuación.

  - `yotta`: `x1.000.000.000.000.000.000.000.000` o x10<sup>24</sup>
  - `zetta`: `x1.000.000.000.000.000.000.000` o x10<sup>21</sup>
  - `exa`:   `x1.000.000.000.000.000.000` o x10<sup>18</sup>
  - `peta`:  `x1.000.000.000.000.000` o x10<sup>15</sup>
  - `tera`:  `x1.000.000.000.000` o x10<sup>12</sup>
  - `giga`:  `x1.000.000.000` o x10<sup>9</sup>
  - `mega`:  `x1.000.000` o x10<sup>6</sup>
  - `kilo`:  `x1.000` o x10<sup>3</sup>
  - `hecto`: `x100` o x10<sup>2</sup>
  - `deca`:  `x10` o x10<sup>1</sup>
  - `deci`:  `x0,1` o x10<sup>-1</sup>
  - `centi`: `x0,01` o x10<sup>-2</sup>
  - `mili`:  `x0,001` o x10<sup>-3</sup>
  - `micro`: `x0,000 001` o x10<sup>-6</sup>
  - `nano`:  `x0,000 000 001` o x10<sup>-9</sup>
  - `pico`:  `x0,000 000 000 001` o x10<sup>-12</sup>
  - `femto`: `x0,000 000 000 000 001` o x10<sup>-15</sup>
  - `atto`:  `x0,000 000 000 000 000 001` o x10<sup>-18</sup>
  - `zepto`: `x0,000 000 000 000 000 000 001` o x10<sup>-21</sup>
  - `yocto`: `x0,000 000 000 000 000 000 000 001` o x10<sup>-24</sup>

### Magnitudes

Las magnitudes son unidades de medida de algún aspecto de la realidad. Actualmente, `ecolang` soporta las siguientes magnitudes:

  - `unidades`/`unidad`: magnitud neutra.
  - `gramos`/`gramo`: unidad de **masa**.
  - `toneladas`/`tonelada`: unidad de **masa**.
  - `litros`/`litro`: unidad de **volumen**.
  - `áreas`/`área`: unidad de **superficie**.
  - `grados sexagesimales`/`grado sexagesimal`: de medida de **ángulos sexagesimales**. Notación no soportada por ahora.
  - `minutos de arco`/`minuto de arco`: unidad del **ángulo plano**.
  - `segundos de arco`/`segundo de arco`: 
  - `minutos`/`minuto`: unidad de **tiempo**.
  - `horas`/`hora`: unidad de **tiempo**.
  - `días`/`día`: unidad de **tiempo**.
  - `semanas`/`semana`: unidad de **tiempo**.
  - `meses`/`mes`/`años`/`año`: unidad de **tiempo**.
  - `lustros`/`lustro`: unidad de **tiempo**.
  - `décadas`/`década`: unidad de **tiempo**.
  - `siglos`/`siglo`: unidad de **tiempo**.
  - `milenios`/`milenio`: unidad de **tiempo**.
  - `metros cuadrados`/`metro cuadrado`: unidad de **área**.
  - `metros cúbicos`/`metro cúbico`: unidad de **volumen**.
  - `metros`/`metro`: unidad de **distancia**.
  - `amperios`/`amperio`: unidad de **intensidad de corriente eléctrica**.
  - `kelvins`/`kelvin`: unidad de **temperatura**.
  - `mols`/`mol`: unidad de **cantidad de sustancia**.
  - `candelas`/`candela`: unidad de **intensidad luminosa**.
  - `hercios`/`hercio`: unidad de **frecuencia**.
  - `newtons`/`newton`: unidad de **fuerza**.
  - `pascals`/`pascal`: unidad de **presión**.
  - `julios`/`julio`: unidad de **energía**, **trabajo** y **calor**.
  - `vatios`/`vatio`: unidad de **potencia** o **cantidad de trabajo entre tiempo**.
  - `culombios`/`culombio`: unidad de **cantidad de energía** o **carga eléctrica**.
  - `voltios`/`voltio`: unidad de **potencial eléctrico**, **fuerza electromotriz** y **tensión eléctrica**.
  - `faradios`/`faradio`: unidad de **capacidad eléctrica**.
  - `ohmios`/`ohmio`: unidad de **resistencia eléctrica**.
  - `siemens`: unidad de **conductancia eléctrica**.
  - `webers`/`weber`: unidad de **flujo magnético** o **flujo de inducción magnética**.
  - `teslas`/`tesla`: unidad de **inducción magnética** o **densidad de flujo magnético**.
  - `henrios`/`henrio`: unidad de **inductancia eléctrica**.
  - `grados Celsius`/`grado Celsius`: unidad de **temperatura**.
  - `grados Farenheit`/`grado Farenheit`: unidad de **temperatura**.
  - `grados Kelvin`/`grado Kelvin`: unidad de **temperatura**.
  - `katals`/`katal`: unidad de **catálisis** o **velocidad de una reacción química**.
  - `becquerels`/`becquerel`: unidad de **actividad radioactiva**.
  - `grays`/`gray`: unidad de **radiación ionizante**.
  - `sieverts`/`sievert`: unidad de **radiación absorvida por un organismo vivo, y sus efectos**.
  - `lumens`/`lumen`: unidad de **flujo luminoso**.
  - `luxs`/`lux`: unidad de **iluminancia** o **nivel de iluminación**.


### Ejemplos de scripts

```eco

```

## Licencia

No hay licencia, haz lo que quieras con este programa.

## Problemas

Para informarme de algún problema, por favor, diríjase a la sección *Issues* del proyecto de `ecolang` en Github.