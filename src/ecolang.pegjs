{
  const onlyNotNullProperties = function(data) {
    const output = {};
    for(const item in data) {
      if(data[item] !== null) {
        output[item] = data[item];
      }
    }
    return output;
  }
  const fromTextToNumber = text => parseFloat(text.replace(/\./g, "").replace(/,|'/g, "."));
  const transformOutput = function(ast) {
  	const questions = [];
  	
  	return { ast, questions };
  }
}
Lenguaje = __* sentencias:Sentencias __* {return transformOutput(sentencias)}
Sentencias = Sentencia_completa*
Sentencia_completa = sentencia:Nucleo_de_sentencia (EOL+/EOF) {return sentencia}
Nucleo_de_sentencia = Definicion_de_recurso / Definicion_de_existencias / Cuestion / Comentario
Comentario = "#" comentario:Resto_de_linea {return {tipo:"comentario", comentario}}
Cuestion = Cuestion_sobre_necesidad
Cuestion_sobre_necesidad = ("Se necesita ")
  recurso:Recurso_a_mencionar_en_pregunta
  {return {tipo: "cuestión sobre requisitos", ...recurso}}
Definicion_de_recurso = ("Para obtener ")
  recurso:Recurso_a_definir
  {return onlyNotNullProperties(recurso)}
Definicion_de_existencias = ("Hay ")
  cantidad:Determinante_cuantitativo?
  existencia:Resto_de_linea
  {return {tipo: "existencia", ...cantidad, existencia}}
Recurso_a_definir =
  cantidad:Determinante_cuantitativo?
  recurso:Resto_de_linea
  metodos:Metodos_de_recurso
  {return onlyNotNullProperties({tipo: "recurso", recurso, ...cantidad, metodos})}
Recurso_a_mencionar = 
  porcentaje:Expresion_de_porcentaje?
  recurso:Recurso_a_mencionar_en_pregunta
  {return onlyNotNullProperties({porcentaje, ...recurso })}
Recurso_a_mencionar_en_pregunta = 
  cantidad:Determinante_cuantitativo?
  recurso:Resto_de_linea
  {return onlyNotNullProperties({ ...cantidad, recurso })}
Metodos_de_recurso = Metodo_de_recurso*
Metodo_de_recurso = 
  EOL _ _
  ("por la vía ")
  metodo:Resto_de_linea
  propiedades:Propiedades_de_recurso
  {return onlyNotNullProperties({metodo, ...propiedades})}
Propiedades_de_recurso =
  requisitos:Propiedades_de_necesidad?
  generaciones:Propiedades_de_generacion?
  caracteristicas:Propiedades_de_caracteristica?
  {return {requisitos, caracteristicas}}
Propiedades_de_caracteristica = 
  EOL _ _ _ _
  ("se caracteriza por")
  necesidades:Caracteristicas_de_recurso*
  {return necesidades}
Propiedades_de_generacion = 
  EOL _ _ _ _
  ("se genera")
  generaciones:Necesidades_de_recurso*
  {return generaciones}
Propiedades_de_necesidad =
  EOL _ _ _ _
  ("se necesita de")
  necesidades:Necesidades_de_recurso*
  {return necesidades}
Necesidades_de_recurso = EOL _ _ _ _ _ _ (!_) recurso:Recurso_a_mencionar {return recurso}
Caracteristicas_de_recurso = EOL _ _ _ _ _ _ (!_) caracteristica:Resto_de_linea {return caracteristica}
Determinante_cuantitativo = numero:Numero _ magnitud:Expresion_de_magnitud? {return onlyNotNullProperties({numero, magnitud})}
Expresion_de_magnitud = magnitud:Magnitud _ ("de" _)? {return magnitud}
Magnitud = Cuantificador_de_magnitud? Unidad_de_magnitud {return text()}
Cuantificador_de_magnitud = ("yotta"/"zetta"/"exa"/"peta"/"tera"/"giga"/"mega"/"kilo"/"hecto"/"deca"/"deci"/"centi"/"mili"/"micro"/"nano"/"pico"/"femto"/"atto"/"zepto"/"yocto")
Unidad_de_magnitud = ("unidades"/"gramos"/"toneladas"/"litros"/"áreas"/"hectáreas"/"grado sexagesimals"/"minutos de arcos"/"segundos de arcos"/"minutos"/"horas"/"días"/"semanas"/"años"/"lustros"/"décadas"/"siglos"/"milenios"/"metros cúbicos"/"metros cuadrados"/"metros"/"kilogramonotas"/"amperios"/"kelvins"/"mols"/"candelas"/"hercios"/"newtons"/"pascals"/"julios"/"vatios"/"culombios"/"voltios"/"faradios"/"ohmios"/"siemens"/"webers"/"teslas"/"henrios"/"grados Celsiuss"/"grados Farenheits"/"grados Kelvins"/"katals"/"becquerels"/"grays"/"sieverts"/"lumens"/"luxs")
Porcentaje = porcentaje:Numero "%" {return porcentaje}
Expresion_de_porcentaje = porcentaje:Porcentaje " de " {return porcentaje}
Resto_de_linea = [^\n]+ {return text().trim()}
Numero = [0-9]+ ("." [0-9][0-9][0-9])* ((","/"'")[0-9]+)? {return fromTextToNumber(text())}
_ = " "
__ = [\r\n\t ]
EOL = ("\r\n" / "\n\r" / "\n")
EOF = !.