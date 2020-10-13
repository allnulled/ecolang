window.CodeMirror.defineSimpleMode("ecolang", {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    {
      regex: /^#[^\n]*/g,
      token: "comentario"
    },
    {
      regex: /Para obtener/g,
      token: "obtencion"
    },
    {
      regex: /[0-9]+/g,
      token: "numero"
    },
    {
      regex: /yotta|zetta|exa|peta|tera|giga|mega|kilo|hecto|deca|deci|centi|mili|micro|nano|pico|femto|atto|zepto|yocto/g,
      token: "exponente"
    },
    {
      regex: /unidades|gramos|toneladas|litros|áreas|hectáreas|grado sexagesimals|minutos de arcos|segundos de arcos|minutos|horas|días|semanas|años|lustros|décadas|siglos|milenios|metros cúbicos|metros cuadrados|metros|kilogramonotas|amperios|kelvins|mols|candelas|hercios|newtons|pascals|julios|vatios|culombios|voltios|faradios|ohmios|siemens|webers|teslas|henrios|grados Celsiuss|grados Farenheits|grados Kelvins|katals|becquerels|grays|sieverts|lumens|luxs/g,
      token: "magnitud"
    },
    {
      regex: /por la vía/g,
      token: "por-la-via"
    },
    {
      regex: /se necesita de|Se necesita/g,
      token: "se-necesita"
    },
    {
      regex: /se genera/g,
      token: "se-genera"
    },
    {
      regex: /se caracteriza por/g,
      token: "se-caracteriza"
    },
    {
      regex: /Hay/g,
      token: "hay"
    },
  ],
  // The multi-line comment state.
  comment: [],
  // The meta property contains global information about the mode. It
  // can contain properties like lineComment, which are supported by
  // all modes, and also directives like dontIndentStates, which are
  // specific to simple modes.
  meta: {}
});

window.CodeMirror.defineSimpleMode("ecolang-reporte", {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    {
      regex: /^YO\:.+/g,
      token: "persona"
    },
    {
      regex: /^PC\:.+/g,
      token: "maquina"
    },
  ],
  // The multi-line comment state.
  comment: [],
  // The meta property contains global information about the mode. It
  // can contain properties like lineComment, which are supported by
  // all modes, and also directives like dontIndentStates, which are
  // specific to simple modes.
  meta: {}
});

