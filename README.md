# ecolang

Lenguaje para crear economías realistas. En castellano.

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
const { ast, script } = require("ecolang").parseFileSync(fichero);
```

**Asíncronamente, contra un fichero:**

```js
const { ast, script } = await require("ecolang").parseFile(fichero);
```

**Contra un texto:**

```js
const { ast, script } = require("ecolang").parse(texto);
```

## Sintaxis

Este proyecto empieza como un lenguaje de programación en castellano, por ser mi lengua materna.

Quizá, más adelante, se traduzca a otros idiomas. De momento, no hay ninguna intención, ya me lo copiará algún oportunista en otra lengua materna, pues así funciona la asquerosa industria del software si no tienes contactos en las altas esferas. Y si no, pregúntenselo a Bill Gates/Microsoft, propietario de Github y NPM, cunas de las ideas del software. Pero, como ya digo en mi perfil, nadie merece la fortuna que acumula este señor, y ahí lo tienen, y nadie le mira cual criminal. Eso sí, todos sabemos que DOS no era suyo, que se lo compró a un mataillo de garaje. Nadie conoce al mataillo, todos conocen a la rata gorda.

### Ejemplos de scripts

```eco

```

## Licencia

No hay licencia, haz lo que quieras con este programa.

## Problemas

Para informarme de algún problema, por favor, diríjase a la sección *Issues* del proyecto de `ecolang` en Github.