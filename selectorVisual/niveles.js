const niveles = [
  {
    cod_nivel: "2042",
    descripcion: "MEMORIA FLASH",
    cod_nivel_padre: "1242",
    COD_NIVEL: "2042",
    DESCRIPCION: "MEMORIA FLASH",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "5088",
    descripcion: "SOPORTES",
    cod_nivel_padre: "1918",
    COD_NIVEL: "5088",
    DESCRIPCION: "SOPORTES",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "5094",
    descripcion: "CASETA DE PERRO",
    cod_nivel_padre: "523",
    COD_NIVEL: "5094",
    DESCRIPCION: "CASETA DE PERRO",
    COD_NIVEL_PADRE: "523"
  },
  {
    cod_nivel: "493",
    descripcion: "TENSIOMETRO",
    cod_nivel_padre: "488",
    COD_NIVEL: "493",
    DESCRIPCION: "TENSIOMETRO",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "5099",
    descripcion: "OTROS CLIMATIZACION",
    cod_nivel_padre: "553",
    COD_NIVEL: "5099",
    DESCRIPCION: "OTROS CLIMATIZACION",
    COD_NIVEL_PADRE: "553"
  },
  {
    cod_nivel: "494",
    descripcion: "TERMOMETRO",
    cod_nivel_padre: "488",
    COD_NIVEL: "494",
    DESCRIPCION: "TERMOMETRO",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "5191",
    descripcion: "TELEVISOR OLED",
    cod_nivel_padre: "1260",
    COD_NIVEL: "5191",
    DESCRIPCION: "TELEVISOR OLED",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1625",
    descripcion: "CAMARA INSTANTANEA",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1625",
    DESCRIPCION: "CAMARA INSTANTANEA",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "5001",
    descripcion: "ENCICLOPEDIA",
    cod_nivel_padre: "1215",
    COD_NIVEL: "5001",
    DESCRIPCION: "ENCICLOPEDIA",
    COD_NIVEL_PADRE: "1215"
  },
  {
    cod_nivel: "1048",
    descripcion: "KIT HERRAMIENTAS",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1048",
    DESCRIPCION: "KIT HERRAMIENTAS",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "944",
    descripcion: "CORTABORDES",
    cod_nivel_padre: "942",
    COD_NIVEL: "944",
    DESCRIPCION: "CORTABORDES",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "941",
    descripcion: "OTRAS PINTURA",
    cod_nivel_padre: "934",
    COD_NIVEL: "941",
    DESCRIPCION: "OTRAS PINTURA",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "940",
    descripcion: "PISTOLA DE PINTAR",
    cod_nivel_padre: "934",
    COD_NIVEL: "940",
    DESCRIPCION: "PISTOLA DE PINTAR",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "459",
    descripcion: "BASCULA BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "459",
    DESCRIPCION: "BASCULA BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "5100",
    descripcion: "FRIO",
    cod_nivel_padre: "553",
    COD_NIVEL: "5100",
    DESCRIPCION: "FRIO",
    COD_NIVEL_PADRE: "553"
  },
  {
    cod_nivel: "5192",
    descripcion: "CONSOLA NINTENDO SWITCH",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5192",
    DESCRIPCION: "CONSOLA NINTENDO SWITCH",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5193",
    descripcion: "JUEGO NINTENDO SWITCH",
    cod_nivel_padre: "5114",
    COD_NIVEL: "5193",
    DESCRIPCION: "JUEGO NINTENDO SWITCH",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "5194",
    descripcion: "OBJETIVOS",
    cod_nivel_padre: "1397",
    COD_NIVEL: "5194",
    DESCRIPCION: "OBJETIVOS",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "5195",
    descripcion: "CAMARA DIGITAL EVIL",
    cod_nivel_padre: "1396",
    COD_NIVEL: "5195",
    DESCRIPCION: "CAMARA DIGITAL EVIL",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "5084",
    descripcion: "CABALLETE",
    cod_nivel_padre: "934",
    COD_NIVEL: "5084",
    DESCRIPCION: "CABALLETE",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "521",
    descripcion: "MEDIDOR REGULADOR",
    cod_nivel_padre: "515",
    COD_NIVEL: "521",
    DESCRIPCION: "MEDIDOR REGULADOR",
    COD_NIVEL_PADRE: "515"
  },
  {
    cod_nivel: "750",
    descripcion: "ROBOT LIMPIAFONDOS",
    cod_nivel_padre: "747",
    COD_NIVEL: "750",
    DESCRIPCION: "ROBOT LIMPIAFONDOS",
    COD_NIVEL_PADRE: "747"
  },
  {
    cod_nivel: "5101",
    descripcion: "CALOR",
    cod_nivel_padre: "553",
    COD_NIVEL: "5101",
    DESCRIPCION: "CALOR",
    COD_NIVEL_PADRE: "553"
  },
  {
    cod_nivel: "5104",
    descripcion: "HORNOS Y MICROONDAS",
    cod_nivel_padre: "610",
    COD_NIVEL: "5104",
    DESCRIPCION: "HORNOS Y MICROONDAS",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "5106",
    descripcion: "ROBOT MULTIFUNCION",
    cod_nivel_padre: "610",
    COD_NIVEL: "5106",
    DESCRIPCION: "ROBOT MULTIFUNCION",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "5107",
    descripcion: "CORTAFIAMBRES Y PICADORAS",
    cod_nivel_padre: "610",
    COD_NIVEL: "5107",
    DESCRIPCION: "CORTAFIAMBRES Y PICADORAS",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "5197",
    descripcion: "CAFETERA CAPSULAS",
    cod_nivel_padre: "645",
    COD_NIVEL: "5197",
    DESCRIPCION: "CAFETERA CAPSULAS",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "5196",
    descripcion: "DRON",
    cod_nivel_padre: "1450",
    COD_NIVEL: "5196",
    DESCRIPCION: "DRON",
    COD_NIVEL_PADRE: "1450"
  },
  {
    cod_nivel: "5198",
    descripcion: "PIANO WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "5198",
    DESCRIPCION: "PIANO WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "5199",
    descripcion: "PIANO PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "5199",
    DESCRIPCION: "PIANO PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "5200",
    descripcion: "PIANO XBOX 360",
    cod_nivel_padre: "2191",
    COD_NIVEL: "5200",
    DESCRIPCION: "PIANO XBOX 360",
    COD_NIVEL_PADRE: "2191"
  },
  {
    cod_nivel: "5201",
    descripcion: "INSTRUMENTO ARCO",
    cod_nivel_padre: "1427",
    COD_NIVEL: "5201",
    DESCRIPCION: "INSTRUMENTO ARCO",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "5202",
    descripcion: "INSTRUMENTOS ESCOLARES",
    cod_nivel_padre: "1427",
    COD_NIVEL: "5202",
    DESCRIPCION: "INSTRUMENTOS ESCOLARES",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "5203",
    descripcion: "LINTERNAS PARA VEHICULO",
    cod_nivel_padre: "1033",
    COD_NIVEL: "5203",
    DESCRIPCION: "LINTERNAS PARA VEHICULO",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "5204",
    descripcion: "BOMBILLAS",
    cod_nivel_padre: "1033",
    COD_NIVEL: "5204",
    DESCRIPCION: "BOMBILLAS",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "5205",
    descripcion: "ACCESORIOS CAMARA DEPORTIVA",
    cod_nivel_padre: "1396",
    COD_NIVEL: "5205",
    DESCRIPCION: "ACCESORIOS CAMARA DEPORTIVA",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "5206",
    descripcion: "ACCESORIOS INSTRUMENTOS ARCO",
    cod_nivel_padre: "5201",
    COD_NIVEL: "5206",
    DESCRIPCION: "ACCESORIOS INSTRUMENTOS ARCO",
    COD_NIVEL_PADRE: "5201"
  },
  {
    cod_nivel: "5207",
    descripcion: "CAJA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "5207",
    DESCRIPCION: "CAJA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "5208",
    descripcion: "PERCUSION LATINA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "5208",
    DESCRIPCION: "PERCUSION LATINA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "5209",
    descripcion: "ACCESORIOS PERCUSION",
    cod_nivel_padre: "1431",
    COD_NIVEL: "5209",
    DESCRIPCION: "ACCESORIOS PERCUSION",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "5210",
    descripcion: "MARTILLO DE BOLA",
    cod_nivel_padre: "819",
    COD_NIVEL: "5210",
    DESCRIPCION: "MARTILLO DE BOLA",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "5211",
    descripcion: "MARTILLO DE PEÑA",
    cod_nivel_padre: "819",
    COD_NIVEL: "5211",
    DESCRIPCION: "MARTILLO DE PEÑA",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "5212",
    descripcion: "METRO O FLEXOMETRO",
    cod_nivel_padre: "832",
    COD_NIVEL: "5212",
    DESCRIPCION: "METRO O FLEXOMETRO",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "5213",
    descripcion: "GRAPADORA CERCADOS",
    cod_nivel_padre: "838",
    COD_NIVEL: "5213",
    DESCRIPCION: "GRAPADORA CERCADOS",
    COD_NIVEL_PADRE: "838"
  },
  {
    cod_nivel: "5215",
    descripcion: "BAJO ACUSTICO",
    cod_nivel_padre: "1817",
    COD_NIVEL: "5215",
    DESCRIPCION: "BAJO ACUSTICO",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "5216",
    descripcion: "MULTIEFECTOS BAJO",
    cod_nivel_padre: "1826",
    COD_NIVEL: "5216",
    DESCRIPCION: "MULTIEFECTOS BAJO",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "5217",
    descripcion: "PLATOS",
    cod_nivel_padre: "1852",
    COD_NIVEL: "5217",
    DESCRIPCION: "PLATOS",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1388",
    descripcion: "DISPOSITIVO ELECTRONICO VINTAGE",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1388",
    DESCRIPCION: "DISPOSITIVO ELECTRONICO VINTAGE",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "1380",
    descripcion: "OTROS DISPOSITIVOS ELECTRONICOS",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1380",
    DESCRIPCION: "OTROS DISPOSITIVOS ELECTRONICOS",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "1378",
    descripcion: "DICCIONARIO ELECTRONICO",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1378",
    DESCRIPCION: "DICCIONARIO ELECTRONICO",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "1377",
    descripcion: "TRADUCTOR ELECTRONICO",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1377",
    DESCRIPCION: "TRADUCTOR ELECTRONICO",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "1376",
    descripcion: "RELOJES DIGITALES",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1376",
    DESCRIPCION: "RELOJES DIGITALES",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "5108",
    descripcion: "FREIDORAS",
    cod_nivel_padre: "610",
    COD_NIVEL: "5108",
    DESCRIPCION: "FREIDORAS",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "5109",
    descripcion: "PARRILLAS Y PLANCHAS",
    cod_nivel_padre: "610",
    COD_NIVEL: "5109",
    DESCRIPCION: "PARRILLAS Y PLANCHAS",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "5110",
    descripcion: "COSTURA",
    cod_nivel_padre: "630",
    COD_NIVEL: "5110",
    DESCRIPCION: "COSTURA",
    COD_NIVEL_PADRE: "630"
  },
  {
    cod_nivel: "5111",
    descripcion: "OTROS LIMPIEZA",
    cod_nivel_padre: "630",
    COD_NIVEL: "5111",
    DESCRIPCION: "OTROS LIMPIEZA",
    COD_NIVEL_PADRE: "630"
  },
  {
    cod_nivel: "5117",
    descripcion: "ACCESORIOS NINTENDO DS",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5117",
    DESCRIPCION: "ACCESORIOS NINTENDO DS",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5118",
    descripcion: "ACCESORIOS NINTENDO WII",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5118",
    DESCRIPCION: "ACCESORIOS NINTENDO WII",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5119",
    descripcion: "ACCESORIOS PS2",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5119",
    DESCRIPCION: "ACCESORIOS PS2",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5120",
    descripcion: "ACCESORIOS PS3",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5120",
    DESCRIPCION: "ACCESORIOS PS3",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5129",
    descripcion: "MANDOS PC",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5129",
    DESCRIPCION: "MANDOS PC",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5130",
    descripcion: "MANDOS PS2",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5130",
    DESCRIPCION: "MANDOS PS2",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5138",
    descripcion: "MANDOS PS4",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5138",
    DESCRIPCION: "MANDOS PS4",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5140",
    descripcion: "MANDOS XBOX ONE",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5140",
    DESCRIPCION: "MANDOS XBOX ONE",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5142",
    descripcion: "ACCESORIOS PS4",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5142",
    DESCRIPCION: "ACCESORIOS PS4",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "2078",
    descripcion: "BICICLETA SPINNING",
    cod_nivel_padre: "3",
    COD_NIVEL: "2078",
    DESCRIPCION: "BICICLETA SPINNING",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "2089",
    descripcion: "HORMA CALZADO",
    cod_nivel_padre: "1459",
    COD_NIVEL: "2089",
    DESCRIPCION: "HORMA CALZADO",
    COD_NIVEL_PADRE: "1459"
  },
  {
    cod_nivel: "2097",
    descripcion: "CERRADURA ",
    cod_nivel_padre: "711",
    COD_NIVEL: "2097",
    DESCRIPCION: "CERRADURA ",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "2099",
    descripcion: "BILLAR",
    cod_nivel_padre: "341",
    COD_NIVEL: "2099",
    DESCRIPCION: "BILLAR",
    COD_NIVEL_PADRE: "341"
  },
  {
    cod_nivel: "2113",
    descripcion: "LUPA ESCRITORIO",
    cod_nivel_padre: "1476",
    COD_NIVEL: "2113",
    DESCRIPCION: "LUPA ESCRITORIO",
    COD_NIVEL_PADRE: "1476"
  },
  {
    cod_nivel: "2116",
    descripcion: "CARRITO COMPRA",
    cod_nivel_padre: "571",
    COD_NIVEL: "2116",
    DESCRIPCION: "CARRITO COMPRA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "2127",
    descripcion: "CABLE VIDEO PS2",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2127",
    DESCRIPCION: "CABLE VIDEO PS2",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2128",
    descripcion: "CABLE HDMI",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2128",
    DESCRIPCION: "CABLE HDMI",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2129",
    descripcion: "ADAPTADOR MANDO PS2 A PS3",
    cod_nivel_padre: "5159",
    COD_NIVEL: "2129",
    DESCRIPCION: "ADAPTADOR MANDO PS2 A PS3",
    COD_NIVEL_PADRE: "5159"
  },
  {
    cod_nivel: "2131",
    descripcion: "CONVERTIDOR MEMORY PS3",
    cod_nivel_padre: "5152",
    COD_NIVEL: "2131",
    DESCRIPCION: "CONVERTIDOR MEMORY PS3",
    COD_NIVEL_PADRE: "5152"
  },
  {
    cod_nivel: "1741",
    descripcion: "ACCESORIOS PARA MONITOR",
    cod_nivel_padre: "1417",
    COD_NIVEL: "1741",
    DESCRIPCION: "ACCESORIOS PARA MONITOR",
    COD_NIVEL_PADRE: "1417"
  },
  {
    cod_nivel: "543",
    descripcion: "TELEDUCHA",
    cod_nivel_padre: "542",
    COD_NIVEL: "543",
    DESCRIPCION: "TELEDUCHA",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "1763",
    descripcion: "METAL",
    cod_nivel_padre: "1428",
    COD_NIVEL: "1763",
    DESCRIPCION: "METAL",
    COD_NIVEL_PADRE: "1428"
  },
  {
    cod_nivel: "1777",
    descripcion: "METAL DE MARCHA",
    cod_nivel_padre: "1428",
    COD_NIVEL: "1777",
    DESCRIPCION: "METAL DE MARCHA",
    COD_NIVEL_PADRE: "1428"
  },
  {
    cod_nivel: "1458",
    descripcion: "BOLSOS",
    cod_nivel_padre: "5179",
    COD_NIVEL: "1458",
    DESCRIPCION: "BOLSOS",
    COD_NIVEL_PADRE: "5179"
  },
  {
    cod_nivel: "1459",
    descripcion: "CALZADO HOMBRE",
    cod_nivel_padre: "5178",
    COD_NIVEL: "1459",
    DESCRIPCION: "CALZADO HOMBRE",
    COD_NIVEL_PADRE: "5178"
  },
  {
    cod_nivel: "1460",
    descripcion: "CALZADO MUJER",
    cod_nivel_padre: "5178",
    COD_NIVEL: "1460",
    DESCRIPCION: "CALZADO MUJER",
    COD_NIVEL_PADRE: "5178"
  },
  {
    cod_nivel: "1461",
    descripcion: "COMPLEMENTOS HOMBRE",
    cod_nivel_padre: "5179",
    COD_NIVEL: "1461",
    DESCRIPCION: "COMPLEMENTOS HOMBRE",
    COD_NIVEL_PADRE: "5179"
  },
  {
    cod_nivel: "1462",
    descripcion: "COMPLEMENTOS MUJER",
    cod_nivel_padre: "5179",
    COD_NIVEL: "1462",
    DESCRIPCION: "COMPLEMENTOS MUJER",
    COD_NIVEL_PADRE: "5179"
  },
  {
    cod_nivel: "1463",
    descripcion: "DISFRAZ",
    cod_nivel_padre: "5178",
    COD_NIVEL: "1463",
    DESCRIPCION: "DISFRAZ",
    COD_NIVEL_PADRE: "5178"
  },
  {
    cod_nivel: "1465",
    descripcion: "PARAGUAS",
    cod_nivel_padre: "5179",
    COD_NIVEL: "1465",
    DESCRIPCION: "PARAGUAS",
    COD_NIVEL_PADRE: "5179"
  },
  {
    cod_nivel: "1466",
    descripcion: "ROPA HOMBRE",
    cod_nivel_padre: "5178",
    COD_NIVEL: "1466",
    DESCRIPCION: "ROPA HOMBRE",
    COD_NIVEL_PADRE: "5178"
  },
  {
    cod_nivel: "1467",
    descripcion: "ROPA MUJER",
    cod_nivel_padre: "5178",
    COD_NIVEL: "1467",
    DESCRIPCION: "ROPA MUJER",
    COD_NIVEL_PADRE: "5178"
  },
  {
    cod_nivel: "1468",
    descripcion: "OTROS COMPLEMENTOS",
    cod_nivel_padre: "5179",
    COD_NIVEL: "1468",
    DESCRIPCION: "OTROS COMPLEMENTOS",
    COD_NIVEL_PADRE: "5179"
  },
  {
    cod_nivel: "1474",
    descripcion: "ADORNOS",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1474",
    DESCRIPCION: "ADORNOS",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1475",
    descripcion: "PLATOS DECORATIVOS",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1475",
    DESCRIPCION: "PLATOS DECORATIVOS",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1476",
    descripcion: "ARTICULOS ESCRITORIO",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1476",
    DESCRIPCION: "ARTICULOS ESCRITORIO",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1477",
    descripcion: "ARTICULOS MILITARES",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1477",
    DESCRIPCION: "ARTICULOS MILITARES",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1478",
    descripcion: "BANDERA",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1478",
    DESCRIPCION: "BANDERA",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1479",
    descripcion: "BOTELLAS Y SIFONES",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1479",
    DESCRIPCION: "BOTELLAS Y SIFONES",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1480",
    descripcion: "BOTONES DE COLECCION",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1480",
    DESCRIPCION: "BOTONES DE COLECCION",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1481",
    descripcion: "CALENDARIOS",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1481",
    DESCRIPCION: "CALENDARIOS",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1482",
    descripcion: "CARTAS Y NAIPES",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1482",
    DESCRIPCION: "CARTAS Y NAIPES",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1483",
    descripcion: "CARTELES Y POSTERS",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1483",
    DESCRIPCION: "CARTELES Y POSTERS",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1484",
    descripcion: "COLECCIONISMO DEPORTIVO",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1484",
    DESCRIPCION: "COLECCIONISMO DEPORTIVO",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1485",
    descripcion: "CROMOS",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1485",
    DESCRIPCION: "CROMOS",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1486",
    descripcion: "IMANES",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1486",
    DESCRIPCION: "IMANES",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1487",
    descripcion: "LLAVEROS",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1487",
    DESCRIPCION: "LLAVEROS",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1488",
    descripcion: "OBJETOS INSOLITOS",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1488",
    DESCRIPCION: "OBJETOS INSOLITOS",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1489",
    descripcion: "TABACOFILIA",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1489",
    DESCRIPCION: "TABACOFILIA",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1490",
    descripcion: "OTRAS COLECCIONES",
    cod_nivel_padre: "1473",
    COD_NIVEL: "1490",
    DESCRIPCION: "OTRAS COLECCIONES",
    COD_NIVEL_PADRE: "1473"
  },
  {
    cod_nivel: "1491",
    descripcion: "ABRECARTAS",
    cod_nivel_padre: "1476",
    COD_NIVEL: "1491",
    DESCRIPCION: "ABRECARTAS",
    COD_NIVEL_PADRE: "1476"
  },
  {
    cod_nivel: "1492",
    descripcion: "BOLIGRAFO",
    cod_nivel_padre: "1476",
    COD_NIVEL: "1492",
    DESCRIPCION: "BOLIGRAFO",
    COD_NIVEL_PADRE: "1476"
  },
  {
    cod_nivel: "1493",
    descripcion: "LAPICERO",
    cod_nivel_padre: "1476",
    COD_NIVEL: "1493",
    DESCRIPCION: "LAPICERO",
    COD_NIVEL_PADRE: "1476"
  },
  {
    cod_nivel: "1494",
    descripcion: "PORTAMINAS",
    cod_nivel_padre: "1476",
    COD_NIVEL: "1494",
    DESCRIPCION: "PORTAMINAS",
    COD_NIVEL_PADRE: "1476"
  },
  {
    cod_nivel: "1495",
    descripcion: "PLUMA ESTILOGRAFICA",
    cod_nivel_padre: "1476",
    COD_NIVEL: "1495",
    DESCRIPCION: "PLUMA ESTILOGRAFICA",
    COD_NIVEL_PADRE: "1476"
  },
  {
    cod_nivel: "1496",
    descripcion: "OTROS",
    cod_nivel_padre: "1476",
    COD_NIVEL: "1496",
    DESCRIPCION: "OTROS",
    COD_NIVEL_PADRE: "1476"
  },
  {
    cod_nivel: "1497",
    descripcion: "CENICERO",
    cod_nivel_padre: "1489",
    COD_NIVEL: "1497",
    DESCRIPCION: "CENICERO",
    COD_NIVEL_PADRE: "1489"
  },
  {
    cod_nivel: "1498",
    descripcion: "CORTADOR",
    cod_nivel_padre: "1489",
    COD_NIVEL: "1498",
    DESCRIPCION: "CORTADOR",
    COD_NIVEL_PADRE: "1489"
  },
  {
    cod_nivel: "1500",
    descripcion: "OTROS TABACOFILIA",
    cod_nivel_padre: "1489",
    COD_NIVEL: "1500",
    DESCRIPCION: "OTROS TABACOFILIA",
    COD_NIVEL_PADRE: "1489"
  },
  {
    cod_nivel: "5105",
    descripcion: "PEQUEÑO ELECTRODOMESTICO",
    cod_nivel_padre: "610",
    COD_NIVEL: "5105",
    DESCRIPCION: "PEQUEÑO ELECTRODOMESTICO",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "1506",
    descripcion: "EQUIPAMIENTO GIMNASIO",
    cod_nivel_padre: "175",
    COD_NIVEL: "1506",
    DESCRIPCION: "EQUIPAMIENTO GIMNASIO",
    COD_NIVEL_PADRE: "175"
  },
  {
    cod_nivel: "4",
    descripcion: "CINTA CORRER",
    cod_nivel_padre: "3",
    COD_NIVEL: "4",
    DESCRIPCION: "CINTA CORRER",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "6",
    descripcion: "BICICLETA ESTATICA",
    cod_nivel_padre: "3",
    COD_NIVEL: "6",
    DESCRIPCION: "BICICLETA ESTATICA",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "8",
    descripcion: "BICICLETA ELIPTICA",
    cod_nivel_padre: "3",
    COD_NIVEL: "8",
    DESCRIPCION: "BICICLETA ELIPTICA",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "9",
    descripcion: "MAQUINA REMOS",
    cod_nivel_padre: "3",
    COD_NIVEL: "9",
    DESCRIPCION: "MAQUINA REMOS",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "11",
    descripcion: "PLATAFORMA VIBRATORIA",
    cod_nivel_padre: "3",
    COD_NIVEL: "11",
    DESCRIPCION: "PLATAFORMA VIBRATORIA",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "14",
    descripcion: "CAMA ELASTICA",
    cod_nivel_padre: "3",
    COD_NIVEL: "14",
    DESCRIPCION: "CAMA ELASTICA",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "15",
    descripcion: "MUSCULACION",
    cod_nivel_padre: "3",
    COD_NIVEL: "15",
    DESCRIPCION: "MUSCULACION",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "16",
    descripcion: "APARATO CARGA GUIADA",
    cod_nivel_padre: "15",
    COD_NIVEL: "16",
    DESCRIPCION: "APARATO CARGA GUIADA",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "17",
    descripcion: "BANCO MUSCULACION",
    cod_nivel_padre: "15",
    COD_NIVEL: "17",
    DESCRIPCION: "BANCO MUSCULACION",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "18",
    descripcion: "BANCO ABDOMINALES",
    cod_nivel_padre: "15",
    COD_NIVEL: "18",
    DESCRIPCION: "BANCO ABDOMINALES",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "19",
    descripcion: "APARATO DE ESPALDA",
    cod_nivel_padre: "15",
    COD_NIVEL: "19",
    DESCRIPCION: "APARATO DE ESPALDA",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "20",
    descripcion: "BARRA DE TRACCION",
    cod_nivel_padre: "15",
    COD_NIVEL: "20",
    DESCRIPCION: "BARRA DE TRACCION",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "21",
    descripcion: "KIT MANCUERNAS",
    cod_nivel_padre: "15",
    COD_NIVEL: "21",
    DESCRIPCION: "KIT MANCUERNAS",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "22",
    descripcion: "BARRA DE PESAS",
    cod_nivel_padre: "15",
    COD_NIVEL: "22",
    DESCRIPCION: "BARRA DE PESAS",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "23",
    descripcion: "DISCO DE PESAS",
    cod_nivel_padre: "15",
    COD_NIVEL: "23",
    DESCRIPCION: "DISCO DE PESAS",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "24",
    descripcion: "GUANTES MUSCULACION",
    cod_nivel_padre: "15",
    COD_NIVEL: "24",
    DESCRIPCION: "GUANTES MUSCULACION",
    COD_NIVEL_PADRE: "15"
  },
  {
    cod_nivel: "801",
    descripcion: "DESTORNILLADOR",
    cod_nivel_padre: "787",
    COD_NIVEL: "801",
    DESCRIPCION: "DESTORNILLADOR",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "808",
    descripcion: "ALICATE",
    cod_nivel_padre: "787",
    COD_NIVEL: "808",
    DESCRIPCION: "ALICATE",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "819",
    descripcion: "MARTILLO",
    cod_nivel_padre: "787",
    COD_NIVEL: "819",
    DESCRIPCION: "MARTILLO",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "832",
    descripcion: "MEDIDA",
    cod_nivel_padre: "787",
    COD_NIVEL: "832",
    DESCRIPCION: "MEDIDA",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "838",
    descripcion: "FIJACION",
    cod_nivel_padre: "787",
    COD_NIVEL: "838",
    DESCRIPCION: "FIJACION",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "842",
    descripcion: "DE CORTE",
    cod_nivel_padre: "787",
    COD_NIVEL: "842",
    DESCRIPCION: "DE CORTE",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "850",
    descripcion: "TALADRO",
    cod_nivel_padre: "849",
    COD_NIVEL: "850",
    DESCRIPCION: "TALADRO",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "1019",
    descripcion: "CABLE TELEFONO",
    cod_nivel_padre: "5160",
    COD_NIVEL: "1019",
    DESCRIPCION: "CABLE TELEFONO",
    COD_NIVEL_PADRE: "5160"
  },
  {
    cod_nivel: "1020",
    descripcion: "OTROS CABLES ELECTRICIDAD",
    cod_nivel_padre: "5158",
    COD_NIVEL: "1020",
    DESCRIPCION: "OTROS CABLES ELECTRICIDAD",
    COD_NIVEL_PADRE: "5158"
  },
  {
    cod_nivel: "1070",
    descripcion: "VESTIMENTA",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1070",
    DESCRIPCION: "VESTIMENTA",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "460",
    descripcion: "ESPEJO BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "460",
    DESCRIPCION: "ESPEJO BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "461",
    descripcion: "OTROS DUCHA Y BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "461",
    DESCRIPCION: "OTROS DUCHA Y BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "462",
    descripcion: "LUMINOTERAPIA",
    cod_nivel_padre: "5098",
    COD_NIVEL: "462",
    DESCRIPCION: "LUMINOTERAPIA",
    COD_NIVEL_PADRE: "5098"
  },
  {
    cod_nivel: "465",
    descripcion: "MASAJES",
    cod_nivel_padre: "5177",
    COD_NIVEL: "465",
    DESCRIPCION: "MASAJES",
    COD_NIVEL_PADRE: "5177"
  },
  {
    cod_nivel: "466",
    descripcion: "APARATOS MASAJE",
    cod_nivel_padre: "5098",
    COD_NIVEL: "466",
    DESCRIPCION: "APARATOS MASAJE",
    COD_NIVEL_PADRE: "5098"
  },
  {
    cod_nivel: "475",
    descripcion: "CAMILLA  MASAJE",
    cod_nivel_padre: "465",
    COD_NIVEL: "475",
    DESCRIPCION: "CAMILLA  MASAJE",
    COD_NIVEL_PADRE: "465"
  },
  {
    cod_nivel: "476",
    descripcion: "SILLA MASAJE",
    cod_nivel_padre: "465",
    COD_NIVEL: "476",
    DESCRIPCION: "SILLA MASAJE",
    COD_NIVEL_PADRE: "465"
  },
  {
    cod_nivel: "477",
    descripcion: "SILLON MASAJES",
    cod_nivel_padre: "465",
    COD_NIVEL: "477",
    DESCRIPCION: "SILLON MASAJES",
    COD_NIVEL_PADRE: "465"
  },
  {
    cod_nivel: "478",
    descripcion: "OTROS MASAJES",
    cod_nivel_padre: "465",
    COD_NIVEL: "478",
    DESCRIPCION: "OTROS MASAJES",
    COD_NIVEL_PADRE: "465"
  },
  {
    cod_nivel: "479",
    descripcion: "MANICURA Y PEDICURA",
    cod_nivel_padre: "5177",
    COD_NIVEL: "479",
    DESCRIPCION: "MANICURA Y PEDICURA",
    COD_NIVEL_PADRE: "5177"
  },
  {
    cod_nivel: "483",
    descripcion: "ORTOPEDIA",
    cod_nivel_padre: "5177",
    COD_NIVEL: "483",
    DESCRIPCION: "ORTOPEDIA",
    COD_NIVEL_PADRE: "5177"
  },
  {
    cod_nivel: "484",
    descripcion: "ANDADOR",
    cod_nivel_padre: "483",
    COD_NIVEL: "484",
    DESCRIPCION: "ANDADOR",
    COD_NIVEL_PADRE: "483"
  },
  {
    cod_nivel: "486",
    descripcion: "SILLA DE RUEDAS",
    cod_nivel_padre: "483",
    COD_NIVEL: "486",
    DESCRIPCION: "SILLA DE RUEDAS",
    COD_NIVEL_PADRE: "483"
  },
  {
    cod_nivel: "487",
    descripcion: "OTROS ORTOPEDIA",
    cod_nivel_padre: "483",
    COD_NIVEL: "487",
    DESCRIPCION: "OTROS ORTOPEDIA",
    COD_NIVEL_PADRE: "483"
  },
  {
    cod_nivel: "488",
    descripcion: "APARATOS SALUD",
    cod_nivel_padre: "5177",
    COD_NIVEL: "488",
    DESCRIPCION: "APARATOS SALUD",
    COD_NIVEL_PADRE: "5177"
  },
  {
    cod_nivel: "490",
    descripcion: "AUDIFONO",
    cod_nivel_padre: "488",
    COD_NIVEL: "490",
    DESCRIPCION: "AUDIFONO",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "491",
    descripcion: "INHALADOR",
    cod_nivel_padre: "488",
    COD_NIVEL: "491",
    DESCRIPCION: "INHALADOR",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "492",
    descripcion: "NEBULIZADOR",
    cod_nivel_padre: "488",
    COD_NIVEL: "492",
    DESCRIPCION: "NEBULIZADOR",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "495",
    descripcion: "OTROS SALUD",
    cod_nivel_padre: "488",
    COD_NIVEL: "495",
    DESCRIPCION: "OTROS SALUD",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "496",
    descripcion: "PERFUME",
    cod_nivel_padre: "5179",
    COD_NIVEL: "496",
    DESCRIPCION: "PERFUME",
    COD_NIVEL_PADRE: "5179"
  },
  {
    cod_nivel: "500",
    descripcion: "GATOS",
    cod_nivel_padre: "499",
    COD_NIVEL: "500",
    DESCRIPCION: "GATOS",
    COD_NIVEL_PADRE: "499"
  },
  {
    cod_nivel: "502",
    descripcion: "COMEDERO BEBEDERO DE GATOS",
    cod_nivel_padre: "500",
    COD_NIVEL: "502",
    DESCRIPCION: "COMEDERO BEBEDERO DE GATOS",
    COD_NIVEL_PADRE: "500"
  },
  {
    cod_nivel: "503",
    descripcion: "COLLAR DE GATOS",
    cod_nivel_padre: "500",
    COD_NIVEL: "503",
    DESCRIPCION: "COLLAR DE GATOS",
    COD_NIVEL_PADRE: "500"
  },
  {
    cod_nivel: "504",
    descripcion: "RASCADOR DE GATOS",
    cod_nivel_padre: "500",
    COD_NIVEL: "504",
    DESCRIPCION: "RASCADOR DE GATOS",
    COD_NIVEL_PADRE: "500"
  },
  {
    cod_nivel: "505",
    descripcion: "JUGUETE DE GATOS",
    cod_nivel_padre: "500",
    COD_NIVEL: "505",
    DESCRIPCION: "JUGUETE DE GATOS",
    COD_NIVEL_PADRE: "500"
  },
  {
    cod_nivel: "506",
    descripcion: "HAMSTERS",
    cod_nivel_padre: "499",
    COD_NIVEL: "506",
    DESCRIPCION: "HAMSTERS",
    COD_NIVEL_PADRE: "499"
  },
  {
    cod_nivel: "507",
    descripcion: "JAULA HAMSTERS",
    cod_nivel_padre: "506",
    COD_NIVEL: "507",
    DESCRIPCION: "JAULA HAMSTERS",
    COD_NIVEL_PADRE: "506"
  },
  {
    cod_nivel: "508",
    descripcion: "PAJAROS",
    cod_nivel_padre: "499",
    COD_NIVEL: "508",
    DESCRIPCION: "PAJAROS",
    COD_NIVEL_PADRE: "499"
  },
  {
    cod_nivel: "510",
    descripcion: "SOPORTE JAULA DE PAJAROS",
    cod_nivel_padre: "508",
    COD_NIVEL: "510",
    DESCRIPCION: "SOPORTE JAULA DE PAJAROS",
    COD_NIVEL_PADRE: "508"
  },
  {
    cod_nivel: "262",
    descripcion: "LANCHA",
    cod_nivel_padre: "261",
    COD_NIVEL: "262",
    DESCRIPCION: "LANCHA",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "263",
    descripcion: "BARCO INFLABLE",
    cod_nivel_padre: "261",
    COD_NIVEL: "263",
    DESCRIPCION: "BARCO INFLABLE",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "264",
    descripcion: "MOTOR LANCHA",
    cod_nivel_padre: "261",
    COD_NIVEL: "264",
    DESCRIPCION: "MOTOR LANCHA",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "267",
    descripcion: "EQUIPO FONDEO",
    cod_nivel_padre: "261",
    COD_NIVEL: "267",
    DESCRIPCION: "EQUIPO FONDEO",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "268",
    descripcion: "ACCESORIO AMARRE",
    cod_nivel_padre: "267",
    COD_NIVEL: "268",
    DESCRIPCION: "ACCESORIO AMARRE",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "269",
    descripcion: "AMORTIGUADOR AMARRE",
    cod_nivel_padre: "267",
    COD_NIVEL: "269",
    DESCRIPCION: "AMORTIGUADOR AMARRE",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "270",
    descripcion: "ANCLA",
    cod_nivel_padre: "267",
    COD_NIVEL: "270",
    DESCRIPCION: "ANCLA",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "271",
    descripcion: "BICHERO",
    cod_nivel_padre: "267",
    COD_NIVEL: "271",
    DESCRIPCION: "BICHERO",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "272",
    descripcion: "CABESTRANTE",
    cod_nivel_padre: "267",
    COD_NIVEL: "272",
    DESCRIPCION: "CABESTRANTE",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "273",
    descripcion: "DEFENSA EMBARCACION",
    cod_nivel_padre: "267",
    COD_NIVEL: "273",
    DESCRIPCION: "DEFENSA EMBARCACION",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "274",
    descripcion: "DEFENSA PANTALAN",
    cod_nivel_padre: "267",
    COD_NIVEL: "274",
    DESCRIPCION: "DEFENSA PANTALAN",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "275",
    descripcion: "ESCALERA",
    cod_nivel_padre: "267",
    COD_NIVEL: "275",
    DESCRIPCION: "ESCALERA",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "276",
    descripcion: "MOLINETE",
    cod_nivel_padre: "267",
    COD_NIVEL: "276",
    DESCRIPCION: "MOLINETE",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "277",
    descripcion: "REMO",
    cod_nivel_padre: "267",
    COD_NIVEL: "277",
    DESCRIPCION: "REMO",
    COD_NIVEL_PADRE: "267"
  },
  {
    cod_nivel: "278",
    descripcion: "SEGURIDAD Y SALVAMENTO",
    cod_nivel_padre: "261",
    COD_NIVEL: "278",
    DESCRIPCION: "SEGURIDAD Y SALVAMENTO",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "279",
    descripcion: "BALSA SUPERVIVENCIA",
    cod_nivel_padre: "278",
    COD_NIVEL: "279",
    DESCRIPCION: "BALSA SUPERVIVENCIA",
    COD_NIVEL_PADRE: "278"
  },
  {
    cod_nivel: "286",
    descripcion: "OTROS NAUTICOS",
    cod_nivel_padre: "261",
    COD_NIVEL: "286",
    DESCRIPCION: "OTROS NAUTICOS",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "288",
    descripcion: "TABLAS",
    cod_nivel_padre: "261",
    COD_NIVEL: "288",
    DESCRIPCION: "TABLAS",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "290",
    descripcion: "WINDSURF",
    cod_nivel_padre: "288",
    COD_NIVEL: "290",
    DESCRIPCION: "WINDSURF",
    COD_NIVEL_PADRE: "288"
  },
  {
    cod_nivel: "291",
    descripcion: "WAKEBOARD",
    cod_nivel_padre: "288",
    COD_NIVEL: "291",
    DESCRIPCION: "WAKEBOARD",
    COD_NIVEL_PADRE: "288"
  },
  {
    cod_nivel: "292",
    descripcion: "ESQUI NAUTICO",
    cod_nivel_padre: "288",
    COD_NIVEL: "292",
    DESCRIPCION: "ESQUI NAUTICO",
    COD_NIVEL_PADRE: "288"
  },
  {
    cod_nivel: "695",
    descripcion: "PLANCHADO",
    cod_nivel_padre: "630",
    COD_NIVEL: "695",
    DESCRIPCION: "PLANCHADO",
    COD_NIVEL_PADRE: "630"
  },
  {
    cod_nivel: "700",
    descripcion: "BAÑO",
    cod_nivel_padre: "699",
    COD_NIVEL: "700",
    DESCRIPCION: "BAÑO",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "701",
    descripcion: "ESTANTE",
    cod_nivel_padre: "699",
    COD_NIVEL: "701",
    DESCRIPCION: "ESTANTE",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "702",
    descripcion: "VITRINA",
    cod_nivel_padre: "699",
    COD_NIVEL: "702",
    DESCRIPCION: "VITRINA",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "703",
    descripcion: "ESCRITORIO",
    cod_nivel_padre: "699",
    COD_NIVEL: "703",
    DESCRIPCION: "ESCRITORIO",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "704",
    descripcion: "DORMITORIO",
    cod_nivel_padre: "699",
    COD_NIVEL: "704",
    DESCRIPCION: "DORMITORIO",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "1910",
    descripcion: "CABLES Y CONEXIONES MUSICA PRO",
    cod_nivel_padre: "5156",
    COD_NIVEL: "1910",
    DESCRIPCION: "CABLES Y CONEXIONES MUSICA PRO",
    COD_NIVEL_PADRE: "5156"
  },
  {
    cod_nivel: "2132",
    descripcion: "ADAPTADOR TECLADO PS3",
    cod_nivel_padre: "5159",
    COD_NIVEL: "2132",
    DESCRIPCION: "ADAPTADOR TECLADO PS3",
    COD_NIVEL_PADRE: "5159"
  },
  {
    cod_nivel: "2133",
    descripcion: "CABLE HDMI A DVI",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2133",
    DESCRIPCION: "CABLE HDMI A DVI",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2134",
    descripcion: "CABLE COMPONENTES PS3",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2134",
    DESCRIPCION: "CABLE COMPONENTES PS3",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2135",
    descripcion: "MANDOS PS3",
    cod_nivel_padre: "5115",
    COD_NIVEL: "2135",
    DESCRIPCION: "MANDOS PS3",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "2154",
    descripcion: "ADAPTADOR MANDO PS2 A WII",
    cod_nivel_padre: "5159",
    COD_NIVEL: "2154",
    DESCRIPCION: "ADAPTADOR MANDO PS2 A WII",
    COD_NIVEL_PADRE: "5159"
  },
  {
    cod_nivel: "2155",
    descripcion: "ADAPTADOR CORRIENTE WII",
    cod_nivel_padre: "5159",
    COD_NIVEL: "2155",
    DESCRIPCION: "ADAPTADOR CORRIENTE WII",
    COD_NIVEL_PADRE: "5159"
  },
  {
    cod_nivel: "2156",
    descripcion: "ADAPTADOR LAN WII",
    cod_nivel_padre: "5159",
    COD_NIVEL: "2156",
    DESCRIPCION: "ADAPTADOR LAN WII",
    COD_NIVEL_PADRE: "5159"
  },
  {
    cod_nivel: "2157",
    descripcion: "CABLE ALARGADOR SENSOR  WII",
    cod_nivel_padre: "5159",
    COD_NIVEL: "2157",
    DESCRIPCION: "CABLE ALARGADOR SENSOR  WII",
    COD_NIVEL_PADRE: "5159"
  },
  {
    cod_nivel: "2158",
    descripcion: "CABLE AV WII",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2158",
    DESCRIPCION: "CABLE AV WII",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2159",
    descripcion: "CABLE COMPONENTES WII",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2159",
    DESCRIPCION: "CABLE COMPONENTES WII",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2160",
    descripcion: "MANDOS WII",
    cod_nivel_padre: "5115",
    COD_NIVEL: "2160",
    DESCRIPCION: "MANDOS WII",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "1784",
    descripcion: "MADERA",
    cod_nivel_padre: "1428",
    COD_NIVEL: "1784",
    DESCRIPCION: "MADERA",
    COD_NIVEL_PADRE: "1428"
  },
  {
    cod_nivel: "1794",
    descripcion: "OTROS VIENTO",
    cod_nivel_padre: "1428",
    COD_NIVEL: "1794",
    DESCRIPCION: "OTROS VIENTO",
    COD_NIVEL_PADRE: "1428"
  },
  {
    cod_nivel: "1800",
    descripcion: "ACCESORIOS VIENTO",
    cod_nivel_padre: "1428",
    COD_NIVEL: "1800",
    DESCRIPCION: "ACCESORIOS VIENTO",
    COD_NIVEL_PADRE: "1428"
  },
  {
    cod_nivel: "1817",
    descripcion: "GUITARRA",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1817",
    DESCRIPCION: "GUITARRA",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1826",
    descripcion: "ACCESORIOS CUERDA",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1826",
    DESCRIPCION: "ACCESORIOS CUERDA",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1515",
    descripcion: "ACCESORIOS VARIOS",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1515",
    DESCRIPCION: "ACCESORIOS VARIOS",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1516",
    descripcion: "BAZAR",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1516",
    DESCRIPCION: "BAZAR",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1517",
    descripcion: "BOLIGRAFO PLUMA MECHERO",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1517",
    DESCRIPCION: "BOLIGRAFO PLUMA MECHERO",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1518",
    descripcion: "BRICOLAJE",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1518",
    DESCRIPCION: "BRICOLAJE",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1519",
    descripcion: "CALCU AGENDA ACC OFI",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1519",
    DESCRIPCION: "CALCU AGENDA ACC OFI",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1520",
    descripcion: "CAR AUDIO",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1520",
    DESCRIPCION: "CAR AUDIO",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1521",
    descripcion: "CONSOLA Y ACC CONSOLA",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1521",
    DESCRIPCION: "CONSOLA Y ACC CONSOLA",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1522",
    descripcion: "DECORACION",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1522",
    DESCRIPCION: "DECORACION",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1523",
    descripcion: "DEPORTES",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1523",
    DESCRIPCION: "DEPORTES",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1524",
    descripcion: "ELECTRODOMESTICOS",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1524",
    DESCRIPCION: "ELECTRODOMESTICOS",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1525",
    descripcion: "FOTOGRAFIA",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1525",
    DESCRIPCION: "FOTOGRAFIA",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1526",
    descripcion: "GAFAS",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1526",
    DESCRIPCION: "GAFAS",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1527",
    descripcion: "HIFI",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1527",
    DESCRIPCION: "HIFI",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1528",
    descripcion: "IMPRESORAS PERIFERICOS",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1528",
    DESCRIPCION: "IMPRESORAS PERIFERICOS",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1529",
    descripcion: "INSTRUMENTOS MUSICALES",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1529",
    DESCRIPCION: "INSTRUMENTOS MUSICALES",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1530",
    descripcion: "JOYERIA",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1530",
    DESCRIPCION: "JOYERIA",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1531",
    descripcion: "JUGUETES",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1531",
    DESCRIPCION: "JUGUETES",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1532",
    descripcion: "MONITORES",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1532",
    DESCRIPCION: "MONITORES",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1533",
    descripcion: "MUSICA PROFESIONAL",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1533",
    DESCRIPCION: "MUSICA PROFESIONAL",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1534",
    descripcion: "OTROS",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1534",
    DESCRIPCION: "OTROS",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1535",
    descripcion: "PC",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1535",
    DESCRIPCION: "PC",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1536",
    descripcion: "PILAS CABLES CONSUMIBLES",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1536",
    DESCRIPCION: "PILAS CABLES CONSUMIBLES",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1537",
    descripcion: "PORTATIL",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1537",
    DESCRIPCION: "PORTATIL",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1538",
    descripcion: "RELOJES",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1538",
    DESCRIPCION: "RELOJES",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1539",
    descripcion: "TELEFONIA",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1539",
    DESCRIPCION: "TELEFONIA",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1540",
    descripcion: "TELEVISION",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1540",
    DESCRIPCION: "TELEVISION",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1541",
    descripcion: "VCR DVD",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1541",
    DESCRIPCION: "VCR DVD",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1542",
    descripcion: "VIDEOCAMARAS",
    cod_nivel_padre: "1514",
    COD_NIVEL: "1542",
    DESCRIPCION: "VIDEOCAMARAS",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "1563",
    descripcion: "LECTOR TARJETAS",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1563",
    DESCRIPCION: "LECTOR TARJETAS",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1457",
    descripcion: "BODA",
    cod_nivel_padre: "5178",
    COD_NIVEL: "1457",
    DESCRIPCION: "BODA",
    COD_NIVEL_PADRE: "5178"
  },
  {
    cod_nivel: "5152",
    descripcion: "TARJETAS CONSOLAS",
    cod_nivel_padre: "1242",
    COD_NIVEL: "5152",
    DESCRIPCION: "TARJETAS CONSOLAS",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "5155",
    descripcion: "CABLES VIDEO",
    cod_nivel_padre: "5154",
    COD_NIVEL: "5155",
    DESCRIPCION: "CABLES VIDEO",
    COD_NIVEL_PADRE: "5154"
  },
  {
    cod_nivel: "5156",
    descripcion: "CABLES AUDIO",
    cod_nivel_padre: "5154",
    COD_NIVEL: "5156",
    DESCRIPCION: "CABLES AUDIO",
    COD_NIVEL_PADRE: "5154"
  },
  {
    cod_nivel: "5157",
    descripcion: "CABLES INFORMATICA",
    cod_nivel_padre: "5154",
    COD_NIVEL: "5157",
    DESCRIPCION: "CABLES INFORMATICA",
    COD_NIVEL_PADRE: "5154"
  },
  {
    cod_nivel: "5158",
    descripcion: "CABLES ELECTRICIDAD",
    cod_nivel_padre: "5154",
    COD_NIVEL: "5158",
    DESCRIPCION: "CABLES ELECTRICIDAD",
    COD_NIVEL_PADRE: "5154"
  },
  {
    cod_nivel: "5159",
    descripcion: "CONSOLAS",
    cod_nivel_padre: "5154",
    COD_NIVEL: "5159",
    DESCRIPCION: "CONSOLAS",
    COD_NIVEL_PADRE: "5154"
  },
  {
    cod_nivel: "5160",
    descripcion: "CABLES TELEFONIA",
    cod_nivel_padre: "5154",
    COD_NIVEL: "5160",
    DESCRIPCION: "CABLES TELEFONIA",
    COD_NIVEL_PADRE: "5154"
  },
  {
    cod_nivel: "1307",
    descripcion: "OTROS CABLES VIDEO",
    cod_nivel_padre: "5155",
    COD_NIVEL: "1307",
    DESCRIPCION: "OTROS CABLES VIDEO",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "1308",
    descripcion: "DVD VIRGEN",
    cod_nivel_padre: "5153",
    COD_NIVEL: "1308",
    DESCRIPCION: "DVD VIRGEN",
    COD_NIVEL_PADRE: "5153"
  },
  {
    cod_nivel: "1309",
    descripcion: "VHS VIRGEN",
    cod_nivel_padre: "5153",
    COD_NIVEL: "1309",
    DESCRIPCION: "VHS VIRGEN",
    COD_NIVEL_PADRE: "5153"
  },
  {
    cod_nivel: "1310",
    descripcion: "DISCO BLU RAY VIRGEN",
    cod_nivel_padre: "5153",
    COD_NIVEL: "1310",
    DESCRIPCION: "DISCO BLU RAY VIRGEN",
    COD_NIVEL_PADRE: "5153"
  },
  {
    cod_nivel: "78",
    descripcion: "ACCESORIOS Y COMPLEMENTOS",
    cod_nivel_padre: "77",
    COD_NIVEL: "78",
    DESCRIPCION: "ACCESORIOS Y COMPLEMENTOS",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "95",
    descripcion: "BICICLETAS",
    cod_nivel_padre: "77",
    COD_NIVEL: "95",
    DESCRIPCION: "BICICLETAS",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "96",
    descripcion: "BICICLETA MONTAÑA",
    cod_nivel_padre: "95",
    COD_NIVEL: "96",
    DESCRIPCION: "BICICLETA MONTAÑA",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "97",
    descripcion: "BICICLETA CARRETERA",
    cod_nivel_padre: "95",
    COD_NIVEL: "97",
    DESCRIPCION: "BICICLETA CARRETERA",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "98",
    descripcion: "BICICLETA PASEO",
    cod_nivel_padre: "95",
    COD_NIVEL: "98",
    DESCRIPCION: "BICICLETA PASEO",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "99",
    descripcion: "BMX",
    cod_nivel_padre: "95",
    COD_NIVEL: "99",
    DESCRIPCION: "BMX",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "100",
    descripcion: "BICICLETA PLEGABLE",
    cod_nivel_padre: "95",
    COD_NIVEL: "100",
    DESCRIPCION: "BICICLETA PLEGABLE",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "101",
    descripcion: "BICICLETA RECLINADA",
    cod_nivel_padre: "95",
    COD_NIVEL: "101",
    DESCRIPCION: "BICICLETA RECLINADA",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "102",
    descripcion: "TANDEM",
    cod_nivel_padre: "95",
    COD_NIVEL: "102",
    DESCRIPCION: "TANDEM",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "103",
    descripcion: "MONOCICLO",
    cod_nivel_padre: "95",
    COD_NIVEL: "103",
    DESCRIPCION: "MONOCICLO",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "104",
    descripcion: "BICICLETA NIÑO",
    cod_nivel_padre: "95",
    COD_NIVEL: "104",
    DESCRIPCION: "BICICLETA NIÑO",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "105",
    descripcion: "OTRAS BICICLETAS",
    cod_nivel_padre: "95",
    COD_NIVEL: "105",
    DESCRIPCION: "OTRAS BICICLETAS",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "106",
    descripcion: "PIEZAS BICICLETAS",
    cod_nivel_padre: "77",
    COD_NIVEL: "106",
    DESCRIPCION: "PIEZAS BICICLETAS",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "118",
    descripcion: "RECAMBIOS BICICLETA",
    cod_nivel_padre: "77",
    COD_NIVEL: "118",
    DESCRIPCION: "RECAMBIOS BICICLETA",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "854",
    descripcion: "MARTILLO",
    cod_nivel_padre: "849",
    COD_NIVEL: "854",
    DESCRIPCION: "MARTILLO",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "859",
    descripcion: "ATORNILLADOR ",
    cod_nivel_padre: "849",
    COD_NIVEL: "859",
    DESCRIPCION: "ATORNILLADOR ",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "862",
    descripcion: "SIERRA",
    cod_nivel_padre: "849",
    COD_NIVEL: "862",
    DESCRIPCION: "SIERRA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "869",
    descripcion: "LIJADORA",
    cod_nivel_padre: "849",
    COD_NIVEL: "869",
    DESCRIPCION: "LIJADORA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "886",
    descripcion: "HERRAMIENTA MINIATURA",
    cod_nivel_padre: "849",
    COD_NIVEL: "886",
    DESCRIPCION: "HERRAMIENTA MINIATURA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "896",
    descripcion: "HERRAMIENTA FONTANERIA",
    cod_nivel_padre: "895",
    COD_NIVEL: "896",
    DESCRIPCION: "HERRAMIENTA FONTANERIA",
    COD_NIVEL_PADRE: "895"
  },
  {
    cod_nivel: "906",
    descripcion: "HERRAMIENTA ALBAÑILERIA",
    cod_nivel_padre: "895",
    COD_NIVEL: "906",
    DESCRIPCION: "HERRAMIENTA ALBAÑILERIA",
    COD_NIVEL_PADRE: "895"
  },
  {
    cod_nivel: "1082",
    descripcion: "CASCO",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1082",
    DESCRIPCION: "CASCO",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1089",
    descripcion: "EQUIPAJE",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1089",
    DESCRIPCION: "EQUIPAJE",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1093",
    descripcion: "INTERCOMUNICADORES",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1093",
    DESCRIPCION: "INTERCOMUNICADORES",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1098",
    descripcion: "MINIMOTO",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1098",
    DESCRIPCION: "MINIMOTO",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "511",
    descripcion: "COMEDERO DE PAJAROS",
    cod_nivel_padre: "508",
    COD_NIVEL: "511",
    DESCRIPCION: "COMEDERO DE PAJAROS",
    COD_NIVEL_PADRE: "508"
  },
  {
    cod_nivel: "512",
    descripcion: "BEBEDERO DE PAJAROS",
    cod_nivel_padre: "508",
    COD_NIVEL: "512",
    DESCRIPCION: "BEBEDERO DE PAJAROS",
    COD_NIVEL_PADRE: "508"
  },
  {
    cod_nivel: "513",
    descripcion: "INCUBADORA",
    cod_nivel_padre: "508",
    COD_NIVEL: "513",
    DESCRIPCION: "INCUBADORA",
    COD_NIVEL_PADRE: "508"
  },
  {
    cod_nivel: "514",
    descripcion: "CAJA NIDO DE PAJAROS",
    cod_nivel_padre: "508",
    COD_NIVEL: "514",
    DESCRIPCION: "CAJA NIDO DE PAJAROS",
    COD_NIVEL_PADRE: "508"
  },
  {
    cod_nivel: "515",
    descripcion: "PECES Y ACUARIOS",
    cod_nivel_padre: "499",
    COD_NIVEL: "515",
    DESCRIPCION: "PECES Y ACUARIOS",
    COD_NIVEL_PADRE: "499"
  },
  {
    cod_nivel: "516",
    descripcion: "ACUARIO",
    cod_nivel_padre: "515",
    COD_NIVEL: "516",
    DESCRIPCION: "ACUARIO",
    COD_NIVEL_PADRE: "515"
  },
  {
    cod_nivel: "522",
    descripcion: "BASE ACUARIO",
    cod_nivel_padre: "515",
    COD_NIVEL: "522",
    DESCRIPCION: "BASE ACUARIO",
    COD_NIVEL_PADRE: "515"
  },
  {
    cod_nivel: "523",
    descripcion: "PERROS",
    cod_nivel_padre: "499",
    COD_NIVEL: "523",
    DESCRIPCION: "PERROS",
    COD_NIVEL_PADRE: "499"
  },
  {
    cod_nivel: "524",
    descripcion: "TRANSPORTIN DE PERROS",
    cod_nivel_padre: "523",
    COD_NIVEL: "524",
    DESCRIPCION: "TRANSPORTIN DE PERROS",
    COD_NIVEL_PADRE: "523"
  },
  {
    cod_nivel: "525",
    descripcion: "COMEDERO BEBEDERO DE PERROS",
    cod_nivel_padre: "523",
    COD_NIVEL: "525",
    DESCRIPCION: "COMEDERO BEBEDERO DE PERROS",
    COD_NIVEL_PADRE: "523"
  },
  {
    cod_nivel: "526",
    descripcion: "CORREA",
    cod_nivel_padre: "523",
    COD_NIVEL: "526",
    DESCRIPCION: "CORREA",
    COD_NIVEL_PADRE: "523"
  },
  {
    cod_nivel: "527",
    descripcion: "ARNES",
    cod_nivel_padre: "523",
    COD_NIVEL: "527",
    DESCRIPCION: "ARNES",
    COD_NIVEL_PADRE: "523"
  },
  {
    cod_nivel: "528",
    descripcion: "COLLAR DE PERROS",
    cod_nivel_padre: "523",
    COD_NIVEL: "528",
    DESCRIPCION: "COLLAR DE PERROS",
    COD_NIVEL_PADRE: "523"
  },
  {
    cod_nivel: "529",
    descripcion: "JUGUETE DE PERROS",
    cod_nivel_padre: "523",
    COD_NIVEL: "529",
    DESCRIPCION: "JUGUETE DE PERROS",
    COD_NIVEL_PADRE: "523"
  },
  {
    cod_nivel: "530",
    descripcion: "REPTILES",
    cod_nivel_padre: "499",
    COD_NIVEL: "530",
    DESCRIPCION: "REPTILES",
    COD_NIVEL_PADRE: "499"
  },
  {
    cod_nivel: "533",
    descripcion: "OTROS ARTICULOS ANIMALES",
    cod_nivel_padre: "499",
    COD_NIVEL: "533",
    DESCRIPCION: "OTROS ARTICULOS ANIMALES",
    COD_NIVEL_PADRE: "499"
  },
  {
    cod_nivel: "538",
    descripcion: "TERMOSTATO ELECTRONICO",
    cod_nivel_padre: "534",
    COD_NIVEL: "538",
    DESCRIPCION: "TERMOSTATO ELECTRONICO",
    COD_NIVEL_PADRE: "534"
  },
  {
    cod_nivel: "539",
    descripcion: "PROTECTOR DE SOBRECARGA",
    cod_nivel_padre: "534",
    COD_NIVEL: "539",
    DESCRIPCION: "PROTECTOR DE SOBRECARGA",
    COD_NIVEL_PADRE: "534"
  },
  {
    cod_nivel: "540",
    descripcion: "TEMPORIZADOR",
    cod_nivel_padre: "534",
    COD_NIVEL: "540",
    DESCRIPCION: "TEMPORIZADOR",
    COD_NIVEL_PADRE: "534"
  },
  {
    cod_nivel: "541",
    descripcion: "OTRO AUTOMATIZACION HOGAR",
    cod_nivel_padre: "534",
    COD_NIVEL: "541",
    DESCRIPCION: "OTRO AUTOMATIZACION HOGAR",
    COD_NIVEL_PADRE: "534"
  },
  {
    cod_nivel: "544",
    descripcion: "COLUMNA HIDROMASAJE",
    cod_nivel_padre: "542",
    COD_NIVEL: "544",
    DESCRIPCION: "COLUMNA HIDROMASAJE",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "545",
    descripcion: "EXTRACTOR BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "545",
    DESCRIPCION: "EXTRACTOR BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "547",
    descripcion: "MAMPARA",
    cod_nivel_padre: "542",
    COD_NIVEL: "547",
    DESCRIPCION: "MAMPARA",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "548",
    descripcion: "MUEBLE BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "548",
    DESCRIPCION: "MUEBLE BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "549",
    descripcion: "TOALLERO",
    cod_nivel_padre: "542",
    COD_NIVEL: "549",
    DESCRIPCION: "TOALLERO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "550",
    descripcion: "JABONERO",
    cod_nivel_padre: "542",
    COD_NIVEL: "550",
    DESCRIPCION: "JABONERO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "551",
    descripcion: "ACCESORIO PARA EL BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "551",
    DESCRIPCION: "ACCESORIO PARA EL BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "552",
    descripcion: "OTROS BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "552",
    DESCRIPCION: "OTROS BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "328",
    descripcion: "CAÑA PESCAR",
    cod_nivel_padre: "327",
    COD_NIVEL: "328",
    DESCRIPCION: "CAÑA PESCAR",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "342",
    descripcion: "TIRO AL ARCO",
    cod_nivel_padre: "341",
    COD_NIVEL: "342",
    DESCRIPCION: "TIRO AL ARCO",
    COD_NIVEL_PADRE: "341"
  },
  {
    cod_nivel: "347",
    descripcion: "DARDOS",
    cod_nivel_padre: "341",
    COD_NIVEL: "347",
    DESCRIPCION: "DARDOS",
    COD_NIVEL_PADRE: "341"
  },
  {
    cod_nivel: "352",
    descripcion: "BOXEO",
    cod_nivel_padre: "351",
    COD_NIVEL: "352",
    DESCRIPCION: "BOXEO",
    COD_NIVEL_PADRE: "351"
  },
  {
    cod_nivel: "1919",
    descripcion: "EFECTO DJ",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1919",
    DESCRIPCION: "EFECTO DJ",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "573",
    descripcion: "CUCHILLERIA",
    cod_nivel_padre: "571",
    COD_NIVEL: "573",
    DESCRIPCION: "CUCHILLERIA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "577",
    descripcion: "ENVASES Y HERMETICOS",
    cod_nivel_padre: "571",
    COD_NIVEL: "577",
    DESCRIPCION: "ENVASES Y HERMETICOS",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "578",
    descripcion: "FRASCO",
    cod_nivel_padre: "577",
    COD_NIVEL: "578",
    DESCRIPCION: "FRASCO",
    COD_NIVEL_PADRE: "577"
  },
  {
    cod_nivel: "579",
    descripcion: "CONTENEDOR DE PLASTICO",
    cod_nivel_padre: "577",
    COD_NIVEL: "579",
    DESCRIPCION: "CONTENEDOR DE PLASTICO",
    COD_NIVEL_PADRE: "577"
  },
  {
    cod_nivel: "580",
    descripcion: "ESTANTE",
    cod_nivel_padre: "577",
    COD_NIVEL: "580",
    DESCRIPCION: "ESTANTE",
    COD_NIVEL_PADRE: "577"
  },
  {
    cod_nivel: "581",
    descripcion: "CRISTALERIA",
    cod_nivel_padre: "571",
    COD_NIVEL: "581",
    DESCRIPCION: "CRISTALERIA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "582",
    descripcion: "FILTROS Y PURIFICADORES",
    cod_nivel_padre: "571",
    COD_NIVEL: "582",
    DESCRIPCION: "FILTROS Y PURIFICADORES",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "583",
    descripcion: "FILTRO OSMOSIS",
    cod_nivel_padre: "582",
    COD_NIVEL: "583",
    DESCRIPCION: "FILTRO OSMOSIS",
    COD_NIVEL_PADRE: "582"
  },
  {
    cod_nivel: "584",
    descripcion: "OTROS FILTRO COCINA",
    cod_nivel_padre: "582",
    COD_NIVEL: "584",
    DESCRIPCION: "OTROS FILTRO COCINA",
    COD_NIVEL_PADRE: "582"
  },
  {
    cod_nivel: "586",
    descripcion: "SARTENES Y CAZUELAS",
    cod_nivel_padre: "571",
    COD_NIVEL: "586",
    DESCRIPCION: "SARTENES Y CAZUELAS",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "592",
    descripcion: "UTENSILIO COCINA",
    cod_nivel_padre: "571",
    COD_NIVEL: "592",
    DESCRIPCION: "UTENSILIO COCINA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "594",
    descripcion: "OTROS HOGAR COCINA",
    cod_nivel_padre: "571",
    COD_NIVEL: "594",
    DESCRIPCION: "OTROS HOGAR COCINA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "596",
    descripcion: "ALFOMBRA",
    cod_nivel_padre: "595",
    COD_NIVEL: "596",
    DESCRIPCION: "ALFOMBRA",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "597",
    descripcion: "CAJA DECORACION",
    cod_nivel_padre: "595",
    COD_NIVEL: "597",
    DESCRIPCION: "CAJA DECORACION",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "598",
    descripcion: "JARRON DECORACION",
    cod_nivel_padre: "595",
    COD_NIVEL: "598",
    DESCRIPCION: "JARRON DECORACION",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "599",
    descripcion: "LATA DECORACION",
    cod_nivel_padre: "595",
    COD_NIVEL: "599",
    DESCRIPCION: "LATA DECORACION",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "603",
    descripcion: "FRAGANCIA PARA HOGAR",
    cod_nivel_padre: "595",
    COD_NIVEL: "603",
    DESCRIPCION: "FRAGANCIA PARA HOGAR",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "2183",
    descripcion: "VARIOS",
    cod_nivel_padre: "1514",
    COD_NIVEL: "2183",
    DESCRIPCION: "VARIOS",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "2185",
    descripcion: "CD VIRGEN",
    cod_nivel_padre: "5153",
    COD_NIVEL: "2185",
    DESCRIPCION: "CD VIRGEN",
    COD_NIVEL_PADRE: "5153"
  },
  {
    cod_nivel: "2191",
    descripcion: "MANDOS XBOX 360",
    cod_nivel_padre: "5115",
    COD_NIVEL: "2191",
    DESCRIPCION: "MANDOS XBOX 360",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "2197",
    descripcion: "BEBES",
    cod_nivel_padre: "1514",
    COD_NIVEL: "2197",
    DESCRIPCION: "BEBES",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "2198",
    descripcion: "VARIOS INFORMATICA",
    cod_nivel_padre: "1514",
    COD_NIVEL: "2198",
    DESCRIPCION: "VARIOS INFORMATICA",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "2199",
    descripcion: "MENAJE",
    cod_nivel_padre: "1514",
    COD_NIVEL: "2199",
    DESCRIPCION: "MENAJE",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "2200",
    descripcion: "BISUTERIA",
    cod_nivel_padre: "1514",
    COD_NIVEL: "2200",
    DESCRIPCION: "BISUTERIA",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "2201",
    descripcion: "PLATA",
    cod_nivel_padre: "1514",
    COD_NIVEL: "2201",
    DESCRIPCION: "PLATA",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "2202",
    descripcion: "MASIVO",
    cod_nivel_padre: "1514",
    COD_NIVEL: "2202",
    DESCRIPCION: "MASIVO",
    COD_NIVEL_PADRE: "1514"
  },
  {
    cod_nivel: "2203",
    descripcion: "BOLSAS DE PLASTICO",
    cod_nivel_padre: "5151",
    COD_NIVEL: "2203",
    DESCRIPCION: "BOLSAS DE PLASTICO",
    COD_NIVEL_PADRE: "5151"
  },
  {
    cod_nivel: "5019",
    descripcion: "ACCESORIO GATOS",
    cod_nivel_padre: "500",
    COD_NIVEL: "5019",
    DESCRIPCION: "ACCESORIO GATOS",
    COD_NIVEL_PADRE: "500"
  },
  {
    cod_nivel: "5020",
    descripcion: "ACCESORIO HAMSTER",
    cod_nivel_padre: "506",
    COD_NIVEL: "5020",
    DESCRIPCION: "ACCESORIO HAMSTER",
    COD_NIVEL_PADRE: "506"
  },
  {
    cod_nivel: "5029",
    descripcion: "TERMO BEBIDAS",
    cod_nivel_padre: "577",
    COD_NIVEL: "5029",
    DESCRIPCION: "TERMO BEBIDAS",
    COD_NIVEL_PADRE: "577"
  },
  {
    cod_nivel: "5033",
    descripcion: "SURF",
    cod_nivel_padre: "288",
    COD_NIVEL: "5033",
    DESCRIPCION: "SURF",
    COD_NIVEL_PADRE: "288"
  },
  {
    cod_nivel: "1852",
    descripcion: "BATERIA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1852",
    DESCRIPCION: "BATERIA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1947",
    descripcion: "OTRO EQUPAMIENTO DJ",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1947",
    DESCRIPCION: "OTRO EQUPAMIENTO DJ",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1956",
    descripcion: "BOLSO ASA CORTA",
    cod_nivel_padre: "1458",
    COD_NIVEL: "1956",
    DESCRIPCION: "BOLSO ASA CORTA",
    COD_NIVEL_PADRE: "1458"
  },
  {
    cod_nivel: "1957",
    descripcion: "BOLSO ASA LARGA",
    cod_nivel_padre: "1458",
    COD_NIVEL: "1957",
    DESCRIPCION: "BOLSO ASA LARGA",
    COD_NIVEL_PADRE: "1458"
  },
  {
    cod_nivel: "1958",
    descripcion: "BANDOLERA",
    cod_nivel_padre: "1458",
    COD_NIVEL: "1958",
    DESCRIPCION: "BANDOLERA",
    COD_NIVEL_PADRE: "1458"
  },
  {
    cod_nivel: "1959",
    descripcion: "BOLSO FIESTA",
    cod_nivel_padre: "1458",
    COD_NIVEL: "1959",
    DESCRIPCION: "BOLSO FIESTA",
    COD_NIVEL_PADRE: "1458"
  },
  {
    cod_nivel: "1573",
    descripcion: "ACCESORIOS OBJETIVOS",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1573",
    DESCRIPCION: "ACCESORIOS OBJETIVOS",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1360",
    descripcion: "OTROS CABLES AUDIO",
    cod_nivel_padre: "5156",
    COD_NIVEL: "1360",
    DESCRIPCION: "OTROS CABLES AUDIO",
    COD_NIVEL_PADRE: "5156"
  },
  {
    cod_nivel: "1363",
    descripcion: "CINTA CASSETTE VIRGEN",
    cod_nivel_padre: "5153",
    COD_NIVEL: "1363",
    DESCRIPCION: "CINTA CASSETTE VIRGEN",
    COD_NIVEL_PADRE: "5153"
  },
  {
    cod_nivel: "1364",
    descripcion: "MINI DISC VIRGEN",
    cod_nivel_padre: "5153",
    COD_NIVEL: "1364",
    DESCRIPCION: "MINI DISC VIRGEN",
    COD_NIVEL_PADRE: "5153"
  },
  {
    cod_nivel: "1370",
    descripcion: "CALCULADORAS",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1370",
    DESCRIPCION: "CALCULADORAS",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "1389",
    descripcion: "PILAS RECARGABLES",
    cod_nivel_padre: "1387",
    COD_NIVEL: "1389",
    DESCRIPCION: "PILAS RECARGABLES",
    COD_NIVEL_PADRE: "1387"
  },
  {
    cod_nivel: "1390",
    descripcion: "PILAS DESECHABLES",
    cod_nivel_padre: "1387",
    COD_NIVEL: "1390",
    DESCRIPCION: "PILAS DESECHABLES",
    COD_NIVEL_PADRE: "1387"
  },
  {
    cod_nivel: "1391",
    descripcion: "KIT CARGADOR Y PILAS",
    cod_nivel_padre: "1387",
    COD_NIVEL: "1391",
    DESCRIPCION: "KIT CARGADOR Y PILAS",
    COD_NIVEL_PADRE: "1387"
  },
  {
    cod_nivel: "1392",
    descripcion: "CARGADOR PILAS ",
    cod_nivel_padre: "1387",
    COD_NIVEL: "1392",
    DESCRIPCION: "CARGADOR PILAS ",
    COD_NIVEL_PADRE: "1387"
  },
  {
    cod_nivel: "1393",
    descripcion: "COMPROBADOR PILAS",
    cod_nivel_padre: "1387",
    COD_NIVEL: "1393",
    DESCRIPCION: "COMPROBADOR PILAS",
    COD_NIVEL_PADRE: "1387"
  },
  {
    cod_nivel: "1394",
    descripcion: "OTRAS PILAS Y BATERIAS",
    cod_nivel_padre: "1387",
    COD_NIVEL: "1394",
    DESCRIPCION: "OTRAS PILAS Y BATERIAS",
    COD_NIVEL_PADRE: "1387"
  },
  {
    cod_nivel: "123",
    descripcion: "ROPA CICLISMO",
    cod_nivel_padre: "77",
    COD_NIVEL: "123",
    DESCRIPCION: "ROPA CICLISMO",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "155",
    descripcion: "ALTA MONTAÑA",
    cod_nivel_padre: "141",
    COD_NIVEL: "155",
    DESCRIPCION: "ALTA MONTAÑA",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "926",
    descripcion: "HERRAMIENTA CRISTALERIA",
    cod_nivel_padre: "895",
    COD_NIVEL: "926",
    DESCRIPCION: "HERRAMIENTA CRISTALERIA",
    COD_NIVEL_PADRE: "895"
  },
  {
    cod_nivel: "934",
    descripcion: "HERRAMIENTA DE PINTURA",
    cod_nivel_padre: "895",
    COD_NIVEL: "934",
    DESCRIPCION: "HERRAMIENTA DE PINTURA",
    COD_NIVEL_PADRE: "895"
  },
  {
    cod_nivel: "942",
    descripcion: "HERRAMIENTA DE JARDINERIA",
    cod_nivel_padre: "895",
    COD_NIVEL: "942",
    DESCRIPCION: "HERRAMIENTA DE JARDINERIA",
    COD_NIVEL_PADRE: "895"
  },
  {
    cod_nivel: "631",
    descripcion: "ASPIRADORAS",
    cod_nivel_padre: "630",
    COD_NIVEL: "631",
    DESCRIPCION: "ASPIRADORAS",
    COD_NIVEL_PADRE: "630"
  },
  {
    cod_nivel: "640",
    descripcion: "BATIDORAS",
    cod_nivel_padre: "610",
    COD_NIVEL: "640",
    DESCRIPCION: "BATIDORAS",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "645",
    descripcion: "CAFETERAS",
    cod_nivel_padre: "610",
    COD_NIVEL: "645",
    DESCRIPCION: "CAFETERAS",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "733",
    descripcion: "ACCESORIOS BARBACOA",
    cod_nivel_padre: "729",
    COD_NIVEL: "733",
    DESCRIPCION: "ACCESORIOS BARBACOA",
    COD_NIVEL_PADRE: "729"
  },
  {
    cod_nivel: "734",
    descripcion: "MOBILIARIO JARDIN",
    cod_nivel_padre: "728",
    COD_NIVEL: "734",
    DESCRIPCION: "MOBILIARIO JARDIN",
    COD_NIVEL_PADRE: "728"
  },
  {
    cod_nivel: "735",
    descripcion: "MESA",
    cod_nivel_padre: "734",
    COD_NIVEL: "735",
    DESCRIPCION: "MESA",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "736",
    descripcion: "ARCON",
    cod_nivel_padre: "734",
    COD_NIVEL: "736",
    DESCRIPCION: "ARCON",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "737",
    descripcion: "BANCO",
    cod_nivel_padre: "734",
    COD_NIVEL: "737",
    DESCRIPCION: "BANCO",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "738",
    descripcion: "SILLA",
    cod_nivel_padre: "734",
    COD_NIVEL: "738",
    DESCRIPCION: "SILLA",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "739",
    descripcion: "CARPA",
    cod_nivel_padre: "734",
    COD_NIVEL: "739",
    DESCRIPCION: "CARPA",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "740",
    descripcion: "TOLDO",
    cod_nivel_padre: "734",
    COD_NIVEL: "740",
    DESCRIPCION: "TOLDO",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "741",
    descripcion: "SOMBRILLA",
    cod_nivel_padre: "734",
    COD_NIVEL: "741",
    DESCRIPCION: "SOMBRILLA",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "742",
    descripcion: "PIE SOMBRILLA",
    cod_nivel_padre: "734",
    COD_NIVEL: "742",
    DESCRIPCION: "PIE SOMBRILLA",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "743",
    descripcion: "ARMARIO JARDIN",
    cod_nivel_padre: "734",
    COD_NIVEL: "743",
    DESCRIPCION: "ARMARIO JARDIN",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "744",
    descripcion: "TUMBONA",
    cod_nivel_padre: "734",
    COD_NIVEL: "744",
    DESCRIPCION: "TUMBONA",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "360",
    descripcion: "ARTES MARCIALES",
    cod_nivel_padre: "351",
    COD_NIVEL: "360",
    DESCRIPCION: "ARTES MARCIALES",
    COD_NIVEL_PADRE: "351"
  },
  {
    cod_nivel: "380",
    descripcion: "ACCESORIOS BAÑO",
    cod_nivel_padre: "5180",
    COD_NIVEL: "380",
    DESCRIPCION: "ACCESORIOS BAÑO",
    COD_NIVEL_PADRE: "5180"
  },
  {
    cod_nivel: "705",
    descripcion: "SALON COMEDOR",
    cod_nivel_padre: "699",
    COD_NIVEL: "705",
    DESCRIPCION: "SALON COMEDOR",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "706",
    descripcion: "SILLA",
    cod_nivel_padre: "699",
    COD_NIVEL: "706",
    DESCRIPCION: "SILLA",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "707",
    descripcion: "OTROS MUEBLES",
    cod_nivel_padre: "699",
    COD_NIVEL: "707",
    DESCRIPCION: "OTROS MUEBLES",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "708",
    descripcion: "OFICINA",
    cod_nivel_padre: "699",
    COD_NIVEL: "708",
    DESCRIPCION: "OFICINA",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "709",
    descripcion: "MESA OFICINA",
    cod_nivel_padre: "708",
    COD_NIVEL: "709",
    DESCRIPCION: "MESA OFICINA",
    COD_NIVEL_PADRE: "708"
  },
  {
    cod_nivel: "710",
    descripcion: "SILLA OFICINA",
    cod_nivel_padre: "708",
    COD_NIVEL: "710",
    DESCRIPCION: "SILLA OFICINA",
    COD_NIVEL_PADRE: "708"
  },
  {
    cod_nivel: "712",
    descripcion: "CAJA FUERTE",
    cod_nivel_padre: "711",
    COD_NIVEL: "712",
    DESCRIPCION: "CAJA FUERTE",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "713",
    descripcion: "VIDEOPORTERO",
    cod_nivel_padre: "711",
    COD_NIVEL: "713",
    DESCRIPCION: "VIDEOPORTERO",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "714",
    descripcion: "PORTERO ELECTRONICO",
    cod_nivel_padre: "711",
    COD_NIVEL: "714",
    DESCRIPCION: "PORTERO ELECTRONICO",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "715",
    descripcion: "SISTEMA DE SEGURIDAD",
    cod_nivel_padre: "711",
    COD_NIVEL: "715",
    DESCRIPCION: "SISTEMA DE SEGURIDAD",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "716",
    descripcion: "VIDEOVIGILANCIA",
    cod_nivel_padre: "711",
    COD_NIVEL: "716",
    DESCRIPCION: "VIDEOVIGILANCIA",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "722",
    descripcion: "ALARMAS",
    cod_nivel_padre: "711",
    COD_NIVEL: "722",
    DESCRIPCION: "ALARMAS",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "729",
    descripcion: "BARBACOAS Y PARRILLAS",
    cod_nivel_padre: "728",
    COD_NIVEL: "729",
    DESCRIPCION: "BARBACOAS Y PARRILLAS",
    COD_NIVEL_PADRE: "728"
  },
  {
    cod_nivel: "730",
    descripcion: "BARBACOA CARBON LEÑA",
    cod_nivel_padre: "729",
    COD_NIVEL: "730",
    DESCRIPCION: "BARBACOA CARBON LEÑA",
    COD_NIVEL_PADRE: "729"
  },
  {
    cod_nivel: "731",
    descripcion: "BARBACOA GAS",
    cod_nivel_padre: "729",
    COD_NIVEL: "731",
    DESCRIPCION: "BARBACOA GAS",
    COD_NIVEL_PADRE: "729"
  },
  {
    cod_nivel: "732",
    descripcion: "BARBACOA ELECTRICA",
    cod_nivel_padre: "729",
    COD_NIVEL: "732",
    DESCRIPCION: "BARBACOA ELECTRICA",
    COD_NIVEL_PADRE: "729"
  },
  {
    cod_nivel: "609",
    descripcion: "OTROS DECORACION",
    cod_nivel_padre: "595",
    COD_NIVEL: "609",
    DESCRIPCION: "OTROS DECORACION",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "611",
    descripcion: "GRAN ELECTRODOMESTICO",
    cod_nivel_padre: "610",
    COD_NIVEL: "611",
    DESCRIPCION: "GRAN ELECTRODOMESTICO",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "1978",
    descripcion: "CORBATA",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1978",
    DESCRIPCION: "CORBATA",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1979",
    descripcion: "GUANTES",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1979",
    DESCRIPCION: "GUANTES",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1980",
    descripcion: "GORRA",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1980",
    DESCRIPCION: "GORRA",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1981",
    descripcion: "SOMBRERO",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1981",
    DESCRIPCION: "SOMBRERO",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1982",
    descripcion: "PITILLERA",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1982",
    DESCRIPCION: "PITILLERA",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1983",
    descripcion: "PORTADOCUMENTOS",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1983",
    DESCRIPCION: "PORTADOCUMENTOS",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1984",
    descripcion: "OTROS COMPLEMENTOS HOMBRE",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1984",
    DESCRIPCION: "OTROS COMPLEMENTOS HOMBRE",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1985",
    descripcion: "ABANICO",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1985",
    DESCRIPCION: "ABANICO",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1986",
    descripcion: "BUFANDA",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1986",
    DESCRIPCION: "BUFANDA",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1987",
    descripcion: "GUANTE",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1987",
    DESCRIPCION: "GUANTE",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1988",
    descripcion: "MONEDERO",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1988",
    DESCRIPCION: "MONEDERO",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1989",
    descripcion: "CINTURON",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1989",
    DESCRIPCION: "CINTURON",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1990",
    descripcion: "GORRA",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1990",
    DESCRIPCION: "GORRA",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1991",
    descripcion: "SOMBRERO",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1991",
    DESCRIPCION: "SOMBRERO",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1992",
    descripcion: "BISUTERIA",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1992",
    DESCRIPCION: "BISUTERIA",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1993",
    descripcion: "PAÑUELO",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1993",
    DESCRIPCION: "PAÑUELO",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1994",
    descripcion: "PELUCA",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1994",
    DESCRIPCION: "PELUCA",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "1995",
    descripcion: "OTRO COMPLEMENTO MUJER",
    cod_nivel_padre: "1462",
    COD_NIVEL: "1995",
    DESCRIPCION: "OTRO COMPLEMENTO MUJER",
    COD_NIVEL_PADRE: "1462"
  },
  {
    cod_nivel: "5048",
    descripcion: "COLCHON HINCHABLE",
    cod_nivel_padre: "699",
    COD_NIVEL: "5048",
    DESCRIPCION: "COLCHON HINCHABLE",
    COD_NIVEL_PADRE: "699"
  },
  {
    cod_nivel: "5049",
    descripcion: "THERMOMIX",
    cod_nivel_padre: "610",
    COD_NIVEL: "5049",
    DESCRIPCION: "THERMOMIX",
    COD_NIVEL_PADRE: "610"
  },
  {
    cod_nivel: "5068",
    descripcion: "UNIDAD APPLE",
    cod_nivel_padre: "1415",
    COD_NIVEL: "5068",
    DESCRIPCION: "UNIDAD APPLE",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "5077",
    descripcion: "MANDOS WII U",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5077",
    DESCRIPCION: "MANDOS WII U",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "1960",
    descripcion: "MALETIN EJECUTIVO",
    cod_nivel_padre: "1458",
    COD_NIVEL: "1960",
    DESCRIPCION: "MALETIN EJECUTIVO",
    COD_NIVEL_PADRE: "1458"
  },
  {
    cod_nivel: "1961",
    descripcion: "OTROS BOLSOS",
    cod_nivel_padre: "1458",
    COD_NIVEL: "1961",
    DESCRIPCION: "OTROS BOLSOS",
    COD_NIVEL_PADRE: "1458"
  },
  {
    cod_nivel: "1963",
    descripcion: "BOTAS",
    cod_nivel_padre: "1459",
    COD_NIVEL: "1963",
    DESCRIPCION: "BOTAS",
    COD_NIVEL_PADRE: "1459"
  },
  {
    cod_nivel: "1964",
    descripcion: "ZAPATILLAS",
    cod_nivel_padre: "1459",
    COD_NIVEL: "1964",
    DESCRIPCION: "ZAPATILLAS",
    COD_NIVEL_PADRE: "1459"
  },
  {
    cod_nivel: "1965",
    descripcion: "ZAPATO INFORMAL",
    cod_nivel_padre: "1459",
    COD_NIVEL: "1965",
    DESCRIPCION: "ZAPATO INFORMAL",
    COD_NIVEL_PADRE: "1459"
  },
  {
    cod_nivel: "1966",
    descripcion: "ZAPATO VESTIR",
    cod_nivel_padre: "1459",
    COD_NIVEL: "1966",
    DESCRIPCION: "ZAPATO VESTIR",
    COD_NIVEL_PADRE: "1459"
  },
  {
    cod_nivel: "1967",
    descripcion: "OTRO CALZADO HOMBRE",
    cod_nivel_padre: "1459",
    COD_NIVEL: "1967",
    DESCRIPCION: "OTRO CALZADO HOMBRE",
    COD_NIVEL_PADRE: "1459"
  },
  {
    cod_nivel: "1968",
    descripcion: "BOTAS",
    cod_nivel_padre: "1460",
    COD_NIVEL: "1968",
    DESCRIPCION: "BOTAS",
    COD_NIVEL_PADRE: "1460"
  },
  {
    cod_nivel: "1969",
    descripcion: "PLATAFORMAS",
    cod_nivel_padre: "1460",
    COD_NIVEL: "1969",
    DESCRIPCION: "PLATAFORMAS",
    COD_NIVEL_PADRE: "1460"
  },
  {
    cod_nivel: "1970",
    descripcion: "SANDALIAS",
    cod_nivel_padre: "1460",
    COD_NIVEL: "1970",
    DESCRIPCION: "SANDALIAS",
    COD_NIVEL_PADRE: "1460"
  },
  {
    cod_nivel: "1971",
    descripcion: "ZAPATILLAS",
    cod_nivel_padre: "1460",
    COD_NIVEL: "1971",
    DESCRIPCION: "ZAPATILLAS",
    COD_NIVEL_PADRE: "1460"
  },
  {
    cod_nivel: "1972",
    descripcion: "ZAPATO TACON",
    cod_nivel_padre: "1460",
    COD_NIVEL: "1972",
    DESCRIPCION: "ZAPATO TACON",
    COD_NIVEL_PADRE: "1460"
  },
  {
    cod_nivel: "1973",
    descripcion: "ZAPATO INFORMAL",
    cod_nivel_padre: "1460",
    COD_NIVEL: "1973",
    DESCRIPCION: "ZAPATO INFORMAL",
    COD_NIVEL_PADRE: "1460"
  },
  {
    cod_nivel: "1974",
    descripcion: "OTRO CALZADO MUJER",
    cod_nivel_padre: "1460",
    COD_NIVEL: "1974",
    DESCRIPCION: "OTRO CALZADO MUJER",
    COD_NIVEL_PADRE: "1460"
  },
  {
    cod_nivel: "1975",
    descripcion: "BUFANDA",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1975",
    DESCRIPCION: "BUFANDA",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1976",
    descripcion: "CARTERA",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1976",
    DESCRIPCION: "CARTERA",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "1977",
    descripcion: "CINTURON",
    cod_nivel_padre: "1461",
    COD_NIVEL: "1977",
    DESCRIPCION: "CINTURON",
    COD_NIVEL_PADRE: "1461"
  },
  {
    cod_nivel: "2050",
    descripcion: "ADAPTADOR",
    cod_nivel_padre: "5157",
    COD_NIVEL: "2050",
    DESCRIPCION: "ADAPTADOR",
    COD_NIVEL_PADRE: "5157"
  },
  {
    cod_nivel: "2052",
    descripcion: "CABLE RED",
    cod_nivel_padre: "5157",
    COD_NIVEL: "2052",
    DESCRIPCION: "CABLE RED",
    COD_NIVEL_PADRE: "5157"
  },
  {
    cod_nivel: "2053",
    descripcion: "CABLE FIBRA OPTICA",
    cod_nivel_padre: "5157",
    COD_NIVEL: "2053",
    DESCRIPCION: "CABLE FIBRA OPTICA",
    COD_NIVEL_PADRE: "5157"
  },
  {
    cod_nivel: "2054",
    descripcion: "CABLE FIREWIRE",
    cod_nivel_padre: "5157",
    COD_NIVEL: "2054",
    DESCRIPCION: "CABLE FIREWIRE",
    COD_NIVEL_PADRE: "5157"
  },
  {
    cod_nivel: "2057",
    descripcion: "CABLE MONITOR DVI",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2057",
    DESCRIPCION: "CABLE MONITOR DVI",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2058",
    descripcion: "CABLE MONITOR VGA Y SVGA",
    cod_nivel_padre: "5155",
    COD_NIVEL: "2058",
    DESCRIPCION: "CABLE MONITOR VGA Y SVGA",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "2059",
    descripcion: "CABLE ALIMENTACION",
    cod_nivel_padre: "5158",
    COD_NIVEL: "2059",
    DESCRIPCION: "CABLE ALIMENTACION",
    COD_NIVEL_PADRE: "5158"
  },
  {
    cod_nivel: "2060",
    descripcion: "CABLE IMPRESORA",
    cod_nivel_padre: "5157",
    COD_NIVEL: "2060",
    DESCRIPCION: "CABLE IMPRESORA",
    COD_NIVEL_PADRE: "5157"
  },
  {
    cod_nivel: "2061",
    descripcion: "CABLE USB",
    cod_nivel_padre: "5157",
    COD_NIVEL: "2061",
    DESCRIPCION: "CABLE USB",
    COD_NIVEL_PADRE: "5157"
  },
  {
    cod_nivel: "2063",
    descripcion: "OTROS CABLES INFORMATICA",
    cod_nivel_padre: "5157",
    COD_NIVEL: "2063",
    DESCRIPCION: "OTROS CABLES INFORMATICA",
    COD_NIVEL_PADRE: "5157"
  },
  {
    cod_nivel: "2071",
    descripcion: "BOWLING",
    cod_nivel_padre: "341",
    COD_NIVEL: "2071",
    DESCRIPCION: "BOWLING",
    COD_NIVEL_PADRE: "341"
  },
  {
    cod_nivel: "1698",
    descripcion: "SISTEMA REFRIGERACION",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1698",
    DESCRIPCION: "SISTEMA REFRIGERACION",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1699",
    descripcion: "TARJETA GRAFICA",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1699",
    DESCRIPCION: "TARJETA GRAFICA",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1711",
    descripcion: "CABLE Y CONECTORES",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1711",
    DESCRIPCION: "CABLE Y CONECTORES",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1446",
    descripcion: "MODELISMO",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1446",
    DESCRIPCION: "MODELISMO",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1450",
    descripcion: "RADIOCONTROL",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1450",
    DESCRIPCION: "RADIOCONTROL",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1451",
    descripcion: "COCHES SLOT",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1451",
    DESCRIPCION: "COCHES SLOT",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1454",
    descripcion: "TRENES MINIATURA",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1454",
    DESCRIPCION: "TRENES MINIATURA",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "191",
    descripcion: "PALO GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "191",
    DESCRIPCION: "PALO GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "212",
    descripcion: "ROPA ESQUI",
    cod_nivel_padre: "202",
    COD_NIVEL: "212",
    DESCRIPCION: "ROPA ESQUI",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "217",
    descripcion: "TRINEO",
    cod_nivel_padre: "202",
    COD_NIVEL: "217",
    DESCRIPCION: "TRINEO",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "986",
    descripcion: "SOLDADURA",
    cod_nivel_padre: "971",
    COD_NIVEL: "986",
    DESCRIPCION: "SOLDADURA",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "1018",
    descripcion: "CABLE ANTENA",
    cod_nivel_padre: "5155",
    COD_NIVEL: "1018",
    DESCRIPCION: "CABLE ANTENA",
    COD_NIVEL_PADRE: "5155"
  },
  {
    cod_nivel: "1240",
    descripcion: "CABLE DATOS TELEFONIA",
    cod_nivel_padre: "5160",
    COD_NIVEL: "1240",
    DESCRIPCION: "CABLE DATOS TELEFONIA",
    COD_NIVEL_PADRE: "5160"
  },
  {
    cod_nivel: "745",
    descripcion: "HAMACA",
    cod_nivel_padre: "734",
    COD_NIVEL: "745",
    DESCRIPCION: "HAMACA",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "746",
    descripcion: "OTROS MOBILIARIO JARDIN",
    cod_nivel_padre: "734",
    COD_NIVEL: "746",
    DESCRIPCION: "OTROS MOBILIARIO JARDIN",
    COD_NIVEL_PADRE: "734"
  },
  {
    cod_nivel: "747",
    descripcion: "PISCINA",
    cod_nivel_padre: "728",
    COD_NIVEL: "747",
    DESCRIPCION: "PISCINA",
    COD_NIVEL_PADRE: "728"
  },
  {
    cod_nivel: "748",
    descripcion: "PISCINA AUTOPORTANTE",
    cod_nivel_padre: "747",
    COD_NIVEL: "748",
    DESCRIPCION: "PISCINA AUTOPORTANTE",
    COD_NIVEL_PADRE: "747"
  },
  {
    cod_nivel: "749",
    descripcion: "PISCINA INFLABLE",
    cod_nivel_padre: "747",
    COD_NIVEL: "749",
    DESCRIPCION: "PISCINA INFLABLE",
    COD_NIVEL_PADRE: "747"
  },
  {
    cod_nivel: "751",
    descripcion: "ACCESORIOS PARA PISCINA",
    cod_nivel_padre: "747",
    COD_NIVEL: "751",
    DESCRIPCION: "ACCESORIOS PARA PISCINA",
    COD_NIVEL_PADRE: "747"
  },
  {
    cod_nivel: "752",
    descripcion: "RIEGO",
    cod_nivel_padre: "728",
    COD_NIVEL: "752",
    DESCRIPCION: "RIEGO",
    COD_NIVEL_PADRE: "728"
  },
  {
    cod_nivel: "756",
    descripcion: "MANGUERA",
    cod_nivel_padre: "752",
    COD_NIVEL: "756",
    DESCRIPCION: "MANGUERA",
    COD_NIVEL_PADRE: "752"
  },
  {
    cod_nivel: "757",
    descripcion: "ENROLLADOR MANGUERA",
    cod_nivel_padre: "752",
    COD_NIVEL: "757",
    DESCRIPCION: "ENROLLADOR MANGUERA",
    COD_NIVEL_PADRE: "752"
  },
  {
    cod_nivel: "758",
    descripcion: "ACCESORIOS MANGUERA",
    cod_nivel_padre: "752",
    COD_NIVEL: "758",
    DESCRIPCION: "ACCESORIOS MANGUERA",
    COD_NIVEL_PADRE: "752"
  },
  {
    cod_nivel: "759",
    descripcion: "KIT MANGUERA",
    cod_nivel_padre: "752",
    COD_NIVEL: "759",
    DESCRIPCION: "KIT MANGUERA",
    COD_NIVEL_PADRE: "752"
  },
  {
    cod_nivel: "760",
    descripcion: "JUEGO JARDIN",
    cod_nivel_padre: "728",
    COD_NIVEL: "760",
    DESCRIPCION: "JUEGO JARDIN",
    COD_NIVEL_PADRE: "728"
  },
  {
    cod_nivel: "761",
    descripcion: "COLUMPIO JARDIN",
    cod_nivel_padre: "760",
    COD_NIVEL: "761",
    DESCRIPCION: "COLUMPIO JARDIN",
    COD_NIVEL_PADRE: "760"
  },
  {
    cod_nivel: "762",
    descripcion: "BALANCIN JARDIN",
    cod_nivel_padre: "760",
    COD_NIVEL: "762",
    DESCRIPCION: "BALANCIN JARDIN",
    COD_NIVEL_PADRE: "760"
  },
  {
    cod_nivel: "763",
    descripcion: "CASITA PLASTICO",
    cod_nivel_padre: "760",
    COD_NIVEL: "763",
    DESCRIPCION: "CASITA PLASTICO",
    COD_NIVEL_PADRE: "760"
  },
  {
    cod_nivel: "5187",
    descripcion: "BICICLETA ELECTRICA",
    cod_nivel_padre: "95",
    COD_NIVEL: "5187",
    DESCRIPCION: "BICICLETA ELECTRICA",
    COD_NIVEL_PADRE: "95"
  },
  {
    cod_nivel: "764",
    descripcion: "TOBOGAN",
    cod_nivel_padre: "760",
    COD_NIVEL: "764",
    DESCRIPCION: "TOBOGAN",
    COD_NIVEL_PADRE: "760"
  },
  {
    cod_nivel: "765",
    descripcion: "TUNEL",
    cod_nivel_padre: "760",
    COD_NIVEL: "765",
    DESCRIPCION: "TUNEL",
    COD_NIVEL_PADRE: "760"
  },
  {
    cod_nivel: "766",
    descripcion: "JUGUETE HINCHABLE",
    cod_nivel_padre: "760",
    COD_NIVEL: "766",
    DESCRIPCION: "JUGUETE HINCHABLE",
    COD_NIVEL_PADRE: "760"
  },
  {
    cod_nivel: "767",
    descripcion: "OTROS JUEGOS JARDIN",
    cod_nivel_padre: "760",
    COD_NIVEL: "767",
    DESCRIPCION: "OTROS JUEGOS JARDIN",
    COD_NIVEL_PADRE: "760"
  },
  {
    cod_nivel: "768",
    descripcion: "OTROS TERRAZA Y JARDIN",
    cod_nivel_padre: "728",
    COD_NIVEL: "768",
    DESCRIPCION: "OTROS TERRAZA Y JARDIN",
    COD_NIVEL_PADRE: "728"
  },
  {
    cod_nivel: "769",
    descripcion: "MACETA",
    cod_nivel_padre: "768",
    COD_NIVEL: "769",
    DESCRIPCION: "MACETA",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "770",
    descripcion: "JARDINERA",
    cod_nivel_padre: "768",
    COD_NIVEL: "770",
    DESCRIPCION: "JARDINERA",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "771",
    descripcion: "AHUYENTADOR",
    cod_nivel_padre: "768",
    COD_NIVEL: "771",
    DESCRIPCION: "AHUYENTADOR",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "772",
    descripcion: "MATAMOSQUITOS",
    cod_nivel_padre: "768",
    COD_NIVEL: "772",
    DESCRIPCION: "MATAMOSQUITOS",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "773",
    descripcion: "ANTILADRIDOS ELECTRONICO",
    cod_nivel_padre: "768",
    COD_NIVEL: "773",
    DESCRIPCION: "ANTILADRIDOS ELECTRONICO",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "774",
    descripcion: "BANDERA",
    cod_nivel_padre: "768",
    COD_NIVEL: "774",
    DESCRIPCION: "BANDERA",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "775",
    descripcion: "MASTIL BANDERA",
    cod_nivel_padre: "768",
    COD_NIVEL: "775",
    DESCRIPCION: "MASTIL BANDERA",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "776",
    descripcion: "PLUVIOMETRO",
    cod_nivel_padre: "768",
    COD_NIVEL: "776",
    DESCRIPCION: "PLUVIOMETRO",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "777",
    descripcion: "ESTATUA JARDIN",
    cod_nivel_padre: "768",
    COD_NIVEL: "777",
    DESCRIPCION: "ESTATUA JARDIN",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "778",
    descripcion: "RELOJ DE SOL",
    cod_nivel_padre: "768",
    COD_NIVEL: "778",
    DESCRIPCION: "RELOJ DE SOL",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "779",
    descripcion: "TERMOMETRO JARDIN",
    cod_nivel_padre: "768",
    COD_NIVEL: "779",
    DESCRIPCION: "TERMOMETRO JARDIN",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "780",
    descripcion: "VELETA",
    cod_nivel_padre: "768",
    COD_NIVEL: "780",
    DESCRIPCION: "VELETA",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "781",
    descripcion: "CARILLON",
    cod_nivel_padre: "768",
    COD_NIVEL: "781",
    DESCRIPCION: "CARILLON",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "782",
    descripcion: "MOLINO DE VIENTO",
    cod_nivel_padre: "768",
    COD_NIVEL: "782",
    DESCRIPCION: "MOLINO DE VIENTO",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "783",
    descripcion: "MANGA DE VIENTO",
    cod_nivel_padre: "768",
    COD_NIVEL: "783",
    DESCRIPCION: "MANGA DE VIENTO",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "784",
    descripcion: "OTROS TERRAZA Y JARDIN",
    cod_nivel_padre: "768",
    COD_NIVEL: "784",
    DESCRIPCION: "OTROS TERRAZA Y JARDIN",
    COD_NIVEL_PADRE: "768"
  },
  {
    cod_nivel: "788",
    descripcion: "LLAVES",
    cod_nivel_padre: "787",
    COD_NIVEL: "788",
    DESCRIPCION: "LLAVES",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "414",
    descripcion: "SEGURIDAD Y SALUD",
    cod_nivel_padre: "5180",
    COD_NIVEL: "414",
    DESCRIPCION: "SEGURIDAD Y SALUD",
    COD_NIVEL_PADRE: "5180"
  },
  {
    cod_nivel: "424",
    descripcion: "AFEITADO Y DEPILADO",
    cod_nivel_padre: "5098",
    COD_NIVEL: "424",
    DESCRIPCION: "AFEITADO Y DEPILADO",
    COD_NIVEL_PADRE: "5098"
  },
  {
    cod_nivel: "432",
    descripcion: "BRONCEADO",
    cod_nivel_padre: "5098",
    COD_NIVEL: "432",
    DESCRIPCION: "BRONCEADO",
    COD_NIVEL_PADRE: "5098"
  },
  {
    cod_nivel: "435",
    descripcion: "CUIDADO BUCAL",
    cod_nivel_padre: "5098",
    COD_NIVEL: "435",
    DESCRIPCION: "CUIDADO BUCAL",
    COD_NIVEL_PADRE: "5098"
  },
  {
    cod_nivel: "444",
    descripcion: "CUIDADO DEL CABELLO",
    cod_nivel_padre: "5098",
    COD_NIVEL: "444",
    DESCRIPCION: "CUIDADO DEL CABELLO",
    COD_NIVEL_PADRE: "5098"
  },
  {
    cod_nivel: "454",
    descripcion: "CUIDADO FACIAL",
    cod_nivel_padre: "5098",
    COD_NIVEL: "454",
    DESCRIPCION: "CUIDADO FACIAL",
    COD_NIVEL_PADRE: "5098"
  },
  {
    cod_nivel: "1220",
    descripcion: "TELEFONIA GSM",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1220",
    DESCRIPCION: "TELEFONIA GSM",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1122",
    descripcion: "CONSOLA WII",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1122",
    DESCRIPCION: "CONSOLA WII",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "2020",
    descripcion: "TRENES MINIATURA ESCALA H0",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2020",
    DESCRIPCION: "TRENES MINIATURA ESCALA H0",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2026",
    descripcion: "TRENES MINIATURA ESCALA N",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2026",
    DESCRIPCION: "TRENES MINIATURA ESCALA N",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "5091",
    descripcion: "CONSOLA 3DS XL",
    cod_nivel_padre: "1113",
    COD_NIVEL: "5091",
    DESCRIPCION: "CONSOLA 3DS XL",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "5097",
    descripcion: "CONSOLA PSP STREET",
    cod_nivel_padre: "1178",
    COD_NIVEL: "5097",
    DESCRIPCION: "CONSOLA PSP STREET",
    COD_NIVEL_PADRE: "1178"
  },
  {
    cod_nivel: "5134",
    descripcion: "CONSOLA PLAYSTATION 4",
    cod_nivel_padre: "5133",
    COD_NIVEL: "5134",
    DESCRIPCION: "CONSOLA PLAYSTATION 4",
    COD_NIVEL_PADRE: "5133"
  },
  {
    cod_nivel: "2117",
    descripcion: "MOVIL MOVISTAR",
    cod_nivel_padre: "1220",
    COD_NIVEL: "2117",
    DESCRIPCION: "MOVIL MOVISTAR",
    COD_NIVEL_PADRE: "1220"
  },
  {
    cod_nivel: "2118",
    descripcion: "MOVIL VODAFONE",
    cod_nivel_padre: "1220",
    COD_NIVEL: "2118",
    DESCRIPCION: "MOVIL VODAFONE",
    COD_NIVEL_PADRE: "1220"
  },
  {
    cod_nivel: "2119",
    descripcion: "MOVIL ORANGE",
    cod_nivel_padre: "1220",
    COD_NIVEL: "2119",
    DESCRIPCION: "MOVIL ORANGE",
    COD_NIVEL_PADRE: "1220"
  },
  {
    cod_nivel: "2120",
    descripcion: "MOVIL YOIGO",
    cod_nivel_padre: "1220",
    COD_NIVEL: "2120",
    DESCRIPCION: "MOVIL YOIGO",
    COD_NIVEL_PADRE: "1220"
  },
  {
    cod_nivel: "2121",
    descripcion: "MOVIL LIBRE",
    cod_nivel_padre: "1220",
    COD_NIVEL: "2121",
    DESCRIPCION: "MOVIL LIBRE",
    COD_NIVEL_PADRE: "1220"
  },
  {
    cod_nivel: "1549",
    descripcion: "TARJETAS MEMORIA",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1549",
    DESCRIPCION: "TARJETAS MEMORIA",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1114",
    descripcion: "CONSOLA NINTENDO DS",
    cod_nivel_padre: "1113",
    COD_NIVEL: "1114",
    DESCRIPCION: "CONSOLA NINTENDO DS",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "1115",
    descripcion: "CONSOLA NINTENDO DS LITE",
    cod_nivel_padre: "1113",
    COD_NIVEL: "1115",
    DESCRIPCION: "CONSOLA NINTENDO DS LITE",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "1116",
    descripcion: "CONSOLA NINTENDO DSI",
    cod_nivel_padre: "1113",
    COD_NIVEL: "1116",
    DESCRIPCION: "CONSOLA NINTENDO DSI",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "1117",
    descripcion: "CONSOLA NINTENDO DS XL",
    cod_nivel_padre: "1113",
    COD_NIVEL: "1117",
    DESCRIPCION: "CONSOLA NINTENDO DS XL",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "1119",
    descripcion: "TARJETA MEMORIA SD",
    cod_nivel_padre: "5117",
    COD_NIVEL: "1119",
    DESCRIPCION: "TARJETA MEMORIA SD",
    COD_NIVEL_PADRE: "5117"
  },
  {
    cod_nivel: "5018",
    descripcion: "CONSOLA 3DS",
    cod_nivel_padre: "1113",
    COD_NIVEL: "5018",
    DESCRIPCION: "CONSOLA 3DS",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "1603",
    descripcion: "CONEXION CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1603",
    DESCRIPCION: "CONEXION CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1153",
    descripcion: "CONSOLA PLAYSTATION 1",
    cod_nivel_padre: "1152",
    COD_NIVEL: "1153",
    DESCRIPCION: "CONSOLA PLAYSTATION 1",
    COD_NIVEL_PADRE: "1152"
  },
  {
    cod_nivel: "1154",
    descripcion: "CONSOLA PSONE",
    cod_nivel_padre: "1152",
    COD_NIVEL: "1154",
    DESCRIPCION: "CONSOLA PSONE",
    COD_NIVEL_PADRE: "1152"
  },
  {
    cod_nivel: "1161",
    descripcion: "CONSOLA PLAYSTATION 2",
    cod_nivel_padre: "1160",
    COD_NIVEL: "1161",
    DESCRIPCION: "CONSOLA PLAYSTATION 2",
    COD_NIVEL_PADRE: "1160"
  },
  {
    cod_nivel: "1162",
    descripcion: "CONSOLA PS TWO",
    cod_nivel_padre: "1160",
    COD_NIVEL: "1162",
    DESCRIPCION: "CONSOLA PS TWO",
    COD_NIVEL_PADRE: "1160"
  },
  {
    cod_nivel: "1171",
    descripcion: "CONSOLA PLAYSTATION 3",
    cod_nivel_padre: "1170",
    COD_NIVEL: "1171",
    DESCRIPCION: "CONSOLA PLAYSTATION 3",
    COD_NIVEL_PADRE: "1170"
  },
  {
    cod_nivel: "1172",
    descripcion: "PLAYSTATION 3 SLIM",
    cod_nivel_padre: "1170",
    COD_NIVEL: "1172",
    DESCRIPCION: "PLAYSTATION 3 SLIM",
    COD_NIVEL_PADRE: "1170"
  },
  {
    cod_nivel: "1179",
    descripcion: "CONSOLA PSP 1000",
    cod_nivel_padre: "1178",
    COD_NIVEL: "1179",
    DESCRIPCION: "CONSOLA PSP 1000",
    COD_NIVEL_PADRE: "1178"
  },
  {
    cod_nivel: "1180",
    descripcion: "CONSOLA PSP 2000",
    cod_nivel_padre: "1178",
    COD_NIVEL: "1180",
    DESCRIPCION: "CONSOLA PSP 2000",
    COD_NIVEL_PADRE: "1178"
  },
  {
    cod_nivel: "1181",
    descripcion: "CONSOLA PSP LITE",
    cod_nivel_padre: "1178",
    COD_NIVEL: "1181",
    DESCRIPCION: "CONSOLA PSP LITE",
    COD_NIVEL_PADRE: "1178"
  },
  {
    cod_nivel: "1182",
    descripcion: "CONSOLA PSP GO",
    cod_nivel_padre: "1178",
    COD_NIVEL: "1182",
    DESCRIPCION: "CONSOLA PSP GO",
    COD_NIVEL_PADRE: "1178"
  },
  {
    cod_nivel: "1183",
    descripcion: "CONSOLA PSP 3000",
    cod_nivel_padre: "1178",
    COD_NIVEL: "1183",
    DESCRIPCION: "CONSOLA PSP 3000",
    COD_NIVEL_PADRE: "1178"
  },
  {
    cod_nivel: "1186",
    descripcion: "MEMORY STICK PRO DUO",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1186",
    DESCRIPCION: "MEMORY STICK PRO DUO",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "2051",
    descripcion: "CABLE AUDIO",
    cod_nivel_padre: "1711",
    COD_NIVEL: "2051",
    DESCRIPCION: "CABLE AUDIO",
    COD_NIVEL_PADRE: "1711"
  },
  {
    cod_nivel: "2055",
    descripcion: "CABLE MODEM",
    cod_nivel_padre: "1711",
    COD_NIVEL: "2055",
    DESCRIPCION: "CABLE MODEM",
    COD_NIVEL_PADRE: "1711"
  },
  {
    cod_nivel: "2062",
    descripcion: "CABLE VIDEO",
    cod_nivel_padre: "1711",
    COD_NIVEL: "2062",
    DESCRIPCION: "CABLE VIDEO",
    COD_NIVEL_PADRE: "1711"
  },
  {
    cod_nivel: "5190",
    descripcion: "ALTAVOZ PORTATIL BLUETOOTH",
    cod_nivel_padre: "1326",
    COD_NIVEL: "5190",
    DESCRIPCION: "ALTAVOZ PORTATIL BLUETOOTH",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1017",
    descripcion: "CABLE HIFI",
    cod_nivel_padre: "1014",
    COD_NIVEL: "1017",
    DESCRIPCION: "CABLE HIFI",
    COD_NIVEL_PADRE: "1014"
  },
  {
    cod_nivel: "1221",
    descripcion: "IPHONE",
    cod_nivel_padre: "5087",
    COD_NIVEL: "1221",
    DESCRIPCION: "IPHONE",
    COD_NIVEL_PADRE: "5087"
  },
  {
    cod_nivel: "1222",
    descripcion: "BLACKBERRY",
    cod_nivel_padre: "5087",
    COD_NIVEL: "1222",
    DESCRIPCION: "BLACKBERRY",
    COD_NIVEL_PADRE: "5087"
  },
  {
    cod_nivel: "1223",
    descripcion: "SMARTPHONE",
    cod_nivel_padre: "5087",
    COD_NIVEL: "1223",
    DESCRIPCION: "SMARTPHONE",
    COD_NIVEL_PADRE: "5087"
  },
  {
    cod_nivel: "1224",
    descripcion: "MOVIL GSM",
    cod_nivel_padre: "1220",
    COD_NIVEL: "1224",
    DESCRIPCION: "MOVIL GSM",
    COD_NIVEL_PADRE: "1220"
  },
  {
    cod_nivel: "1244",
    descripcion: "MINI SD",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1244",
    DESCRIPCION: "MINI SD",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1245",
    descripcion: "MMC",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1245",
    DESCRIPCION: "MMC",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1246",
    descripcion: "MEMORY STICK MICRO",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1246",
    DESCRIPCION: "MEMORY STICK MICRO",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "5076",
    descripcion: "CONSOLA WII U",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5076",
    DESCRIPCION: "CONSOLA WII U",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "3",
    descripcion: "AEROBIC Y FITNESS",
    cod_nivel_padre: "2",
    COD_NIVEL: "3",
    DESCRIPCION: "AEROBIC Y FITNESS",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "29",
    descripcion: "ATLETISMO Y RUNNING",
    cod_nivel_padre: "2",
    COD_NIVEL: "29",
    DESCRIPCION: "ATLETISMO Y RUNNING",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "33",
    descripcion: "BALONCESTO",
    cod_nivel_padre: "2",
    COD_NIVEL: "33",
    DESCRIPCION: "BALONCESTO",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "39",
    descripcion: "BALONMANO",
    cod_nivel_padre: "2",
    COD_NIVEL: "39",
    DESCRIPCION: "BALONMANO",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "43",
    descripcion: "BEISBOL",
    cod_nivel_padre: "2",
    COD_NIVEL: "43",
    DESCRIPCION: "BEISBOL",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "47",
    descripcion: "CAMPING",
    cod_nivel_padre: "2",
    COD_NIVEL: "47",
    DESCRIPCION: "CAMPING",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "61",
    descripcion: "CAZA",
    cod_nivel_padre: "2",
    COD_NIVEL: "61",
    DESCRIPCION: "CAZA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "77",
    descripcion: "CICLISMO",
    cod_nivel_padre: "2",
    COD_NIVEL: "77",
    DESCRIPCION: "CICLISMO",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "132",
    descripcion: "COMETAS",
    cod_nivel_padre: "2",
    COD_NIVEL: "132",
    DESCRIPCION: "COMETAS",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "141",
    descripcion: "ESCALADA Y TREKKING",
    cod_nivel_padre: "2",
    COD_NIVEL: "141",
    DESCRIPCION: "ESCALADA Y TREKKING",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "161",
    descripcion: "FUTBOL",
    cod_nivel_padre: "2",
    COD_NIVEL: "161",
    DESCRIPCION: "FUTBOL",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "170",
    descripcion: "FUTBOL AMERICANO",
    cod_nivel_padre: "2",
    COD_NIVEL: "170",
    DESCRIPCION: "FUTBOL AMERICANO",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "175",
    descripcion: "GIMNASIA",
    cod_nivel_padre: "2",
    COD_NIVEL: "175",
    DESCRIPCION: "GIMNASIA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "187",
    descripcion: "GOLF",
    cod_nivel_padre: "2",
    COD_NIVEL: "187",
    DESCRIPCION: "GOLF",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "202",
    descripcion: "INVIERNO",
    cod_nivel_padre: "2",
    COD_NIVEL: "202",
    DESCRIPCION: "INVIERNO",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "220",
    descripcion: "SUBMARINISMO",
    cod_nivel_padre: "2",
    COD_NIVEL: "220",
    DESCRIPCION: "SUBMARINISMO",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "242",
    descripcion: "PIRAGUA Y KAYAK",
    cod_nivel_padre: "2",
    COD_NIVEL: "242",
    DESCRIPCION: "PIRAGUA Y KAYAK",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "248",
    descripcion: "NATACION",
    cod_nivel_padre: "2",
    COD_NIVEL: "248",
    DESCRIPCION: "NATACION",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "261",
    descripcion: "NAUTICA",
    cod_nivel_padre: "2",
    COD_NIVEL: "261",
    DESCRIPCION: "NAUTICA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "299",
    descripcion: "RAQUETA",
    cod_nivel_padre: "2",
    COD_NIVEL: "299",
    DESCRIPCION: "RAQUETA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "308",
    descripcion: "HOCKEY",
    cod_nivel_padre: "2",
    COD_NIVEL: "308",
    DESCRIPCION: "HOCKEY",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "317",
    descripcion: "PATINAJE",
    cod_nivel_padre: "2",
    COD_NIVEL: "317",
    DESCRIPCION: "PATINAJE",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "327",
    descripcion: "PESCA",
    cod_nivel_padre: "2",
    COD_NIVEL: "327",
    DESCRIPCION: "PESCA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "341",
    descripcion: "PRECISION",
    cod_nivel_padre: "2",
    COD_NIVEL: "341",
    DESCRIPCION: "PRECISION",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "351",
    descripcion: "LUCHA",
    cod_nivel_padre: "2",
    COD_NIVEL: "351",
    DESCRIPCION: "LUCHA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "369",
    descripcion: "EQUITACION",
    cod_nivel_padre: "2",
    COD_NIVEL: "369",
    DESCRIPCION: "EQUITACION",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "387",
    descripcion: "ALIMENTACION",
    cod_nivel_padre: "379",
    COD_NIVEL: "387",
    DESCRIPCION: "ALIMENTACION",
    COD_NIVEL_PADRE: "379"
  },
  {
    cod_nivel: "396",
    descripcion: "TRANSPORTE BEBES",
    cod_nivel_padre: "379",
    COD_NIVEL: "396",
    DESCRIPCION: "TRANSPORTE BEBES",
    COD_NIVEL_PADRE: "379"
  },
  {
    cod_nivel: "404",
    descripcion: "CUNAS Y MINICUNAS",
    cod_nivel_padre: "379",
    COD_NIVEL: "404",
    DESCRIPCION: "CUNAS Y MINICUNAS",
    COD_NIVEL_PADRE: "379"
  },
  {
    cod_nivel: "499",
    descripcion: "ARTICULOS ANIMALES",
    cod_nivel_padre: "498",
    COD_NIVEL: "499",
    DESCRIPCION: "ARTICULOS ANIMALES",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "534",
    descripcion: "AUTOMATIZACION HOGAR",
    cod_nivel_padre: "498",
    COD_NIVEL: "534",
    DESCRIPCION: "AUTOMATIZACION HOGAR",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "542",
    descripcion: "BAÑO",
    cod_nivel_padre: "498",
    COD_NIVEL: "542",
    DESCRIPCION: "BAÑO",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "553",
    descripcion: "CLIMATIZACION",
    cod_nivel_padre: "423",
    COD_NIVEL: "553",
    DESCRIPCION: "CLIMATIZACION",
    COD_NIVEL_PADRE: "423"
  },
  {
    cod_nivel: "571",
    descripcion: "HOGAR COCINA",
    cod_nivel_padre: "498",
    COD_NIVEL: "571",
    DESCRIPCION: "HOGAR COCINA",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "595",
    descripcion: "DECORACION",
    cod_nivel_padre: "498",
    COD_NIVEL: "595",
    DESCRIPCION: "DECORACION",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "610",
    descripcion: "COCINA",
    cod_nivel_padre: "423",
    COD_NIVEL: "610",
    DESCRIPCION: "COCINA",
    COD_NIVEL_PADRE: "423"
  },
  {
    cod_nivel: "630",
    descripcion: "LIMPIEZA",
    cod_nivel_padre: "423",
    COD_NIVEL: "630",
    DESCRIPCION: "LIMPIEZA",
    COD_NIVEL_PADRE: "423"
  },
  {
    cod_nivel: "699",
    descripcion: "MUEBLES",
    cod_nivel_padre: "498",
    COD_NIVEL: "699",
    DESCRIPCION: "MUEBLES",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "711",
    descripcion: "SEGURIDAD HOGAR",
    cod_nivel_padre: "498",
    COD_NIVEL: "711",
    DESCRIPCION: "SEGURIDAD HOGAR",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "728",
    descripcion: "TERRAZA Y JARDIN",
    cod_nivel_padre: "498",
    COD_NIVEL: "728",
    DESCRIPCION: "TERRAZA Y JARDIN",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "785",
    descripcion: "OTROS HOGAR Y COMPLEMENTOS",
    cod_nivel_padre: "498",
    COD_NIVEL: "785",
    DESCRIPCION: "OTROS HOGAR Y COMPLEMENTOS",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "787",
    descripcion: "HERRAMIENTAS DE MANO",
    cod_nivel_padre: "786",
    COD_NIVEL: "787",
    DESCRIPCION: "HERRAMIENTAS DE MANO",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "849",
    descripcion: "HERRAMIENTAS ELECTRICAS",
    cod_nivel_padre: "786",
    COD_NIVEL: "849",
    DESCRIPCION: "HERRAMIENTAS ELECTRICAS",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "895",
    descripcion: "HERRAMIENTA ESPECIALIZADA",
    cod_nivel_padre: "786",
    COD_NIVEL: "895",
    DESCRIPCION: "HERRAMIENTA ESPECIALIZADA",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "954",
    descripcion: "CONSUMIBLE",
    cod_nivel_padre: "786",
    COD_NIVEL: "954",
    DESCRIPCION: "CONSUMIBLE",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "971",
    descripcion: "EQUIPAMIENTO TALLER",
    cod_nivel_padre: "786",
    COD_NIVEL: "971",
    DESCRIPCION: "EQUIPAMIENTO TALLER",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "994",
    descripcion: "EQUIPO PROTECCION",
    cod_nivel_padre: "786",
    COD_NIVEL: "994",
    DESCRIPCION: "EQUIPO PROTECCION",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "1005",
    descripcion: "ELECTRICIDAD",
    cod_nivel_padre: "786",
    COD_NIVEL: "1005",
    DESCRIPCION: "ELECTRICIDAD",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "1033",
    descripcion: "AUTOMOVIL",
    cod_nivel_padre: "786",
    COD_NIVEL: "1033",
    DESCRIPCION: "AUTOMOVIL",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "1055",
    descripcion: "CAR AUDIO ",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1055",
    DESCRIPCION: "CAR AUDIO ",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1062",
    descripcion: "GPS",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1062",
    DESCRIPCION: "GPS",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1068",
    descripcion: "MOTOCICLETA",
    cod_nivel_padre: "2",
    COD_NIVEL: "1068",
    DESCRIPCION: "MOTOCICLETA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "1216",
    descripcion: "LIBROS",
    cod_nivel_padre: "1215",
    COD_NIVEL: "1216",
    DESCRIPCION: "LIBROS",
    COD_NIVEL_PADRE: "1215"
  },
  {
    cod_nivel: "1217",
    descripcion: "REVISTA",
    cod_nivel_padre: "1215",
    COD_NIVEL: "1217",
    DESCRIPCION: "REVISTA",
    COD_NIVEL_PADRE: "1215"
  },
  {
    cod_nivel: "1218",
    descripcion: "COMIC",
    cod_nivel_padre: "1215",
    COD_NIVEL: "1218",
    DESCRIPCION: "COMIC",
    COD_NIVEL_PADRE: "1215"
  },
  {
    cod_nivel: "1226",
    descripcion: "TELEFONO FIJO",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1226",
    DESCRIPCION: "TELEFONO FIJO",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1234",
    descripcion: "ACCESORIO TELEFONIA MOVIL",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1234",
    DESCRIPCION: "ACCESORIO TELEFONIA MOVIL",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1242",
    descripcion: "TARJETA MEMORIA",
    cod_nivel_padre: "5151",
    COD_NIVEL: "1242",
    DESCRIPCION: "TARJETA MEMORIA",
    COD_NIVEL_PADRE: "5151"
  },
  {
    cod_nivel: "1247",
    descripcion: "TELEFONO INTERNET VOIP",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1247",
    DESCRIPCION: "TELEFONO INTERNET VOIP",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1253",
    descripcion: "CD MUSICA",
    cod_nivel_padre: "1252",
    COD_NIVEL: "1253",
    DESCRIPCION: "CD MUSICA",
    COD_NIVEL_PADRE: "1252"
  },
  {
    cod_nivel: "1254",
    descripcion: "CINTA CASSETTE",
    cod_nivel_padre: "1252",
    COD_NIVEL: "1254",
    DESCRIPCION: "CINTA CASSETTE",
    COD_NIVEL_PADRE: "1252"
  },
  {
    cod_nivel: "1255",
    descripcion: "VINILO LP",
    cod_nivel_padre: "1252",
    COD_NIVEL: "1255",
    DESCRIPCION: "VINILO LP",
    COD_NIVEL_PADRE: "1252"
  },
  {
    cod_nivel: "1256",
    descripcion: "VINILO SINGLE",
    cod_nivel_padre: "1252",
    COD_NIVEL: "1256",
    DESCRIPCION: "VINILO SINGLE",
    COD_NIVEL_PADRE: "1252"
  },
  {
    cod_nivel: "1260",
    descripcion: "TELEVISORES",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1260",
    DESCRIPCION: "TELEVISORES",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1270",
    descripcion: "REPRODUCTORES",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1270",
    DESCRIPCION: "REPRODUCTORES",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1281",
    descripcion: "HOME CINEMA",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1281",
    DESCRIPCION: "HOME CINEMA",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1289",
    descripcion: "VIDEO PROYECTORES",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1289",
    DESCRIPCION: "VIDEO PROYECTORES",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1296",
    descripcion: "SATELITE Y TDT",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1296",
    DESCRIPCION: "SATELITE Y TDT",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1305",
    descripcion: "ACCESORIOS TV VIDEO",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1305",
    DESCRIPCION: "ACCESORIOS TV VIDEO",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1314",
    descripcion: "MUEBLES Y SOPORTES",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1314",
    DESCRIPCION: "MUEBLES Y SOPORTES",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1322",
    descripcion: "REPRODUCTOR PORTATIL",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1322",
    DESCRIPCION: "REPRODUCTOR PORTATIL",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1339",
    descripcion: "ALTA FIDELIDAD HI FI",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1339",
    DESCRIPCION: "ALTA FIDELIDAD HI FI",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1352",
    descripcion: "RADIOS",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1352",
    DESCRIPCION: "RADIOS",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1358",
    descripcion: "ACCESORIO SONIDO",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1358",
    DESCRIPCION: "ACCESORIO SONIDO",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1368",
    descripcion: "DISPOSITIVOS ELECTRONICOS",
    cod_nivel_padre: "498",
    COD_NIVEL: "1368",
    DESCRIPCION: "DISPOSITIVOS ELECTRONICOS",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "1381",
    descripcion: "RADIO AFICIONADO",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1381",
    DESCRIPCION: "RADIO AFICIONADO",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1387",
    descripcion: "PILAS Y BATERIAS",
    cod_nivel_padre: "5151",
    COD_NIVEL: "1387",
    DESCRIPCION: "PILAS Y BATERIAS",
    COD_NIVEL_PADRE: "5151"
  },
  {
    cod_nivel: "1396",
    descripcion: "FOTOGRAFIA DIGITAL",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1396",
    DESCRIPCION: "FOTOGRAFIA DIGITAL",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1397",
    descripcion: "OBJETIVO FOTOGRAFICO",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1397",
    DESCRIPCION: "OBJETIVO FOTOGRAFICO",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1398",
    descripcion: "COMPLEMENTOS OPTICOS",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1398",
    DESCRIPCION: "COMPLEMENTOS OPTICOS",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1399",
    descripcion: "FLASHES FOTOGRAFICOS",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1399",
    DESCRIPCION: "FLASHES FOTOGRAFICOS",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1400",
    descripcion: "ACCESORIOS",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1400",
    DESCRIPCION: "ACCESORIOS",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1401",
    descripcion: "FOTOGRAFIA TRADICIONAL",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1401",
    DESCRIPCION: "FOTOGRAFIA TRADICIONAL",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1402",
    descripcion: "VIDEOCAMARAS",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1402",
    DESCRIPCION: "VIDEOCAMARAS",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1403",
    descripcion: "TELESCOPIOS Y PRISMATICOS",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1403",
    DESCRIPCION: "TELESCOPIOS Y PRISMATICOS",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1404",
    descripcion: "FOTOGRAFIA ESTUDIO",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1404",
    DESCRIPCION: "FOTOGRAFIA ESTUDIO",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1405",
    descripcion: "FOTOGRAFIA ANTIGUA",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1405",
    DESCRIPCION: "FOTOGRAFIA ANTIGUA",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1406",
    descripcion: "REVELADO",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1406",
    DESCRIPCION: "REVELADO",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1409",
    descripcion: "ORDENADOR SOBREMESA",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1409",
    DESCRIPCION: "ORDENADOR SOBREMESA",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1410",
    descripcion: "ORDENADOR PORTATIL",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1410",
    DESCRIPCION: "ORDENADOR PORTATIL",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1411",
    descripcion: "TABLET",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1411",
    DESCRIPCION: "TABLET",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1413",
    descripcion: "COMPONENTES ORDENADOR",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1413",
    DESCRIPCION: "COMPONENTES ORDENADOR",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1414",
    descripcion: "ACCESORIOS ORDENADOR",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1414",
    DESCRIPCION: "ACCESORIOS ORDENADOR",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1415",
    descripcion: "ALMACENAMIENTO",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1415",
    DESCRIPCION: "ALMACENAMIENTO",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1416",
    descripcion: "PERIFERICOS",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1416",
    DESCRIPCION: "PERIFERICOS",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1417",
    descripcion: "MONITORES",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1417",
    DESCRIPCION: "MONITORES",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1418",
    descripcion: "COMUNICACIONES Y REDES",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1418",
    DESCRIPCION: "COMUNICACIONES Y REDES",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1419",
    descripcion: "IMPRESORAS",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1419",
    DESCRIPCION: "IMPRESORAS",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1423",
    descripcion: "VINTAGE",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1423",
    DESCRIPCION: "VINTAGE",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1428",
    descripcion: "INSTRUMENTO VIENTO",
    cod_nivel_padre: "1427",
    COD_NIVEL: "1428",
    DESCRIPCION: "INSTRUMENTO VIENTO",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "1429",
    descripcion: "INSTRUMENTO CUERDA",
    cod_nivel_padre: "1427",
    COD_NIVEL: "1429",
    DESCRIPCION: "INSTRUMENTO CUERDA",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "1430",
    descripcion: "PIANOS Y ORGANOS",
    cod_nivel_padre: "1427",
    COD_NIVEL: "1430",
    DESCRIPCION: "PIANOS Y ORGANOS",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "1431",
    descripcion: "INSTRUMENTOS PERCUSION",
    cod_nivel_padre: "1427",
    COD_NIVEL: "1431",
    DESCRIPCION: "INSTRUMENTOS PERCUSION",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "1432",
    descripcion: "EQUIPAMIENTO",
    cod_nivel_padre: "1427",
    COD_NIVEL: "1432",
    DESCRIPCION: "EQUIPAMIENTO",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "1435",
    descripcion: "JUGUETES",
    cod_nivel_padre: "379",
    COD_NIVEL: "1435",
    DESCRIPCION: "JUGUETES",
    COD_NIVEL_PADRE: "379"
  },
  {
    cod_nivel: "1473",
    descripcion: "COLECCIONISMO",
    cod_nivel_padre: "498",
    COD_NIVEL: "1473",
    DESCRIPCION: "COLECCIONISMO",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "1501",
    descripcion: "EQUIPAMIENTO Y MAQUINARIA",
    cod_nivel_padre: "786",
    COD_NIVEL: "1501",
    DESCRIPCION: "EQUIPAMIENTO Y MAQUINARIA",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "1503",
    descripcion: "EQUIPAMIENTO DISEÑO GRAFICO",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1503",
    DESCRIPCION: "EQUIPAMIENTO DISEÑO GRAFICO",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1507",
    descripcion: "EQUIPAMIENTO MEDICO Y LAB",
    cod_nivel_padre: "498",
    COD_NIVEL: "1507",
    DESCRIPCION: "EQUIPAMIENTO MEDICO Y LAB",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "1650",
    descripcion: "OTROS FOTO ANTIGUA",
    cod_nivel_padre: "1405",
    COD_NIVEL: "1650",
    DESCRIPCION: "OTROS FOTO ANTIGUA",
    COD_NIVEL_PADRE: "1405"
  },
  {
    cod_nivel: "1681",
    descripcion: "RELOJ ALTA GAMA",
    cod_nivel_padre: "1471",
    COD_NIVEL: "1681",
    DESCRIPCION: "RELOJ ALTA GAMA",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "1682",
    descripcion: "RELOJ PULSERA",
    cod_nivel_padre: "1471",
    COD_NIVEL: "1682",
    DESCRIPCION: "RELOJ PULSERA",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "1735",
    descripcion: "PANTALLA TACTIL",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1735",
    DESCRIPCION: "PANTALLA TACTIL",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1738",
    descripcion: "OTROS PERIFERICOS",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1738",
    DESCRIPCION: "OTROS PERIFERICOS",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1824",
    descripcion: "PACK PRINCIPIANTE",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1824",
    DESCRIPCION: "PACK PRINCIPIANTE",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1846",
    descripcion: "ACCESORIOS PIANO Y ORGANO",
    cod_nivel_padre: "1430",
    COD_NIVEL: "1846",
    DESCRIPCION: "ACCESORIOS PIANO Y ORGANO",
    COD_NIVEL_PADRE: "1430"
  },
  {
    cod_nivel: "1847",
    descripcion: "SOPORTE TECLADO",
    cod_nivel_padre: "1846",
    COD_NIVEL: "1847",
    DESCRIPCION: "SOPORTE TECLADO",
    COD_NIVEL_PADRE: "1846"
  },
  {
    cod_nivel: "1848",
    descripcion: "BANCO TECLADO",
    cod_nivel_padre: "1846",
    COD_NIVEL: "1848",
    DESCRIPCION: "BANCO TECLADO",
    COD_NIVEL_PADRE: "1846"
  },
  {
    cod_nivel: "1849",
    descripcion: "PEDAL TECLADO",
    cod_nivel_padre: "1846",
    COD_NIVEL: "1849",
    DESCRIPCION: "PEDAL TECLADO",
    COD_NIVEL_PADRE: "1846"
  },
  {
    cod_nivel: "1850",
    descripcion: "FUNDA TECLADO",
    cod_nivel_padre: "1846",
    COD_NIVEL: "1850",
    DESCRIPCION: "FUNDA TECLADO",
    COD_NIVEL_PADRE: "1846"
  },
  {
    cod_nivel: "1851",
    descripcion: "OTROS ACCESORIOS",
    cod_nivel_padre: "1846",
    COD_NIVEL: "1851",
    DESCRIPCION: "OTROS ACCESORIOS",
    COD_NIVEL_PADRE: "1846"
  },
  {
    cod_nivel: "1897",
    descripcion: "ATRIL",
    cod_nivel_padre: "1432",
    COD_NIVEL: "1897",
    DESCRIPCION: "ATRIL",
    COD_NIVEL_PADRE: "1432"
  },
  {
    cod_nivel: "1901",
    descripcion: "SOPORTE ARMONICA",
    cod_nivel_padre: "1432",
    COD_NIVEL: "1901",
    DESCRIPCION: "SOPORTE ARMONICA",
    COD_NIVEL_PADRE: "1432"
  },
  {
    cod_nivel: "1906",
    descripcion: "AMPLIFICADORES",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1906",
    DESCRIPCION: "AMPLIFICADORES",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1911",
    descripcion: "EQUIPO GRABACION",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1911",
    DESCRIPCION: "EQUIPO GRABACION",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1918",
    descripcion: "EQUIPAMIENTO DJ",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1918",
    DESCRIPCION: "EQUIPAMIENTO DJ",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "2023",
    descripcion: "VAGON ESCALA H0",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2023",
    DESCRIPCION: "VAGON ESCALA H0",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2103",
    descripcion: "AJEDREZ",
    cod_nivel_padre: "2",
    COD_NIVEL: "2103",
    DESCRIPCION: "AJEDREZ",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "5098",
    descripcion: "HIGIENE",
    cod_nivel_padre: "423",
    COD_NIVEL: "5098",
    DESCRIPCION: "HIGIENE",
    COD_NIVEL_PADRE: "423"
  },
  {
    cod_nivel: "5113",
    descripcion: "CONSOLAS",
    cod_nivel_padre: "1103",
    COD_NIVEL: "5113",
    DESCRIPCION: "CONSOLAS",
    COD_NIVEL_PADRE: "1103"
  },
  {
    cod_nivel: "5114",
    descripcion: "VIDEOJUEGOS",
    cod_nivel_padre: "1103",
    COD_NIVEL: "5114",
    DESCRIPCION: "VIDEOJUEGOS",
    COD_NIVEL_PADRE: "1103"
  },
  {
    cod_nivel: "5115",
    descripcion: "MANDOS",
    cod_nivel_padre: "1103",
    COD_NIVEL: "5115",
    DESCRIPCION: "MANDOS",
    COD_NIVEL_PADRE: "1103"
  },
  {
    cod_nivel: "5116",
    descripcion: "ACCESORIOS CONSOLAS",
    cod_nivel_padre: "1103",
    COD_NIVEL: "5116",
    DESCRIPCION: "ACCESORIOS CONSOLAS",
    COD_NIVEL_PADRE: "1103"
  },
  {
    cod_nivel: "5121",
    descripcion: "ANILLOS",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5121",
    DESCRIPCION: "ANILLOS",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5122",
    descripcion: "COLLARES",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5122",
    DESCRIPCION: "COLLARES",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5123",
    descripcion: "PULSERAS",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5123",
    DESCRIPCION: "PULSERAS",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5124",
    descripcion: "PENDIENTES",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5124",
    DESCRIPCION: "PENDIENTES",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5125",
    descripcion: "COLGANTES",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5125",
    DESCRIPCION: "COLGANTES",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5126",
    descripcion: "OTROS JOYERIA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5126",
    DESCRIPCION: "OTROS JOYERIA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5153",
    descripcion: "CONSUMIBLE ALMACENAMIENTO",
    cod_nivel_padre: "5151",
    COD_NIVEL: "5153",
    DESCRIPCION: "CONSUMIBLE ALMACENAMIENTO",
    COD_NIVEL_PADRE: "5151"
  },
  {
    cod_nivel: "5154",
    descripcion: "CABLES Y CONECTORES",
    cod_nivel_padre: "5151",
    COD_NIVEL: "5154",
    DESCRIPCION: "CABLES Y CONECTORES",
    COD_NIVEL_PADRE: "5151"
  },
  {
    cod_nivel: "5173",
    descripcion: "RELOJ PULSERA PREMIUM",
    cod_nivel_padre: "1471",
    COD_NIVEL: "5173",
    DESCRIPCION: "RELOJ PULSERA PREMIUM",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "5177",
    descripcion: "SALUD",
    cod_nivel_padre: "498",
    COD_NIVEL: "5177",
    DESCRIPCION: "SALUD",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "5178",
    descripcion: "ROPA Y CALZADO",
    cod_nivel_padre: "498",
    COD_NIVEL: "5178",
    DESCRIPCION: "ROPA Y CALZADO",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "5179",
    descripcion: "COMPLEMENTOS",
    cod_nivel_padre: "498",
    COD_NIVEL: "5179",
    DESCRIPCION: "COMPLEMENTOS",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "5180",
    descripcion: "ACCESORIOS BEBE",
    cod_nivel_padre: "379",
    COD_NIVEL: "5180",
    DESCRIPCION: "ACCESORIOS BEBE",
    COD_NIVEL_PADRE: "379"
  },
  {
    cod_nivel: "5181",
    descripcion: "TELEFONIA MOVIL",
    cod_nivel_padre: "1219",
    COD_NIVEL: "5181",
    DESCRIPCION: "TELEFONIA MOVIL",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "0",
    descripcion: "GOD",
    cod_nivel_padre: "0",
    COD_NIVEL: "0",
    DESCRIPCION: "GOD",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1514",
    descripcion: "STOREV3",
    cod_nivel_padre: "0",
    COD_NIVEL: "1514",
    DESCRIPCION: "STOREV3",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "0",
    descripcion: "GOD",
    cod_nivel_padre: "0",
    COD_NIVEL: "0",
    DESCRIPCION: "GOD",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "0",
    descripcion: "GOD",
    cod_nivel_padre: "0",
    COD_NIVEL: "0",
    DESCRIPCION: "GOD",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1032",
    descripcion: "AUTOMOVILES Y MOTOS",
    cod_nivel_padre: "0",
    COD_NIVEL: "1032",
    DESCRIPCION: "AUTOMOVILES Y MOTOS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "2080",
    descripcion: "PRODUCTOS CON TARA",
    cod_nivel_padre: "0",
    COD_NIVEL: "2080",
    DESCRIPCION: "PRODUCTOS CON TARA",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1367",
    descripcion: "OTROS ELECTRONICA",
    cod_nivel_padre: "0",
    COD_NIVEL: "1367",
    DESCRIPCION: "OTROS ELECTRONICA",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1456",
    descripcion: "ROPA Y COMPLEMENTOS",
    cod_nivel_padre: "0",
    COD_NIVEL: "1456",
    DESCRIPCION: "ROPA Y COMPLEMENTOS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "2",
    descripcion: "DEPORTES",
    cod_nivel_padre: "0",
    COD_NIVEL: "2",
    DESCRIPCION: "DEPORTES",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "379",
    descripcion: "BEBES Y JUGUETES",
    cod_nivel_padre: "0",
    COD_NIVEL: "379",
    DESCRIPCION: "BEBES Y JUGUETES",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "423",
    descripcion: "ELECTRODOMESTICOS",
    cod_nivel_padre: "0",
    COD_NIVEL: "423",
    DESCRIPCION: "ELECTRODOMESTICOS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "498",
    descripcion: "HOGAR Y COMPLEMENTOS",
    cod_nivel_padre: "0",
    COD_NIVEL: "498",
    DESCRIPCION: "HOGAR Y COMPLEMENTOS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "786",
    descripcion: "BRICOLAJE",
    cod_nivel_padre: "0",
    COD_NIVEL: "786",
    DESCRIPCION: "BRICOLAJE",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1026",
    descripcion: "CINE DVD PELICULAS",
    cod_nivel_padre: "0",
    COD_NIVEL: "1026",
    DESCRIPCION: "CINE DVD PELICULAS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1103",
    descripcion: "VIDEOJUEGOS",
    cod_nivel_padre: "0",
    COD_NIVEL: "1103",
    DESCRIPCION: "VIDEOJUEGOS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1215",
    descripcion: "LIBROS",
    cod_nivel_padre: "0",
    COD_NIVEL: "1215",
    DESCRIPCION: "LIBROS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1219",
    descripcion: "TELEFONIA",
    cod_nivel_padre: "0",
    COD_NIVEL: "1219",
    DESCRIPCION: "TELEFONIA",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1252",
    descripcion: "CDS Y VINILOS",
    cod_nivel_padre: "0",
    COD_NIVEL: "1252",
    DESCRIPCION: "CDS Y VINILOS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1259",
    descripcion: "TV Y VIDEO",
    cod_nivel_padre: "0",
    COD_NIVEL: "1259",
    DESCRIPCION: "TV Y VIDEO",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1321",
    descripcion: "SONIDO",
    cod_nivel_padre: "0",
    COD_NIVEL: "1321",
    DESCRIPCION: "SONIDO",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1395",
    descripcion: "FOTOGRAFIA",
    cod_nivel_padre: "0",
    COD_NIVEL: "1395",
    DESCRIPCION: "FOTOGRAFIA",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1408",
    descripcion: "INFORMATICA",
    cod_nivel_padre: "0",
    COD_NIVEL: "1408",
    DESCRIPCION: "INFORMATICA",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1427",
    descripcion: "INSTRUMENTOS MUSICALES",
    cod_nivel_padre: "0",
    COD_NIVEL: "1427",
    DESCRIPCION: "INSTRUMENTOS MUSICALES",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1433",
    descripcion: "MUSICA PROFESIONAL",
    cod_nivel_padre: "0",
    COD_NIVEL: "1433",
    DESCRIPCION: "MUSICA PROFESIONAL",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1470",
    descripcion: "JOYERIA",
    cod_nivel_padre: "0",
    COD_NIVEL: "1470",
    DESCRIPCION: "JOYERIA",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "5151",
    descripcion: "ACCESORIOS Y CONSUMIBLES",
    cod_nivel_padre: "0",
    COD_NIVEL: "5151",
    DESCRIPCION: "ACCESORIOS Y CONSUMIBLES",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "5",
    descripcion: "STEP",
    cod_nivel_padre: "3",
    COD_NIVEL: "5",
    DESCRIPCION: "STEP",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "10",
    descripcion: "STEPPER",
    cod_nivel_padre: "3",
    COD_NIVEL: "10",
    DESCRIPCION: "STEPPER",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "12",
    descripcion: "ESTERILLA",
    cod_nivel_padre: "3",
    COD_NIVEL: "12",
    DESCRIPCION: "ESTERILLA",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "13",
    descripcion: "ELECTROESTIMULADOR",
    cod_nivel_padre: "3",
    COD_NIVEL: "13",
    DESCRIPCION: "ELECTROESTIMULADOR",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "25",
    descripcion: "PULSOMETRO",
    cod_nivel_padre: "3",
    COD_NIVEL: "25",
    DESCRIPCION: "PULSOMETRO",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "26",
    descripcion: "PODOMETRO",
    cod_nivel_padre: "3",
    COD_NIVEL: "26",
    DESCRIPCION: "PODOMETRO",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "27",
    descripcion: "ROPA FITNESS",
    cod_nivel_padre: "3",
    COD_NIVEL: "27",
    DESCRIPCION: "ROPA FITNESS",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "28",
    descripcion: "OTROS FITNESS",
    cod_nivel_padre: "3",
    COD_NIVEL: "28",
    DESCRIPCION: "OTROS FITNESS",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "30",
    descripcion: "ROPA ATLETISMO",
    cod_nivel_padre: "29",
    COD_NIVEL: "30",
    DESCRIPCION: "ROPA ATLETISMO",
    COD_NIVEL_PADRE: "29"
  },
  {
    cod_nivel: "31",
    descripcion: "CALZADO ATLETISMO",
    cod_nivel_padre: "29",
    COD_NIVEL: "31",
    DESCRIPCION: "CALZADO ATLETISMO",
    COD_NIVEL_PADRE: "29"
  },
  {
    cod_nivel: "32",
    descripcion: "OTROS ATLETISMO",
    cod_nivel_padre: "29",
    COD_NIVEL: "32",
    DESCRIPCION: "OTROS ATLETISMO",
    COD_NIVEL_PADRE: "29"
  },
  {
    cod_nivel: "34",
    descripcion: "CANASTA BALONCESTO",
    cod_nivel_padre: "33",
    COD_NIVEL: "34",
    DESCRIPCION: "CANASTA BALONCESTO",
    COD_NIVEL_PADRE: "33"
  },
  {
    cod_nivel: "35",
    descripcion: "BALON BALONCESTO",
    cod_nivel_padre: "33",
    COD_NIVEL: "35",
    DESCRIPCION: "BALON BALONCESTO",
    COD_NIVEL_PADRE: "33"
  },
  {
    cod_nivel: "36",
    descripcion: "ZAPATILLAS BALONCESTO",
    cod_nivel_padre: "33",
    COD_NIVEL: "36",
    DESCRIPCION: "ZAPATILLAS BALONCESTO",
    COD_NIVEL_PADRE: "33"
  },
  {
    cod_nivel: "37",
    descripcion: "ROPA BALONCESTO",
    cod_nivel_padre: "33",
    COD_NIVEL: "37",
    DESCRIPCION: "ROPA BALONCESTO",
    COD_NIVEL_PADRE: "33"
  },
  {
    cod_nivel: "38",
    descripcion: "MERCHANDISING EQUIPOS",
    cod_nivel_padre: "33",
    COD_NIVEL: "38",
    DESCRIPCION: "MERCHANDISING EQUIPOS",
    COD_NIVEL_PADRE: "33"
  },
  {
    cod_nivel: "40",
    descripcion: "ZAPATILLAS BALONMANO",
    cod_nivel_padre: "39",
    COD_NIVEL: "40",
    DESCRIPCION: "ZAPATILLAS BALONMANO",
    COD_NIVEL_PADRE: "39"
  },
  {
    cod_nivel: "41",
    descripcion: "BALON BALONMANO",
    cod_nivel_padre: "39",
    COD_NIVEL: "41",
    DESCRIPCION: "BALON BALONMANO",
    COD_NIVEL_PADRE: "39"
  },
  {
    cod_nivel: "42",
    descripcion: "PROTECCIONES BALONMANO",
    cod_nivel_padre: "39",
    COD_NIVEL: "42",
    DESCRIPCION: "PROTECCIONES BALONMANO",
    COD_NIVEL_PADRE: "39"
  },
  {
    cod_nivel: "44",
    descripcion: "GUANTE BEISBOL",
    cod_nivel_padre: "43",
    COD_NIVEL: "44",
    DESCRIPCION: "GUANTE BEISBOL",
    COD_NIVEL_PADRE: "43"
  },
  {
    cod_nivel: "45",
    descripcion: "BATE BEISBOL",
    cod_nivel_padre: "43",
    COD_NIVEL: "45",
    DESCRIPCION: "BATE BEISBOL",
    COD_NIVEL_PADRE: "43"
  },
  {
    cod_nivel: "46",
    descripcion: "BOLA BEISBOL",
    cod_nivel_padre: "43",
    COD_NIVEL: "46",
    DESCRIPCION: "BOLA BEISBOL",
    COD_NIVEL_PADRE: "43"
  },
  {
    cod_nivel: "48",
    descripcion: "CANTIMPLORA",
    cod_nivel_padre: "47",
    COD_NIVEL: "48",
    DESCRIPCION: "CANTIMPLORA",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "49",
    descripcion: "BASTON",
    cod_nivel_padre: "47",
    COD_NIVEL: "49",
    DESCRIPCION: "BASTON",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "50",
    descripcion: "LINTERNA",
    cod_nivel_padre: "47",
    COD_NIVEL: "50",
    DESCRIPCION: "LINTERNA",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "51",
    descripcion: "SISTEMA DE ALUMBRADO",
    cod_nivel_padre: "47",
    COD_NIVEL: "51",
    DESCRIPCION: "SISTEMA DE ALUMBRADO",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "52",
    descripcion: "MOCHILA",
    cod_nivel_padre: "47",
    COD_NIVEL: "52",
    DESCRIPCION: "MOCHILA",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "53",
    descripcion: "NEVERA",
    cod_nivel_padre: "47",
    COD_NIVEL: "53",
    DESCRIPCION: "NEVERA",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "54",
    descripcion: "AISLANTE SACO DORMIR",
    cod_nivel_padre: "47",
    COD_NIVEL: "54",
    DESCRIPCION: "AISLANTE SACO DORMIR",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "55",
    descripcion: "SACO DORMIR",
    cod_nivel_padre: "47",
    COD_NIVEL: "55",
    DESCRIPCION: "SACO DORMIR",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "56",
    descripcion: "SILLA",
    cod_nivel_padre: "47",
    COD_NIVEL: "56",
    DESCRIPCION: "SILLA",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "57",
    descripcion: "TIENDA CAMPAÑA",
    cod_nivel_padre: "47",
    COD_NIVEL: "57",
    DESCRIPCION: "TIENDA CAMPAÑA",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "58",
    descripcion: "UTENSILIO ALIMENTACION",
    cod_nivel_padre: "47",
    COD_NIVEL: "58",
    DESCRIPCION: "UTENSILIO ALIMENTACION",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "59",
    descripcion: "MOBILIARIO",
    cod_nivel_padre: "47",
    COD_NIVEL: "59",
    DESCRIPCION: "MOBILIARIO",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "60",
    descripcion: "OTROS CAMPING",
    cod_nivel_padre: "47",
    COD_NIVEL: "60",
    DESCRIPCION: "OTROS CAMPING",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "62",
    descripcion: "ROPA DE CAZA",
    cod_nivel_padre: "61",
    COD_NIVEL: "62",
    DESCRIPCION: "ROPA DE CAZA",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "63",
    descripcion: "CARTUCHERA",
    cod_nivel_padre: "61",
    COD_NIVEL: "63",
    DESCRIPCION: "CARTUCHERA",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "64",
    descripcion: "MORRAL",
    cod_nivel_padre: "61",
    COD_NIVEL: "64",
    DESCRIPCION: "MORRAL",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "65",
    descripcion: "PORTAPAJARO",
    cod_nivel_padre: "61",
    COD_NIVEL: "65",
    DESCRIPCION: "PORTAPAJARO",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "66",
    descripcion: "ASIENTO CAZADOR",
    cod_nivel_padre: "61",
    COD_NIVEL: "66",
    DESCRIPCION: "ASIENTO CAZADOR",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "67",
    descripcion: "HERRAMIENTA CAZADOR",
    cod_nivel_padre: "61",
    COD_NIVEL: "67",
    DESCRIPCION: "HERRAMIENTA CAZADOR",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "68",
    descripcion: "CASCO ANTIRUIDO",
    cod_nivel_padre: "61",
    COD_NIVEL: "68",
    DESCRIPCION: "CASCO ANTIRUIDO",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "69",
    descripcion: "PRISMATICOS",
    cod_nivel_padre: "61",
    COD_NIVEL: "69",
    DESCRIPCION: "PRISMATICOS",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "70",
    descripcion: "EQUIPO VISION NOCTURNA",
    cod_nivel_padre: "61",
    COD_NIVEL: "70",
    DESCRIPCION: "EQUIPO VISION NOCTURNA",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "71",
    descripcion: "POLAINAS",
    cod_nivel_padre: "61",
    COD_NIVEL: "71",
    DESCRIPCION: "POLAINAS",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "72",
    descripcion: "BOLSA DE CAZA",
    cod_nivel_padre: "61",
    COD_NIVEL: "72",
    DESCRIPCION: "BOLSA DE CAZA",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "73",
    descripcion: "ACCESORIO PARA ARMAS",
    cod_nivel_padre: "61",
    COD_NIVEL: "73",
    DESCRIPCION: "ACCESORIO PARA ARMAS",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "74",
    descripcion: "MIRA TELESCOPICA",
    cod_nivel_padre: "61",
    COD_NIVEL: "74",
    DESCRIPCION: "MIRA TELESCOPICA",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "75",
    descripcion: "RECLAMO",
    cod_nivel_padre: "61",
    COD_NIVEL: "75",
    DESCRIPCION: "RECLAMO",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "76",
    descripcion: "OTROS CAZA",
    cod_nivel_padre: "61",
    COD_NIVEL: "76",
    DESCRIPCION: "OTROS CAZA",
    COD_NIVEL_PADRE: "61"
  },
  {
    cod_nivel: "79",
    descripcion: "BOMBA HINCHADO",
    cod_nivel_padre: "78",
    COD_NIVEL: "79",
    DESCRIPCION: "BOMBA HINCHADO",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "80",
    descripcion: "PORTABEBE BICICLETA",
    cod_nivel_padre: "78",
    COD_NIVEL: "80",
    DESCRIPCION: "PORTABEBE BICICLETA",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "81",
    descripcion: "RODILLO CICLISMO",
    cod_nivel_padre: "78",
    COD_NIVEL: "81",
    DESCRIPCION: "RODILLO CICLISMO",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "82",
    descripcion: "CUENTAKILOMETROS ",
    cod_nivel_padre: "78",
    COD_NIVEL: "82",
    DESCRIPCION: "CUENTAKILOMETROS ",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "83",
    descripcion: "CESTA BICICLETA",
    cod_nivel_padre: "78",
    COD_NIVEL: "83",
    DESCRIPCION: "CESTA BICICLETA",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "84",
    descripcion: "BOLSA PORTAEQUIPAJE",
    cod_nivel_padre: "78",
    COD_NIVEL: "84",
    DESCRIPCION: "BOLSA PORTAEQUIPAJE",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "85",
    descripcion: "FUNDA BICICLETA",
    cod_nivel_padre: "78",
    COD_NIVEL: "85",
    DESCRIPCION: "FUNDA BICICLETA",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "86",
    descripcion: "SOPORTE BICICLETA",
    cod_nivel_padre: "78",
    COD_NIVEL: "86",
    DESCRIPCION: "SOPORTE BICICLETA",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "87",
    descripcion: "HERRAMIENTA CICLISMO",
    cod_nivel_padre: "78",
    COD_NIVEL: "87",
    DESCRIPCION: "HERRAMIENTA CICLISMO",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "88",
    descripcion: "MOCHILA CAMEL BAG",
    cod_nivel_padre: "78",
    COD_NIVEL: "88",
    DESCRIPCION: "MOCHILA CAMEL BAG",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "89",
    descripcion: "BIDON",
    cod_nivel_padre: "78",
    COD_NIVEL: "89",
    DESCRIPCION: "BIDON",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "90",
    descripcion: "PORTABIDONES BICI",
    cod_nivel_padre: "78",
    COD_NIVEL: "90",
    DESCRIPCION: "PORTABIDONES BICI",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "91",
    descripcion: "ACCESORIO VISIBILIDAD ",
    cod_nivel_padre: "78",
    COD_NIVEL: "91",
    DESCRIPCION: "ACCESORIO VISIBILIDAD ",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "92",
    descripcion: "ILUMINACION BICICLETA",
    cod_nivel_padre: "78",
    COD_NIVEL: "92",
    DESCRIPCION: "ILUMINACION BICICLETA",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "93",
    descripcion: "ANTIRROBO ",
    cod_nivel_padre: "78",
    COD_NIVEL: "93",
    DESCRIPCION: "ANTIRROBO ",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "94",
    descripcion: "OTROS ACCESORIOS CICLISMO",
    cod_nivel_padre: "78",
    COD_NIVEL: "94",
    DESCRIPCION: "OTROS ACCESORIOS CICLISMO",
    COD_NIVEL_PADRE: "78"
  },
  {
    cod_nivel: "107",
    descripcion: "CASSETTE",
    cod_nivel_padre: "106",
    COD_NIVEL: "107",
    DESCRIPCION: "CASSETTE",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "108",
    descripcion: "CAMBIO",
    cod_nivel_padre: "106",
    COD_NIVEL: "108",
    DESCRIPCION: "CAMBIO",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "109",
    descripcion: "DESVIADOR",
    cod_nivel_padre: "106",
    COD_NIVEL: "109",
    DESCRIPCION: "DESVIADOR",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "110",
    descripcion: "MANILLAR",
    cod_nivel_padre: "106",
    COD_NIVEL: "110",
    DESCRIPCION: "MANILLAR",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "111",
    descripcion: "ALARGADOR MANILLAR",
    cod_nivel_padre: "106",
    COD_NIVEL: "111",
    DESCRIPCION: "ALARGADOR MANILLAR",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "112",
    descripcion: "SILLIN",
    cod_nivel_padre: "106",
    COD_NIVEL: "112",
    DESCRIPCION: "SILLIN",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "113",
    descripcion: "TIJA",
    cod_nivel_padre: "106",
    COD_NIVEL: "113",
    DESCRIPCION: "TIJA",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "114",
    descripcion: "RUEDA",
    cod_nivel_padre: "106",
    COD_NIVEL: "114",
    DESCRIPCION: "RUEDA",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "115",
    descripcion: "PEDALES",
    cod_nivel_padre: "106",
    COD_NIVEL: "115",
    DESCRIPCION: "PEDALES",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "116",
    descripcion: "CALAPIES",
    cod_nivel_padre: "106",
    COD_NIVEL: "116",
    DESCRIPCION: "CALAPIES",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "117",
    descripcion: "OTRAS PIEZAS BICICLETAS",
    cod_nivel_padre: "106",
    COD_NIVEL: "117",
    DESCRIPCION: "OTRAS PIEZAS BICICLETAS",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "119",
    descripcion: "CAMARA DE AIRE",
    cod_nivel_padre: "118",
    COD_NIVEL: "119",
    DESCRIPCION: "CAMARA DE AIRE",
    COD_NIVEL_PADRE: "118"
  },
  {
    cod_nivel: "120",
    descripcion: "CUBIERTA",
    cod_nivel_padre: "118",
    COD_NIVEL: "120",
    DESCRIPCION: "CUBIERTA",
    COD_NIVEL_PADRE: "118"
  },
  {
    cod_nivel: "121",
    descripcion: "REPARA PINCHAZO",
    cod_nivel_padre: "118",
    COD_NIVEL: "121",
    DESCRIPCION: "REPARA PINCHAZO",
    COD_NIVEL_PADRE: "118"
  },
  {
    cod_nivel: "122",
    descripcion: "OTROS RECAMBIOS BICICLETA",
    cod_nivel_padre: "118",
    COD_NIVEL: "122",
    DESCRIPCION: "OTROS RECAMBIOS BICICLETA",
    COD_NIVEL_PADRE: "118"
  },
  {
    cod_nivel: "124",
    descripcion: "CULOTTE",
    cod_nivel_padre: "123",
    COD_NIVEL: "124",
    DESCRIPCION: "CULOTTE",
    COD_NIVEL_PADRE: "123"
  },
  {
    cod_nivel: "125",
    descripcion: "MAILLOT",
    cod_nivel_padre: "123",
    COD_NIVEL: "125",
    DESCRIPCION: "MAILLOT",
    COD_NIVEL_PADRE: "123"
  },
  {
    cod_nivel: "126",
    descripcion: "GUANTES",
    cod_nivel_padre: "123",
    COD_NIVEL: "126",
    DESCRIPCION: "GUANTES",
    COD_NIVEL_PADRE: "123"
  },
  {
    cod_nivel: "127",
    descripcion: "MALLA",
    cod_nivel_padre: "123",
    COD_NIVEL: "127",
    DESCRIPCION: "MALLA",
    COD_NIVEL_PADRE: "123"
  },
  {
    cod_nivel: "128",
    descripcion: "OTRA ROPA CICLISMO",
    cod_nivel_padre: "123",
    COD_NIVEL: "128",
    DESCRIPCION: "OTRA ROPA CICLISMO",
    COD_NIVEL_PADRE: "123"
  },
  {
    cod_nivel: "129",
    descripcion: "ZAPATILLA CICLISMO",
    cod_nivel_padre: "77",
    COD_NIVEL: "129",
    DESCRIPCION: "ZAPATILLA CICLISMO",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "130",
    descripcion: "CASCO CICLISMO",
    cod_nivel_padre: "77",
    COD_NIVEL: "130",
    DESCRIPCION: "CASCO CICLISMO",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "131",
    descripcion: "OTROS CICLISMO",
    cod_nivel_padre: "77",
    COD_NIVEL: "131",
    DESCRIPCION: "OTROS CICLISMO",
    COD_NIVEL_PADRE: "77"
  },
  {
    cod_nivel: "133",
    descripcion: "COMETA DELTA",
    cod_nivel_padre: "132",
    COD_NIVEL: "133",
    DESCRIPCION: "COMETA DELTA",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "134",
    descripcion: "COMETA MONOHILO",
    cod_nivel_padre: "132",
    COD_NIVEL: "134",
    DESCRIPCION: "COMETA MONOHILO",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "135",
    descripcion: "COMETA DE TRACCION",
    cod_nivel_padre: "132",
    COD_NIVEL: "135",
    DESCRIPCION: "COMETA DE TRACCION",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "136",
    descripcion: "KITE BOARD",
    cod_nivel_padre: "132",
    COD_NIVEL: "136",
    DESCRIPCION: "KITE BOARD",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "137",
    descripcion: "KITE BUGGY",
    cod_nivel_padre: "132",
    COD_NIVEL: "137",
    DESCRIPCION: "KITE BUGGY",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "138",
    descripcion: "FRISBEE",
    cod_nivel_padre: "132",
    COD_NIVEL: "138",
    DESCRIPCION: "FRISBEE",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "139",
    descripcion: "BOOMERANG",
    cod_nivel_padre: "132",
    COD_NIVEL: "139",
    DESCRIPCION: "BOOMERANG",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "140",
    descripcion: "OTROS ACCESORIOS COMETAS",
    cod_nivel_padre: "132",
    COD_NIVEL: "140",
    DESCRIPCION: "OTROS ACCESORIOS COMETAS",
    COD_NIVEL_PADRE: "132"
  },
  {
    cod_nivel: "142",
    descripcion: "DISIPADOR",
    cod_nivel_padre: "141",
    COD_NIVEL: "142",
    DESCRIPCION: "DISIPADOR",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "143",
    descripcion: "CASCO",
    cod_nivel_padre: "141",
    COD_NIVEL: "143",
    DESCRIPCION: "CASCO",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "144",
    descripcion: "ARNES",
    cod_nivel_padre: "141",
    COD_NIVEL: "144",
    DESCRIPCION: "ARNES",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "145",
    descripcion: "PIES DE GATO",
    cod_nivel_padre: "141",
    COD_NIVEL: "145",
    DESCRIPCION: "PIES DE GATO",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "146",
    descripcion: "FISURERO",
    cod_nivel_padre: "141",
    COD_NIVEL: "146",
    DESCRIPCION: "FISURERO",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "147",
    descripcion: "MOSQUETON",
    cod_nivel_padre: "141",
    COD_NIVEL: "147",
    DESCRIPCION: "MOSQUETON",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "148",
    descripcion: "ROPA ESCALADA",
    cod_nivel_padre: "141",
    COD_NIVEL: "148",
    DESCRIPCION: "ROPA ESCALADA",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "149",
    descripcion: "CUERDA ESCALADA",
    cod_nivel_padre: "141",
    COD_NIVEL: "149",
    DESCRIPCION: "CUERDA ESCALADA",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "150",
    descripcion: "PRESAS ESCALADA",
    cod_nivel_padre: "141",
    COD_NIVEL: "150",
    DESCRIPCION: "PRESAS ESCALADA",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "151",
    descripcion: "PIOLET",
    cod_nivel_padre: "141",
    COD_NIVEL: "151",
    DESCRIPCION: "PIOLET",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "152",
    descripcion: "BIDON ESTANCO BARRANCO",
    cod_nivel_padre: "141",
    COD_NIVEL: "152",
    DESCRIPCION: "BIDON ESTANCO BARRANCO",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "153",
    descripcion: "CRAMPONES",
    cod_nivel_padre: "141",
    COD_NIVEL: "153",
    DESCRIPCION: "CRAMPONES",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "154",
    descripcion: "RAQUETA PARA NIEVE",
    cod_nivel_padre: "141",
    COD_NIVEL: "154",
    DESCRIPCION: "RAQUETA PARA NIEVE",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "156",
    descripcion: "ROPA TECNICA",
    cod_nivel_padre: "155",
    COD_NIVEL: "156",
    DESCRIPCION: "ROPA TECNICA",
    COD_NIVEL_PADRE: "155"
  },
  {
    cod_nivel: "157",
    descripcion: "TIENDA CAMPAÑA",
    cod_nivel_padre: "155",
    COD_NIVEL: "157",
    DESCRIPCION: "TIENDA CAMPAÑA",
    COD_NIVEL_PADRE: "155"
  },
  {
    cod_nivel: "158",
    descripcion: "MOCHILA",
    cod_nivel_padre: "155",
    COD_NIVEL: "158",
    DESCRIPCION: "MOCHILA",
    COD_NIVEL_PADRE: "155"
  },
  {
    cod_nivel: "159",
    descripcion: "SACO DORMIR",
    cod_nivel_padre: "155",
    COD_NIVEL: "159",
    DESCRIPCION: "SACO DORMIR",
    COD_NIVEL_PADRE: "155"
  },
  {
    cod_nivel: "160",
    descripcion: "OTROS ACCESORIOS ESCALADA",
    cod_nivel_padre: "141",
    COD_NIVEL: "160",
    DESCRIPCION: "OTROS ACCESORIOS ESCALADA",
    COD_NIVEL_PADRE: "141"
  },
  {
    cod_nivel: "162",
    descripcion: "BALON FUTBOL",
    cod_nivel_padre: "161",
    COD_NIVEL: "162",
    DESCRIPCION: "BALON FUTBOL",
    COD_NIVEL_PADRE: "161"
  },
  {
    cod_nivel: "163",
    descripcion: "BOTAS FUTBOL",
    cod_nivel_padre: "161",
    COD_NIVEL: "163",
    DESCRIPCION: "BOTAS FUTBOL",
    COD_NIVEL_PADRE: "161"
  },
  {
    cod_nivel: "164",
    descripcion: "GUANTES PORTERO",
    cod_nivel_padre: "161",
    COD_NIVEL: "164",
    DESCRIPCION: "GUANTES PORTERO",
    COD_NIVEL_PADRE: "161"
  },
  {
    cod_nivel: "165",
    descripcion: "ROPA FUTBOL",
    cod_nivel_padre: "161",
    COD_NIVEL: "165",
    DESCRIPCION: "ROPA FUTBOL",
    COD_NIVEL_PADRE: "161"
  },
  {
    cod_nivel: "166",
    descripcion: "EQUIPAMIENTO",
    cod_nivel_padre: "161",
    COD_NIVEL: "166",
    DESCRIPCION: "EQUIPAMIENTO",
    COD_NIVEL_PADRE: "161"
  },
  {
    cod_nivel: "167",
    descripcion: "MINI PORTERIA FUTBOL",
    cod_nivel_padre: "166",
    COD_NIVEL: "167",
    DESCRIPCION: "MINI PORTERIA FUTBOL",
    COD_NIVEL_PADRE: "166"
  },
  {
    cod_nivel: "168",
    descripcion: "LONA ENTRENAMIENTO FUTBOL",
    cod_nivel_padre: "166",
    COD_NIVEL: "168",
    DESCRIPCION: "LONA ENTRENAMIENTO FUTBOL",
    COD_NIVEL_PADRE: "166"
  },
  {
    cod_nivel: "169",
    descripcion: "OTROS ACCESORIOS FUTBOL",
    cod_nivel_padre: "161",
    COD_NIVEL: "169",
    DESCRIPCION: "OTROS ACCESORIOS FUTBOL",
    COD_NIVEL_PADRE: "161"
  },
  {
    cod_nivel: "171",
    descripcion: "CASCO",
    cod_nivel_padre: "170",
    COD_NIVEL: "171",
    DESCRIPCION: "CASCO",
    COD_NIVEL_PADRE: "170"
  },
  {
    cod_nivel: "172",
    descripcion: "BALON",
    cod_nivel_padre: "170",
    COD_NIVEL: "172",
    DESCRIPCION: "BALON",
    COD_NIVEL_PADRE: "170"
  },
  {
    cod_nivel: "173",
    descripcion: "PROTECCIONES",
    cod_nivel_padre: "170",
    COD_NIVEL: "173",
    DESCRIPCION: "PROTECCIONES",
    COD_NIVEL_PADRE: "170"
  },
  {
    cod_nivel: "174",
    descripcion: "OTROS FUTBOL AMERICANO",
    cod_nivel_padre: "170",
    COD_NIVEL: "174",
    DESCRIPCION: "OTROS FUTBOL AMERICANO",
    COD_NIVEL_PADRE: "170"
  },
  {
    cod_nivel: "176",
    descripcion: "MAILLOT",
    cod_nivel_padre: "175",
    COD_NIVEL: "176",
    DESCRIPCION: "MAILLOT",
    COD_NIVEL_PADRE: "175"
  },
  {
    cod_nivel: "177",
    descripcion: "MALLAS",
    cod_nivel_padre: "175",
    COD_NIVEL: "177",
    DESCRIPCION: "MALLAS",
    COD_NIVEL_PADRE: "175"
  },
  {
    cod_nivel: "178",
    descripcion: "MATERIAL GIMNASIA",
    cod_nivel_padre: "175",
    COD_NIVEL: "178",
    DESCRIPCION: "MATERIAL GIMNASIA",
    COD_NIVEL_PADRE: "175"
  },
  {
    cod_nivel: "179",
    descripcion: "BALON DE ESPUMA",
    cod_nivel_padre: "178",
    COD_NIVEL: "179",
    DESCRIPCION: "BALON DE ESPUMA",
    COD_NIVEL_PADRE: "178"
  },
  {
    cod_nivel: "180",
    descripcion: "BASTON GIMNASIA",
    cod_nivel_padre: "178",
    COD_NIVEL: "180",
    DESCRIPCION: "BASTON GIMNASIA",
    COD_NIVEL_PADRE: "178"
  },
  {
    cod_nivel: "181",
    descripcion: "PELOTA MANIPULACION",
    cod_nivel_padre: "178",
    COD_NIVEL: "181",
    DESCRIPCION: "PELOTA MANIPULACION",
    COD_NIVEL_PADRE: "178"
  },
  {
    cod_nivel: "182",
    descripcion: "CUERDA SALTAR",
    cod_nivel_padre: "178",
    COD_NIVEL: "182",
    DESCRIPCION: "CUERDA SALTAR",
    COD_NIVEL_PADRE: "178"
  },
  {
    cod_nivel: "183",
    descripcion: "CINTAS",
    cod_nivel_padre: "178",
    COD_NIVEL: "183",
    DESCRIPCION: "CINTAS",
    COD_NIVEL_PADRE: "178"
  },
  {
    cod_nivel: "184",
    descripcion: "MAZA",
    cod_nivel_padre: "178",
    COD_NIVEL: "184",
    DESCRIPCION: "MAZA",
    COD_NIVEL_PADRE: "178"
  },
  {
    cod_nivel: "185",
    descripcion: "ZAPATILLAS GIMNASIA",
    cod_nivel_padre: "175",
    COD_NIVEL: "185",
    DESCRIPCION: "ZAPATILLAS GIMNASIA",
    COD_NIVEL_PADRE: "175"
  },
  {
    cod_nivel: "186",
    descripcion: "OTROS ACCESORIOS GIMNASIA",
    cod_nivel_padre: "175",
    COD_NIVEL: "186",
    DESCRIPCION: "OTROS ACCESORIOS GIMNASIA",
    COD_NIVEL_PADRE: "175"
  },
  {
    cod_nivel: "188",
    descripcion: "BOLA GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "188",
    DESCRIPCION: "BOLA GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "189",
    descripcion: "BOLSA GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "189",
    DESCRIPCION: "BOLSA GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "190",
    descripcion: "CARRO GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "190",
    DESCRIPCION: "CARRO GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "192",
    descripcion: "HIERRO",
    cod_nivel_padre: "191",
    COD_NIVEL: "192",
    DESCRIPCION: "HIERRO",
    COD_NIVEL_PADRE: "191"
  },
  {
    cod_nivel: "193",
    descripcion: "MADERA",
    cod_nivel_padre: "191",
    COD_NIVEL: "193",
    DESCRIPCION: "MADERA",
    COD_NIVEL_PADRE: "191"
  },
  {
    cod_nivel: "194",
    descripcion: "DRIVER",
    cod_nivel_padre: "191",
    COD_NIVEL: "194",
    DESCRIPCION: "DRIVER",
    COD_NIVEL_PADRE: "191"
  },
  {
    cod_nivel: "195",
    descripcion: "PUTTER",
    cod_nivel_padre: "191",
    COD_NIVEL: "195",
    DESCRIPCION: "PUTTER",
    COD_NIVEL_PADRE: "191"
  },
  {
    cod_nivel: "196",
    descripcion: "HIBRIDO",
    cod_nivel_padre: "191",
    COD_NIVEL: "196",
    DESCRIPCION: "HIBRIDO",
    COD_NIVEL_PADRE: "191"
  },
  {
    cod_nivel: "197",
    descripcion: "WEDGE",
    cod_nivel_padre: "191",
    COD_NIVEL: "197",
    DESCRIPCION: "WEDGE",
    COD_NIVEL_PADRE: "191"
  },
  {
    cod_nivel: "198",
    descripcion: "ROPA GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "198",
    DESCRIPCION: "ROPA GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "199",
    descripcion: "CALZADO GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "199",
    DESCRIPCION: "CALZADO GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "200",
    descripcion: "GUANTE GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "200",
    DESCRIPCION: "GUANTE GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "201",
    descripcion: "OTROS GOLF",
    cod_nivel_padre: "187",
    COD_NIVEL: "201",
    DESCRIPCION: "OTROS GOLF",
    COD_NIVEL_PADRE: "187"
  },
  {
    cod_nivel: "203",
    descripcion: "ESQUIS Y FIJACIONES",
    cod_nivel_padre: "202",
    COD_NIVEL: "203",
    DESCRIPCION: "ESQUIS Y FIJACIONES",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "204",
    descripcion: "BASTONES  ESQUI",
    cod_nivel_padre: "202",
    COD_NIVEL: "204",
    DESCRIPCION: "BASTONES  ESQUI",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "205",
    descripcion: "SNOWBOARD",
    cod_nivel_padre: "202",
    COD_NIVEL: "205",
    DESCRIPCION: "SNOWBOARD",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "206",
    descripcion: "BOLSA TRANSPORTE",
    cod_nivel_padre: "202",
    COD_NIVEL: "206",
    DESCRIPCION: "BOLSA TRANSPORTE",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "207",
    descripcion: "BOTAS ESQUI",
    cod_nivel_padre: "202",
    COD_NIVEL: "207",
    DESCRIPCION: "BOTAS ESQUI",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "208",
    descripcion: "CASCO ESQUI",
    cod_nivel_padre: "202",
    COD_NIVEL: "208",
    DESCRIPCION: "CASCO ESQUI",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "209",
    descripcion: "GAFAS DE ESQUI",
    cod_nivel_padre: "202",
    COD_NIVEL: "209",
    DESCRIPCION: "GAFAS DE ESQUI",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "210",
    descripcion: "MASCARA VENTISCA",
    cod_nivel_padre: "202",
    COD_NIVEL: "210",
    DESCRIPCION: "MASCARA VENTISCA",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "211",
    descripcion: "GUANTES ESQUI",
    cod_nivel_padre: "202",
    COD_NIVEL: "211",
    DESCRIPCION: "GUANTES ESQUI",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "213",
    descripcion: "PANTALON",
    cod_nivel_padre: "212",
    COD_NIVEL: "213",
    DESCRIPCION: "PANTALON",
    COD_NIVEL_PADRE: "212"
  },
  {
    cod_nivel: "214",
    descripcion: "CHAQUETA",
    cod_nivel_padre: "212",
    COD_NIVEL: "214",
    DESCRIPCION: "CHAQUETA",
    COD_NIVEL_PADRE: "212"
  },
  {
    cod_nivel: "215",
    descripcion: "MONO ESQUI",
    cod_nivel_padre: "212",
    COD_NIVEL: "215",
    DESCRIPCION: "MONO ESQUI",
    COD_NIVEL_PADRE: "212"
  },
  {
    cod_nivel: "216",
    descripcion: "OTROS ROPA ESQUI",
    cod_nivel_padre: "212",
    COD_NIVEL: "216",
    DESCRIPCION: "OTROS ROPA ESQUI",
    COD_NIVEL_PADRE: "212"
  },
  {
    cod_nivel: "218",
    descripcion: "PROTECCIONES ",
    cod_nivel_padre: "202",
    COD_NIVEL: "218",
    DESCRIPCION: "PROTECCIONES ",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "219",
    descripcion: "OTROS DEPORTES INVIERNO",
    cod_nivel_padre: "202",
    COD_NIVEL: "219",
    DESCRIPCION: "OTROS DEPORTES INVIERNO",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "221",
    descripcion: "ALETAS",
    cod_nivel_padre: "220",
    COD_NIVEL: "221",
    DESCRIPCION: "ALETAS",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "222",
    descripcion: "BOLSA TRANSPORTE",
    cod_nivel_padre: "220",
    COD_NIVEL: "222",
    DESCRIPCION: "BOLSA TRANSPORTE",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "223",
    descripcion: "NEOPRENO",
    cod_nivel_padre: "220",
    COD_NIVEL: "223",
    DESCRIPCION: "NEOPRENO",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "224",
    descripcion: "ESCARPINES",
    cod_nivel_padre: "220",
    COD_NIVEL: "224",
    DESCRIPCION: "ESCARPINES",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "225",
    descripcion: "GUANTES SUBMARINISMO",
    cod_nivel_padre: "220",
    COD_NIVEL: "225",
    DESCRIPCION: "GUANTES SUBMARINISMO",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "226",
    descripcion: "TUBO SUBMARINISMO",
    cod_nivel_padre: "220",
    COD_NIVEL: "226",
    DESCRIPCION: "TUBO SUBMARINISMO",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "227",
    descripcion: "MASCARA",
    cod_nivel_padre: "220",
    COD_NIVEL: "227",
    DESCRIPCION: "MASCARA",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "228",
    descripcion: "CINTURON",
    cod_nivel_padre: "220",
    COD_NIVEL: "228",
    DESCRIPCION: "CINTURON",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "229",
    descripcion: "PLOMOS ",
    cod_nivel_padre: "220",
    COD_NIVEL: "229",
    DESCRIPCION: "PLOMOS ",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "230",
    descripcion: "REGULADOR",
    cod_nivel_padre: "220",
    COD_NIVEL: "230",
    DESCRIPCION: "REGULADOR",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "231",
    descripcion: "EQUIPOS DE CONTROL",
    cod_nivel_padre: "220",
    COD_NIVEL: "231",
    DESCRIPCION: "EQUIPOS DE CONTROL",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "232",
    descripcion: "BRUJULA",
    cod_nivel_padre: "231",
    COD_NIVEL: "232",
    DESCRIPCION: "BRUJULA",
    COD_NIVEL_PADRE: "231"
  },
  {
    cod_nivel: "233",
    descripcion: "CONSOLA",
    cod_nivel_padre: "231",
    COD_NIVEL: "233",
    DESCRIPCION: "CONSOLA",
    COD_NIVEL_PADRE: "231"
  },
  {
    cod_nivel: "234",
    descripcion: "MANOMETRO",
    cod_nivel_padre: "231",
    COD_NIVEL: "234",
    DESCRIPCION: "MANOMETRO",
    COD_NIVEL_PADRE: "231"
  },
  {
    cod_nivel: "235",
    descripcion: "ORDENADOR BUCEO",
    cod_nivel_padre: "231",
    COD_NIVEL: "235",
    DESCRIPCION: "ORDENADOR BUCEO",
    COD_NIVEL_PADRE: "231"
  },
  {
    cod_nivel: "236",
    descripcion: "PROFUNDIMETRO",
    cod_nivel_padre: "231",
    COD_NIVEL: "236",
    DESCRIPCION: "PROFUNDIMETRO",
    COD_NIVEL_PADRE: "231"
  },
  {
    cod_nivel: "237",
    descripcion: "TERMOMETRO",
    cod_nivel_padre: "231",
    COD_NIVEL: "237",
    DESCRIPCION: "TERMOMETRO",
    COD_NIVEL_PADRE: "231"
  },
  {
    cod_nivel: "238",
    descripcion: "LINTERNA SUBACUATICA",
    cod_nivel_padre: "220",
    COD_NIVEL: "238",
    DESCRIPCION: "LINTERNA SUBACUATICA",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "239",
    descripcion: "BOTELLA",
    cod_nivel_padre: "220",
    COD_NIVEL: "239",
    DESCRIPCION: "BOTELLA",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "240",
    descripcion: "JACKET",
    cod_nivel_padre: "220",
    COD_NIVEL: "240",
    DESCRIPCION: "JACKET",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "241",
    descripcion: "OTROS SUBMARINISMO",
    cod_nivel_padre: "220",
    COD_NIVEL: "241",
    DESCRIPCION: "OTROS SUBMARINISMO",
    COD_NIVEL_PADRE: "220"
  },
  {
    cod_nivel: "243",
    descripcion: "ROPA",
    cod_nivel_padre: "242",
    COD_NIVEL: "243",
    DESCRIPCION: "ROPA",
    COD_NIVEL_PADRE: "242"
  },
  {
    cod_nivel: "244",
    descripcion: "REMO",
    cod_nivel_padre: "242",
    COD_NIVEL: "244",
    DESCRIPCION: "REMO",
    COD_NIVEL_PADRE: "242"
  },
  {
    cod_nivel: "245",
    descripcion: "KAYAK",
    cod_nivel_padre: "242",
    COD_NIVEL: "245",
    DESCRIPCION: "KAYAK",
    COD_NIVEL_PADRE: "242"
  },
  {
    cod_nivel: "246",
    descripcion: "CASCO",
    cod_nivel_padre: "242",
    COD_NIVEL: "246",
    DESCRIPCION: "CASCO",
    COD_NIVEL_PADRE: "242"
  },
  {
    cod_nivel: "247",
    descripcion: "OTROS PIRAGUA KAYAK",
    cod_nivel_padre: "242",
    COD_NIVEL: "247",
    DESCRIPCION: "OTROS PIRAGUA KAYAK",
    COD_NIVEL_PADRE: "242"
  },
  {
    cod_nivel: "249",
    descripcion: "BAÑADOR",
    cod_nivel_padre: "248",
    COD_NIVEL: "249",
    DESCRIPCION: "BAÑADOR",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "250",
    descripcion: "CHANCLAS",
    cod_nivel_padre: "248",
    COD_NIVEL: "250",
    DESCRIPCION: "CHANCLAS",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "251",
    descripcion: "TOALLA",
    cod_nivel_padre: "248",
    COD_NIVEL: "251",
    DESCRIPCION: "TOALLA",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "252",
    descripcion: "ALBORNOZ",
    cod_nivel_padre: "248",
    COD_NIVEL: "252",
    DESCRIPCION: "ALBORNOZ",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "253",
    descripcion: "GAFAS DE NATACION",
    cod_nivel_padre: "248",
    COD_NIVEL: "253",
    DESCRIPCION: "GAFAS DE NATACION",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "254",
    descripcion: "GORRO NATACION",
    cod_nivel_padre: "248",
    COD_NIVEL: "254",
    DESCRIPCION: "GORRO NATACION",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "255",
    descripcion: "BRAZALETES",
    cod_nivel_padre: "248",
    COD_NIVEL: "255",
    DESCRIPCION: "BRAZALETES",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "256",
    descripcion: "CHURRO",
    cod_nivel_padre: "248",
    COD_NIVEL: "256",
    DESCRIPCION: "CHURRO",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "257",
    descripcion: "TABLA BATEO",
    cod_nivel_padre: "248",
    COD_NIVEL: "257",
    DESCRIPCION: "TABLA BATEO",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "258",
    descripcion: "CHALECO APRENDE NADAR",
    cod_nivel_padre: "248",
    COD_NIVEL: "258",
    DESCRIPCION: "CHALECO APRENDE NADAR",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "259",
    descripcion: "AQUAGYM",
    cod_nivel_padre: "248",
    COD_NIVEL: "259",
    DESCRIPCION: "AQUAGYM",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "260",
    descripcion: "OTROS NATACION",
    cod_nivel_padre: "248",
    COD_NIVEL: "260",
    DESCRIPCION: "OTROS NATACION",
    COD_NIVEL_PADRE: "248"
  },
  {
    cod_nivel: "265",
    descripcion: "COMPASS",
    cod_nivel_padre: "261",
    COD_NIVEL: "265",
    DESCRIPCION: "COMPASS",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "266",
    descripcion: "SONDA",
    cod_nivel_padre: "261",
    COD_NIVEL: "266",
    DESCRIPCION: "SONDA",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "280",
    descripcion: "CHALECO SALVAVIDAS",
    cod_nivel_padre: "278",
    COD_NIVEL: "280",
    DESCRIPCION: "CHALECO SALVAVIDAS",
    COD_NIVEL_PADRE: "278"
  },
  {
    cod_nivel: "281",
    descripcion: "ARO SALVAVIDAS",
    cod_nivel_padre: "278",
    COD_NIVEL: "281",
    DESCRIPCION: "ARO SALVAVIDAS",
    COD_NIVEL_PADRE: "278"
  },
  {
    cod_nivel: "282",
    descripcion: "EXTINTOR",
    cod_nivel_padre: "278",
    COD_NIVEL: "282",
    DESCRIPCION: "EXTINTOR",
    COD_NIVEL_PADRE: "278"
  },
  {
    cod_nivel: "283",
    descripcion: "OTROS SEGURIDAD",
    cod_nivel_padre: "278",
    COD_NIVEL: "283",
    DESCRIPCION: "OTROS SEGURIDAD",
    COD_NIVEL_PADRE: "278"
  },
  {
    cod_nivel: "284",
    descripcion: "CHALECO FLOTACION",
    cod_nivel_padre: "278",
    COD_NIVEL: "284",
    DESCRIPCION: "CHALECO FLOTACION",
    COD_NIVEL_PADRE: "278"
  },
  {
    cod_nivel: "285",
    descripcion: "CASCO PROTECCION",
    cod_nivel_padre: "278",
    COD_NIVEL: "285",
    DESCRIPCION: "CASCO PROTECCION",
    COD_NIVEL_PADRE: "278"
  },
  {
    cod_nivel: "287",
    descripcion: "TRAJE NEOPRENO",
    cod_nivel_padre: "286",
    COD_NIVEL: "287",
    DESCRIPCION: "TRAJE NEOPRENO",
    COD_NIVEL_PADRE: "286"
  },
  {
    cod_nivel: "289",
    descripcion: "KITESURF",
    cod_nivel_padre: "288",
    COD_NIVEL: "289",
    DESCRIPCION: "KITESURF",
    COD_NIVEL_PADRE: "288"
  },
  {
    cod_nivel: "293",
    descripcion: "SKIMBOARD",
    cod_nivel_padre: "288",
    COD_NIVEL: "293",
    DESCRIPCION: "SKIMBOARD",
    COD_NIVEL_PADRE: "288"
  },
  {
    cod_nivel: "294",
    descripcion: "BODYBOARD",
    cod_nivel_padre: "288",
    COD_NIVEL: "294",
    DESCRIPCION: "BODYBOARD",
    COD_NIVEL_PADRE: "288"
  },
  {
    cod_nivel: "295",
    descripcion: "HINCHADOR",
    cod_nivel_padre: "286",
    COD_NIVEL: "295",
    DESCRIPCION: "HINCHADOR",
    COD_NIVEL_PADRE: "286"
  },
  {
    cod_nivel: "296",
    descripcion: "COMETA KITESURF",
    cod_nivel_padre: "286",
    COD_NIVEL: "296",
    DESCRIPCION: "COMETA KITESURF",
    COD_NIVEL_PADRE: "286"
  },
  {
    cod_nivel: "297",
    descripcion: "INFLABLE TRACCION",
    cod_nivel_padre: "286",
    COD_NIVEL: "297",
    DESCRIPCION: "INFLABLE TRACCION",
    COD_NIVEL_PADRE: "286"
  },
  {
    cod_nivel: "298",
    descripcion: "OTROS NAUTICOS",
    cod_nivel_padre: "286",
    COD_NIVEL: "298",
    DESCRIPCION: "OTROS NAUTICOS",
    COD_NIVEL_PADRE: "286"
  },
  {
    cod_nivel: "300",
    descripcion: "ZAPATILLAS",
    cod_nivel_padre: "299",
    COD_NIVEL: "300",
    DESCRIPCION: "ZAPATILLAS",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "301",
    descripcion: "RAQUETA",
    cod_nivel_padre: "299",
    COD_NIVEL: "301",
    DESCRIPCION: "RAQUETA",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "302",
    descripcion: "PELOTAS",
    cod_nivel_padre: "299",
    COD_NIVEL: "302",
    DESCRIPCION: "PELOTAS",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "303",
    descripcion: "VOLANTES BADMINTON",
    cod_nivel_padre: "299",
    COD_NIVEL: "303",
    DESCRIPCION: "VOLANTES BADMINTON",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "304",
    descripcion: "FUNDAS",
    cod_nivel_padre: "299",
    COD_NIVEL: "304",
    DESCRIPCION: "FUNDAS",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "305",
    descripcion: "MESA PING PONG",
    cod_nivel_padre: "299",
    COD_NIVEL: "305",
    DESCRIPCION: "MESA PING PONG",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "306",
    descripcion: "ACCESORIOS PING PONG",
    cod_nivel_padre: "299",
    COD_NIVEL: "306",
    DESCRIPCION: "ACCESORIOS PING PONG",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "307",
    descripcion: "OTROS DEPORTE RAQUETA",
    cod_nivel_padre: "299",
    COD_NIVEL: "307",
    DESCRIPCION: "OTROS DEPORTE RAQUETA",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "309",
    descripcion: "PATINES",
    cod_nivel_padre: "308",
    COD_NIVEL: "309",
    DESCRIPCION: "PATINES",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "310",
    descripcion: "STICK",
    cod_nivel_padre: "308",
    COD_NIVEL: "310",
    DESCRIPCION: "STICK",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "311",
    descripcion: "CASCO",
    cod_nivel_padre: "308",
    COD_NIVEL: "311",
    DESCRIPCION: "CASCO",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "312",
    descripcion: "MASCARA",
    cod_nivel_padre: "308",
    COD_NIVEL: "312",
    DESCRIPCION: "MASCARA",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "313",
    descripcion: "PELOTA",
    cod_nivel_padre: "308",
    COD_NIVEL: "313",
    DESCRIPCION: "PELOTA",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "314",
    descripcion: "DISCO HOCKEY",
    cod_nivel_padre: "308",
    COD_NIVEL: "314",
    DESCRIPCION: "DISCO HOCKEY",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "315",
    descripcion: "PROTECCIONES",
    cod_nivel_padre: "308",
    COD_NIVEL: "315",
    DESCRIPCION: "PROTECCIONES",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "316",
    descripcion: "OTROS HOCKEY",
    cod_nivel_padre: "308",
    COD_NIVEL: "316",
    DESCRIPCION: "OTROS HOCKEY",
    COD_NIVEL_PADRE: "308"
  },
  {
    cod_nivel: "318",
    descripcion: "PATINES",
    cod_nivel_padre: "317",
    COD_NIVEL: "318",
    DESCRIPCION: "PATINES",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "320",
    descripcion: "WAVEBOARD",
    cod_nivel_padre: "317",
    COD_NIVEL: "320",
    DESCRIPCION: "WAVEBOARD",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "321",
    descripcion: "PATINETE",
    cod_nivel_padre: "317",
    COD_NIVEL: "321",
    DESCRIPCION: "PATINETE",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "322",
    descripcion: "PROTECCIONES PATINAJE",
    cod_nivel_padre: "317",
    COD_NIVEL: "322",
    DESCRIPCION: "PROTECCIONES PATINAJE",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "323",
    descripcion: "CASCO",
    cod_nivel_padre: "317",
    COD_NIVEL: "323",
    DESCRIPCION: "CASCO",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "324",
    descripcion: "CALZADO CON RUEDAS",
    cod_nivel_padre: "317",
    COD_NIVEL: "324",
    DESCRIPCION: "CALZADO CON RUEDAS",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "325",
    descripcion: "ACCESORIO PATINAJE",
    cod_nivel_padre: "317",
    COD_NIVEL: "325",
    DESCRIPCION: "ACCESORIO PATINAJE",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "326",
    descripcion: "OTROS PATINAJE",
    cod_nivel_padre: "317",
    COD_NIVEL: "326",
    DESCRIPCION: "OTROS PATINAJE",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "329",
    descripcion: "CAÑA DE PESCAR TELESCOPICA",
    cod_nivel_padre: "328",
    COD_NIVEL: "329",
    DESCRIPCION: "CAÑA DE PESCAR TELESCOPICA",
    COD_NIVEL_PADRE: "328"
  },
  {
    cod_nivel: "330",
    descripcion: "CAÑA DE PESCAR REGULABLE",
    cod_nivel_padre: "328",
    COD_NIVEL: "330",
    DESCRIPCION: "CAÑA DE PESCAR REGULABLE",
    COD_NIVEL_PADRE: "328"
  },
  {
    cod_nivel: "331",
    descripcion: "CAÑA DE PESCAR ENCHUFABLE",
    cod_nivel_padre: "328",
    COD_NIVEL: "331",
    DESCRIPCION: "CAÑA DE PESCAR ENCHUFABLE",
    COD_NIVEL_PADRE: "328"
  },
  {
    cod_nivel: "332",
    descripcion: "CAÑA DE PESCAR CURRICAN",
    cod_nivel_padre: "328",
    COD_NIVEL: "332",
    DESCRIPCION: "CAÑA DE PESCAR CURRICAN",
    COD_NIVEL_PADRE: "328"
  },
  {
    cod_nivel: "333",
    descripcion: "CAÑA DE PESCAR SIMPLE",
    cod_nivel_padre: "328",
    COD_NIVEL: "333",
    DESCRIPCION: "CAÑA DE PESCAR SIMPLE",
    COD_NIVEL_PADRE: "328"
  },
  {
    cod_nivel: "334",
    descripcion: "CARRETE PESCA",
    cod_nivel_padre: "327",
    COD_NIVEL: "334",
    DESCRIPCION: "CARRETE PESCA",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "335",
    descripcion: "HILO PESCAR",
    cod_nivel_padre: "327",
    COD_NIVEL: "335",
    DESCRIPCION: "HILO PESCAR",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "336",
    descripcion: "SACADERA",
    cod_nivel_padre: "327",
    COD_NIVEL: "336",
    DESCRIPCION: "SACADERA",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "337",
    descripcion: "RETEL",
    cod_nivel_padre: "327",
    COD_NIVEL: "337",
    DESCRIPCION: "RETEL",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "338",
    descripcion: "REJONCILLO",
    cod_nivel_padre: "327",
    COD_NIVEL: "338",
    DESCRIPCION: "REJONCILLO",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "339",
    descripcion: "ROPA PESCA",
    cod_nivel_padre: "327",
    COD_NIVEL: "339",
    DESCRIPCION: "ROPA PESCA",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "340",
    descripcion: "OTROS ARTICULOS DE PESCA",
    cod_nivel_padre: "327",
    COD_NIVEL: "340",
    DESCRIPCION: "OTROS ARTICULOS DE PESCA",
    COD_NIVEL_PADRE: "327"
  },
  {
    cod_nivel: "343",
    descripcion: "DIANA",
    cod_nivel_padre: "342",
    COD_NIVEL: "343",
    DESCRIPCION: "DIANA",
    COD_NIVEL_PADRE: "342"
  },
  {
    cod_nivel: "344",
    descripcion: "FLECHA",
    cod_nivel_padre: "342",
    COD_NIVEL: "344",
    DESCRIPCION: "FLECHA",
    COD_NIVEL_PADRE: "342"
  },
  {
    cod_nivel: "345",
    descripcion: "ACCESORIOS TIRO AL ARCO",
    cod_nivel_padre: "342",
    COD_NIVEL: "345",
    DESCRIPCION: "ACCESORIOS TIRO AL ARCO",
    COD_NIVEL_PADRE: "342"
  },
  {
    cod_nivel: "346",
    descripcion: "PETANCA",
    cod_nivel_padre: "341",
    COD_NIVEL: "346",
    DESCRIPCION: "PETANCA",
    COD_NIVEL_PADRE: "341"
  },
  {
    cod_nivel: "348",
    descripcion: "DIANA",
    cod_nivel_padre: "347",
    COD_NIVEL: "348",
    DESCRIPCION: "DIANA",
    COD_NIVEL_PADRE: "347"
  },
  {
    cod_nivel: "349",
    descripcion: "DARDOS",
    cod_nivel_padre: "347",
    COD_NIVEL: "349",
    DESCRIPCION: "DARDOS",
    COD_NIVEL_PADRE: "347"
  },
  {
    cod_nivel: "350",
    descripcion: "ACCESORIOS DARDOS",
    cod_nivel_padre: "347",
    COD_NIVEL: "350",
    DESCRIPCION: "ACCESORIOS DARDOS",
    COD_NIVEL_PADRE: "347"
  },
  {
    cod_nivel: "353",
    descripcion: "PROTECCIONES",
    cod_nivel_padre: "352",
    COD_NIVEL: "353",
    DESCRIPCION: "PROTECCIONES",
    COD_NIVEL_PADRE: "352"
  },
  {
    cod_nivel: "354",
    descripcion: "GUANTES ",
    cod_nivel_padre: "352",
    COD_NIVEL: "354",
    DESCRIPCION: "GUANTES ",
    COD_NIVEL_PADRE: "352"
  },
  {
    cod_nivel: "355",
    descripcion: "BOTAS",
    cod_nivel_padre: "352",
    COD_NIVEL: "355",
    DESCRIPCION: "BOTAS",
    COD_NIVEL_PADRE: "352"
  },
  {
    cod_nivel: "356",
    descripcion: "SACO",
    cod_nivel_padre: "352",
    COD_NIVEL: "356",
    DESCRIPCION: "SACO",
    COD_NIVEL_PADRE: "352"
  },
  {
    cod_nivel: "357",
    descripcion: "ESCUDO",
    cod_nivel_padre: "352",
    COD_NIVEL: "357",
    DESCRIPCION: "ESCUDO",
    COD_NIVEL_PADRE: "352"
  },
  {
    cod_nivel: "358",
    descripcion: "CUERDA SALTAR",
    cod_nivel_padre: "352",
    COD_NIVEL: "358",
    DESCRIPCION: "CUERDA SALTAR",
    COD_NIVEL_PADRE: "352"
  },
  {
    cod_nivel: "359",
    descripcion: "OTROS ACCESORIOS BOXEO",
    cod_nivel_padre: "352",
    COD_NIVEL: "359",
    DESCRIPCION: "OTROS ACCESORIOS BOXEO",
    COD_NIVEL_PADRE: "352"
  },
  {
    cod_nivel: "361",
    descripcion: "KIMONO",
    cod_nivel_padre: "360",
    COD_NIVEL: "361",
    DESCRIPCION: "KIMONO",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "362",
    descripcion: "ZOORIE",
    cod_nivel_padre: "360",
    COD_NIVEL: "362",
    DESCRIPCION: "ZOORIE",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "363",
    descripcion: "CINTURON",
    cod_nivel_padre: "360",
    COD_NIVEL: "363",
    DESCRIPCION: "CINTURON",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "364",
    descripcion: "PROTECCIONES",
    cod_nivel_padre: "360",
    COD_NIVEL: "364",
    DESCRIPCION: "PROTECCIONES",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "365",
    descripcion: "PANTALON FULL CONTACT",
    cod_nivel_padre: "360",
    COD_NIVEL: "365",
    DESCRIPCION: "PANTALON FULL CONTACT",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "366",
    descripcion: "PETO TAEKWONDO",
    cod_nivel_padre: "360",
    COD_NIVEL: "366",
    DESCRIPCION: "PETO TAEKWONDO",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "367",
    descripcion: "NUNCHAKU",
    cod_nivel_padre: "360",
    COD_NIVEL: "367",
    DESCRIPCION: "NUNCHAKU",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "368",
    descripcion: "OTROS ARTES MARCIALES",
    cod_nivel_padre: "360",
    COD_NIVEL: "368",
    DESCRIPCION: "OTROS ARTES MARCIALES",
    COD_NIVEL_PADRE: "360"
  },
  {
    cod_nivel: "370",
    descripcion: "CASCO JINETE",
    cod_nivel_padre: "369",
    COD_NIVEL: "370",
    DESCRIPCION: "CASCO JINETE",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "371",
    descripcion: "GUANTES JINETE",
    cod_nivel_padre: "369",
    COD_NIVEL: "371",
    DESCRIPCION: "GUANTES JINETE",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "372",
    descripcion: "ESPUELAS",
    cod_nivel_padre: "369",
    COD_NIVEL: "372",
    DESCRIPCION: "ESPUELAS",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "373",
    descripcion: "FUSTA",
    cod_nivel_padre: "369",
    COD_NIVEL: "373",
    DESCRIPCION: "FUSTA",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "374",
    descripcion: "CALZADO JINETE",
    cod_nivel_padre: "369",
    COD_NIVEL: "374",
    DESCRIPCION: "CALZADO JINETE",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "375",
    descripcion: "ROPA JINETE",
    cod_nivel_padre: "369",
    COD_NIVEL: "375",
    DESCRIPCION: "ROPA JINETE",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "376",
    descripcion: "SILLA DE MONTAR",
    cod_nivel_padre: "369",
    COD_NIVEL: "376",
    DESCRIPCION: "SILLA DE MONTAR",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "377",
    descripcion: "OTROS EQUITACION",
    cod_nivel_padre: "369",
    COD_NIVEL: "377",
    DESCRIPCION: "OTROS EQUITACION",
    COD_NIVEL_PADRE: "369"
  },
  {
    cod_nivel: "378",
    descripcion: "OTROS DEPORTES",
    cod_nivel_padre: "2",
    COD_NIVEL: "378",
    DESCRIPCION: "OTROS DEPORTES",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "381",
    descripcion: "BAÑERA BEBE",
    cod_nivel_padre: "380",
    COD_NIVEL: "381",
    DESCRIPCION: "BAÑERA BEBE",
    COD_NIVEL_PADRE: "380"
  },
  {
    cod_nivel: "382",
    descripcion: "BAÑERA CAMBIADOR BEBE",
    cod_nivel_padre: "380",
    COD_NIVEL: "382",
    DESCRIPCION: "BAÑERA CAMBIADOR BEBE",
    COD_NIVEL_PADRE: "380"
  },
  {
    cod_nivel: "383",
    descripcion: "HAMACA BAÑO",
    cod_nivel_padre: "380",
    COD_NIVEL: "383",
    DESCRIPCION: "HAMACA BAÑO",
    COD_NIVEL_PADRE: "380"
  },
  {
    cod_nivel: "384",
    descripcion: "SILLA BAÑO BEBE",
    cod_nivel_padre: "380",
    COD_NIVEL: "384",
    DESCRIPCION: "SILLA BAÑO BEBE",
    COD_NIVEL_PADRE: "380"
  },
  {
    cod_nivel: "385",
    descripcion: "TERMOMETRO BAÑO",
    cod_nivel_padre: "380",
    COD_NIVEL: "385",
    DESCRIPCION: "TERMOMETRO BAÑO",
    COD_NIVEL_PADRE: "380"
  },
  {
    cod_nivel: "386",
    descripcion: "OTROS ACCESORIOS BAÑO",
    cod_nivel_padre: "380",
    COD_NIVEL: "386",
    DESCRIPCION: "OTROS ACCESORIOS BAÑO",
    COD_NIVEL_PADRE: "380"
  },
  {
    cod_nivel: "388",
    descripcion: "BIBERON",
    cod_nivel_padre: "387",
    COD_NIVEL: "388",
    DESCRIPCION: "BIBERON",
    COD_NIVEL_PADRE: "387"
  },
  {
    cod_nivel: "389",
    descripcion: "CALIENTABIBERON",
    cod_nivel_padre: "387",
    COD_NIVEL: "389",
    DESCRIPCION: "CALIENTABIBERON",
    COD_NIVEL_PADRE: "387"
  },
  {
    cod_nivel: "390",
    descripcion: "ESTERILIZADOR",
    cod_nivel_padre: "387",
    COD_NIVEL: "390",
    DESCRIPCION: "ESTERILIZADOR",
    COD_NIVEL_PADRE: "387"
  },
  {
    cod_nivel: "391",
    descripcion: "ROBOT COCINA BEBES",
    cod_nivel_padre: "387",
    COD_NIVEL: "391",
    DESCRIPCION: "ROBOT COCINA BEBES",
    COD_NIVEL_PADRE: "387"
  },
  {
    cod_nivel: "392",
    descripcion: "TRONA",
    cod_nivel_padre: "387",
    COD_NIVEL: "392",
    DESCRIPCION: "TRONA",
    COD_NIVEL_PADRE: "387"
  },
  {
    cod_nivel: "393",
    descripcion: "UTENSILIO",
    cod_nivel_padre: "387",
    COD_NIVEL: "393",
    DESCRIPCION: "UTENSILIO",
    COD_NIVEL_PADRE: "387"
  },
  {
    cod_nivel: "394",
    descripcion: "OTROS ALIMENTACION BEBE",
    cod_nivel_padre: "387",
    COD_NIVEL: "394",
    DESCRIPCION: "OTROS ALIMENTACION BEBE",
    COD_NIVEL_PADRE: "387"
  },
  {
    cod_nivel: "395",
    descripcion: "CORREPASILLOS",
    cod_nivel_padre: "5180",
    COD_NIVEL: "395",
    DESCRIPCION: "CORREPASILLOS",
    COD_NIVEL_PADRE: "5180"
  },
  {
    cod_nivel: "397",
    descripcion: "CAPAZO",
    cod_nivel_padre: "396",
    COD_NIVEL: "397",
    DESCRIPCION: "CAPAZO",
    COD_NIVEL_PADRE: "396"
  },
  {
    cod_nivel: "398",
    descripcion: "SILLA PASEO",
    cod_nivel_padre: "396",
    COD_NIVEL: "398",
    DESCRIPCION: "SILLA PASEO",
    COD_NIVEL_PADRE: "396"
  },
  {
    cod_nivel: "399",
    descripcion: "CONJUNTO DUO",
    cod_nivel_padre: "396",
    COD_NIVEL: "399",
    DESCRIPCION: "CONJUNTO DUO",
    COD_NIVEL_PADRE: "396"
  },
  {
    cod_nivel: "400",
    descripcion: "CONJUNTO TRIO",
    cod_nivel_padre: "396",
    COD_NIVEL: "400",
    DESCRIPCION: "CONJUNTO TRIO",
    COD_NIVEL_PADRE: "396"
  },
  {
    cod_nivel: "401",
    descripcion: "ACCESORIO CARRITO BEBE",
    cod_nivel_padre: "396",
    COD_NIVEL: "401",
    DESCRIPCION: "ACCESORIO CARRITO BEBE",
    COD_NIVEL_PADRE: "396"
  },
  {
    cod_nivel: "402",
    descripcion: "MOCHILA PORTABEBE",
    cod_nivel_padre: "396",
    COD_NIVEL: "402",
    DESCRIPCION: "MOCHILA PORTABEBE",
    COD_NIVEL_PADRE: "396"
  },
  {
    cod_nivel: "403",
    descripcion: "SILLA PARA COCHE",
    cod_nivel_padre: "396",
    COD_NIVEL: "403",
    DESCRIPCION: "SILLA PARA COCHE",
    COD_NIVEL_PADRE: "396"
  },
  {
    cod_nivel: "405",
    descripcion: "CUNA",
    cod_nivel_padre: "404",
    COD_NIVEL: "405",
    DESCRIPCION: "CUNA",
    COD_NIVEL_PADRE: "404"
  },
  {
    cod_nivel: "406",
    descripcion: "CUNA VIAJE",
    cod_nivel_padre: "404",
    COD_NIVEL: "406",
    DESCRIPCION: "CUNA VIAJE",
    COD_NIVEL_PADRE: "404"
  },
  {
    cod_nivel: "407",
    descripcion: "MINICUNA",
    cod_nivel_padre: "404",
    COD_NIVEL: "407",
    DESCRIPCION: "MINICUNA",
    COD_NIVEL_PADRE: "404"
  },
  {
    cod_nivel: "408",
    descripcion: "PARQUE INFANTIL",
    cod_nivel_padre: "404",
    COD_NIVEL: "408",
    DESCRIPCION: "PARQUE INFANTIL",
    COD_NIVEL_PADRE: "404"
  },
  {
    cod_nivel: "409",
    descripcion: "HAMACA",
    cod_nivel_padre: "404",
    COD_NIVEL: "409",
    DESCRIPCION: "HAMACA",
    COD_NIVEL_PADRE: "404"
  },
  {
    cod_nivel: "410",
    descripcion: "JUGUETES BEBES",
    cod_nivel_padre: "1435",
    COD_NIVEL: "410",
    DESCRIPCION: "JUGUETES BEBES",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "411",
    descripcion: "MATERNIDAD Y PREMAMA",
    cod_nivel_padre: "5180",
    COD_NIVEL: "411",
    DESCRIPCION: "MATERNIDAD Y PREMAMA",
    COD_NIVEL_PADRE: "5180"
  },
  {
    cod_nivel: "412",
    descripcion: "MOBILIARIO INFANTIL",
    cod_nivel_padre: "5180",
    COD_NIVEL: "412",
    DESCRIPCION: "MOBILIARIO INFANTIL",
    COD_NIVEL_PADRE: "5180"
  },
  {
    cod_nivel: "413",
    descripcion: "DECORACION INFANTIL",
    cod_nivel_padre: "5180",
    COD_NIVEL: "413",
    DESCRIPCION: "DECORACION INFANTIL",
    COD_NIVEL_PADRE: "5180"
  },
  {
    cod_nivel: "415",
    descripcion: "INTERFONO",
    cod_nivel_padre: "414",
    COD_NIVEL: "415",
    DESCRIPCION: "INTERFONO",
    COD_NIVEL_PADRE: "414"
  },
  {
    cod_nivel: "416",
    descripcion: "BABY MONITOR",
    cod_nivel_padre: "414",
    COD_NIVEL: "416",
    DESCRIPCION: "BABY MONITOR",
    COD_NIVEL_PADRE: "414"
  },
  {
    cod_nivel: "417",
    descripcion: "BARRERAS",
    cod_nivel_padre: "414",
    COD_NIVEL: "417",
    DESCRIPCION: "BARRERAS",
    COD_NIVEL_PADRE: "414"
  },
  {
    cod_nivel: "418",
    descripcion: "PROTECTOR",
    cod_nivel_padre: "414",
    COD_NIVEL: "418",
    DESCRIPCION: "PROTECTOR",
    COD_NIVEL_PADRE: "414"
  },
  {
    cod_nivel: "419",
    descripcion: "HUMIDIFICADOR BEBE",
    cod_nivel_padre: "414",
    COD_NIVEL: "419",
    DESCRIPCION: "HUMIDIFICADOR BEBE",
    COD_NIVEL_PADRE: "414"
  },
  {
    cod_nivel: "420",
    descripcion: "BASCULA",
    cod_nivel_padre: "414",
    COD_NIVEL: "420",
    DESCRIPCION: "BASCULA",
    COD_NIVEL_PADRE: "414"
  },
  {
    cod_nivel: "421",
    descripcion: "OTROS SEGURIDAD Y SALUD",
    cod_nivel_padre: "414",
    COD_NIVEL: "421",
    DESCRIPCION: "OTROS SEGURIDAD Y SALUD",
    COD_NIVEL_PADRE: "414"
  },
  {
    cod_nivel: "422",
    descripcion: "OTROS BEBE",
    cod_nivel_padre: "379",
    COD_NIVEL: "422",
    DESCRIPCION: "OTROS BEBE",
    COD_NIVEL_PADRE: "379"
  },
  {
    cod_nivel: "425",
    descripcion: "AFEITADORA ELECTRICA",
    cod_nivel_padre: "424",
    COD_NIVEL: "425",
    DESCRIPCION: "AFEITADORA ELECTRICA",
    COD_NIVEL_PADRE: "424"
  },
  {
    cod_nivel: "426",
    descripcion: "RECORTAPELOS NARIZ OREJAS",
    cod_nivel_padre: "424",
    COD_NIVEL: "426",
    DESCRIPCION: "RECORTAPELOS NARIZ OREJAS",
    COD_NIVEL_PADRE: "424"
  },
  {
    cod_nivel: "427",
    descripcion: "DEPILADORA ELECTRICA",
    cod_nivel_padre: "424",
    COD_NIVEL: "427",
    DESCRIPCION: "DEPILADORA ELECTRICA",
    COD_NIVEL_PADRE: "424"
  },
  {
    cod_nivel: "428",
    descripcion: "DEPILADORA CERA",
    cod_nivel_padre: "424",
    COD_NIVEL: "428",
    DESCRIPCION: "DEPILADORA CERA",
    COD_NIVEL_PADRE: "424"
  },
  {
    cod_nivel: "429",
    descripcion: "DEPILADORA ELECTROLISIS",
    cod_nivel_padre: "424",
    COD_NIVEL: "429",
    DESCRIPCION: "DEPILADORA ELECTROLISIS",
    COD_NIVEL_PADRE: "424"
  },
  {
    cod_nivel: "430",
    descripcion: "DEPILADORA LASER",
    cod_nivel_padre: "424",
    COD_NIVEL: "430",
    DESCRIPCION: "DEPILADORA LASER",
    COD_NIVEL_PADRE: "424"
  },
  {
    cod_nivel: "431",
    descripcion: "OTROS AFEITADO DEPILACION ",
    cod_nivel_padre: "424",
    COD_NIVEL: "431",
    DESCRIPCION: "OTROS AFEITADO DEPILACION ",
    COD_NIVEL_PADRE: "424"
  },
  {
    cod_nivel: "433",
    descripcion: "SOLARIUM FACIAL",
    cod_nivel_padre: "432",
    COD_NIVEL: "433",
    DESCRIPCION: "SOLARIUM FACIAL",
    COD_NIVEL_PADRE: "432"
  },
  {
    cod_nivel: "434",
    descripcion: "SOLARIUM CUERPO ENTERO",
    cod_nivel_padre: "432",
    COD_NIVEL: "434",
    DESCRIPCION: "SOLARIUM CUERPO ENTERO",
    COD_NIVEL_PADRE: "432"
  },
  {
    cod_nivel: "436",
    descripcion: "OTROS BRONCEADO",
    cod_nivel_padre: "432",
    COD_NIVEL: "436",
    DESCRIPCION: "OTROS BRONCEADO",
    COD_NIVEL_PADRE: "432"
  },
  {
    cod_nivel: "437",
    descripcion: "CEPILLO DIENTES ELECTRICO",
    cod_nivel_padre: "435",
    COD_NIVEL: "437",
    DESCRIPCION: "CEPILLO DIENTES ELECTRICO",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "438",
    descripcion: "RECAMBIO CEPILLO DIENTES",
    cod_nivel_padre: "435",
    COD_NIVEL: "438",
    DESCRIPCION: "RECAMBIO CEPILLO DIENTES",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "439",
    descripcion: "LIMPIADOR ULTRASONIDOS",
    cod_nivel_padre: "435",
    COD_NIVEL: "439",
    DESCRIPCION: "LIMPIADOR ULTRASONIDOS",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "441",
    descripcion: "IRRIGADOR BUCAL",
    cod_nivel_padre: "435",
    COD_NIVEL: "441",
    DESCRIPCION: "IRRIGADOR BUCAL",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "442",
    descripcion: "BLANQUEADOR DENTAL",
    cod_nivel_padre: "435",
    COD_NIVEL: "442",
    DESCRIPCION: "BLANQUEADOR DENTAL",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "443",
    descripcion: "PURIFICADOR UV",
    cod_nivel_padre: "435",
    COD_NIVEL: "443",
    DESCRIPCION: "PURIFICADOR UV",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "445",
    descripcion: "SECADOR PELO",
    cod_nivel_padre: "444",
    COD_NIVEL: "445",
    DESCRIPCION: "SECADOR PELO",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "446",
    descripcion: "SECADOR PELO VIAJE",
    cod_nivel_padre: "444",
    COD_NIVEL: "446",
    DESCRIPCION: "SECADOR PELO VIAJE",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "447",
    descripcion: "SECADOR PELO DE PIE",
    cod_nivel_padre: "444",
    COD_NIVEL: "447",
    DESCRIPCION: "SECADOR PELO DE PIE",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "448",
    descripcion: "CEPILLO CON BOMBA AIRE",
    cod_nivel_padre: "444",
    COD_NIVEL: "448",
    DESCRIPCION: "CEPILLO CON BOMBA AIRE",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "449",
    descripcion: "RIZADOR PELO",
    cod_nivel_padre: "444",
    COD_NIVEL: "449",
    DESCRIPCION: "RIZADOR PELO",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "450",
    descripcion: "CORTADORA PELO",
    cod_nivel_padre: "444",
    COD_NIVEL: "450",
    DESCRIPCION: "CORTADORA PELO",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "451",
    descripcion: "ALISADOR PELO",
    cod_nivel_padre: "444",
    COD_NIVEL: "451",
    DESCRIPCION: "ALISADOR PELO",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "452",
    descripcion: "OTROS CUIDADO CABELLO",
    cod_nivel_padre: "444",
    COD_NIVEL: "452",
    DESCRIPCION: "OTROS CUIDADO CABELLO",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "453",
    descripcion: "OTROS CUIDADO BUCAL",
    cod_nivel_padre: "435",
    COD_NIVEL: "453",
    DESCRIPCION: "OTROS CUIDADO BUCAL",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "455",
    descripcion: "SAUNA FACIAL",
    cod_nivel_padre: "454",
    COD_NIVEL: "455",
    DESCRIPCION: "SAUNA FACIAL",
    COD_NIVEL_PADRE: "454"
  },
  {
    cod_nivel: "456",
    descripcion: "LIMPIADOR POROS",
    cod_nivel_padre: "454",
    COD_NIVEL: "456",
    DESCRIPCION: "LIMPIADOR POROS",
    COD_NIVEL_PADRE: "454"
  },
  {
    cod_nivel: "457",
    descripcion: "OTROS CUIDADO FACIAL",
    cod_nivel_padre: "454",
    COD_NIVEL: "457",
    DESCRIPCION: "OTROS CUIDADO FACIAL",
    COD_NIVEL_PADRE: "454"
  },
  {
    cod_nivel: "463",
    descripcion: "LAMPARA INFRARROJOS",
    cod_nivel_padre: "462",
    COD_NIVEL: "463",
    DESCRIPCION: "LAMPARA INFRARROJOS",
    COD_NIVEL_PADRE: "462"
  },
  {
    cod_nivel: "464",
    descripcion: "LAMPARA LUMINOTERAPIA",
    cod_nivel_padre: "462",
    COD_NIVEL: "464",
    DESCRIPCION: "LAMPARA LUMINOTERAPIA",
    COD_NIVEL_PADRE: "462"
  },
  {
    cod_nivel: "467",
    descripcion: "MASAJEADOR PIES",
    cod_nivel_padre: "466",
    COD_NIVEL: "467",
    DESCRIPCION: "MASAJEADOR PIES",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "468",
    descripcion: "CINTURON MASAJE",
    cod_nivel_padre: "466",
    COD_NIVEL: "468",
    DESCRIPCION: "CINTURON MASAJE",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "469",
    descripcion: "COJIN MASAJE",
    cod_nivel_padre: "466",
    COD_NIVEL: "469",
    DESCRIPCION: "COJIN MASAJE",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "470",
    descripcion: "MASAJEADOR INFRARROJOS",
    cod_nivel_padre: "466",
    COD_NIVEL: "470",
    DESCRIPCION: "MASAJEADOR INFRARROJOS",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "471",
    descripcion: "MASAJEADOR VIBRATORIO",
    cod_nivel_padre: "466",
    COD_NIVEL: "471",
    DESCRIPCION: "MASAJEADOR VIBRATORIO",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "472",
    descripcion: "MANTA ELECTRICA",
    cod_nivel_padre: "466",
    COD_NIVEL: "472",
    DESCRIPCION: "MANTA ELECTRICA",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "473",
    descripcion: "COLCHONETA HIDROMASAJE",
    cod_nivel_padre: "466",
    COD_NIVEL: "473",
    DESCRIPCION: "COLCHONETA HIDROMASAJE",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "474",
    descripcion: "MASAJEADOR INTIMO",
    cod_nivel_padre: "466",
    COD_NIVEL: "474",
    DESCRIPCION: "MASAJEADOR INTIMO",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "480",
    descripcion: "SET MANICURA PEDICURA",
    cod_nivel_padre: "479",
    COD_NIVEL: "480",
    DESCRIPCION: "SET MANICURA PEDICURA",
    COD_NIVEL_PADRE: "479"
  },
  {
    cod_nivel: "481",
    descripcion: "SECADORES MANICURA",
    cod_nivel_padre: "479",
    COD_NIVEL: "481",
    DESCRIPCION: "SECADORES MANICURA",
    COD_NIVEL_PADRE: "479"
  },
  {
    cod_nivel: "482",
    descripcion: "OTROS MANICURA PEDICURA",
    cod_nivel_padre: "479",
    COD_NIVEL: "482",
    DESCRIPCION: "OTROS MANICURA PEDICURA",
    COD_NIVEL_PADRE: "479"
  },
  {
    cod_nivel: "489",
    descripcion: "ANALIZADOR GRASA CORPORAL",
    cod_nivel_padre: "488",
    COD_NIVEL: "489",
    DESCRIPCION: "ANALIZADOR GRASA CORPORAL",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "501",
    descripcion: "TRANSPORTIN DE GATOS",
    cod_nivel_padre: "500",
    COD_NIVEL: "501",
    DESCRIPCION: "TRANSPORTIN DE GATOS",
    COD_NIVEL_PADRE: "500"
  },
  {
    cod_nivel: "509",
    descripcion: "JAULA DE PAJAROS",
    cod_nivel_padre: "508",
    COD_NIVEL: "509",
    DESCRIPCION: "JAULA DE PAJAROS",
    COD_NIVEL_PADRE: "508"
  },
  {
    cod_nivel: "517",
    descripcion: "SISTEMA DE FILTRACION",
    cod_nivel_padre: "515",
    COD_NIVEL: "517",
    DESCRIPCION: "SISTEMA DE FILTRACION",
    COD_NIVEL_PADRE: "515"
  },
  {
    cod_nivel: "518",
    descripcion: "DECORACION ACUARIOS",
    cod_nivel_padre: "515",
    COD_NIVEL: "518",
    DESCRIPCION: "DECORACION ACUARIOS",
    COD_NIVEL_PADRE: "515"
  },
  {
    cod_nivel: "531",
    descripcion: "TERRARIO",
    cod_nivel_padre: "530",
    COD_NIVEL: "531",
    DESCRIPCION: "TERRARIO",
    COD_NIVEL_PADRE: "530"
  },
  {
    cod_nivel: "532",
    descripcion: "SISTEMA CALEFACCION",
    cod_nivel_padre: "530",
    COD_NIVEL: "532",
    DESCRIPCION: "SISTEMA CALEFACCION",
    COD_NIVEL_PADRE: "530"
  },
  {
    cod_nivel: "535",
    descripcion: "PORTERO AUTOMATICO",
    cod_nivel_padre: "534",
    COD_NIVEL: "535",
    DESCRIPCION: "PORTERO AUTOMATICO",
    COD_NIVEL_PADRE: "534"
  },
  {
    cod_nivel: "536",
    descripcion: "SENSOR MOVIMIENTO",
    cod_nivel_padre: "534",
    COD_NIVEL: "536",
    DESCRIPCION: "SENSOR MOVIMIENTO",
    COD_NIVEL_PADRE: "534"
  },
  {
    cod_nivel: "537",
    descripcion: "MANDO A DISTANCIA",
    cod_nivel_padre: "534",
    COD_NIVEL: "537",
    DESCRIPCION: "MANDO A DISTANCIA",
    COD_NIVEL_PADRE: "534"
  },
  {
    cod_nivel: "546",
    descripcion: "GRIFO BAÑO",
    cod_nivel_padre: "542",
    COD_NIVEL: "546",
    DESCRIPCION: "GRIFO BAÑO",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "554",
    descripcion: "AIRE ACONDICIONADO",
    cod_nivel_padre: "5100",
    COD_NIVEL: "554",
    DESCRIPCION: "AIRE ACONDICIONADO",
    COD_NIVEL_PADRE: "5100"
  },
  {
    cod_nivel: "555",
    descripcion: "CLIMATIZADOR EVAPORATIVO",
    cod_nivel_padre: "5100",
    COD_NIVEL: "555",
    DESCRIPCION: "CLIMATIZADOR EVAPORATIVO",
    COD_NIVEL_PADRE: "5100"
  },
  {
    cod_nivel: "556",
    descripcion: "FILTRO AIRE",
    cod_nivel_padre: "5099",
    COD_NIVEL: "556",
    DESCRIPCION: "FILTRO AIRE",
    COD_NIVEL_PADRE: "5099"
  },
  {
    cod_nivel: "557",
    descripcion: "CALEFACTOR DE TERRAZA",
    cod_nivel_padre: "5101",
    COD_NIVEL: "557",
    DESCRIPCION: "CALEFACTOR DE TERRAZA",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "558",
    descripcion: "CALENTADOR AGUA",
    cod_nivel_padre: "5099",
    COD_NIVEL: "558",
    DESCRIPCION: "CALENTADOR AGUA",
    COD_NIVEL_PADRE: "5099"
  },
  {
    cod_nivel: "559",
    descripcion: "CHIMENEA ELECTRICA",
    cod_nivel_padre: "5101",
    COD_NIVEL: "559",
    DESCRIPCION: "CHIMENEA ELECTRICA",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "560",
    descripcion: "ESTUFA MADERA",
    cod_nivel_padre: "5101",
    COD_NIVEL: "560",
    DESCRIPCION: "ESTUFA MADERA",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "561",
    descripcion: "DESHUMIDIFICADOR",
    cod_nivel_padre: "5099",
    COD_NIVEL: "561",
    DESCRIPCION: "DESHUMIDIFICADOR",
    COD_NIVEL_PADRE: "5099"
  },
  {
    cod_nivel: "562",
    descripcion: "HUMIDIFICADOR",
    cod_nivel_padre: "5099",
    COD_NIVEL: "562",
    DESCRIPCION: "HUMIDIFICADOR",
    COD_NIVEL_PADRE: "5099"
  },
  {
    cod_nivel: "563",
    descripcion: "RADIADOR ACEITE",
    cod_nivel_padre: "5101",
    COD_NIVEL: "563",
    DESCRIPCION: "RADIADOR ACEITE",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "564",
    descripcion: "RADIADOR ELECTRICO",
    cod_nivel_padre: "5101",
    COD_NIVEL: "564",
    DESCRIPCION: "RADIADOR ELECTRICO",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "565",
    descripcion: "RADIADOR HALOGENO",
    cod_nivel_padre: "5101",
    COD_NIVEL: "565",
    DESCRIPCION: "RADIADOR HALOGENO",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "566",
    descripcion: "RADIADOR CONVECTOR",
    cod_nivel_padre: "5101",
    COD_NIVEL: "566",
    DESCRIPCION: "RADIADOR CONVECTOR",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "567",
    descripcion: "VENTILADOR",
    cod_nivel_padre: "5100",
    COD_NIVEL: "567",
    DESCRIPCION: "VENTILADOR",
    COD_NIVEL_PADRE: "5100"
  },
  {
    cod_nivel: "568",
    descripcion: "SECATOALLAS",
    cod_nivel_padre: "5099",
    COD_NIVEL: "568",
    DESCRIPCION: "SECATOALLAS",
    COD_NIVEL_PADRE: "5099"
  },
  {
    cod_nivel: "569",
    descripcion: "TERMOVENTILADOR",
    cod_nivel_padre: "5101",
    COD_NIVEL: "569",
    DESCRIPCION: "TERMOVENTILADOR",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "570",
    descripcion: "OTROS OTROS CLIMATIZACION",
    cod_nivel_padre: "5099",
    COD_NIVEL: "570",
    DESCRIPCION: "OTROS OTROS CLIMATIZACION",
    COD_NIVEL_PADRE: "5099"
  },
  {
    cod_nivel: "574",
    descripcion: "CUCHILLO COCINA",
    cod_nivel_padre: "573",
    COD_NIVEL: "574",
    DESCRIPCION: "CUCHILLO COCINA",
    COD_NIVEL_PADRE: "573"
  },
  {
    cod_nivel: "575",
    descripcion: "AFILADOR",
    cod_nivel_padre: "573",
    COD_NIVEL: "575",
    DESCRIPCION: "AFILADOR",
    COD_NIVEL_PADRE: "573"
  },
  {
    cod_nivel: "576",
    descripcion: "SET CUCHILLOS COCINA",
    cod_nivel_padre: "573",
    COD_NIVEL: "576",
    DESCRIPCION: "SET CUCHILLOS COCINA",
    COD_NIVEL_PADRE: "573"
  },
  {
    cod_nivel: "585",
    descripcion: "GRIFO COCINA",
    cod_nivel_padre: "571",
    COD_NIVEL: "585",
    DESCRIPCION: "GRIFO COCINA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "587",
    descripcion: "SARTEN",
    cod_nivel_padre: "586",
    COD_NIVEL: "587",
    DESCRIPCION: "SARTEN",
    COD_NIVEL_PADRE: "586"
  },
  {
    cod_nivel: "588",
    descripcion: "OLLA",
    cod_nivel_padre: "586",
    COD_NIVEL: "588",
    DESCRIPCION: "OLLA",
    COD_NIVEL_PADRE: "586"
  },
  {
    cod_nivel: "589",
    descripcion: "OLLA A PRESION",
    cod_nivel_padre: "586",
    COD_NIVEL: "589",
    DESCRIPCION: "OLLA A PRESION",
    COD_NIVEL_PADRE: "586"
  },
  {
    cod_nivel: "590",
    descripcion: "BATERIA COCINA",
    cod_nivel_padre: "586",
    COD_NIVEL: "590",
    DESCRIPCION: "BATERIA COCINA",
    COD_NIVEL_PADRE: "586"
  },
  {
    cod_nivel: "591",
    descripcion: "WOK",
    cod_nivel_padre: "586",
    COD_NIVEL: "591",
    DESCRIPCION: "WOK",
    COD_NIVEL_PADRE: "586"
  },
  {
    cod_nivel: "593",
    descripcion: "VAJILLA",
    cod_nivel_padre: "571",
    COD_NIVEL: "593",
    DESCRIPCION: "VAJILLA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "600",
    descripcion: "CERAMICA",
    cod_nivel_padre: "595",
    COD_NIVEL: "600",
    DESCRIPCION: "CERAMICA",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "601",
    descripcion: "CUADRO",
    cod_nivel_padre: "595",
    COD_NIVEL: "601",
    DESCRIPCION: "CUADRO",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "602",
    descripcion: "FIGURA DECORATIVA",
    cod_nivel_padre: "595",
    COD_NIVEL: "602",
    DESCRIPCION: "FIGURA DECORATIVA",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "604",
    descripcion: "DECORACION DE PAREDES",
    cod_nivel_padre: "595",
    COD_NIVEL: "604",
    DESCRIPCION: "DECORACION DE PAREDES",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "605",
    descripcion: "LAMPARA",
    cod_nivel_padre: "595",
    COD_NIVEL: "605",
    DESCRIPCION: "LAMPARA",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "606",
    descripcion: "MARCO PORTAFOTOS",
    cod_nivel_padre: "595",
    COD_NIVEL: "606",
    DESCRIPCION: "MARCO PORTAFOTOS",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "608",
    descripcion: "CANDELABROS",
    cod_nivel_padre: "595",
    COD_NIVEL: "608",
    DESCRIPCION: "CANDELABROS",
    COD_NIVEL_PADRE: "595"
  },
  {
    cod_nivel: "612",
    descripcion: "PLACA GAS",
    cod_nivel_padre: "611",
    COD_NIVEL: "612",
    DESCRIPCION: "PLACA GAS",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "613",
    descripcion: "PLACA INDUCCION",
    cod_nivel_padre: "611",
    COD_NIVEL: "613",
    DESCRIPCION: "PLACA INDUCCION",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "572",
    descripcion: "CUBERTERIA",
    cod_nivel_padre: "571",
    COD_NIVEL: "572",
    DESCRIPCION: "CUBERTERIA",
    COD_NIVEL_PADRE: "571"
  },
  {
    cod_nivel: "485",
    descripcion: "MULETAS",
    cod_nivel_padre: "483",
    COD_NIVEL: "485",
    DESCRIPCION: "MULETAS",
    COD_NIVEL_PADRE: "483"
  },
  {
    cod_nivel: "440",
    descripcion: "HIDROPULSOR",
    cod_nivel_padre: "435",
    COD_NIVEL: "440",
    DESCRIPCION: "HIDROPULSOR",
    COD_NIVEL_PADRE: "435"
  },
  {
    cod_nivel: "1742",
    descripcion: "ADAPTADOR",
    cod_nivel_padre: "1741",
    COD_NIVEL: "1742",
    DESCRIPCION: "ADAPTADOR",
    COD_NIVEL_PADRE: "1741"
  },
  {
    cod_nivel: "519",
    descripcion: "ILUMINACION ACUARIO",
    cod_nivel_padre: "515",
    COD_NIVEL: "519",
    DESCRIPCION: "ILUMINACION ACUARIO",
    COD_NIVEL_PADRE: "515"
  },
  {
    cod_nivel: "520",
    descripcion: "SISTEMA CALEFACCION",
    cod_nivel_padre: "515",
    COD_NIVEL: "520",
    DESCRIPCION: "SISTEMA CALEFACCION",
    COD_NIVEL_PADRE: "515"
  },
  {
    cod_nivel: "614",
    descripcion: "PLACA ELECTRICA",
    cod_nivel_padre: "611",
    COD_NIVEL: "614",
    DESCRIPCION: "PLACA ELECTRICA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "615",
    descripcion: "VITROCERAMICA",
    cod_nivel_padre: "611",
    COD_NIVEL: "615",
    DESCRIPCION: "VITROCERAMICA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "616",
    descripcion: "PLACA MIXTA",
    cod_nivel_padre: "611",
    COD_NIVEL: "616",
    DESCRIPCION: "PLACA MIXTA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "618",
    descripcion: "CAMPANA EXTRACTORA",
    cod_nivel_padre: "611",
    COD_NIVEL: "618",
    DESCRIPCION: "CAMPANA EXTRACTORA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "619",
    descripcion: "EXTRACTOR COCINA",
    cod_nivel_padre: "611",
    COD_NIVEL: "619",
    DESCRIPCION: "EXTRACTOR COCINA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "620",
    descripcion: "LAVADORA",
    cod_nivel_padre: "611",
    COD_NIVEL: "620",
    DESCRIPCION: "LAVADORA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "621",
    descripcion: "LAVADORA SECADORA",
    cod_nivel_padre: "611",
    COD_NIVEL: "621",
    DESCRIPCION: "LAVADORA SECADORA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "622",
    descripcion: "SECADORA",
    cod_nivel_padre: "611",
    COD_NIVEL: "622",
    DESCRIPCION: "SECADORA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "623",
    descripcion: "LAVAVAJILLAS",
    cod_nivel_padre: "611",
    COD_NIVEL: "623",
    DESCRIPCION: "LAVAVAJILLAS",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "625",
    descripcion: "FRIGORIFICO",
    cod_nivel_padre: "611",
    COD_NIVEL: "625",
    DESCRIPCION: "FRIGORIFICO",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "626",
    descripcion: "MINIBAR",
    cod_nivel_padre: "611",
    COD_NIVEL: "626",
    DESCRIPCION: "MINIBAR",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "627",
    descripcion: "CONGELADOR",
    cod_nivel_padre: "611",
    COD_NIVEL: "627",
    DESCRIPCION: "CONGELADOR",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "628",
    descripcion: "VINOTECA",
    cod_nivel_padre: "611",
    COD_NIVEL: "628",
    DESCRIPCION: "VINOTECA",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "629",
    descripcion: "OTRO GRAN ELECTRODOMESTICO",
    cod_nivel_padre: "611",
    COD_NIVEL: "629",
    DESCRIPCION: "OTRO GRAN ELECTRODOMESTICO",
    COD_NIVEL_PADRE: "611"
  },
  {
    cod_nivel: "633",
    descripcion: "ASPIRADOR ROBOT",
    cod_nivel_padre: "631",
    COD_NIVEL: "633",
    DESCRIPCION: "ASPIRADOR ROBOT",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "634",
    descripcion: "ASPIRADOR SIN BOLSA",
    cod_nivel_padre: "631",
    COD_NIVEL: "634",
    DESCRIPCION: "ASPIRADOR SIN BOLSA",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "635",
    descripcion: "VAPORETA",
    cod_nivel_padre: "631",
    COD_NIVEL: "635",
    DESCRIPCION: "VAPORETA",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "636",
    descripcion: "ASPIRADOR MANO",
    cod_nivel_padre: "631",
    COD_NIVEL: "636",
    DESCRIPCION: "ASPIRADOR MANO",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "637",
    descripcion: "ASPIRADOR SOLIDO LIQUIDO",
    cod_nivel_padre: "631",
    COD_NIVEL: "637",
    DESCRIPCION: "ASPIRADOR SOLIDO LIQUIDO",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "638",
    descripcion: "ASPIRADOR ESCOBA",
    cod_nivel_padre: "631",
    COD_NIVEL: "638",
    DESCRIPCION: "ASPIRADOR ESCOBA",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "639",
    descripcion: "ACCESORIO ASPIRADORA",
    cod_nivel_padre: "631",
    COD_NIVEL: "639",
    DESCRIPCION: "ACCESORIO ASPIRADORA",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "641",
    descripcion: "BATIDORA VASO",
    cod_nivel_padre: "640",
    COD_NIVEL: "641",
    DESCRIPCION: "BATIDORA VASO",
    COD_NIVEL_PADRE: "640"
  },
  {
    cod_nivel: "642",
    descripcion: "BATIDORA BRAZO",
    cod_nivel_padre: "640",
    COD_NIVEL: "642",
    DESCRIPCION: "BATIDORA BRAZO",
    COD_NIVEL_PADRE: "640"
  },
  {
    cod_nivel: "643",
    descripcion: "LICUADORA",
    cod_nivel_padre: "640",
    COD_NIVEL: "643",
    DESCRIPCION: "LICUADORA",
    COD_NIVEL_PADRE: "640"
  },
  {
    cod_nivel: "644",
    descripcion: "AMASADORA",
    cod_nivel_padre: "640",
    COD_NIVEL: "644",
    DESCRIPCION: "AMASADORA",
    COD_NIVEL_PADRE: "640"
  },
  {
    cod_nivel: "646",
    descripcion: "CAFETERA ESPRESSO",
    cod_nivel_padre: "645",
    COD_NIVEL: "646",
    DESCRIPCION: "CAFETERA ESPRESSO",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "647",
    descripcion: "CAFETERA",
    cod_nivel_padre: "645",
    COD_NIVEL: "647",
    DESCRIPCION: "CAFETERA",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "648",
    descripcion: "HERVIDOR AGUA",
    cod_nivel_padre: "645",
    COD_NIVEL: "648",
    DESCRIPCION: "HERVIDOR AGUA",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "649",
    descripcion: "TETERA",
    cod_nivel_padre: "645",
    COD_NIVEL: "649",
    DESCRIPCION: "TETERA",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "650",
    descripcion: "CHOCOLATERA",
    cod_nivel_padre: "645",
    COD_NIVEL: "650",
    DESCRIPCION: "CHOCOLATERA",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "652",
    descripcion: "EXPRIMIDOR CITRICOS",
    cod_nivel_padre: "5105",
    COD_NIVEL: "652",
    DESCRIPCION: "EXPRIMIDOR CITRICOS",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "653",
    descripcion: "MOLINILLO CAFE",
    cod_nivel_padre: "645",
    COD_NIVEL: "653",
    DESCRIPCION: "MOLINILLO CAFE",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "654",
    descripcion: "JARRA PURIFICADORA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "654",
    DESCRIPCION: "JARRA PURIFICADORA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "655",
    descripcion: "ACCESORIOS",
    cod_nivel_padre: "5105",
    COD_NIVEL: "655",
    DESCRIPCION: "ACCESORIOS",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "656",
    descripcion: "PICADORA",
    cod_nivel_padre: "5107",
    COD_NIVEL: "656",
    DESCRIPCION: "PICADORA",
    COD_NIVEL_PADRE: "5107"
  },
  {
    cod_nivel: "657",
    descripcion: "CORTAFIAMBRES",
    cod_nivel_padre: "5107",
    COD_NIVEL: "657",
    DESCRIPCION: "CORTAFIAMBRES",
    COD_NIVEL_PADRE: "5107"
  },
  {
    cod_nivel: "658",
    descripcion: "BALANZA COCINA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "658",
    DESCRIPCION: "BALANZA COCINA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "659",
    descripcion: "MAQUINA CUBITOS HIELO",
    cod_nivel_padre: "5105",
    COD_NIVEL: "659",
    DESCRIPCION: "MAQUINA CUBITOS HIELO",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "660",
    descripcion: "TRITURADOR HIELO",
    cod_nivel_padre: "5105",
    COD_NIVEL: "660",
    DESCRIPCION: "TRITURADOR HIELO",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "661",
    descripcion: "SORBETERA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "661",
    DESCRIPCION: "SORBETERA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "662",
    descripcion: "HELADERA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "662",
    DESCRIPCION: "HELADERA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "663",
    descripcion: "GRIFO CERVEZA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "663",
    DESCRIPCION: "GRIFO CERVEZA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "664",
    descripcion: "MICROONDAS",
    cod_nivel_padre: "5104",
    COD_NIVEL: "664",
    DESCRIPCION: "MICROONDAS",
    COD_NIVEL_PADRE: "5104"
  },
  {
    cod_nivel: "665",
    descripcion: "YOGURTERA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "665",
    DESCRIPCION: "YOGURTERA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "666",
    descripcion: "NEVERITA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "666",
    DESCRIPCION: "NEVERITA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "667",
    descripcion: "PARRILLA ELECTRICA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "667",
    DESCRIPCION: "PARRILLA ELECTRICA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "668",
    descripcion: "RACLETTE",
    cod_nivel_padre: "5109",
    COD_NIVEL: "668",
    DESCRIPCION: "RACLETTE",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "669",
    descripcion: "FONDUE",
    cod_nivel_padre: "5105",
    COD_NIVEL: "669",
    DESCRIPCION: "FONDUE",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "670",
    descripcion: "ROBOT MULTIFUNCION",
    cod_nivel_padre: "5106",
    COD_NIVEL: "670",
    DESCRIPCION: "ROBOT MULTIFUNCION",
    COD_NIVEL_PADRE: "5106"
  },
  {
    cod_nivel: "671",
    descripcion: "CREPERA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "671",
    DESCRIPCION: "CREPERA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "672",
    descripcion: "GOFRERA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "672",
    DESCRIPCION: "GOFRERA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "673",
    descripcion: "SANDWICHERA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "673",
    DESCRIPCION: "SANDWICHERA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "674",
    descripcion: "HORNEADOR PAN",
    cod_nivel_padre: "5104",
    COD_NIVEL: "674",
    DESCRIPCION: "HORNEADOR PAN",
    COD_NIVEL_PADRE: "5104"
  },
  {
    cod_nivel: "675",
    descripcion: "COCEDOR HUEVOS ELECTRICO",
    cod_nivel_padre: "5105",
    COD_NIVEL: "675",
    DESCRIPCION: "COCEDOR HUEVOS ELECTRICO",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "676",
    descripcion: "COCEDOR ARROZ",
    cod_nivel_padre: "5105",
    COD_NIVEL: "676",
    DESCRIPCION: "COCEDOR ARROZ",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "677",
    descripcion: "COCEDOR A VAPOR",
    cod_nivel_padre: "5105",
    COD_NIVEL: "677",
    DESCRIPCION: "COCEDOR A VAPOR",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "678",
    descripcion: "OLLA COCCION ELECTRICA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "678",
    DESCRIPCION: "OLLA COCCION ELECTRICA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "679",
    descripcion: "FUENTE CHOCOLATE",
    cod_nivel_padre: "5105",
    COD_NIVEL: "679",
    DESCRIPCION: "FUENTE CHOCOLATE",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "680",
    descripcion: "MAQUINA HOT DOG",
    cod_nivel_padre: "5109",
    COD_NIVEL: "680",
    DESCRIPCION: "MAQUINA HOT DOG",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "681",
    descripcion: "MAQUINA ALGODON AZUCAR",
    cod_nivel_padre: "5105",
    COD_NIVEL: "681",
    DESCRIPCION: "MAQUINA ALGODON AZUCAR",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "682",
    descripcion: "HORNO PIZZA",
    cod_nivel_padre: "5104",
    COD_NIVEL: "682",
    DESCRIPCION: "HORNO PIZZA",
    COD_NIVEL_PADRE: "5104"
  },
  {
    cod_nivel: "683",
    descripcion: "PALOMITERO",
    cod_nivel_padre: "5105",
    COD_NIVEL: "683",
    DESCRIPCION: "PALOMITERO",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "684",
    descripcion: "CALIENTAPLATOS",
    cod_nivel_padre: "5105",
    COD_NIVEL: "684",
    DESCRIPCION: "CALIENTAPLATOS",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "685",
    descripcion: "MINIHORNO",
    cod_nivel_padre: "5104",
    COD_NIVEL: "685",
    DESCRIPCION: "MINIHORNO",
    COD_NIVEL_PADRE: "5104"
  },
  {
    cod_nivel: "686",
    descripcion: "THERMOMIX",
    cod_nivel_padre: "5049",
    COD_NIVEL: "686",
    DESCRIPCION: "THERMOMIX",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "687",
    descripcion: "FREIDORA",
    cod_nivel_padre: "5108",
    COD_NIVEL: "687",
    DESCRIPCION: "FREIDORA",
    COD_NIVEL_PADRE: "5108"
  },
  {
    cod_nivel: "688",
    descripcion: "TOSTADORA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "688",
    DESCRIPCION: "TOSTADORA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "689",
    descripcion: "SARTEN ELECTRICA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "689",
    DESCRIPCION: "SARTEN ELECTRICA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "690",
    descripcion: "PLANCHA VAPOR",
    cod_nivel_padre: "695",
    COD_NIVEL: "690",
    DESCRIPCION: "PLANCHA VAPOR",
    COD_NIVEL_PADRE: "695"
  },
  {
    cod_nivel: "691",
    descripcion: "CENTRO PLANCHADO",
    cod_nivel_padre: "695",
    COD_NIVEL: "691",
    DESCRIPCION: "CENTRO PLANCHADO",
    COD_NIVEL_PADRE: "695"
  },
  {
    cod_nivel: "692",
    descripcion: "MAQUINA COSER",
    cod_nivel_padre: "5110",
    COD_NIVEL: "692",
    DESCRIPCION: "MAQUINA COSER",
    COD_NIVEL_PADRE: "5110"
  },
  {
    cod_nivel: "693",
    descripcion: "ROBOT PLANCHADO",
    cod_nivel_padre: "695",
    COD_NIVEL: "693",
    DESCRIPCION: "ROBOT PLANCHADO",
    COD_NIVEL_PADRE: "695"
  },
  {
    cod_nivel: "694",
    descripcion: "PRENSA PLANCHADO",
    cod_nivel_padre: "695",
    COD_NIVEL: "694",
    DESCRIPCION: "PRENSA PLANCHADO",
    COD_NIVEL_PADRE: "695"
  },
  {
    cod_nivel: "696",
    descripcion: "ENCERADORA CALZADO",
    cod_nivel_padre: "5111",
    COD_NIVEL: "696",
    DESCRIPCION: "ENCERADORA CALZADO",
    COD_NIVEL_PADRE: "5111"
  },
  {
    cod_nivel: "697",
    descripcion: "TABLA PLANCHAR",
    cod_nivel_padre: "695",
    COD_NIVEL: "697",
    DESCRIPCION: "TABLA PLANCHAR",
    COD_NIVEL_PADRE: "695"
  },
  {
    cod_nivel: "717",
    descripcion: "KIT VIDEOVIGILANCIA",
    cod_nivel_padre: "716",
    COD_NIVEL: "717",
    DESCRIPCION: "KIT VIDEOVIGILANCIA",
    COD_NIVEL_PADRE: "716"
  },
  {
    cod_nivel: "718",
    descripcion: "CAMARA VIDEOVIGILANCIA",
    cod_nivel_padre: "716",
    COD_NIVEL: "718",
    DESCRIPCION: "CAMARA VIDEOVIGILANCIA",
    COD_NIVEL_PADRE: "716"
  },
  {
    cod_nivel: "719",
    descripcion: "MONITOR VIDEOVIGILANCIA",
    cod_nivel_padre: "716",
    COD_NIVEL: "719",
    DESCRIPCION: "MONITOR VIDEOVIGILANCIA",
    COD_NIVEL_PADRE: "716"
  },
  {
    cod_nivel: "720",
    descripcion: "GRABADOR VIDEOVIGILANCIA",
    cod_nivel_padre: "716",
    COD_NIVEL: "720",
    DESCRIPCION: "GRABADOR VIDEOVIGILANCIA",
    COD_NIVEL_PADRE: "716"
  },
  {
    cod_nivel: "721",
    descripcion: "OTROS VIDEOVIGILANCIA",
    cod_nivel_padre: "716",
    COD_NIVEL: "721",
    DESCRIPCION: "OTROS VIDEOVIGILANCIA",
    COD_NIVEL_PADRE: "716"
  },
  {
    cod_nivel: "723",
    descripcion: "KIT ALARMA",
    cod_nivel_padre: "722",
    COD_NIVEL: "723",
    DESCRIPCION: "KIT ALARMA",
    COD_NIVEL_PADRE: "722"
  },
  {
    cod_nivel: "724",
    descripcion: "SIRENA ALARMA",
    cod_nivel_padre: "722",
    COD_NIVEL: "724",
    DESCRIPCION: "SIRENA ALARMA",
    COD_NIVEL_PADRE: "722"
  },
  {
    cod_nivel: "725",
    descripcion: "DETECTOR MOVIMIENTO",
    cod_nivel_padre: "722",
    COD_NIVEL: "725",
    DESCRIPCION: "DETECTOR MOVIMIENTO",
    COD_NIVEL_PADRE: "722"
  },
  {
    cod_nivel: "726",
    descripcion: "DETECTOR HUMO",
    cod_nivel_padre: "722",
    COD_NIVEL: "726",
    DESCRIPCION: "DETECTOR HUMO",
    COD_NIVEL_PADRE: "722"
  },
  {
    cod_nivel: "727",
    descripcion: "OTROS SEGURIDAD HOGAR",
    cod_nivel_padre: "711",
    COD_NIVEL: "727",
    DESCRIPCION: "OTROS SEGURIDAD HOGAR",
    COD_NIVEL_PADRE: "711"
  },
  {
    cod_nivel: "753",
    descripcion: "PISTOLA RIEGO",
    cod_nivel_padre: "752",
    COD_NIVEL: "753",
    DESCRIPCION: "PISTOLA RIEGO",
    COD_NIVEL_PADRE: "752"
  },
  {
    cod_nivel: "754",
    descripcion: "ASPERSOR",
    cod_nivel_padre: "752",
    COD_NIVEL: "754",
    DESCRIPCION: "ASPERSOR",
    COD_NIVEL_PADRE: "752"
  },
  {
    cod_nivel: "755",
    descripcion: "PROGRAMADOR RIEGO",
    cod_nivel_padre: "752",
    COD_NIVEL: "755",
    DESCRIPCION: "PROGRAMADOR RIEGO",
    COD_NIVEL_PADRE: "752"
  },
  {
    cod_nivel: "789",
    descripcion: "LLAVE AJUSTABLE",
    cod_nivel_padre: "788",
    COD_NIVEL: "789",
    DESCRIPCION: "LLAVE AJUSTABLE",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "790",
    descripcion: "LLAVE ALLEN",
    cod_nivel_padre: "788",
    COD_NIVEL: "790",
    DESCRIPCION: "LLAVE ALLEN",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "791",
    descripcion: "LLAVE CARRACA",
    cod_nivel_padre: "788",
    COD_NIVEL: "791",
    DESCRIPCION: "LLAVE CARRACA",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "792",
    descripcion: "LLAVE COMBINADA",
    cod_nivel_padre: "788",
    COD_NIVEL: "792",
    DESCRIPCION: "LLAVE COMBINADA",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "793",
    descripcion: "LLAVE TUBO",
    cod_nivel_padre: "788",
    COD_NIVEL: "793",
    DESCRIPCION: "LLAVE TUBO",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "794",
    descripcion: "LLAVE VASO",
    cod_nivel_padre: "788",
    COD_NIVEL: "794",
    DESCRIPCION: "LLAVE VASO",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "795",
    descripcion: "LLAVE FIJA",
    cod_nivel_padre: "788",
    COD_NIVEL: "795",
    DESCRIPCION: "LLAVE FIJA",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "796",
    descripcion: "LLAVE PIPA",
    cod_nivel_padre: "788",
    COD_NIVEL: "796",
    DESCRIPCION: "LLAVE PIPA",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "797",
    descripcion: "LLAVE TORX",
    cod_nivel_padre: "788",
    COD_NIVEL: "797",
    DESCRIPCION: "LLAVE TORX",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "798",
    descripcion: "LLAVE STILLSON O GRIFA",
    cod_nivel_padre: "788",
    COD_NIVEL: "798",
    DESCRIPCION: "LLAVE STILLSON O GRIFA",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "799",
    descripcion: "OTRAS LLAVES",
    cod_nivel_padre: "788",
    COD_NIVEL: "799",
    DESCRIPCION: "OTRAS LLAVES",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "800",
    descripcion: "JUEGOS LLAVES",
    cod_nivel_padre: "788",
    COD_NIVEL: "800",
    DESCRIPCION: "JUEGOS LLAVES",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "802",
    descripcion: "DESTORNILLADOR PHILLIPS",
    cod_nivel_padre: "801",
    COD_NIVEL: "802",
    DESCRIPCION: "DESTORNILLADOR PHILLIPS",
    COD_NIVEL_PADRE: "801"
  },
  {
    cod_nivel: "803",
    descripcion: "DESTORNILLADOR PLANO",
    cod_nivel_padre: "801",
    COD_NIVEL: "803",
    DESCRIPCION: "DESTORNILLADOR PLANO",
    COD_NIVEL_PADRE: "801"
  },
  {
    cod_nivel: "804",
    descripcion: "DESTORNILLADOR TORX",
    cod_nivel_padre: "801",
    COD_NIVEL: "804",
    DESCRIPCION: "DESTORNILLADOR TORX",
    COD_NIVEL_PADRE: "801"
  },
  {
    cod_nivel: "805",
    descripcion: "DESTORNILLADOR PRECISION",
    cod_nivel_padre: "801",
    COD_NIVEL: "805",
    DESCRIPCION: "DESTORNILLADOR PRECISION",
    COD_NIVEL_PADRE: "801"
  },
  {
    cod_nivel: "806",
    descripcion: "OTROS",
    cod_nivel_padre: "801",
    COD_NIVEL: "806",
    DESCRIPCION: "OTROS",
    COD_NIVEL_PADRE: "801"
  },
  {
    cod_nivel: "807",
    descripcion: "JUEGO DESTORNILLADORES",
    cod_nivel_padre: "801",
    COD_NIVEL: "807",
    DESCRIPCION: "JUEGO DESTORNILLADORES",
    COD_NIVEL_PADRE: "801"
  },
  {
    cod_nivel: "809",
    descripcion: "ALICATES CORTACHAPAS",
    cod_nivel_padre: "808",
    COD_NIVEL: "809",
    DESCRIPCION: "ALICATES CORTACHAPAS",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "810",
    descripcion: "ALICATES DE CORTE",
    cod_nivel_padre: "808",
    COD_NIVEL: "810",
    DESCRIPCION: "ALICATES DE CORTE",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "811",
    descripcion: "ALICATES DE PUNTA",
    cod_nivel_padre: "808",
    COD_NIVEL: "811",
    DESCRIPCION: "ALICATES DE PUNTA",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "812",
    descripcion: "MINIALICATE",
    cod_nivel_padre: "808",
    COD_NIVEL: "812",
    DESCRIPCION: "MINIALICATE",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "813",
    descripcion: "ALICATES PELACABLES",
    cod_nivel_padre: "808",
    COD_NIVEL: "813",
    DESCRIPCION: "ALICATES PELACABLES",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "814",
    descripcion: "ALICATES PICO DE LORO",
    cod_nivel_padre: "808",
    COD_NIVEL: "814",
    DESCRIPCION: "ALICATES PICO DE LORO",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "815",
    descripcion: "TENAZAS",
    cod_nivel_padre: "808",
    COD_NIVEL: "815",
    DESCRIPCION: "TENAZAS",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "816",
    descripcion: "MORDAZA",
    cod_nivel_padre: "808",
    COD_NIVEL: "816",
    DESCRIPCION: "MORDAZA",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "817",
    descripcion: "ALICATES UNIVERSAL",
    cod_nivel_padre: "808",
    COD_NIVEL: "817",
    DESCRIPCION: "ALICATES UNIVERSAL",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "818",
    descripcion: "JUEGO ALICATES",
    cod_nivel_padre: "808",
    COD_NIVEL: "818",
    DESCRIPCION: "JUEGO ALICATES",
    COD_NIVEL_PADRE: "808"
  },
  {
    cod_nivel: "820",
    descripcion: "MARTILLO CARPINTERO",
    cod_nivel_padre: "819",
    COD_NIVEL: "820",
    DESCRIPCION: "MARTILLO CARPINTERO",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "821",
    descripcion: "MARTILLO OREJAS",
    cod_nivel_padre: "819",
    COD_NIVEL: "821",
    DESCRIPCION: "MARTILLO OREJAS",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "822",
    descripcion: "MAZO GOMA",
    cod_nivel_padre: "819",
    COD_NIVEL: "822",
    DESCRIPCION: "MAZO GOMA",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "823",
    descripcion: "MAZA DEMOLICION",
    cod_nivel_padre: "819",
    COD_NIVEL: "823",
    DESCRIPCION: "MAZA DEMOLICION",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "824",
    descripcion: "MACETA ALBAÑIL",
    cod_nivel_padre: "819",
    COD_NIVEL: "824",
    DESCRIPCION: "MACETA ALBAÑIL",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "825",
    descripcion: "PIQUETA",
    cod_nivel_padre: "819",
    COD_NIVEL: "825",
    DESCRIPCION: "PIQUETA",
    COD_NIVEL_PADRE: "819"
  },
  {
    cod_nivel: "826",
    descripcion: "SIERRA",
    cod_nivel_padre: "787",
    COD_NIVEL: "826",
    DESCRIPCION: "SIERRA",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "827",
    descripcion: "LIMA",
    cod_nivel_padre: "787",
    COD_NIVEL: "827",
    DESCRIPCION: "LIMA",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "828",
    descripcion: "ESCOFINA",
    cod_nivel_padre: "787",
    COD_NIVEL: "828",
    DESCRIPCION: "ESCOFINA",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "829",
    descripcion: "CEPILLO",
    cod_nivel_padre: "787",
    COD_NIVEL: "829",
    DESCRIPCION: "CEPILLO",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "830",
    descripcion: "FORMON",
    cod_nivel_padre: "787",
    COD_NIVEL: "830",
    DESCRIPCION: "FORMON",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "831",
    descripcion: "CINCEL",
    cod_nivel_padre: "787",
    COD_NIVEL: "831",
    DESCRIPCION: "CINCEL",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "833",
    descripcion: "CALIBRE",
    cod_nivel_padre: "832",
    COD_NIVEL: "833",
    DESCRIPCION: "CALIBRE",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "834",
    descripcion: "CINTA METRICA",
    cod_nivel_padre: "832",
    COD_NIVEL: "834",
    DESCRIPCION: "CINTA METRICA",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "835",
    descripcion: "NIVEL",
    cod_nivel_padre: "832",
    COD_NIVEL: "835",
    DESCRIPCION: "NIVEL",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "836",
    descripcion: "ESCUADRA",
    cod_nivel_padre: "832",
    COD_NIVEL: "836",
    DESCRIPCION: "ESCUADRA",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "837",
    descripcion: "ODOMETRO",
    cod_nivel_padre: "832",
    COD_NIVEL: "837",
    DESCRIPCION: "ODOMETRO",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "839",
    descripcion: "GRAPADORA",
    cod_nivel_padre: "838",
    COD_NIVEL: "839",
    DESCRIPCION: "GRAPADORA",
    COD_NIVEL_PADRE: "838"
  },
  {
    cod_nivel: "840",
    descripcion: "REMACHADORA",
    cod_nivel_padre: "838",
    COD_NIVEL: "840",
    DESCRIPCION: "REMACHADORA",
    COD_NIVEL_PADRE: "838"
  },
  {
    cod_nivel: "841",
    descripcion: "SARGENTO",
    cod_nivel_padre: "838",
    COD_NIVEL: "841",
    DESCRIPCION: "SARGENTO",
    COD_NIVEL_PADRE: "838"
  },
  {
    cod_nivel: "843",
    descripcion: "TIJERA",
    cod_nivel_padre: "842",
    COD_NIVEL: "843",
    DESCRIPCION: "TIJERA",
    COD_NIVEL_PADRE: "842"
  },
  {
    cod_nivel: "844",
    descripcion: "CUTTER",
    cod_nivel_padre: "842",
    COD_NIVEL: "844",
    DESCRIPCION: "CUTTER",
    COD_NIVEL_PADRE: "842"
  },
  {
    cod_nivel: "845",
    descripcion: "CORTATUBOS",
    cod_nivel_padre: "842",
    COD_NIVEL: "845",
    DESCRIPCION: "CORTATUBOS",
    COD_NIVEL_PADRE: "842"
  },
  {
    cod_nivel: "846",
    descripcion: "DETECTOR MATERIALES",
    cod_nivel_padre: "787",
    COD_NIVEL: "846",
    DESCRIPCION: "DETECTOR MATERIALES",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "847",
    descripcion: "OTRAS",
    cod_nivel_padre: "787",
    COD_NIVEL: "847",
    DESCRIPCION: "OTRAS",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "848",
    descripcion: "KIT HERRAMIENTAS VARIADAS",
    cod_nivel_padre: "787",
    COD_NIVEL: "848",
    DESCRIPCION: "KIT HERRAMIENTAS VARIADAS",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "851",
    descripcion: "TALADRO ELECTRICO",
    cod_nivel_padre: "850",
    COD_NIVEL: "851",
    DESCRIPCION: "TALADRO ELECTRICO",
    COD_NIVEL_PADRE: "850"
  },
  {
    cod_nivel: "852",
    descripcion: "TALADRO A BATERIA",
    cod_nivel_padre: "850",
    COD_NIVEL: "852",
    DESCRIPCION: "TALADRO A BATERIA",
    COD_NIVEL_PADRE: "850"
  },
  {
    cod_nivel: "853",
    descripcion: "ACCESORIO TALADRO",
    cod_nivel_padre: "850",
    COD_NIVEL: "853",
    DESCRIPCION: "ACCESORIO TALADRO",
    COD_NIVEL_PADRE: "850"
  },
  {
    cod_nivel: "855",
    descripcion: "MARTILLO ELECTRICO",
    cod_nivel_padre: "854",
    COD_NIVEL: "855",
    DESCRIPCION: "MARTILLO ELECTRICO",
    COD_NIVEL_PADRE: "854"
  },
  {
    cod_nivel: "856",
    descripcion: "MARTILLO A BATERIA",
    cod_nivel_padre: "854",
    COD_NIVEL: "856",
    DESCRIPCION: "MARTILLO A BATERIA",
    COD_NIVEL_PADRE: "854"
  },
  {
    cod_nivel: "857",
    descripcion: "MARTILLO NEUMATICO",
    cod_nivel_padre: "854",
    COD_NIVEL: "857",
    DESCRIPCION: "MARTILLO NEUMATICO",
    COD_NIVEL_PADRE: "854"
  },
  {
    cod_nivel: "858",
    descripcion: "ACCESORIO MARTILLO",
    cod_nivel_padre: "854",
    COD_NIVEL: "858",
    DESCRIPCION: "ACCESORIO MARTILLO",
    COD_NIVEL_PADRE: "854"
  },
  {
    cod_nivel: "860",
    descripcion: "ATORNILLADOR ELECTRICO",
    cod_nivel_padre: "859",
    COD_NIVEL: "860",
    DESCRIPCION: "ATORNILLADOR ELECTRICO",
    COD_NIVEL_PADRE: "859"
  },
  {
    cod_nivel: "861",
    descripcion: "ATORNILLADOR A BATERIA",
    cod_nivel_padre: "859",
    COD_NIVEL: "861",
    DESCRIPCION: "ATORNILLADOR A BATERIA",
    COD_NIVEL_PADRE: "859"
  },
  {
    cod_nivel: "863",
    descripcion: "SIERRA CALAR",
    cod_nivel_padre: "862",
    COD_NIVEL: "863",
    DESCRIPCION: "SIERRA CALAR",
    COD_NIVEL_PADRE: "862"
  },
  {
    cod_nivel: "864",
    descripcion: "SIERRA CIRCULAR",
    cod_nivel_padre: "862",
    COD_NIVEL: "864",
    DESCRIPCION: "SIERRA CIRCULAR",
    COD_NIVEL_PADRE: "862"
  },
  {
    cod_nivel: "865",
    descripcion: "SIERRA SABLE",
    cod_nivel_padre: "862",
    COD_NIVEL: "865",
    DESCRIPCION: "SIERRA SABLE",
    COD_NIVEL_PADRE: "862"
  },
  {
    cod_nivel: "866",
    descripcion: "INGLETADORA",
    cod_nivel_padre: "862",
    COD_NIVEL: "866",
    DESCRIPCION: "INGLETADORA",
    COD_NIVEL_PADRE: "862"
  },
  {
    cod_nivel: "867",
    descripcion: "SIERRA MARQUETERIA",
    cod_nivel_padre: "862",
    COD_NIVEL: "867",
    DESCRIPCION: "SIERRA MARQUETERIA",
    COD_NIVEL_PADRE: "862"
  },
  {
    cod_nivel: "868",
    descripcion: "ACCESORIO PARA SIERRA",
    cod_nivel_padre: "862",
    COD_NIVEL: "868",
    DESCRIPCION: "ACCESORIO PARA SIERRA",
    COD_NIVEL_PADRE: "862"
  },
  {
    cod_nivel: "870",
    descripcion: "LIJADORA BANDA",
    cod_nivel_padre: "869",
    COD_NIVEL: "870",
    DESCRIPCION: "LIJADORA BANDA",
    COD_NIVEL_PADRE: "869"
  },
  {
    cod_nivel: "871",
    descripcion: "LIJADORA DELTA",
    cod_nivel_padre: "869",
    COD_NIVEL: "871",
    DESCRIPCION: "LIJADORA DELTA",
    COD_NIVEL_PADRE: "869"
  },
  {
    cod_nivel: "872",
    descripcion: "LIJADORA EXCENTRICA",
    cod_nivel_padre: "869",
    COD_NIVEL: "872",
    DESCRIPCION: "LIJADORA EXCENTRICA",
    COD_NIVEL_PADRE: "869"
  },
  {
    cod_nivel: "873",
    descripcion: "LIJADORA ORBITAL",
    cod_nivel_padre: "869",
    COD_NIVEL: "873",
    DESCRIPCION: "LIJADORA ORBITAL",
    COD_NIVEL_PADRE: "869"
  },
  {
    cod_nivel: "874",
    descripcion: "MULTILIJADORA",
    cod_nivel_padre: "869",
    COD_NIVEL: "874",
    DESCRIPCION: "MULTILIJADORA",
    COD_NIVEL_PADRE: "869"
  },
  {
    cod_nivel: "875",
    descripcion: "ACCESORIOS LIJADORA",
    cod_nivel_padre: "869",
    COD_NIVEL: "875",
    DESCRIPCION: "ACCESORIOS LIJADORA",
    COD_NIVEL_PADRE: "869"
  },
  {
    cod_nivel: "876",
    descripcion: "FRESADORA",
    cod_nivel_padre: "849",
    COD_NIVEL: "876",
    DESCRIPCION: "FRESADORA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "877",
    descripcion: "CEPILLO ELECTRICO",
    cod_nivel_padre: "849",
    COD_NIVEL: "877",
    DESCRIPCION: "CEPILLO ELECTRICO",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "878",
    descripcion: "CLAVADORA",
    cod_nivel_padre: "849",
    COD_NIVEL: "878",
    DESCRIPCION: "CLAVADORA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "879",
    descripcion: "DECAPADORA",
    cod_nivel_padre: "849",
    COD_NIVEL: "879",
    DESCRIPCION: "DECAPADORA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "880",
    descripcion: "AMOLADORA",
    cod_nivel_padre: "849",
    COD_NIVEL: "880",
    DESCRIPCION: "AMOLADORA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "881",
    descripcion: "RADIAL",
    cod_nivel_padre: "880",
    COD_NIVEL: "881",
    DESCRIPCION: "RADIAL",
    COD_NIVEL_PADRE: "880"
  },
  {
    cod_nivel: "882",
    descripcion: "PULIDORA",
    cod_nivel_padre: "880",
    COD_NIVEL: "882",
    DESCRIPCION: "PULIDORA",
    COD_NIVEL_PADRE: "880"
  },
  {
    cod_nivel: "883",
    descripcion: "PUNZONADORA",
    cod_nivel_padre: "880",
    COD_NIVEL: "883",
    DESCRIPCION: "PUNZONADORA",
    COD_NIVEL_PADRE: "880"
  },
  {
    cod_nivel: "884",
    descripcion: "ROZADORA",
    cod_nivel_padre: "880",
    COD_NIVEL: "884",
    DESCRIPCION: "ROZADORA",
    COD_NIVEL_PADRE: "880"
  },
  {
    cod_nivel: "885",
    descripcion: "ESMERILADORA",
    cod_nivel_padre: "849",
    COD_NIVEL: "885",
    DESCRIPCION: "ESMERILADORA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "887",
    descripcion: "MULTIHERRAMIENTA",
    cod_nivel_padre: "886",
    COD_NIVEL: "887",
    DESCRIPCION: "MULTIHERRAMIENTA",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "888",
    descripcion: "GRABADORA",
    cod_nivel_padre: "886",
    COD_NIVEL: "888",
    DESCRIPCION: "GRABADORA",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "889",
    descripcion: "PIROGRAFO",
    cod_nivel_padre: "886",
    COD_NIVEL: "889",
    DESCRIPCION: "PIROGRAFO",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "890",
    descripcion: "LIJADORA",
    cod_nivel_padre: "886",
    COD_NIVEL: "890",
    DESCRIPCION: "LIJADORA",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "891",
    descripcion: "TORNO",
    cod_nivel_padre: "886",
    COD_NIVEL: "891",
    DESCRIPCION: "TORNO",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "893",
    descripcion: "ACCESORIOS",
    cod_nivel_padre: "886",
    COD_NIVEL: "893",
    DESCRIPCION: "ACCESORIOS",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "894",
    descripcion: "OTRAS",
    cod_nivel_padre: "849",
    COD_NIVEL: "894",
    DESCRIPCION: "OTRAS",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "897",
    descripcion: "SOPLETE",
    cod_nivel_padre: "896",
    COD_NIVEL: "897",
    DESCRIPCION: "SOPLETE",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "898",
    descripcion: "CURVATUBOS",
    cod_nivel_padre: "896",
    COD_NIVEL: "898",
    DESCRIPCION: "CURVATUBOS",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "899",
    descripcion: "MORDAZA DE CADENA",
    cod_nivel_padre: "896",
    COD_NIVEL: "899",
    DESCRIPCION: "MORDAZA DE CADENA",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "900",
    descripcion: "ABOCARDADORA",
    cod_nivel_padre: "896",
    COD_NIVEL: "900",
    DESCRIPCION: "ABOCARDADORA",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "901",
    descripcion: "LLAVE LAVABO",
    cod_nivel_padre: "896",
    COD_NIVEL: "901",
    DESCRIPCION: "LLAVE LAVABO",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "902",
    descripcion: "LLAVE CORREA",
    cod_nivel_padre: "896",
    COD_NIVEL: "902",
    DESCRIPCION: "LLAVE CORREA",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "903",
    descripcion: "DESATASCADOR",
    cod_nivel_padre: "896",
    COD_NIVEL: "903",
    DESCRIPCION: "DESATASCADOR",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "904",
    descripcion: "BOMBA DE VACIO",
    cod_nivel_padre: "896",
    COD_NIVEL: "904",
    DESCRIPCION: "BOMBA DE VACIO",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "905",
    descripcion: "OTRAS FONTANERIA",
    cod_nivel_padre: "896",
    COD_NIVEL: "905",
    DESCRIPCION: "OTRAS FONTANERIA",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "907",
    descripcion: "PLOMADA",
    cod_nivel_padre: "906",
    COD_NIVEL: "907",
    DESCRIPCION: "PLOMADA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "908",
    descripcion: "PALA",
    cod_nivel_padre: "906",
    COD_NIVEL: "908",
    DESCRIPCION: "PALA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "909",
    descripcion: "PICO",
    cod_nivel_padre: "906",
    COD_NIVEL: "909",
    DESCRIPCION: "PICO",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "910",
    descripcion: "PALETA",
    cod_nivel_padre: "906",
    COD_NIVEL: "910",
    DESCRIPCION: "PALETA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "911",
    descripcion: "CARRETILLA DE MANO",
    cod_nivel_padre: "906",
    COD_NIVEL: "911",
    DESCRIPCION: "CARRETILLA DE MANO",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "912",
    descripcion: "PALETIN",
    cod_nivel_padre: "906",
    COD_NIVEL: "912",
    DESCRIPCION: "PALETIN",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "913",
    descripcion: "LLANA",
    cod_nivel_padre: "906",
    COD_NIVEL: "913",
    DESCRIPCION: "LLANA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "914",
    descripcion: "PEINE CEMENTO COLA",
    cod_nivel_padre: "906",
    COD_NIVEL: "914",
    DESCRIPCION: "PEINE CEMENTO COLA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "915",
    descripcion: "RASPADOR",
    cod_nivel_padre: "906",
    COD_NIVEL: "915",
    DESCRIPCION: "RASPADOR",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "916",
    descripcion: "RASPIN",
    cod_nivel_padre: "906",
    COD_NIVEL: "916",
    DESCRIPCION: "RASPIN",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "917",
    descripcion: "RAEDERA",
    cod_nivel_padre: "906",
    COD_NIVEL: "917",
    DESCRIPCION: "RAEDERA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "918",
    descripcion: "FIJA",
    cod_nivel_padre: "906",
    COD_NIVEL: "918",
    DESCRIPCION: "FIJA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "919",
    descripcion: "RASCADOR",
    cod_nivel_padre: "906",
    COD_NIVEL: "919",
    DESCRIPCION: "RASCADOR",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "920",
    descripcion: "MAQUINA GOTELE",
    cod_nivel_padre: "906",
    COD_NIVEL: "920",
    DESCRIPCION: "MAQUINA GOTELE",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "921",
    descripcion: "REGLA",
    cod_nivel_padre: "906",
    COD_NIVEL: "921",
    DESCRIPCION: "REGLA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "922",
    descripcion: "CUBO",
    cod_nivel_padre: "906",
    COD_NIVEL: "922",
    DESCRIPCION: "CUBO",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "923",
    descripcion: "TAMIZ",
    cod_nivel_padre: "906",
    COD_NIVEL: "923",
    DESCRIPCION: "TAMIZ",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "924",
    descripcion: "CORTADORA AZULEJOS",
    cod_nivel_padre: "906",
    COD_NIVEL: "924",
    DESCRIPCION: "CORTADORA AZULEJOS",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "925",
    descripcion: "OTRAS ALBAÑILERIA",
    cod_nivel_padre: "906",
    COD_NIVEL: "925",
    DESCRIPCION: "OTRAS ALBAÑILERIA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "927",
    descripcion: "CORTA VIDRIOS",
    cod_nivel_padre: "926",
    COD_NIVEL: "927",
    DESCRIPCION: "CORTA VIDRIOS",
    COD_NIVEL_PADRE: "926"
  },
  {
    cod_nivel: "928",
    descripcion: "CORREAS CRISTALERO",
    cod_nivel_padre: "926",
    COD_NIVEL: "928",
    DESCRIPCION: "CORREAS CRISTALERO",
    COD_NIVEL_PADRE: "926"
  },
  {
    cod_nivel: "929",
    descripcion: "GUANTES CRISTALERO",
    cod_nivel_padre: "926",
    COD_NIVEL: "929",
    DESCRIPCION: "GUANTES CRISTALERO",
    COD_NIVEL_PADRE: "926"
  },
  {
    cod_nivel: "930",
    descripcion: "VENTOSAS",
    cod_nivel_padre: "926",
    COD_NIVEL: "930",
    DESCRIPCION: "VENTOSAS",
    COD_NIVEL_PADRE: "926"
  },
  {
    cod_nivel: "931",
    descripcion: "DISCO ABRASIVO",
    cod_nivel_padre: "926",
    COD_NIVEL: "931",
    DESCRIPCION: "DISCO ABRASIVO",
    COD_NIVEL_PADRE: "926"
  },
  {
    cod_nivel: "932",
    descripcion: "CORTA CIRCULOS",
    cod_nivel_padre: "926",
    COD_NIVEL: "932",
    DESCRIPCION: "CORTA CIRCULOS",
    COD_NIVEL_PADRE: "926"
  },
  {
    cod_nivel: "933",
    descripcion: "OTRAS CRISTALERIA",
    cod_nivel_padre: "926",
    COD_NIVEL: "933",
    DESCRIPCION: "OTRAS CRISTALERIA",
    COD_NIVEL_PADRE: "926"
  },
  {
    cod_nivel: "935",
    descripcion: "PINCEL",
    cod_nivel_padre: "934",
    COD_NIVEL: "935",
    DESCRIPCION: "PINCEL",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "936",
    descripcion: "BROCHA",
    cod_nivel_padre: "934",
    COD_NIVEL: "936",
    DESCRIPCION: "BROCHA",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "937",
    descripcion: "RODILLO",
    cod_nivel_padre: "934",
    COD_NIVEL: "937",
    DESCRIPCION: "RODILLO",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "938",
    descripcion: "BANDEJA RODILLO",
    cod_nivel_padre: "934",
    COD_NIVEL: "938",
    DESCRIPCION: "BANDEJA RODILLO",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "939",
    descripcion: "TUBO EXTENSION",
    cod_nivel_padre: "934",
    COD_NIVEL: "939",
    DESCRIPCION: "TUBO EXTENSION",
    COD_NIVEL_PADRE: "934"
  },
  {
    cod_nivel: "892",
    descripcion: "SIERRA",
    cod_nivel_padre: "886",
    COD_NIVEL: "892",
    DESCRIPCION: "SIERRA",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "946",
    descripcion: "LIMPIADORA ALTA PRESION",
    cod_nivel_padre: "942",
    COD_NIVEL: "946",
    DESCRIPCION: "LIMPIADORA ALTA PRESION",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "947",
    descripcion: "ESCARIFICADOR",
    cod_nivel_padre: "942",
    COD_NIVEL: "947",
    DESCRIPCION: "ESCARIFICADOR",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "948",
    descripcion: "MOTOAZADA",
    cod_nivel_padre: "942",
    COD_NIVEL: "948",
    DESCRIPCION: "MOTOAZADA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "949",
    descripcion: "MOTOSIERRA",
    cod_nivel_padre: "942",
    COD_NIVEL: "949",
    DESCRIPCION: "MOTOSIERRA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "950",
    descripcion: "DESBROZADORA",
    cod_nivel_padre: "942",
    COD_NIVEL: "950",
    DESCRIPCION: "DESBROZADORA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "951",
    descripcion: "SOPLADOR",
    cod_nivel_padre: "942",
    COD_NIVEL: "951",
    DESCRIPCION: "SOPLADOR",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "952",
    descripcion: "BIOTRITURADOR",
    cod_nivel_padre: "942",
    COD_NIVEL: "952",
    DESCRIPCION: "BIOTRITURADOR",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "953",
    descripcion: "OTROS JARDINERIA",
    cod_nivel_padre: "942",
    COD_NIVEL: "953",
    DESCRIPCION: "OTROS JARDINERIA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "955",
    descripcion: "BROCAS",
    cod_nivel_padre: "954",
    COD_NIVEL: "955",
    DESCRIPCION: "BROCAS",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "956",
    descripcion: "HOJAS SIERRA",
    cod_nivel_padre: "954",
    COD_NIVEL: "956",
    DESCRIPCION: "HOJAS SIERRA",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "957",
    descripcion: "MUELAS",
    cod_nivel_padre: "954",
    COD_NIVEL: "957",
    DESCRIPCION: "MUELAS",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "958",
    descripcion: "LIMAS",
    cod_nivel_padre: "954",
    COD_NIVEL: "958",
    DESCRIPCION: "LIMAS",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "959",
    descripcion: "LIJAS",
    cod_nivel_padre: "954",
    COD_NIVEL: "959",
    DESCRIPCION: "LIJAS",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "960",
    descripcion: "ACEITE LUBRICANTE",
    cod_nivel_padre: "954",
    COD_NIVEL: "960",
    DESCRIPCION: "ACEITE LUBRICANTE",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "961",
    descripcion: "CEPILLOS",
    cod_nivel_padre: "954",
    COD_NIVEL: "961",
    DESCRIPCION: "CEPILLOS",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "962",
    descripcion: "ENSAMBLAJE",
    cod_nivel_padre: "954",
    COD_NIVEL: "962",
    DESCRIPCION: "ENSAMBLAJE",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "963",
    descripcion: "OTROS CONSUMIBLES",
    cod_nivel_padre: "954",
    COD_NIVEL: "963",
    DESCRIPCION: "OTROS CONSUMIBLES",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "964",
    descripcion: "DISCOS",
    cod_nivel_padre: "954",
    COD_NIVEL: "964",
    DESCRIPCION: "DISCOS",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "965",
    descripcion: "MANDRILES",
    cod_nivel_padre: "954",
    COD_NIVEL: "965",
    DESCRIPCION: "MANDRILES",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "966",
    descripcion: "CORONA",
    cod_nivel_padre: "954",
    COD_NIVEL: "966",
    DESCRIPCION: "CORONA",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "967",
    descripcion: "FRESA",
    cod_nivel_padre: "954",
    COD_NIVEL: "967",
    DESCRIPCION: "FRESA",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "968",
    descripcion: "BATERIA",
    cod_nivel_padre: "954",
    COD_NIVEL: "968",
    DESCRIPCION: "BATERIA",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "969",
    descripcion: "CARGADOR",
    cod_nivel_padre: "954",
    COD_NIVEL: "969",
    DESCRIPCION: "CARGADOR",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "970",
    descripcion: "SILICONA",
    cod_nivel_padre: "954",
    COD_NIVEL: "970",
    DESCRIPCION: "SILICONA",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "972",
    descripcion: "YUNQUE",
    cod_nivel_padre: "971",
    COD_NIVEL: "972",
    DESCRIPCION: "YUNQUE",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "973",
    descripcion: "MESA TRABAJO",
    cod_nivel_padre: "971",
    COD_NIVEL: "973",
    DESCRIPCION: "MESA TRABAJO",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "974",
    descripcion: "MOBILIARIO TALLER",
    cod_nivel_padre: "971",
    COD_NIVEL: "974",
    DESCRIPCION: "MOBILIARIO TALLER",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "975",
    descripcion: "ACCESORIOS TALLER",
    cod_nivel_padre: "971",
    COD_NIVEL: "975",
    DESCRIPCION: "ACCESORIOS TALLER",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "976",
    descripcion: "TALADRO COLUMNA",
    cod_nivel_padre: "971",
    COD_NIVEL: "976",
    DESCRIPCION: "TALADRO COLUMNA",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "977",
    descripcion: "ASPIRADOR TALLER",
    cod_nivel_padre: "971",
    COD_NIVEL: "977",
    DESCRIPCION: "ASPIRADOR TALLER",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "978",
    descripcion: "COMPRESOR",
    cod_nivel_padre: "971",
    COD_NIVEL: "978",
    DESCRIPCION: "COMPRESOR",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "979",
    descripcion: "CARRETILLA",
    cod_nivel_padre: "971",
    COD_NIVEL: "979",
    DESCRIPCION: "CARRETILLA",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "980",
    descripcion: "ANDAMIO",
    cod_nivel_padre: "971",
    COD_NIVEL: "980",
    DESCRIPCION: "ANDAMIO",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "981",
    descripcion: "ESCALERA",
    cod_nivel_padre: "971",
    COD_NIVEL: "981",
    DESCRIPCION: "ESCALERA",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "982",
    descripcion: "TABURETE",
    cod_nivel_padre: "971",
    COD_NIVEL: "982",
    DESCRIPCION: "TABURETE",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "983",
    descripcion: "GENERADOR ELECTRICIDAD",
    cod_nivel_padre: "971",
    COD_NIVEL: "983",
    DESCRIPCION: "GENERADOR ELECTRICIDAD",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "984",
    descripcion: "POLIPASTO",
    cod_nivel_padre: "971",
    COD_NIVEL: "984",
    DESCRIPCION: "POLIPASTO",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "985",
    descripcion: "CABESTRANTE",
    cod_nivel_padre: "971",
    COD_NIVEL: "985",
    DESCRIPCION: "CABESTRANTE",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "987",
    descripcion: "EQUIPO SOLDADURA",
    cod_nivel_padre: "986",
    COD_NIVEL: "987",
    DESCRIPCION: "EQUIPO SOLDADURA",
    COD_NIVEL_PADRE: "986"
  },
  {
    cod_nivel: "988",
    descripcion: "SOLDADOR",
    cod_nivel_padre: "986",
    COD_NIVEL: "988",
    DESCRIPCION: "SOLDADOR",
    COD_NIVEL_PADRE: "986"
  },
  {
    cod_nivel: "989",
    descripcion: "DESOLDADOR",
    cod_nivel_padre: "986",
    COD_NIVEL: "989",
    DESCRIPCION: "DESOLDADOR",
    COD_NIVEL_PADRE: "986"
  },
  {
    cod_nivel: "990",
    descripcion: "ACCESORIO SOLDADURA",
    cod_nivel_padre: "986",
    COD_NIVEL: "990",
    DESCRIPCION: "ACCESORIO SOLDADURA",
    COD_NIVEL_PADRE: "986"
  },
  {
    cod_nivel: "991",
    descripcion: "PISTOLA SILICONA",
    cod_nivel_padre: "971",
    COD_NIVEL: "991",
    DESCRIPCION: "PISTOLA SILICONA",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "992",
    descripcion: "CAJA HERRAMIENTAS",
    cod_nivel_padre: "971",
    COD_NIVEL: "992",
    DESCRIPCION: "CAJA HERRAMIENTAS",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "993",
    descripcion: "OTROS EQUIPAMIENTO",
    cod_nivel_padre: "971",
    COD_NIVEL: "993",
    DESCRIPCION: "OTROS EQUIPAMIENTO",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "995",
    descripcion: "ARNES SEGURIDAD",
    cod_nivel_padre: "994",
    COD_NIVEL: "995",
    DESCRIPCION: "ARNES SEGURIDAD",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "996",
    descripcion: "TAPONES OIDO",
    cod_nivel_padre: "994",
    COD_NIVEL: "996",
    DESCRIPCION: "TAPONES OIDO",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "997",
    descripcion: "CASCO PROTECCION RUIDO",
    cod_nivel_padre: "994",
    COD_NIVEL: "997",
    DESCRIPCION: "CASCO PROTECCION RUIDO",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "998",
    descripcion: "CASCO OBRA",
    cod_nivel_padre: "994",
    COD_NIVEL: "998",
    DESCRIPCION: "CASCO OBRA",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "999",
    descripcion: "CALZADO SEGURIDAD",
    cod_nivel_padre: "994",
    COD_NIVEL: "999",
    DESCRIPCION: "CALZADO SEGURIDAD",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "1000",
    descripcion: "GUANTE TRABAJO",
    cod_nivel_padre: "994",
    COD_NIVEL: "1000",
    DESCRIPCION: "GUANTE TRABAJO",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "1001",
    descripcion: "GAFAS PROTECCION",
    cod_nivel_padre: "994",
    COD_NIVEL: "1001",
    DESCRIPCION: "GAFAS PROTECCION",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "1002",
    descripcion: "MASCARA DE PROTECCION",
    cod_nivel_padre: "994",
    COD_NIVEL: "1002",
    DESCRIPCION: "MASCARA DE PROTECCION",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "1003",
    descripcion: "ROPA TRABAJO",
    cod_nivel_padre: "994",
    COD_NIVEL: "1003",
    DESCRIPCION: "ROPA TRABAJO",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "1004",
    descripcion: "OTROS PROTECCION",
    cod_nivel_padre: "994",
    COD_NIVEL: "1004",
    DESCRIPCION: "OTROS PROTECCION",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "1006",
    descripcion: "CUADRO ELECTRICO",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1006",
    DESCRIPCION: "CUADRO ELECTRICO",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1007",
    descripcion: "FUSIBLE",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1007",
    DESCRIPCION: "FUSIBLE",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1008",
    descripcion: "TRANSFORMADOR",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1008",
    DESCRIPCION: "TRANSFORMADOR",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1009",
    descripcion: "CONVERTIDOR",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1009",
    DESCRIPCION: "CONVERTIDOR",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1010",
    descripcion: "PROLONGADOR",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1010",
    DESCRIPCION: "PROLONGADOR",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1011",
    descripcion: "ENROLLACABLES",
    cod_nivel_padre: "5158",
    COD_NIVEL: "1011",
    DESCRIPCION: "ENROLLACABLES",
    COD_NIVEL_PADRE: "5158"
  },
  {
    cod_nivel: "1012",
    descripcion: "BASE MULTIPLE",
    cod_nivel_padre: "5158",
    COD_NIVEL: "1012",
    DESCRIPCION: "BASE MULTIPLE",
    COD_NIVEL_PADRE: "5158"
  },
  {
    cod_nivel: "1013",
    descripcion: "MECANISMO ELECTRICO",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1013",
    DESCRIPCION: "MECANISMO ELECTRICO",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1014",
    descripcion: "CABLES",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1014",
    DESCRIPCION: "CABLES",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1015",
    descripcion: "CABLE INTERIOR",
    cod_nivel_padre: "5158",
    COD_NIVEL: "1015",
    DESCRIPCION: "CABLE INTERIOR",
    COD_NIVEL_PADRE: "5158"
  },
  {
    cod_nivel: "1016",
    descripcion: "CABLE EXTERIOR",
    cod_nivel_padre: "5158",
    COD_NIVEL: "1016",
    DESCRIPCION: "CABLE EXTERIOR",
    COD_NIVEL_PADRE: "5158"
  },
  {
    cod_nivel: "1021",
    descripcion: "MULTIPLICADOR",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1021",
    DESCRIPCION: "MULTIPLICADOR",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1022",
    descripcion: "CASQUILLO",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1022",
    DESCRIPCION: "CASQUILLO",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1023",
    descripcion: "PASAHILOS",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1023",
    DESCRIPCION: "PASAHILOS",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1024",
    descripcion: "OTROS ELECTRICIDAD",
    cod_nivel_padre: "1005",
    COD_NIVEL: "1024",
    DESCRIPCION: "OTROS ELECTRICIDAD",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "1025",
    descripcion: "HERRAMIENTA MASIVA",
    cod_nivel_padre: "786",
    COD_NIVEL: "1025",
    DESCRIPCION: "HERRAMIENTA MASIVA",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "1027",
    descripcion: "PELICULA DVD",
    cod_nivel_padre: "1026",
    COD_NIVEL: "1027",
    DESCRIPCION: "PELICULA DVD",
    COD_NIVEL_PADRE: "1026"
  },
  {
    cod_nivel: "1028",
    descripcion: "PELICULA VHS",
    cod_nivel_padre: "1026",
    COD_NIVEL: "1028",
    DESCRIPCION: "PELICULA VHS",
    COD_NIVEL_PADRE: "1026"
  },
  {
    cod_nivel: "1029",
    descripcion: "PELICULA BLURAY",
    cod_nivel_padre: "1026",
    COD_NIVEL: "1029",
    DESCRIPCION: "PELICULA BLURAY",
    COD_NIVEL_PADRE: "1026"
  },
  {
    cod_nivel: "1030",
    descripcion: "PELICULA SUPER 8",
    cod_nivel_padre: "1026",
    COD_NIVEL: "1030",
    DESCRIPCION: "PELICULA SUPER 8",
    COD_NIVEL_PADRE: "1026"
  },
  {
    cod_nivel: "1031",
    descripcion: "OTROS FORMATOS",
    cod_nivel_padre: "1026",
    COD_NIVEL: "1031",
    DESCRIPCION: "OTROS FORMATOS",
    COD_NIVEL_PADRE: "1026"
  },
  {
    cod_nivel: "1034",
    descripcion: "ACEITES",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1034",
    DESCRIPCION: "ACEITES",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1035",
    descripcion: "KIT ALARMA AUTOMOVIL",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1035",
    DESCRIPCION: "KIT ALARMA AUTOMOVIL",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1036",
    descripcion: "ALCOHOLIMETRO",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1036",
    DESCRIPCION: "ALCOHOLIMETRO",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1037",
    descripcion: "ALFOMBRAS",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1037",
    DESCRIPCION: "ALFOMBRAS",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1038",
    descripcion: "ANTIRROBO",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1038",
    DESCRIPCION: "ANTIRROBO",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1039",
    descripcion: "BACA",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1039",
    DESCRIPCION: "BACA",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1040",
    descripcion: "CADENA NIEVE",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1040",
    DESCRIPCION: "CADENA NIEVE",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1041",
    descripcion: "CONVERTIDOR",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1041",
    DESCRIPCION: "CONVERTIDOR",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1042",
    descripcion: "COMPRESOR PORTATIL",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1042",
    DESCRIPCION: "COMPRESOR PORTATIL",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1043",
    descripcion: "KIT MANOS LIBRES",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1043",
    DESCRIPCION: "KIT MANOS LIBRES",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1044",
    descripcion: "ARTICULO LIMPIEZA",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1044",
    DESCRIPCION: "ARTICULO LIMPIEZA",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1045",
    descripcion: "LLANTAS",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1045",
    DESCRIPCION: "LLANTAS",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1046",
    descripcion: "SENSOR APARCAMIENTO",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1046",
    DESCRIPCION: "SENSOR APARCAMIENTO",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1047",
    descripcion: "TRIANGULO EMERGENCIA",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1047",
    DESCRIPCION: "TRIANGULO EMERGENCIA",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1049",
    descripcion: "GATO",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1049",
    DESCRIPCION: "GATO",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1050",
    descripcion: "BOTIQUIN EMERGENCIA",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1050",
    DESCRIPCION: "BOTIQUIN EMERGENCIA",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1051",
    descripcion: "EXTINTOR VEHICULO",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1051",
    DESCRIPCION: "EXTINTOR VEHICULO",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1052",
    descripcion: "ACCESORIO TUNNING",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1052",
    DESCRIPCION: "ACCESORIO TUNNING",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1053",
    descripcion: "ACCESORIO TODOTERRENO",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1053",
    DESCRIPCION: "ACCESORIO TODOTERRENO",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1054",
    descripcion: "OTROS ACCESORIOS",
    cod_nivel_padre: "1033",
    COD_NIVEL: "1054",
    DESCRIPCION: "OTROS ACCESORIOS",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "1056",
    descripcion: "AUTORRADIO",
    cod_nivel_padre: "1055",
    COD_NIVEL: "1056",
    DESCRIPCION: "AUTORRADIO",
    COD_NIVEL_PADRE: "1055"
  },
  {
    cod_nivel: "1057",
    descripcion: "AMPLIFICADOR",
    cod_nivel_padre: "1055",
    COD_NIVEL: "1057",
    DESCRIPCION: "AMPLIFICADOR",
    COD_NIVEL_PADRE: "1055"
  },
  {
    cod_nivel: "1058",
    descripcion: "ALTAVOCES",
    cod_nivel_padre: "1055",
    COD_NIVEL: "1058",
    DESCRIPCION: "ALTAVOCES",
    COD_NIVEL_PADRE: "1055"
  },
  {
    cod_nivel: "1059",
    descripcion: "SISTEMA VIDEO Y DVD",
    cod_nivel_padre: "1055",
    COD_NIVEL: "1059",
    DESCRIPCION: "SISTEMA VIDEO Y DVD",
    COD_NIVEL_PADRE: "1055"
  },
  {
    cod_nivel: "1060",
    descripcion: "SUBWOOFERS",
    cod_nivel_padre: "1055",
    COD_NIVEL: "1060",
    DESCRIPCION: "SUBWOOFERS",
    COD_NIVEL_PADRE: "1055"
  },
  {
    cod_nivel: "1061",
    descripcion: "CAPACITADOR",
    cod_nivel_padre: "1055",
    COD_NIVEL: "1061",
    DESCRIPCION: "CAPACITADOR",
    COD_NIVEL_PADRE: "1055"
  },
  {
    cod_nivel: "1063",
    descripcion: "SISTEMA NAVEGACION GPS",
    cod_nivel_padre: "1062",
    COD_NIVEL: "1063",
    DESCRIPCION: "SISTEMA NAVEGACION GPS",
    COD_NIVEL_PADRE: "1062"
  },
  {
    cod_nivel: "1064",
    descripcion: "LOCALIZADOR GPS",
    cod_nivel_padre: "1062",
    COD_NIVEL: "1064",
    DESCRIPCION: "LOCALIZADOR GPS",
    COD_NIVEL_PADRE: "1062"
  },
  {
    cod_nivel: "1065",
    descripcion: "ACCESORIO GPS",
    cod_nivel_padre: "1062",
    COD_NIVEL: "1065",
    DESCRIPCION: "ACCESORIO GPS",
    COD_NIVEL_PADRE: "1062"
  },
  {
    cod_nivel: "1066",
    descripcion: "MAPA GPS",
    cod_nivel_padre: "1062",
    COD_NIVEL: "1066",
    DESCRIPCION: "MAPA GPS",
    COD_NIVEL_PADRE: "1062"
  },
  {
    cod_nivel: "1067",
    descripcion: "AVISADOR RADAR",
    cod_nivel_padre: "1062",
    COD_NIVEL: "1067",
    DESCRIPCION: "AVISADOR RADAR",
    COD_NIVEL_PADRE: "1062"
  },
  {
    cod_nivel: "1069",
    descripcion: "ACCESORIO MOTO",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1069",
    DESCRIPCION: "ACCESORIO MOTO",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1071",
    descripcion: "CHAQUETA MOTORISTA",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1071",
    DESCRIPCION: "CHAQUETA MOTORISTA",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "943",
    descripcion: "CORTACESPED",
    cod_nivel_padre: "942",
    COD_NIVEL: "943",
    DESCRIPCION: "CORTACESPED",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "945",
    descripcion: "CORTASETOS",
    cod_nivel_padre: "942",
    COD_NIVEL: "945",
    DESCRIPCION: "CORTASETOS",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "1072",
    descripcion: "CAMISETA OFF ROAD",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1072",
    DESCRIPCION: "CAMISETA OFF ROAD",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1073",
    descripcion: "GORRA",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1073",
    DESCRIPCION: "GORRA",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1074",
    descripcion: "GUANTES MOTORISTA",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1074",
    DESCRIPCION: "GUANTES MOTORISTA",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1075",
    descripcion: "PANTALON MOTORISTA",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1075",
    DESCRIPCION: "PANTALON MOTORISTA",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1076",
    descripcion: "BOTAS MOTORISTA",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1076",
    DESCRIPCION: "BOTAS MOTORISTA",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1077",
    descripcion: "PROTECCION MOTORISTA",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1077",
    DESCRIPCION: "PROTECCION MOTORISTA",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1078",
    descripcion: "ROPTA TERMICA",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1078",
    DESCRIPCION: "ROPTA TERMICA",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1079",
    descripcion: "TRAJE MONO",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1079",
    DESCRIPCION: "TRAJE MONO",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1080",
    descripcion: "IMPERMEABLE",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1080",
    DESCRIPCION: "IMPERMEABLE",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1081",
    descripcion: "OTROS ",
    cod_nivel_padre: "1070",
    COD_NIVEL: "1081",
    DESCRIPCION: "OTROS ",
    COD_NIVEL_PADRE: "1070"
  },
  {
    cod_nivel: "1083",
    descripcion: "CASCO ABATIBLE",
    cod_nivel_padre: "1082",
    COD_NIVEL: "1083",
    DESCRIPCION: "CASCO ABATIBLE",
    COD_NIVEL_PADRE: "1082"
  },
  {
    cod_nivel: "1084",
    descripcion: "CASCO CONVERTIBLE",
    cod_nivel_padre: "1082",
    COD_NIVEL: "1084",
    DESCRIPCION: "CASCO CONVERTIBLE",
    COD_NIVEL_PADRE: "1082"
  },
  {
    cod_nivel: "1085",
    descripcion: "CASCO INTEGRAL",
    cod_nivel_padre: "1082",
    COD_NIVEL: "1085",
    DESCRIPCION: "CASCO INTEGRAL",
    COD_NIVEL_PADRE: "1082"
  },
  {
    cod_nivel: "1086",
    descripcion: "CASCO JET",
    cod_nivel_padre: "1082",
    COD_NIVEL: "1086",
    DESCRIPCION: "CASCO JET",
    COD_NIVEL_PADRE: "1082"
  },
  {
    cod_nivel: "1087",
    descripcion: "RECAMBIO CASCOS",
    cod_nivel_padre: "1082",
    COD_NIVEL: "1087",
    DESCRIPCION: "RECAMBIO CASCOS",
    COD_NIVEL_PADRE: "1082"
  },
  {
    cod_nivel: "1088",
    descripcion: "GAFAS MOTORISTA",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1088",
    DESCRIPCION: "GAFAS MOTORISTA",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1090",
    descripcion: "BOLSO MOTORISTA",
    cod_nivel_padre: "1089",
    COD_NIVEL: "1090",
    DESCRIPCION: "BOLSO MOTORISTA",
    COD_NIVEL_PADRE: "1089"
  },
  {
    cod_nivel: "1091",
    descripcion: "MOCHILA MOTORISTA",
    cod_nivel_padre: "1089",
    COD_NIVEL: "1091",
    DESCRIPCION: "MOCHILA MOTORISTA",
    COD_NIVEL_PADRE: "1089"
  },
  {
    cod_nivel: "1092",
    descripcion: "RIÑONERA MOTORISTA",
    cod_nivel_padre: "1089",
    COD_NIVEL: "1092",
    DESCRIPCION: "RIÑONERA MOTORISTA",
    COD_NIVEL_PADRE: "1089"
  },
  {
    cod_nivel: "1094",
    descripcion: "INTERCOMUNICADOR",
    cod_nivel_padre: "1093",
    COD_NIVEL: "1094",
    DESCRIPCION: "INTERCOMUNICADOR",
    COD_NIVEL_PADRE: "1093"
  },
  {
    cod_nivel: "1095",
    descripcion: "ACCESORIO INTERCOMUNICADOR",
    cod_nivel_padre: "1093",
    COD_NIVEL: "1095",
    DESCRIPCION: "ACCESORIO INTERCOMUNICADOR",
    COD_NIVEL_PADRE: "1093"
  },
  {
    cod_nivel: "1096",
    descripcion: "OTROS CAR AUDIO",
    cod_nivel_padre: "1055",
    COD_NIVEL: "1096",
    DESCRIPCION: "OTROS CAR AUDIO",
    COD_NIVEL_PADRE: "1055"
  },
  {
    cod_nivel: "1097",
    descripcion: "OTROS GPS",
    cod_nivel_padre: "1062",
    COD_NIVEL: "1097",
    DESCRIPCION: "OTROS GPS",
    COD_NIVEL_PADRE: "1062"
  },
  {
    cod_nivel: "1099",
    descripcion: "ACCESORIO QUAD",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1099",
    DESCRIPCION: "ACCESORIO QUAD",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1100",
    descripcion: "ACCESORIO KART",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1100",
    DESCRIPCION: "ACCESORIO KART",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1101",
    descripcion: "ACCESORIO SCOOTER",
    cod_nivel_padre: "1068",
    COD_NIVEL: "1101",
    DESCRIPCION: "ACCESORIO SCOOTER",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "1102",
    descripcion: "ACCESORIO BARCO",
    cod_nivel_padre: "261",
    COD_NIVEL: "1102",
    DESCRIPCION: "ACCESORIO BARCO",
    COD_NIVEL_PADRE: "261"
  },
  {
    cod_nivel: "1104",
    descripcion: "COLECCIONISMO VINTAGE",
    cod_nivel_padre: "1103",
    COD_NIVEL: "1104",
    DESCRIPCION: "COLECCIONISMO VINTAGE",
    COD_NIVEL_PADRE: "1103"
  },
  {
    cod_nivel: "1106",
    descripcion: "JUEGO PC",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1106",
    DESCRIPCION: "JUEGO PC",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1107",
    descripcion: "JOYSTICK PC",
    cod_nivel_padre: "5129",
    COD_NIVEL: "1107",
    DESCRIPCION: "JOYSTICK PC",
    COD_NIVEL_PADRE: "5129"
  },
  {
    cod_nivel: "1108",
    descripcion: "CONTROL PAD PC",
    cod_nivel_padre: "5129",
    COD_NIVEL: "1108",
    DESCRIPCION: "CONTROL PAD PC",
    COD_NIVEL_PADRE: "5129"
  },
  {
    cod_nivel: "1109",
    descripcion: "VOLANTE PC",
    cod_nivel_padre: "5129",
    COD_NIVEL: "1109",
    DESCRIPCION: "VOLANTE PC",
    COD_NIVEL_PADRE: "5129"
  },
  {
    cod_nivel: "1110",
    descripcion: "MAQUINA RECREATIVA",
    cod_nivel_padre: "1103",
    COD_NIVEL: "1110",
    DESCRIPCION: "MAQUINA RECREATIVA",
    COD_NIVEL_PADRE: "1103"
  },
  {
    cod_nivel: "1112",
    descripcion: "ACCESORIO DS",
    cod_nivel_padre: "5117",
    COD_NIVEL: "1112",
    DESCRIPCION: "ACCESORIO DS",
    COD_NIVEL_PADRE: "5117"
  },
  {
    cod_nivel: "1113",
    descripcion: "NINTENDO SERIE DS",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1113",
    DESCRIPCION: "NINTENDO SERIE DS",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1118",
    descripcion: "JUEGO NINTENDO DS",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1118",
    DESCRIPCION: "JUEGO NINTENDO DS",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1121",
    descripcion: " OTROS ACCESORIO WII",
    cod_nivel_padre: "5118",
    COD_NIVEL: "1121",
    DESCRIPCION: " OTROS ACCESORIO WII",
    COD_NIVEL_PADRE: "5118"
  },
  {
    cod_nivel: "1123",
    descripcion: "WIIMOTE",
    cod_nivel_padre: "2160",
    COD_NIVEL: "1123",
    DESCRIPCION: "WIIMOTE",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "1124",
    descripcion: "NUNCHUCK",
    cod_nivel_padre: "2160",
    COD_NIVEL: "1124",
    DESCRIPCION: "NUNCHUCK",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "1125",
    descripcion: "WII FIT",
    cod_nivel_padre: "2160",
    COD_NIVEL: "1125",
    DESCRIPCION: "WII FIT",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "1126",
    descripcion: "JUEGO WII",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1126",
    DESCRIPCION: "JUEGO WII",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1128",
    descripcion: "ACCESORIO GAMECUBE",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1128",
    DESCRIPCION: "ACCESORIO GAMECUBE",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1129",
    descripcion: "CONSOLA GAMECUBE",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1129",
    DESCRIPCION: "CONSOLA GAMECUBE",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1130",
    descripcion: "MANDO GAMECUBE",
    cod_nivel_padre: "5115",
    COD_NIVEL: "1130",
    DESCRIPCION: "MANDO GAMECUBE",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "1131",
    descripcion: "JUEGO GAMECUBE",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1131",
    DESCRIPCION: "JUEGO GAMECUBE",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1133",
    descripcion: "ACCESORIO NINTENDO 64",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1133",
    DESCRIPCION: "ACCESORIO NINTENDO 64",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1134",
    descripcion: "CONSOLA NINTENDO 64",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1134",
    DESCRIPCION: "CONSOLA NINTENDO 64",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1135",
    descripcion: "MANDO NINTENDO 64",
    cod_nivel_padre: "5115",
    COD_NIVEL: "1135",
    DESCRIPCION: "MANDO NINTENDO 64",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "1136",
    descripcion: "JUEGO NINTENDO 64",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1136",
    DESCRIPCION: "JUEGO NINTENDO 64",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1138",
    descripcion: "ACCESORIO GAMEBOY",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1138",
    DESCRIPCION: "ACCESORIO GAMEBOY",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1139",
    descripcion: "CONSOLA GAMEBOY",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1139",
    DESCRIPCION: "CONSOLA GAMEBOY",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1140",
    descripcion: "JUEGO GAMEBOY",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1140",
    DESCRIPCION: "JUEGO GAMEBOY",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1142",
    descripcion: "ACCESORIO SNES",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1142",
    DESCRIPCION: "ACCESORIO SNES",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1143",
    descripcion: "CONSOLA SNES",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1143",
    DESCRIPCION: "CONSOLA SNES",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1144",
    descripcion: "JUEGO SNES",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1144",
    DESCRIPCION: "JUEGO SNES",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1146",
    descripcion: "ACCESORIO NES",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1146",
    DESCRIPCION: "ACCESORIO NES",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1147",
    descripcion: "CONSOLA NES",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1147",
    DESCRIPCION: "CONSOLA NES",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1148",
    descripcion: "JUEGO NES",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1148",
    DESCRIPCION: "JUEGO NES",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1149",
    descripcion: "OTROS ACCESORIOS NINTENDO",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1149",
    DESCRIPCION: "OTROS ACCESORIOS NINTENDO",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1151",
    descripcion: "ACCESORIO PS1",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1151",
    DESCRIPCION: "ACCESORIO PS1",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1152",
    descripcion: "CONSOLA PS1",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1152",
    DESCRIPCION: "CONSOLA PS1",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1155",
    descripcion: "MANDO PS1",
    cod_nivel_padre: "5115",
    COD_NIVEL: "1155",
    DESCRIPCION: "MANDO PS1",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "1156",
    descripcion: "MEMORY CARD PS1",
    cod_nivel_padre: "5152",
    COD_NIVEL: "1156",
    DESCRIPCION: "MEMORY CARD PS1",
    COD_NIVEL_PADRE: "5152"
  },
  {
    cod_nivel: "1157",
    descripcion: "JUEGO PS1",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1157",
    DESCRIPCION: "JUEGO PS1",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1159",
    descripcion: "ACCESORIO PS2",
    cod_nivel_padre: "5119",
    COD_NIVEL: "1159",
    DESCRIPCION: "ACCESORIO PS2",
    COD_NIVEL_PADRE: "5119"
  },
  {
    cod_nivel: "1160",
    descripcion: "CONSOLA PS2",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1160",
    DESCRIPCION: "CONSOLA PS2",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1163",
    descripcion: "MANDO PS2",
    cod_nivel_padre: "5130",
    COD_NIVEL: "1163",
    DESCRIPCION: "MANDO PS2",
    COD_NIVEL_PADRE: "5130"
  },
  {
    cod_nivel: "1164",
    descripcion: "MEMORY CARD PS2",
    cod_nivel_padre: "5152",
    COD_NIVEL: "1164",
    DESCRIPCION: "MEMORY CARD PS2",
    COD_NIVEL_PADRE: "5152"
  },
  {
    cod_nivel: "1165",
    descripcion: "VOLANTE PS2",
    cod_nivel_padre: "5130",
    COD_NIVEL: "1165",
    DESCRIPCION: "VOLANTE PS2",
    COD_NIVEL_PADRE: "5130"
  },
  {
    cod_nivel: "1166",
    descripcion: "MULTITAP",
    cod_nivel_padre: "5119",
    COD_NIVEL: "1166",
    DESCRIPCION: "MULTITAP",
    COD_NIVEL_PADRE: "5119"
  },
  {
    cod_nivel: "1167",
    descripcion: "JUEGO PS2",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1167",
    DESCRIPCION: "JUEGO PS2",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1169",
    descripcion: "OTROS ACCESORIO PS3",
    cod_nivel_padre: "5120",
    COD_NIVEL: "1169",
    DESCRIPCION: "OTROS ACCESORIO PS3",
    COD_NIVEL_PADRE: "5120"
  },
  {
    cod_nivel: "1170",
    descripcion: "CONSOLA PS3",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1170",
    DESCRIPCION: "CONSOLA PS3",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1173",
    descripcion: "MANDO PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "1173",
    DESCRIPCION: "MANDO PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "1174",
    descripcion: "VOLANTE PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "1174",
    DESCRIPCION: "VOLANTE PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "1175",
    descripcion: "JUEGO PS3",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1175",
    DESCRIPCION: "JUEGO PS3",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1177",
    descripcion: "ACCESORIO PSP",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1177",
    DESCRIPCION: "ACCESORIO PSP",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1178",
    descripcion: "CONSOLA PSP",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1178",
    DESCRIPCION: "CONSOLA PSP",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1184",
    descripcion: "JUEGO PSP",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1184",
    DESCRIPCION: "JUEGO PSP",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1185",
    descripcion: "PELICULA UMD PSP",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1185",
    DESCRIPCION: "PELICULA UMD PSP",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1189",
    descripcion: "CONSOLA DREAMCAST",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1189",
    DESCRIPCION: "CONSOLA DREAMCAST",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1190",
    descripcion: "JUEGO DREAMCAST",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1190",
    DESCRIPCION: "JUEGO DREAMCAST",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1192",
    descripcion: "CONSOLA GAMEGEAR",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1192",
    DESCRIPCION: "CONSOLA GAMEGEAR",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1193",
    descripcion: "JUEGO GAMEGEAR",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1193",
    DESCRIPCION: "JUEGO GAMEGEAR",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1195",
    descripcion: "CONSOLA MASTER SYSTEM",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1195",
    DESCRIPCION: "CONSOLA MASTER SYSTEM",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1196",
    descripcion: "JUEGO MASTER SYSTEM",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1196",
    DESCRIPCION: "JUEGO MASTER SYSTEM",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1198",
    descripcion: "CONSOLA MEGADRIVE",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1198",
    DESCRIPCION: "CONSOLA MEGADRIVE",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1199",
    descripcion: "JUEGO MEGADRIVE",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1199",
    DESCRIPCION: "JUEGO MEGADRIVE",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1201",
    descripcion: "CONSOLA SATURN",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1201",
    DESCRIPCION: "CONSOLA SATURN",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1202",
    descripcion: "JUEGOS SATURN",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1202",
    DESCRIPCION: "JUEGOS SATURN",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1204",
    descripcion: "ACCESORIO XBOX",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1204",
    DESCRIPCION: "ACCESORIO XBOX",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1205",
    descripcion: "CONSOLA XBOX",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1205",
    DESCRIPCION: "CONSOLA XBOX",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1206",
    descripcion: "MANDO XBOX",
    cod_nivel_padre: "5115",
    COD_NIVEL: "1206",
    DESCRIPCION: "MANDO XBOX",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "1207",
    descripcion: "JUEGO XBOX",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1207",
    DESCRIPCION: "JUEGO XBOX",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1209",
    descripcion: "ACCESORIO XBOX 360",
    cod_nivel_padre: "5116",
    COD_NIVEL: "1209",
    DESCRIPCION: "ACCESORIO XBOX 360",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "1210",
    descripcion: "CONSOLA XBOX 360",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1210",
    DESCRIPCION: "CONSOLA XBOX 360",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1211",
    descripcion: "MANDO XBOX 360",
    cod_nivel_padre: "2191",
    COD_NIVEL: "1211",
    DESCRIPCION: "MANDO XBOX 360",
    COD_NIVEL_PADRE: "2191"
  },
  {
    cod_nivel: "1212",
    descripcion: "VOLANTE XBOX 360",
    cod_nivel_padre: "2191",
    COD_NIVEL: "1212",
    DESCRIPCION: "VOLANTE XBOX 360",
    COD_NIVEL_PADRE: "2191"
  },
  {
    cod_nivel: "1213",
    descripcion: "JUEGO XBOX 360",
    cod_nivel_padre: "5114",
    COD_NIVEL: "1213",
    DESCRIPCION: "JUEGO XBOX 360",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "1214",
    descripcion: "OTRAS CONSOLAS",
    cod_nivel_padre: "5113",
    COD_NIVEL: "1214",
    DESCRIPCION: "OTRAS CONSOLAS",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "1225",
    descripcion: "TELEFONO VIA SATELITE",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1225",
    DESCRIPCION: "TELEFONO VIA SATELITE",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1227",
    descripcion: "TELEFONO INALAMBRICO",
    cod_nivel_padre: "1226",
    COD_NIVEL: "1227",
    DESCRIPCION: "TELEFONO INALAMBRICO",
    COD_NIVEL_PADRE: "1226"
  },
  {
    cod_nivel: "1228",
    descripcion: "TELEFONO CONVENCIONAL",
    cod_nivel_padre: "1226",
    COD_NIVEL: "1228",
    DESCRIPCION: "TELEFONO CONVENCIONAL",
    COD_NIVEL_PADRE: "1226"
  },
  {
    cod_nivel: "1229",
    descripcion: "TELEFONO PERSONAS MAYORES",
    cod_nivel_padre: "1226",
    COD_NIVEL: "1229",
    DESCRIPCION: "TELEFONO PERSONAS MAYORES",
    COD_NIVEL_PADRE: "1226"
  },
  {
    cod_nivel: "1230",
    descripcion: "CONTESTADOR TELEFONICO",
    cod_nivel_padre: "1226",
    COD_NIVEL: "1230",
    DESCRIPCION: "CONTESTADOR TELEFONICO",
    COD_NIVEL_PADRE: "1226"
  },
  {
    cod_nivel: "1231",
    descripcion: "KIT TELEFONOS SUPLETORIOS",
    cod_nivel_padre: "1226",
    COD_NIVEL: "1231",
    DESCRIPCION: "KIT TELEFONOS SUPLETORIOS",
    COD_NIVEL_PADRE: "1226"
  },
  {
    cod_nivel: "1232",
    descripcion: "FAX",
    cod_nivel_padre: "1226",
    COD_NIVEL: "1232",
    DESCRIPCION: "FAX",
    COD_NIVEL_PADRE: "1226"
  },
  {
    cod_nivel: "1233",
    descripcion: "ACCESORIO TELEFONIA FIJA",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1233",
    DESCRIPCION: "ACCESORIO TELEFONIA FIJA",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1235",
    descripcion: "FUNDA",
    cod_nivel_padre: "1234",
    COD_NIVEL: "1235",
    DESCRIPCION: "FUNDA",
    COD_NIVEL_PADRE: "1234"
  },
  {
    cod_nivel: "1236",
    descripcion: "BATERIA",
    cod_nivel_padre: "1234",
    COD_NIVEL: "1236",
    DESCRIPCION: "BATERIA",
    COD_NIVEL_PADRE: "1234"
  },
  {
    cod_nivel: "1237",
    descripcion: "CARGADOR",
    cod_nivel_padre: "1234",
    COD_NIVEL: "1237",
    DESCRIPCION: "CARGADOR",
    COD_NIVEL_PADRE: "1234"
  },
  {
    cod_nivel: "1238",
    descripcion: "KIT MANOS LIBRES",
    cod_nivel_padre: "1234",
    COD_NIVEL: "1238",
    DESCRIPCION: "KIT MANOS LIBRES",
    COD_NIVEL_PADRE: "1234"
  },
  {
    cod_nivel: "1239",
    descripcion: "AURICULARES BLUETOOTH",
    cod_nivel_padre: "1234",
    COD_NIVEL: "1239",
    DESCRIPCION: "AURICULARES BLUETOOTH",
    COD_NIVEL_PADRE: "1234"
  },
  {
    cod_nivel: "1241",
    descripcion: "OTROS ACCESORIOS",
    cod_nivel_padre: "1234",
    COD_NIVEL: "1241",
    DESCRIPCION: "OTROS ACCESORIOS",
    COD_NIVEL_PADRE: "1234"
  },
  {
    cod_nivel: "1243",
    descripcion: "MICRO SD",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1243",
    DESCRIPCION: "MICRO SD",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1248",
    descripcion: "TELEFONO INTERNET VOIP",
    cod_nivel_padre: "1247",
    COD_NIVEL: "1248",
    DESCRIPCION: "TELEFONO INTERNET VOIP",
    COD_NIVEL_PADRE: "1247"
  },
  {
    cod_nivel: "1249",
    descripcion: "KIT VOIP",
    cod_nivel_padre: "1247",
    COD_NIVEL: "1249",
    DESCRIPCION: "KIT VOIP",
    COD_NIVEL_PADRE: "1247"
  },
  {
    cod_nivel: "1250",
    descripcion: "TELEFONO ANTIGUO VINTAGE",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1250",
    DESCRIPCION: "TELEFONO ANTIGUO VINTAGE",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1251",
    descripcion: "OTROS TELEFONIA",
    cod_nivel_padre: "1219",
    COD_NIVEL: "1251",
    DESCRIPCION: "OTROS TELEFONIA",
    COD_NIVEL_PADRE: "1219"
  },
  {
    cod_nivel: "1261",
    descripcion: "TELEVISOR LCD",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1261",
    DESCRIPCION: "TELEVISOR LCD",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1262",
    descripcion: "TELEVISOR LED",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1262",
    DESCRIPCION: "TELEVISOR LED",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1263",
    descripcion: "PANTALLA PLASMA",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1263",
    DESCRIPCION: "PANTALLA PLASMA",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1264",
    descripcion: "TELEVISOR LCD PORTATIL",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1264",
    DESCRIPCION: "TELEVISOR LCD PORTATIL",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1265",
    descripcion: "TELEVISOR CRT",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1265",
    DESCRIPCION: "TELEVISOR CRT",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1266",
    descripcion: "COMBI TV REPRODUCTOR",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1266",
    DESCRIPCION: "COMBI TV REPRODUCTOR",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1267",
    descripcion: "RETROPROYECTOR",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1267",
    DESCRIPCION: "RETROPROYECTOR",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1268",
    descripcion: "MONITOR SINTONIZADOR TV",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1268",
    DESCRIPCION: "MONITOR SINTONIZADOR TV",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1269",
    descripcion: "OTROS TELEVISORES",
    cod_nivel_padre: "1260",
    COD_NIVEL: "1269",
    DESCRIPCION: "OTROS TELEVISORES",
    COD_NIVEL_PADRE: "1260"
  },
  {
    cod_nivel: "1271",
    descripcion: "REPRODUCTOR GRABADOR DVD",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1271",
    DESCRIPCION: "REPRODUCTOR GRABADOR DVD",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1272",
    descripcion: "REPRODUCTOR DVD",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1272",
    DESCRIPCION: "REPRODUCTOR DVD",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1273",
    descripcion: "REPRODUCTOR DVD PORTATIL",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1273",
    DESCRIPCION: "REPRODUCTOR DVD PORTATIL",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1274",
    descripcion: "REPRODUCTOR BLU RAY",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1274",
    DESCRIPCION: "REPRODUCTOR BLU RAY",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1275",
    descripcion: "REPRODUCTOR VIDEO VHS",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1275",
    DESCRIPCION: "REPRODUCTOR VIDEO VHS",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1276",
    descripcion: "REPRODUCTOR VIDEO BETA",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1276",
    DESCRIPCION: "REPRODUCTOR VIDEO BETA",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1277",
    descripcion: "COMBI DVD  VHS",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1277",
    DESCRIPCION: "COMBI DVD  VHS",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1278",
    descripcion: "KARAOKE",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1278",
    DESCRIPCION: "KARAOKE",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1279",
    descripcion: "REPRODUCTOR MULTIMEDIA",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1279",
    DESCRIPCION: "REPRODUCTOR MULTIMEDIA",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1280",
    descripcion: "OTROS REPRODUCTORES",
    cod_nivel_padre: "1270",
    COD_NIVEL: "1280",
    DESCRIPCION: "OTROS REPRODUCTORES",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "1282",
    descripcion: "CONJUNTO HOME CINEMA",
    cod_nivel_padre: "1281",
    COD_NIVEL: "1282",
    DESCRIPCION: "CONJUNTO HOME CINEMA",
    COD_NIVEL_PADRE: "1281"
  },
  {
    cod_nivel: "1283",
    descripcion: "AMPLIFICADOR HOME CINEMA",
    cod_nivel_padre: "1281",
    COD_NIVEL: "1283",
    DESCRIPCION: "AMPLIFICADOR HOME CINEMA",
    COD_NIVEL_PADRE: "1281"
  },
  {
    cod_nivel: "1284",
    descripcion: "ALTAVOCES HOME CINEMA",
    cod_nivel_padre: "1281",
    COD_NIVEL: "1284",
    DESCRIPCION: "ALTAVOCES HOME CINEMA",
    COD_NIVEL_PADRE: "1281"
  },
  {
    cod_nivel: "1285",
    descripcion: "SUBWOOFER HOME CINEMA",
    cod_nivel_padre: "1281",
    COD_NIVEL: "1285",
    DESCRIPCION: "SUBWOOFER HOME CINEMA",
    COD_NIVEL_PADRE: "1281"
  },
  {
    cod_nivel: "1286",
    descripcion: "BARRA SONIDO",
    cod_nivel_padre: "1281",
    COD_NIVEL: "1286",
    DESCRIPCION: "BARRA SONIDO",
    COD_NIVEL_PADRE: "1281"
  },
  {
    cod_nivel: "1287",
    descripcion: "KIT ALTAVOCES Y SUBWOOFER",
    cod_nivel_padre: "1281",
    COD_NIVEL: "1287",
    DESCRIPCION: "KIT ALTAVOCES Y SUBWOOFER",
    COD_NIVEL_PADRE: "1281"
  },
  {
    cod_nivel: "1288",
    descripcion: "OTROS HOME CINEMA",
    cod_nivel_padre: "1281",
    COD_NIVEL: "1288",
    DESCRIPCION: "OTROS HOME CINEMA",
    COD_NIVEL_PADRE: "1281"
  },
  {
    cod_nivel: "1290",
    descripcion: "PROYECTOR HOME CINEMA",
    cod_nivel_padre: "1289",
    COD_NIVEL: "1290",
    DESCRIPCION: "PROYECTOR HOME CINEMA",
    COD_NIVEL_PADRE: "1289"
  },
  {
    cod_nivel: "1291",
    descripcion: "PROYECTOR POLIVALENTE",
    cod_nivel_padre: "1289",
    COD_NIVEL: "1291",
    DESCRIPCION: "PROYECTOR POLIVALENTE",
    COD_NIVEL_PADRE: "1289"
  },
  {
    cod_nivel: "1292",
    descripcion: "MINI PROYECTOR",
    cod_nivel_padre: "1289",
    COD_NIVEL: "1292",
    DESCRIPCION: "MINI PROYECTOR",
    COD_NIVEL_PADRE: "1289"
  },
  {
    cod_nivel: "1293",
    descripcion: "PANTALLA PROYECCION",
    cod_nivel_padre: "1289",
    COD_NIVEL: "1293",
    DESCRIPCION: "PANTALLA PROYECCION",
    COD_NIVEL_PADRE: "1289"
  },
  {
    cod_nivel: "1294",
    descripcion: "ACCESORIO PROYECCION",
    cod_nivel_padre: "1289",
    COD_NIVEL: "1294",
    DESCRIPCION: "ACCESORIO PROYECCION",
    COD_NIVEL_PADRE: "1289"
  },
  {
    cod_nivel: "1295",
    descripcion: "OTROS VIDEO PROYECTOR",
    cod_nivel_padre: "1289",
    COD_NIVEL: "1295",
    DESCRIPCION: "OTROS VIDEO PROYECTOR",
    COD_NIVEL_PADRE: "1289"
  },
  {
    cod_nivel: "1297",
    descripcion: "SINTONIZADOR TDT",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1297",
    DESCRIPCION: "SINTONIZADOR TDT",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1298",
    descripcion: "ANTENA TDT",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1298",
    DESCRIPCION: "ANTENA TDT",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1299",
    descripcion: "ACCESORIO ANTENA TDT",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1299",
    DESCRIPCION: "ACCESORIO ANTENA TDT",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1300",
    descripcion: "RECEPTOR SATELITE",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1300",
    DESCRIPCION: "RECEPTOR SATELITE",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1301",
    descripcion: "ANTENA PARABOLICA",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1301",
    DESCRIPCION: "ANTENA PARABOLICA",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1302",
    descripcion: "DECODIFICADOR",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1302",
    DESCRIPCION: "DECODIFICADOR",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1303",
    descripcion: "BUSCADOR DE SEÑAL",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1303",
    DESCRIPCION: "BUSCADOR DE SEÑAL",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1304",
    descripcion: "OTROS SATELITE Y TDT",
    cod_nivel_padre: "1296",
    COD_NIVEL: "1304",
    DESCRIPCION: "OTROS SATELITE Y TDT",
    COD_NIVEL_PADRE: "1296"
  },
  {
    cod_nivel: "1306",
    descripcion: "TRANSMISOR AUDIO VIDEO",
    cod_nivel_padre: "1305",
    COD_NIVEL: "1306",
    DESCRIPCION: "TRANSMISOR AUDIO VIDEO",
    COD_NIVEL_PADRE: "1305"
  },
  {
    cod_nivel: "1311",
    descripcion: "ACCESORIO DVD PORTATIL",
    cod_nivel_padre: "1305",
    COD_NIVEL: "1311",
    DESCRIPCION: "ACCESORIO DVD PORTATIL",
    COD_NIVEL_PADRE: "1305"
  },
  {
    cod_nivel: "1312",
    descripcion: "KIT LIMPIEZA TV VIDEO",
    cod_nivel_padre: "1305",
    COD_NIVEL: "1312",
    DESCRIPCION: "KIT LIMPIEZA TV VIDEO",
    COD_NIVEL_PADRE: "1305"
  },
  {
    cod_nivel: "1313",
    descripcion: "OTROS ACCESORIOS TV VIDEO",
    cod_nivel_padre: "1305",
    COD_NIVEL: "1313",
    DESCRIPCION: "OTROS ACCESORIOS TV VIDEO",
    COD_NIVEL_PADRE: "1305"
  },
  {
    cod_nivel: "1315",
    descripcion: "SOPORTE MURAL TV",
    cod_nivel_padre: "1314",
    COD_NIVEL: "1315",
    DESCRIPCION: "SOPORTE MURAL TV",
    COD_NIVEL_PADRE: "1314"
  },
  {
    cod_nivel: "1316",
    descripcion: "SOPORTE TECHO TV",
    cod_nivel_padre: "1314",
    COD_NIVEL: "1316",
    DESCRIPCION: "SOPORTE TECHO TV",
    COD_NIVEL_PADRE: "1314"
  },
  {
    cod_nivel: "1317",
    descripcion: "MESA SOPORTE TV",
    cod_nivel_padre: "1314",
    COD_NIVEL: "1317",
    DESCRIPCION: "MESA SOPORTE TV",
    COD_NIVEL_PADRE: "1314"
  },
  {
    cod_nivel: "1318",
    descripcion: "SOPORTE ALTAVOCES",
    cod_nivel_padre: "1314",
    COD_NIVEL: "1318",
    DESCRIPCION: "SOPORTE ALTAVOCES",
    COD_NIVEL_PADRE: "1314"
  },
  {
    cod_nivel: "1319",
    descripcion: "MANDO  A DISTANCIA",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1319",
    DESCRIPCION: "MANDO  A DISTANCIA",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1320",
    descripcion: "OTROS TV Y  VIDEO",
    cod_nivel_padre: "1259",
    COD_NIVEL: "1320",
    DESCRIPCION: "OTROS TV Y  VIDEO",
    COD_NIVEL_PADRE: "1259"
  },
  {
    cod_nivel: "1323",
    descripcion: "REPRODUCTOR MP3",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1323",
    DESCRIPCION: "REPRODUCTOR MP3",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1324",
    descripcion: "REPRODUCTOR MP4",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1324",
    DESCRIPCION: "REPRODUCTOR MP4",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1325",
    descripcion: "IPOD",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1325",
    DESCRIPCION: "IPOD",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1328",
    descripcion: "AURICULARES",
    cod_nivel_padre: "1326",
    COD_NIVEL: "1328",
    DESCRIPCION: "AURICULARES",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1329",
    descripcion: "BASE SINCRONIZACION",
    cod_nivel_padre: "1326",
    COD_NIVEL: "1329",
    DESCRIPCION: "BASE SINCRONIZACION",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1330",
    descripcion: "FUNDA",
    cod_nivel_padre: "1326",
    COD_NIVEL: "1330",
    DESCRIPCION: "FUNDA",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1331",
    descripcion: "MANDO A DISTANCIA",
    cod_nivel_padre: "1326",
    COD_NIVEL: "1331",
    DESCRIPCION: "MANDO A DISTANCIA",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1332",
    descripcion: "CONEXION",
    cod_nivel_padre: "1326",
    COD_NIVEL: "1332",
    DESCRIPCION: "CONEXION",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1333",
    descripcion: "TRANSMISOR FM",
    cod_nivel_padre: "1326",
    COD_NIVEL: "1333",
    DESCRIPCION: "TRANSMISOR FM",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1335",
    descripcion: "DISCMAN",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1335",
    DESCRIPCION: "DISCMAN",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1336",
    descripcion: "WALKMAN",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1336",
    DESCRIPCION: "WALKMAN",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1337",
    descripcion: "RADIO PORTATIL",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1337",
    DESCRIPCION: "RADIO PORTATIL",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1338",
    descripcion: "MINI DISC",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1338",
    DESCRIPCION: "MINI DISC",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1340",
    descripcion: "MICRO CADENA HIFI",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1340",
    DESCRIPCION: "MICRO CADENA HIFI",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1341",
    descripcion: "MINI CADENA HIFI",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1341",
    DESCRIPCION: "MINI CADENA HIFI",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1342",
    descripcion: "AMPLIFICADOR HIFI",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1342",
    DESCRIPCION: "AMPLIFICADOR HIFI",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1343",
    descripcion: "ALTAVOCES HIFI",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1343",
    DESCRIPCION: "ALTAVOCES HIFI",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1344",
    descripcion: "REPRODUCTOR CD SALON",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1344",
    DESCRIPCION: "REPRODUCTOR CD SALON",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1345",
    descripcion: "GIRADISCOS",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1345",
    DESCRIPCION: "GIRADISCOS",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1346",
    descripcion: "SINTONIZADOR",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1346",
    DESCRIPCION: "SINTONIZADOR",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1347",
    descripcion: "ECUALIZADOR",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1347",
    DESCRIPCION: "ECUALIZADOR",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1348",
    descripcion: "PREAMPLIFICADOR",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1348",
    DESCRIPCION: "PREAMPLIFICADOR",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1349",
    descripcion: "CROSSOVER",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1349",
    DESCRIPCION: "CROSSOVER",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1350",
    descripcion: "PLETINA CASSETTE",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1350",
    DESCRIPCION: "PLETINA CASSETTE",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1351",
    descripcion: "SUBWOOFER HIFI",
    cod_nivel_padre: "1339",
    COD_NIVEL: "1351",
    DESCRIPCION: "SUBWOOFER HIFI",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "1353",
    descripcion: "RADIO MULTIBANDA",
    cod_nivel_padre: "1352",
    COD_NIVEL: "1353",
    DESCRIPCION: "RADIO MULTIBANDA",
    COD_NIVEL_PADRE: "1352"
  },
  {
    cod_nivel: "1354",
    descripcion: "RADIO DESPERTADOR",
    cod_nivel_padre: "1352",
    COD_NIVEL: "1354",
    DESCRIPCION: "RADIO DESPERTADOR",
    COD_NIVEL_PADRE: "1352"
  },
  {
    cod_nivel: "1355",
    descripcion: "RADIO CD CASSETTE",
    cod_nivel_padre: "1352",
    COD_NIVEL: "1355",
    DESCRIPCION: "RADIO CD CASSETTE",
    COD_NIVEL_PADRE: "1352"
  },
  {
    cod_nivel: "1356",
    descripcion: "OTRAS RADIOS",
    cod_nivel_padre: "1352",
    COD_NIVEL: "1356",
    DESCRIPCION: "OTRAS RADIOS",
    COD_NIVEL_PADRE: "1352"
  },
  {
    cod_nivel: "1357",
    descripcion: "DICTAFONO",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1357",
    DESCRIPCION: "DICTAFONO",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1359",
    descripcion: "AURICULARES HIFI",
    cod_nivel_padre: "1358",
    COD_NIVEL: "1359",
    DESCRIPCION: "AURICULARES HIFI",
    COD_NIVEL_PADRE: "1358"
  },
  {
    cod_nivel: "1361",
    descripcion: "MICROFONO",
    cod_nivel_padre: "1358",
    COD_NIVEL: "1361",
    DESCRIPCION: "MICROFONO",
    COD_NIVEL_PADRE: "1358"
  },
  {
    cod_nivel: "1362",
    descripcion: "KIT LIMPIEZA",
    cod_nivel_padre: "1358",
    COD_NIVEL: "1362",
    DESCRIPCION: "KIT LIMPIEZA",
    COD_NIVEL_PADRE: "1358"
  },
  {
    cod_nivel: "1365",
    descripcion: "OTROS ACCESORIOS SONIDO",
    cod_nivel_padre: "1358",
    COD_NIVEL: "1365",
    DESCRIPCION: "OTROS ACCESORIOS SONIDO",
    COD_NIVEL_PADRE: "1358"
  },
  {
    cod_nivel: "1366",
    descripcion: "OTROS SONIDO",
    cod_nivel_padre: "1321",
    COD_NIVEL: "1366",
    DESCRIPCION: "OTROS SONIDO",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "1369",
    descripcion: "BALANZA DIGITAL",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1369",
    DESCRIPCION: "BALANZA DIGITAL",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "1371",
    descripcion: "CALCULADORA",
    cod_nivel_padre: "1370",
    COD_NIVEL: "1371",
    DESCRIPCION: "CALCULADORA",
    COD_NIVEL_PADRE: "1370"
  },
  {
    cod_nivel: "1372",
    descripcion: "CALCULADORA CIENTIFICA",
    cod_nivel_padre: "1370",
    COD_NIVEL: "1372",
    DESCRIPCION: "CALCULADORA CIENTIFICA",
    COD_NIVEL_PADRE: "1370"
  },
  {
    cod_nivel: "1373",
    descripcion: "CALCULADORA GRAFICA",
    cod_nivel_padre: "1370",
    COD_NIVEL: "1373",
    DESCRIPCION: "CALCULADORA GRAFICA",
    COD_NIVEL_PADRE: "1370"
  },
  {
    cod_nivel: "1374",
    descripcion: "CALCULADORA FINANCIERA",
    cod_nivel_padre: "1370",
    COD_NIVEL: "1374",
    DESCRIPCION: "CALCULADORA FINANCIERA",
    COD_NIVEL_PADRE: "1370"
  },
  {
    cod_nivel: "1375",
    descripcion: "ESTACION METEOROLOGICA",
    cod_nivel_padre: "1368",
    COD_NIVEL: "1375",
    DESCRIPCION: "ESTACION METEOROLOGICA",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "1379",
    descripcion: "DETECTOR METALES",
    cod_nivel_padre: "895",
    COD_NIVEL: "1379",
    DESCRIPCION: "DETECTOR METALES",
    COD_NIVEL_PADRE: "895"
  },
  {
    cod_nivel: "1334",
    descripcion: "OTROS ACCESORIOS MP3 MP4",
    cod_nivel_padre: "1326",
    COD_NIVEL: "1334",
    DESCRIPCION: "OTROS ACCESORIOS MP3 MP4",
    COD_NIVEL_PADRE: "1326"
  },
  {
    cod_nivel: "1257",
    descripcion: "COLECCIONISMO MUSICAL",
    cod_nivel_padre: "1252",
    COD_NIVEL: "1257",
    DESCRIPCION: "COLECCIONISMO MUSICAL",
    COD_NIVEL_PADRE: "1252"
  },
  {
    cod_nivel: "1382",
    descripcion: "ANTENA",
    cod_nivel_padre: "1381",
    COD_NIVEL: "1382",
    DESCRIPCION: "ANTENA",
    COD_NIVEL_PADRE: "1381"
  },
  {
    cod_nivel: "1383",
    descripcion: "ACCESORIOS",
    cod_nivel_padre: "1381",
    COD_NIVEL: "1383",
    DESCRIPCION: "ACCESORIOS",
    COD_NIVEL_PADRE: "1381"
  },
  {
    cod_nivel: "1384",
    descripcion: "EMISORA",
    cod_nivel_padre: "1381",
    COD_NIVEL: "1384",
    DESCRIPCION: "EMISORA",
    COD_NIVEL_PADRE: "1381"
  },
  {
    cod_nivel: "1385",
    descripcion: "SCANNERS",
    cod_nivel_padre: "1381",
    COD_NIVEL: "1385",
    DESCRIPCION: "SCANNERS",
    COD_NIVEL_PADRE: "1381"
  },
  {
    cod_nivel: "1386",
    descripcion: "WALKIE TALKIE",
    cod_nivel_padre: "1381",
    COD_NIVEL: "1386",
    DESCRIPCION: "WALKIE TALKIE",
    COD_NIVEL_PADRE: "1381"
  },
  {
    cod_nivel: "1407",
    descripcion: "OTROS FOTOGRAFIA Y VIDEO",
    cod_nivel_padre: "1395",
    COD_NIVEL: "1407",
    DESCRIPCION: "OTROS FOTOGRAFIA Y VIDEO",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "1743",
    descripcion: "FILTRO",
    cod_nivel_padre: "1741",
    COD_NIVEL: "1743",
    DESCRIPCION: "FILTRO",
    COD_NIVEL_PADRE: "1741"
  },
  {
    cod_nivel: "1412",
    descripcion: "LIBRO ELECTRONICO",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1412",
    DESCRIPCION: "LIBRO ELECTRONICO",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1420",
    descripcion: "FOTOCOPIADORA",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1420",
    DESCRIPCION: "FOTOCOPIADORA",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1421",
    descripcion: "SCANNER",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1421",
    DESCRIPCION: "SCANNER",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1422",
    descripcion: "SOFTWARE",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1422",
    DESCRIPCION: "SOFTWARE",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1424",
    descripcion: "OTROS INFORMATICA",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1424",
    DESCRIPCION: "OTROS INFORMATICA",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1425",
    descripcion: "PDA",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1425",
    DESCRIPCION: "PDA",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1426",
    descripcion: "ACCESORIOS PDA",
    cod_nivel_padre: "1408",
    COD_NIVEL: "1426",
    DESCRIPCION: "ACCESORIOS PDA",
    COD_NIVEL_PADRE: "1408"
  },
  {
    cod_nivel: "1434",
    descripcion: "OTROS INSTRUMENTOS MUSICA",
    cod_nivel_padre: "1427",
    COD_NIVEL: "1434",
    DESCRIPCION: "OTROS INSTRUMENTOS MUSICA",
    COD_NIVEL_PADRE: "1427"
  },
  {
    cod_nivel: "1436",
    descripcion: "CAMION",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1436",
    DESCRIPCION: "CAMION",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1437",
    descripcion: "COCHE METAL",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1437",
    DESCRIPCION: "COCHE METAL",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1438",
    descripcion: "COCHE PLASTICO",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1438",
    DESCRIPCION: "COCHE PLASTICO",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1439",
    descripcion: "FIGURA ACCION",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1439",
    DESCRIPCION: "FIGURA ACCION",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1440",
    descripcion: "JUEGOS DE MESA",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1440",
    DESCRIPCION: "JUEGOS DE MESA",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1441",
    descripcion: "JUEGO ROL ESTRATEGIA",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1441",
    DESCRIPCION: "JUEGO ROL ESTRATEGIA",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1442",
    descripcion: "JUEGO AL AIRE LIBRE",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1442",
    DESCRIPCION: "JUEGO AL AIRE LIBRE",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1443",
    descripcion: "JUEGO EDUCATIVO",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1443",
    DESCRIPCION: "JUEGO EDUCATIVO",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1444",
    descripcion: "JUGUETE ANTIGUO",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1444",
    DESCRIPCION: "JUGUETE ANTIGUO",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1445",
    descripcion: "JUGUETE CINE Y TV",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1445",
    DESCRIPCION: "JUGUETE CINE Y TV",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1447",
    descripcion: "MUÑECAS",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1447",
    DESCRIPCION: "MUÑECAS",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1448",
    descripcion: "PELUCHE",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1448",
    DESCRIPCION: "PELUCHE",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1449",
    descripcion: "PLAYMOBIL AIRGAMBOYS",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1449",
    DESCRIPCION: "PLAYMOBIL AIRGAMBOYS",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1452",
    descripcion: "STAR WARS",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1452",
    DESCRIPCION: "STAR WARS",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1453",
    descripcion: "JUEGO DE CONSTRUCCION",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1453",
    DESCRIPCION: "JUEGO DE CONSTRUCCION",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1455",
    descripcion: "OTROS JUEGOS Y JUGUETES",
    cod_nivel_padre: "1435",
    COD_NIVEL: "1455",
    DESCRIPCION: "OTROS JUEGOS Y JUGUETES",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "1472",
    descripcion: "BISUTERIA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "1472",
    DESCRIPCION: "BISUTERIA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "1499",
    descripcion: "ENCENDEDOR",
    cod_nivel_padre: "1489",
    COD_NIVEL: "1499",
    DESCRIPCION: "ENCENDEDOR",
    COD_NIVEL_PADRE: "1489"
  },
  {
    cod_nivel: "1502",
    descripcion: "AGRICULTURA Y GANADERIA",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1502",
    DESCRIPCION: "AGRICULTURA Y GANADERIA",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1504",
    descripcion: "ELECTRICO Y ELECTRONICO",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1504",
    DESCRIPCION: "ELECTRICO Y ELECTRONICO",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1505",
    descripcion: "GARAGE Y TALLER",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1505",
    DESCRIPCION: "GARAGE Y TALLER",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1508",
    descripcion: "RESTAURACION Y CATERING",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1508",
    DESCRIPCION: "RESTAURACION Y CATERING",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1509",
    descripcion: "EQUIPAMIENTO TIENDAS",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1509",
    DESCRIPCION: "EQUIPAMIENTO TIENDAS",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1510",
    descripcion: "EQUIPAMIENTO OFICINAS",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1510",
    DESCRIPCION: "EQUIPAMIENTO OFICINAS",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1511",
    descripcion: "MAQUINARIA INDUSTRIAL",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1511",
    DESCRIPCION: "MAQUINARIA INDUSTRIAL",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1512",
    descripcion: "OTROS EQUIPAMIENTOS",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1512",
    DESCRIPCION: "OTROS EQUIPAMIENTOS",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1513",
    descripcion: "PAQUETERIA Y ENVIOS",
    cod_nivel_padre: "1501",
    COD_NIVEL: "1513",
    DESCRIPCION: "PAQUETERIA Y ENVIOS",
    COD_NIVEL_PADRE: "1501"
  },
  {
    cod_nivel: "1543",
    descripcion: "CAMARA ULTRACOMPACTA",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1543",
    DESCRIPCION: "CAMARA ULTRACOMPACTA",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1544",
    descripcion: "CAMARA DIGITAL COMPACTA",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1544",
    DESCRIPCION: "CAMARA DIGITAL COMPACTA",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1545",
    descripcion: "CAMARA DIGITAL BRIDGE",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1545",
    DESCRIPCION: "CAMARA DIGITAL BRIDGE",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1546",
    descripcion: "CAMARA DIGITAL REFLEX",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1546",
    DESCRIPCION: "CAMARA DIGITAL REFLEX",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1547",
    descripcion: "CAMARA DIGITAL NIÑOS",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1547",
    DESCRIPCION: "CAMARA DIGITAL NIÑOS",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1548",
    descripcion: "OTRAS CAMARAS DIGITALES",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1548",
    DESCRIPCION: "OTRAS CAMARAS DIGITALES",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1550",
    descripcion: "COMPACT FLASH",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1550",
    DESCRIPCION: "COMPACT FLASH",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1551",
    descripcion: "SD CARD",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1551",
    DESCRIPCION: "SD CARD",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1552",
    descripcion: "MINI SD CARD",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1552",
    DESCRIPCION: "MINI SD CARD",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1553",
    descripcion: "MEMORY STICK",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1553",
    DESCRIPCION: "MEMORY STICK",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1554",
    descripcion: "MEMORY STICK PRO",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1554",
    DESCRIPCION: "MEMORY STICK PRO",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1555",
    descripcion: "MEMORY STICK DUO",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1555",
    DESCRIPCION: "MEMORY STICK DUO",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1556",
    descripcion: "MEMORY STICK PRO DUO",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1556",
    DESCRIPCION: "MEMORY STICK PRO DUO",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1557",
    descripcion: "MEMORY STICK MICRO",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1557",
    DESCRIPCION: "MEMORY STICK MICRO",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1558",
    descripcion: "TARJETA MMC",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1558",
    DESCRIPCION: "TARJETA MMC",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1559",
    descripcion: "TARJETA RS MMC",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1559",
    DESCRIPCION: "TARJETA RS MMC",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1560",
    descripcion: "TARJETA SMARTMEDIA",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1560",
    DESCRIPCION: "TARJETA SMARTMEDIA",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1561",
    descripcion: "XD CARD",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1561",
    DESCRIPCION: "XD CARD",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1562",
    descripcion: "TRANSFLASH MICRO SD",
    cod_nivel_padre: "1242",
    COD_NIVEL: "1562",
    DESCRIPCION: "TRANSFLASH MICRO SD",
    COD_NIVEL_PADRE: "1242"
  },
  {
    cod_nivel: "1564",
    descripcion: "MARCO FOTOS DIGITALES",
    cod_nivel_padre: "1396",
    COD_NIVEL: "1564",
    DESCRIPCION: "MARCO FOTOS DIGITALES",
    COD_NIVEL_PADRE: "1396"
  },
  {
    cod_nivel: "1565",
    descripcion: "OBJETIVO PARA CANON",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1565",
    DESCRIPCION: "OBJETIVO PARA CANON",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1566",
    descripcion: "OBJETIVO PARA NIKON",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1566",
    DESCRIPCION: "OBJETIVO PARA NIKON",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1567",
    descripcion: "OBJETIVO PARA OLYMPUS",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1567",
    DESCRIPCION: "OBJETIVO PARA OLYMPUS",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1568",
    descripcion: "OBJETIVO PARA PENTAX",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1568",
    DESCRIPCION: "OBJETIVO PARA PENTAX",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1569",
    descripcion: "OBJETIVO PARA SIGMA",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1569",
    DESCRIPCION: "OBJETIVO PARA SIGMA",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1570",
    descripcion: "OBJETIVO PARA SONY",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1570",
    DESCRIPCION: "OBJETIVO PARA SONY",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1571",
    descripcion: "OBJETIVO PARA PANASONIC",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1571",
    DESCRIPCION: "OBJETIVO PARA PANASONIC",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1572",
    descripcion: "OTROS OBJETIVOS",
    cod_nivel_padre: "1397",
    COD_NIVEL: "1572",
    DESCRIPCION: "OTROS OBJETIVOS",
    COD_NIVEL_PADRE: "1397"
  },
  {
    cod_nivel: "1574",
    descripcion: "PARASOL",
    cod_nivel_padre: "1573",
    COD_NIVEL: "1574",
    DESCRIPCION: "PARASOL",
    COD_NIVEL_PADRE: "1573"
  },
  {
    cod_nivel: "1575",
    descripcion: "FILTRO",
    cod_nivel_padre: "1573",
    COD_NIVEL: "1575",
    DESCRIPCION: "FILTRO",
    COD_NIVEL_PADRE: "1573"
  },
  {
    cod_nivel: "1576",
    descripcion: "PORTAFILTRO",
    cod_nivel_padre: "1573",
    COD_NIVEL: "1576",
    DESCRIPCION: "PORTAFILTRO",
    COD_NIVEL_PADRE: "1573"
  },
  {
    cod_nivel: "1577",
    descripcion: "TAPAS",
    cod_nivel_padre: "1573",
    COD_NIVEL: "1577",
    DESCRIPCION: "TAPAS",
    COD_NIVEL_PADRE: "1573"
  },
  {
    cod_nivel: "1578",
    descripcion: "OTRO ACCESORIO OBJETIVOS",
    cod_nivel_padre: "1573",
    COD_NIVEL: "1578",
    DESCRIPCION: "OTRO ACCESORIO OBJETIVOS",
    COD_NIVEL_PADRE: "1573"
  },
  {
    cod_nivel: "1579",
    descripcion: "VISOR",
    cod_nivel_padre: "1398",
    COD_NIVEL: "1579",
    DESCRIPCION: "VISOR",
    COD_NIVEL_PADRE: "1398"
  },
  {
    cod_nivel: "1580",
    descripcion: "CONVERTIDOR",
    cod_nivel_padre: "1398",
    COD_NIVEL: "1580",
    DESCRIPCION: "CONVERTIDOR",
    COD_NIVEL_PADRE: "1398"
  },
  {
    cod_nivel: "1581",
    descripcion: "DUPLICADOR",
    cod_nivel_padre: "1398",
    COD_NIVEL: "1581",
    DESCRIPCION: "DUPLICADOR",
    COD_NIVEL_PADRE: "1398"
  },
  {
    cod_nivel: "1582",
    descripcion: "CONVERSOR",
    cod_nivel_padre: "1398",
    COD_NIVEL: "1582",
    DESCRIPCION: "CONVERSOR",
    COD_NIVEL_PADRE: "1398"
  },
  {
    cod_nivel: "1583",
    descripcion: "ARO ADAPTADOR LENTE",
    cod_nivel_padre: "1398",
    COD_NIVEL: "1583",
    DESCRIPCION: "ARO ADAPTADOR LENTE",
    COD_NIVEL_PADRE: "1398"
  },
  {
    cod_nivel: "1584",
    descripcion: "OTRO COMPLEMENTO OPTICO",
    cod_nivel_padre: "1398",
    COD_NIVEL: "1584",
    DESCRIPCION: "OTRO COMPLEMENTO OPTICO",
    COD_NIVEL_PADRE: "1398"
  },
  {
    cod_nivel: "1585",
    descripcion: "FLASH PARA CANON",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1585",
    DESCRIPCION: "FLASH PARA CANON",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1586",
    descripcion: "FLASH PARA NIKON",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1586",
    DESCRIPCION: "FLASH PARA NIKON",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1587",
    descripcion: "FLASH PARA OLYMPUS",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1587",
    DESCRIPCION: "FLASH PARA OLYMPUS",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1588",
    descripcion: "FLASH PARA KODAK",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1588",
    DESCRIPCION: "FLASH PARA KODAK",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1589",
    descripcion: "FLASH PARA SIGMA",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1589",
    DESCRIPCION: "FLASH PARA SIGMA",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1590",
    descripcion: "FLASH PARA SONY",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1590",
    DESCRIPCION: "FLASH PARA SONY",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1591",
    descripcion: "FLASH PARA PANASONIC",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1591",
    DESCRIPCION: "FLASH PARA PANASONIC",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1592",
    descripcion: "FLASH MULTISISTEMA",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1592",
    DESCRIPCION: "FLASH MULTISISTEMA",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1593",
    descripcion: "ACCESORIO FLASH",
    cod_nivel_padre: "1399",
    COD_NIVEL: "1593",
    DESCRIPCION: "ACCESORIO FLASH",
    COD_NIVEL_PADRE: "1399"
  },
  {
    cod_nivel: "1594",
    descripcion: "CARGADOR CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1594",
    DESCRIPCION: "CARGADOR CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1595",
    descripcion: "BASE CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1595",
    DESCRIPCION: "BASE CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1596",
    descripcion: "FUNDA CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1596",
    DESCRIPCION: "FUNDA CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1597",
    descripcion: "BOLSO CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1597",
    DESCRIPCION: "BOLSO CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1598",
    descripcion: "CORREA CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1598",
    DESCRIPCION: "CORREA CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1599",
    descripcion: "FUNDA OBJETIVOS",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1599",
    DESCRIPCION: "FUNDA OBJETIVOS",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1600",
    descripcion: "CARCASA SUBMARINA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1600",
    DESCRIPCION: "CARCASA SUBMARINA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1601",
    descripcion: "UNIPODE",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1601",
    DESCRIPCION: "UNIPODE",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1602",
    descripcion: "TRIPODE",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1602",
    DESCRIPCION: "TRIPODE",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1604",
    descripcion: "MIRILLA CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1604",
    DESCRIPCION: "MIRILLA CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1605",
    descripcion: "EMPUÑADURA CAMARA REFLEX",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1605",
    DESCRIPCION: "EMPUÑADURA CAMARA REFLEX",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1606",
    descripcion: "KIT LIMPIEZA CAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1606",
    DESCRIPCION: "KIT LIMPIEZA CAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1607",
    descripcion: "PROYECTOR DIAPOSITIVAS",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1607",
    DESCRIPCION: "PROYECTOR DIAPOSITIVAS",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1608",
    descripcion: "FILTRO VIDEOCAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1608",
    DESCRIPCION: "FILTRO VIDEOCAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1609",
    descripcion: "OBJETIVO VIDEOCAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1609",
    DESCRIPCION: "OBJETIVO VIDEOCAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1610",
    descripcion: "ANTORCHA VIDEOCAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1610",
    DESCRIPCION: "ANTORCHA VIDEOCAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1611",
    descripcion: "TUBO EXTENSION",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1611",
    DESCRIPCION: "TUBO EXTENSION",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1612",
    descripcion: "FOTOMETRO",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1612",
    DESCRIPCION: "FOTOMETRO",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1613",
    descripcion: "LUXOMETRO",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1613",
    DESCRIPCION: "LUXOMETRO",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1614",
    descripcion: "MICRO VIDEOCAMARA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1614",
    DESCRIPCION: "MICRO VIDEOCAMARA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1615",
    descripcion: "MANDO A DISTANCIA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1615",
    DESCRIPCION: "MANDO A DISTANCIA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1616",
    descripcion: "OTRO ACCESORIO FOTOGRAFIA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1616",
    DESCRIPCION: "OTRO ACCESORIO FOTOGRAFIA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1617",
    descripcion: "OTRO ACCESORIO VIDEO",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1617",
    DESCRIPCION: "OTRO ACCESORIO VIDEO",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1618",
    descripcion: "CAMARA COMPACTA 35MM",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1618",
    DESCRIPCION: "CAMARA COMPACTA 35MM",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1619",
    descripcion: "CAMARA COMPACTA APS",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1619",
    DESCRIPCION: "CAMARA COMPACTA APS",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1620",
    descripcion: "CAMARA DESECHABLE",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1620",
    DESCRIPCION: "CAMARA DESECHABLE",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1621",
    descripcion: "CAMARA  COMPACTA ACUATICA",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1621",
    DESCRIPCION: "CAMARA  COMPACTA ACUATICA",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1622",
    descripcion: "CAMARA REFLEX",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1622",
    DESCRIPCION: "CAMARA REFLEX",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1623",
    descripcion: "CAMARA GRAN FORMATO",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1623",
    DESCRIPCION: "CAMARA GRAN FORMATO",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1624",
    descripcion: "CAMARA MEDIO FORMATO",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1624",
    DESCRIPCION: "CAMARA MEDIO FORMATO",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1626",
    descripcion: "OTRAS CAMARAS TRADICIONAL",
    cod_nivel_padre: "1401",
    COD_NIVEL: "1626",
    DESCRIPCION: "OTRAS CAMARAS TRADICIONAL",
    COD_NIVEL_PADRE: "1401"
  },
  {
    cod_nivel: "1627",
    descripcion: "VIDEOCAMARA ANALOGICA",
    cod_nivel_padre: "1402",
    COD_NIVEL: "1627",
    DESCRIPCION: "VIDEOCAMARA ANALOGICA",
    COD_NIVEL_PADRE: "1402"
  },
  {
    cod_nivel: "1628",
    descripcion: "VIDEOCAMARA DIGITAL",
    cod_nivel_padre: "1402",
    COD_NIVEL: "1628",
    DESCRIPCION: "VIDEOCAMARA DIGITAL",
    COD_NIVEL_PADRE: "1402"
  },
  {
    cod_nivel: "1629",
    descripcion: "VIDEOCAMARA PROFESIONAL",
    cod_nivel_padre: "1402",
    COD_NIVEL: "1629",
    DESCRIPCION: "VIDEOCAMARA PROFESIONAL",
    COD_NIVEL_PADRE: "1402"
  },
  {
    cod_nivel: "1630",
    descripcion: "OTRAS VIDEOCAMARAS",
    cod_nivel_padre: "1402",
    COD_NIVEL: "1630",
    DESCRIPCION: "OTRAS VIDEOCAMARAS",
    COD_NIVEL_PADRE: "1402"
  },
  {
    cod_nivel: "1631",
    descripcion: "PRISMATICO BINOCULAR",
    cod_nivel_padre: "1403",
    COD_NIVEL: "1631",
    DESCRIPCION: "PRISMATICO BINOCULAR",
    COD_NIVEL_PADRE: "1403"
  },
  {
    cod_nivel: "1632",
    descripcion: "PRISMATICO MONOCULAR",
    cod_nivel_padre: "1403",
    COD_NIVEL: "1632",
    DESCRIPCION: "PRISMATICO MONOCULAR",
    COD_NIVEL_PADRE: "1403"
  },
  {
    cod_nivel: "1633",
    descripcion: "CATALEJOS",
    cod_nivel_padre: "1403",
    COD_NIVEL: "1633",
    DESCRIPCION: "CATALEJOS",
    COD_NIVEL_PADRE: "1403"
  },
  {
    cod_nivel: "1634",
    descripcion: "TELESCOPIO",
    cod_nivel_padre: "1403",
    COD_NIVEL: "1634",
    DESCRIPCION: "TELESCOPIO",
    COD_NIVEL_PADRE: "1403"
  },
  {
    cod_nivel: "1635",
    descripcion: "VISOR NOCTURNO",
    cod_nivel_padre: "1403",
    COD_NIVEL: "1635",
    DESCRIPCION: "VISOR NOCTURNO",
    COD_NIVEL_PADRE: "1403"
  },
  {
    cod_nivel: "1636",
    descripcion: "OTROS ACCESORIOS",
    cod_nivel_padre: "1403",
    COD_NIVEL: "1636",
    DESCRIPCION: "OTROS ACCESORIOS",
    COD_NIVEL_PADRE: "1403"
  },
  {
    cod_nivel: "1637",
    descripcion: "FLASH ESTUDIO",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1637",
    DESCRIPCION: "FLASH ESTUDIO",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1638",
    descripcion: "PIE DE ILUMINACION",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1638",
    DESCRIPCION: "PIE DE ILUMINACION",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1639",
    descripcion: "VENTANA DE ESTUDIO",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1639",
    DESCRIPCION: "VENTANA DE ESTUDIO",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1640",
    descripcion: "PARAGUAS FOTOGRAFIA",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1640",
    DESCRIPCION: "PARAGUAS FOTOGRAFIA",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1641",
    descripcion: "REFLECTORES",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1641",
    DESCRIPCION: "REFLECTORES",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1642",
    descripcion: "ANTORCHA ",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1642",
    DESCRIPCION: "ANTORCHA ",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1643",
    descripcion: "FONDO DE ESTUDIO",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1643",
    DESCRIPCION: "FONDO DE ESTUDIO",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1644",
    descripcion: "PORTAFONDOS ESTUDIO",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1644",
    DESCRIPCION: "PORTAFONDOS ESTUDIO",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1645",
    descripcion: "OTRO MATERIAL ESTUDIO",
    cod_nivel_padre: "1404",
    COD_NIVEL: "1645",
    DESCRIPCION: "OTRO MATERIAL ESTUDIO",
    COD_NIVEL_PADRE: "1404"
  },
  {
    cod_nivel: "1646",
    descripcion: "ACCESORIO FOTO ANTIGUA",
    cod_nivel_padre: "1405",
    COD_NIVEL: "1646",
    DESCRIPCION: "ACCESORIO FOTO ANTIGUA",
    COD_NIVEL_PADRE: "1405"
  },
  {
    cod_nivel: "1647",
    descripcion: "CAMARA VINTAGE",
    cod_nivel_padre: "1405",
    COD_NIVEL: "1647",
    DESCRIPCION: "CAMARA VINTAGE",
    COD_NIVEL_PADRE: "1405"
  },
  {
    cod_nivel: "1648",
    descripcion: "LENTE VINTAGE",
    cod_nivel_padre: "1405",
    COD_NIVEL: "1648",
    DESCRIPCION: "LENTE VINTAGE",
    COD_NIVEL_PADRE: "1405"
  },
  {
    cod_nivel: "1649",
    descripcion: "OBJETIVO VINTAGE",
    cod_nivel_padre: "1405",
    COD_NIVEL: "1649",
    DESCRIPCION: "OBJETIVO VINTAGE",
    COD_NIVEL_PADRE: "1405"
  },
  {
    cod_nivel: "1651",
    descripcion: "PROYECTOR TRANSPARENCIAS",
    cod_nivel_padre: "1400",
    COD_NIVEL: "1651",
    DESCRIPCION: "PROYECTOR TRANSPARENCIAS",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "1652",
    descripcion: "CUBETAS",
    cod_nivel_padre: "1406",
    COD_NIVEL: "1652",
    DESCRIPCION: "CUBETAS",
    COD_NIVEL_PADRE: "1406"
  },
  {
    cod_nivel: "1653",
    descripcion: "ACCESORIO REVELADO",
    cod_nivel_padre: "1406",
    COD_NIVEL: "1653",
    DESCRIPCION: "ACCESORIO REVELADO",
    COD_NIVEL_PADRE: "1406"
  },
  {
    cod_nivel: "1654",
    descripcion: "AMPLIADORA FOTOGRAFICA",
    cod_nivel_padre: "1406",
    COD_NIVEL: "1654",
    DESCRIPCION: "AMPLIADORA FOTOGRAFICA",
    COD_NIVEL_PADRE: "1406"
  },
  {
    cod_nivel: "1655",
    descripcion: "ALFILER",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1655",
    DESCRIPCION: "ALFILER",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1656",
    descripcion: "ARGOLLAS",
    cod_nivel_padre: "5124",
    COD_NIVEL: "1656",
    DESCRIPCION: "ARGOLLAS",
    COD_NIVEL_PADRE: "5124"
  },
  {
    cod_nivel: "1657",
    descripcion: "ANILLO",
    cod_nivel_padre: "5121",
    COD_NIVEL: "1657",
    DESCRIPCION: "ANILLO",
    COD_NIVEL_PADRE: "5121"
  },
  {
    cod_nivel: "1658",
    descripcion: "SORTIJA",
    cod_nivel_padre: "5121",
    COD_NIVEL: "1658",
    DESCRIPCION: "SORTIJA",
    COD_NIVEL_PADRE: "5121"
  },
  {
    cod_nivel: "1659",
    descripcion: "SELLO",
    cod_nivel_padre: "5121",
    COD_NIVEL: "1659",
    DESCRIPCION: "SELLO",
    COD_NIVEL_PADRE: "5121"
  },
  {
    cod_nivel: "1660",
    descripcion: "ALIANZA",
    cod_nivel_padre: "5121",
    COD_NIVEL: "1660",
    DESCRIPCION: "ALIANZA",
    COD_NIVEL_PADRE: "5121"
  },
  {
    cod_nivel: "1661",
    descripcion: "BROCHE",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1661",
    DESCRIPCION: "BROCHE",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1662",
    descripcion: "CADENA",
    cod_nivel_padre: "5122",
    COD_NIVEL: "1662",
    DESCRIPCION: "CADENA",
    COD_NIVEL_PADRE: "5122"
  },
  {
    cod_nivel: "1663",
    descripcion: "COLGANTE",
    cod_nivel_padre: "5125",
    COD_NIVEL: "1663",
    DESCRIPCION: "COLGANTE",
    COD_NIVEL_PADRE: "5125"
  },
  {
    cod_nivel: "1664",
    descripcion: "COLLAR",
    cod_nivel_padre: "5122",
    COD_NIVEL: "1664",
    DESCRIPCION: "COLLAR",
    COD_NIVEL_PADRE: "5122"
  },
  {
    cod_nivel: "1665",
    descripcion: "CRUCIFIJO",
    cod_nivel_padre: "5125",
    COD_NIVEL: "1665",
    DESCRIPCION: "CRUCIFIJO",
    COD_NIVEL_PADRE: "5125"
  },
  {
    cod_nivel: "1666",
    descripcion: "BRAZALETE",
    cod_nivel_padre: "5123",
    COD_NIVEL: "1666",
    DESCRIPCION: "BRAZALETE",
    COD_NIVEL_PADRE: "5123"
  },
  {
    cod_nivel: "1667",
    descripcion: "ESCLAVA",
    cod_nivel_padre: "5123",
    COD_NIVEL: "1667",
    DESCRIPCION: "ESCLAVA",
    COD_NIVEL_PADRE: "5123"
  },
  {
    cod_nivel: "1668",
    descripcion: "GARGANTILLA",
    cod_nivel_padre: "5122",
    COD_NIVEL: "1668",
    DESCRIPCION: "GARGANTILLA",
    COD_NIVEL_PADRE: "5122"
  },
  {
    cod_nivel: "1669",
    descripcion: "GEMELOS",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1669",
    DESCRIPCION: "GEMELOS",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1670",
    descripcion: "MANITA",
    cod_nivel_padre: "5123",
    COD_NIVEL: "1670",
    DESCRIPCION: "MANITA",
    COD_NIVEL_PADRE: "5123"
  },
  {
    cod_nivel: "1671",
    descripcion: "MEDALLA",
    cod_nivel_padre: "5125",
    COD_NIVEL: "1671",
    DESCRIPCION: "MEDALLA",
    COD_NIVEL_PADRE: "5125"
  },
  {
    cod_nivel: "1672",
    descripcion: "MEDALLON",
    cod_nivel_padre: "5125",
    COD_NIVEL: "1672",
    DESCRIPCION: "MEDALLON",
    COD_NIVEL_PADRE: "5125"
  },
  {
    cod_nivel: "1674",
    descripcion: "PENDIENTES",
    cod_nivel_padre: "5124",
    COD_NIVEL: "1674",
    DESCRIPCION: "PENDIENTES",
    COD_NIVEL_PADRE: "5124"
  },
  {
    cod_nivel: "1676",
    descripcion: "PIERCING",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1676",
    DESCRIPCION: "PIERCING",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1677",
    descripcion: "PULSERA",
    cod_nivel_padre: "5123",
    COD_NIVEL: "1677",
    DESCRIPCION: "PULSERA",
    COD_NIVEL_PADRE: "5123"
  },
  {
    cod_nivel: "1678",
    descripcion: "DIJE",
    cod_nivel_padre: "5125",
    COD_NIVEL: "1678",
    DESCRIPCION: "DIJE",
    COD_NIVEL_PADRE: "5125"
  },
  {
    cod_nivel: "1679",
    descripcion: "PIEDRA SUELTA",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1679",
    DESCRIPCION: "PIEDRA SUELTA",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1680",
    descripcion: "OTRA PIEZA JOYERIA",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1680",
    DESCRIPCION: "OTRA PIEZA JOYERIA",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1684",
    descripcion: "RELOJ BOLSILLO",
    cod_nivel_padre: "1471",
    COD_NIVEL: "1684",
    DESCRIPCION: "RELOJ BOLSILLO",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "1686",
    descripcion: "RELOJ PARED",
    cod_nivel_padre: "1471",
    COD_NIVEL: "1686",
    DESCRIPCION: "RELOJ PARED",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "1687",
    descripcion: "OTROS RELOJES",
    cod_nivel_padre: "1471",
    COD_NIVEL: "1687",
    DESCRIPCION: "OTROS RELOJES",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "1689",
    descripcion: "PC",
    cod_nivel_padre: "1409",
    COD_NIVEL: "1689",
    DESCRIPCION: "PC",
    COD_NIVEL_PADRE: "1409"
  },
  {
    cod_nivel: "1690",
    descripcion: "ORDENADOR APPLE",
    cod_nivel_padre: "1409",
    COD_NIVEL: "1690",
    DESCRIPCION: "ORDENADOR APPLE",
    COD_NIVEL_PADRE: "1409"
  },
  {
    cod_nivel: "1691",
    descripcion: "PC PORTATIL",
    cod_nivel_padre: "1410",
    COD_NIVEL: "1691",
    DESCRIPCION: "PC PORTATIL",
    COD_NIVEL_PADRE: "1410"
  },
  {
    cod_nivel: "1692",
    descripcion: "PORTATIL APPLE",
    cod_nivel_padre: "1410",
    COD_NIVEL: "1692",
    DESCRIPCION: "PORTATIL APPLE",
    COD_NIVEL_PADRE: "1410"
  },
  {
    cod_nivel: "1693",
    descripcion: "NETBOOK",
    cod_nivel_padre: "1410",
    COD_NIVEL: "1693",
    DESCRIPCION: "NETBOOK",
    COD_NIVEL_PADRE: "1410"
  },
  {
    cod_nivel: "1694",
    descripcion: "TABLET PC",
    cod_nivel_padre: "1411",
    COD_NIVEL: "1694",
    DESCRIPCION: "TABLET PC",
    COD_NIVEL_PADRE: "1411"
  },
  {
    cod_nivel: "1695",
    descripcion: "IPAD",
    cod_nivel_padre: "1411",
    COD_NIVEL: "1695",
    DESCRIPCION: "IPAD",
    COD_NIVEL_PADRE: "1411"
  },
  {
    cod_nivel: "1696",
    descripcion: "CAJA ",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1696",
    DESCRIPCION: "CAJA ",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1697",
    descripcion: "CPU",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1697",
    DESCRIPCION: "CPU",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1700",
    descripcion: "TARJETA VIDEO",
    cod_nivel_padre: "1699",
    COD_NIVEL: "1700",
    DESCRIPCION: "TARJETA VIDEO",
    COD_NIVEL_PADRE: "1699"
  },
  {
    cod_nivel: "1701",
    descripcion: "TARJETA SINTONIZADORA TDT",
    cod_nivel_padre: "1699",
    COD_NIVEL: "1701",
    DESCRIPCION: "TARJETA SINTONIZADORA TDT",
    COD_NIVEL_PADRE: "1699"
  },
  {
    cod_nivel: "1702",
    descripcion: "TARJETA CAPTURADORA",
    cod_nivel_padre: "1699",
    COD_NIVEL: "1702",
    DESCRIPCION: "TARJETA CAPTURADORA",
    COD_NIVEL_PADRE: "1699"
  },
  {
    cod_nivel: "1703",
    descripcion: "OTRA TARJETA VIDEO",
    cod_nivel_padre: "1699",
    COD_NIVEL: "1703",
    DESCRIPCION: "OTRA TARJETA VIDEO",
    COD_NIVEL_PADRE: "1699"
  },
  {
    cod_nivel: "1704",
    descripcion: "TARJETA INTERFACE",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1704",
    DESCRIPCION: "TARJETA INTERFACE",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1705",
    descripcion: "MEMORIA",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1705",
    DESCRIPCION: "MEMORIA",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1706",
    descripcion: "PLACA BASE",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1706",
    DESCRIPCION: "PLACA BASE",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1707",
    descripcion: "TARJETA PCMCIA",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1707",
    DESCRIPCION: "TARJETA PCMCIA",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1708",
    descripcion: "FUENTE ALIMENTACION",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1708",
    DESCRIPCION: "FUENTE ALIMENTACION",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1709",
    descripcion: "TARJETA SONIDO",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1709",
    DESCRIPCION: "TARJETA SONIDO",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1710",
    descripcion: "OTROS COMPONENTES PC",
    cod_nivel_padre: "1413",
    COD_NIVEL: "1710",
    DESCRIPCION: "OTROS COMPONENTES PC",
    COD_NIVEL_PADRE: "1413"
  },
  {
    cod_nivel: "1712",
    descripcion: "AURICULARES",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1712",
    DESCRIPCION: "AURICULARES",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1713",
    descripcion: "CARGADOR PORTATIL",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1713",
    DESCRIPCION: "CARGADOR PORTATIL",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1714",
    descripcion: "ANTIHURTO PORTATIL",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1714",
    DESCRIPCION: "ANTIHURTO PORTATIL",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1715",
    descripcion: "BATERIA PORTATIL",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1715",
    DESCRIPCION: "BATERIA PORTATIL",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1716",
    descripcion: "MALETIN PORTATIL",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1716",
    DESCRIPCION: "MALETIN PORTATIL",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1717",
    descripcion: "REFRIGERACION PORTATIL",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1717",
    DESCRIPCION: "REFRIGERACION PORTATIL",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1718",
    descripcion: "DOCK STATION PORTATIL",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1718",
    DESCRIPCION: "DOCK STATION PORTATIL",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1719",
    descripcion: "LECTOR EXTERNO TARJETA ",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1719",
    DESCRIPCION: "LECTOR EXTERNO TARJETA ",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1720",
    descripcion: "MICROFONO",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1720",
    DESCRIPCION: "MICROFONO",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1721",
    descripcion: "ALFOMBRILLA RATON",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1721",
    DESCRIPCION: "ALFOMBRILLA RATON",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1722",
    descripcion: "ALTAVOCES PC",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1722",
    DESCRIPCION: "ALTAVOCES PC",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1723",
    descripcion: "USB HUB",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1723",
    DESCRIPCION: "USB HUB",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1724",
    descripcion: "WEBCAM",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1724",
    DESCRIPCION: "WEBCAM",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1725",
    descripcion: "OTROS ACCESORIOS PC",
    cod_nivel_padre: "1414",
    COD_NIVEL: "1725",
    DESCRIPCION: "OTROS ACCESORIOS PC",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "1726",
    descripcion: "SCANNER CODIGO BARRAS",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1726",
    DESCRIPCION: "SCANNER CODIGO BARRAS",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1727",
    descripcion: "LAPIZ DIGITAL",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1727",
    DESCRIPCION: "LAPIZ DIGITAL",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1728",
    descripcion: "GAMEPAD",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1728",
    DESCRIPCION: "GAMEPAD",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1729",
    descripcion: "JOYSTICK",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1729",
    DESCRIPCION: "JOYSTICK",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1730",
    descripcion: "TECLADO ALFANUMERICO",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1730",
    DESCRIPCION: "TECLADO ALFANUMERICO",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1675",
    descripcion: "PISACORBATAS",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1675",
    DESCRIPCION: "PISACORBATAS",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1673",
    descripcion: "MONEDA",
    cod_nivel_padre: "5126",
    COD_NIVEL: "1673",
    DESCRIPCION: "MONEDA",
    COD_NIVEL_PADRE: "5126"
  },
  {
    cod_nivel: "1731",
    descripcion: "KIT TECLADO Y RATON",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1731",
    DESCRIPCION: "KIT TECLADO Y RATON",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1732",
    descripcion: "RATON",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1732",
    DESCRIPCION: "RATON",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1733",
    descripcion: "TABLA GRAFICA",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1733",
    DESCRIPCION: "TABLA GRAFICA",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1734",
    descripcion: "MANDO DISTANCIA",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1734",
    DESCRIPCION: "MANDO DISTANCIA",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1736",
    descripcion: "PUNTERO LASER",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1736",
    DESCRIPCION: "PUNTERO LASER",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1737",
    descripcion: "TRACKBALL",
    cod_nivel_padre: "1416",
    COD_NIVEL: "1737",
    DESCRIPCION: "TRACKBALL",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "1739",
    descripcion: "MONITOR TFT",
    cod_nivel_padre: "1417",
    COD_NIVEL: "1739",
    DESCRIPCION: "MONITOR TFT",
    COD_NIVEL_PADRE: "1417"
  },
  {
    cod_nivel: "1740",
    descripcion: "MONITOR CRT",
    cod_nivel_padre: "1417",
    COD_NIVEL: "1740",
    DESCRIPCION: "MONITOR CRT",
    COD_NIVEL_PADRE: "1417"
  },
  {
    cod_nivel: "1744",
    descripcion: "FUENTE ALIMENTACION",
    cod_nivel_padre: "1741",
    COD_NIVEL: "1744",
    DESCRIPCION: "FUENTE ALIMENTACION",
    COD_NIVEL_PADRE: "1741"
  },
  {
    cod_nivel: "1745",
    descripcion: "SOPORTE MONITOR",
    cod_nivel_padre: "1741",
    COD_NIVEL: "1745",
    DESCRIPCION: "SOPORTE MONITOR",
    COD_NIVEL_PADRE: "1741"
  },
  {
    cod_nivel: "1746",
    descripcion: "PROTECTOR PANTALLA",
    cod_nivel_padre: "1741",
    COD_NIVEL: "1746",
    DESCRIPCION: "PROTECTOR PANTALLA",
    COD_NIVEL_PADRE: "1741"
  },
  {
    cod_nivel: "1747",
    descripcion: "SOPORTE PARED",
    cod_nivel_padre: "1741",
    COD_NIVEL: "1747",
    DESCRIPCION: "SOPORTE PARED",
    COD_NIVEL_PADRE: "1741"
  },
  {
    cod_nivel: "1748",
    descripcion: "OTRO ACCESORIO MONITOR",
    cod_nivel_padre: "1741",
    COD_NIVEL: "1748",
    DESCRIPCION: "OTRO ACCESORIO MONITOR",
    COD_NIVEL_PADRE: "1741"
  },
  {
    cod_nivel: "1749",
    descripcion: "PROYECTOR",
    cod_nivel_padre: "1417",
    COD_NIVEL: "1749",
    DESCRIPCION: "PROYECTOR",
    COD_NIVEL_PADRE: "1417"
  },
  {
    cod_nivel: "1750",
    descripcion: "ACCESORIO PROYECTOR",
    cod_nivel_padre: "1417",
    COD_NIVEL: "1750",
    DESCRIPCION: "ACCESORIO PROYECTOR",
    COD_NIVEL_PADRE: "1417"
  },
  {
    cod_nivel: "1751",
    descripcion: "OTROS MONITOR PROYECTOR",
    cod_nivel_padre: "1417",
    COD_NIVEL: "1751",
    DESCRIPCION: "OTROS MONITOR PROYECTOR",
    COD_NIVEL_PADRE: "1417"
  },
  {
    cod_nivel: "1752",
    descripcion: "IMPRESORA ETIQUETAS",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1752",
    DESCRIPCION: "IMPRESORA ETIQUETAS",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1753",
    descripcion: "FOTOCOPIADORA",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1753",
    DESCRIPCION: "FOTOCOPIADORA",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1754",
    descripcion: "IMPRESORA FOTOGRAFICA",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1754",
    DESCRIPCION: "IMPRESORA FOTOGRAFICA",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1755",
    descripcion: "IMPRESORA LASER",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1755",
    DESCRIPCION: "IMPRESORA LASER",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1756",
    descripcion: "IMPERSORA MATRICIAL",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1756",
    DESCRIPCION: "IMPERSORA MATRICIAL",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1757",
    descripcion: "IMPRESORA MULTIFUNCION",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1757",
    DESCRIPCION: "IMPRESORA MULTIFUNCION",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1758",
    descripcion: "IMPRESORA GRAN FORMATO",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1758",
    DESCRIPCION: "IMPRESORA GRAN FORMATO",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1759",
    descripcion: "PLOTTER",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1759",
    DESCRIPCION: "PLOTTER",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1760",
    descripcion: "IMPRESORA TINTA",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1760",
    DESCRIPCION: "IMPRESORA TINTA",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1761",
    descripcion: "OTRAS IMPRESORAS",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1761",
    DESCRIPCION: "OTRAS IMPRESORAS",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1762",
    descripcion: "CONSUMIBLE IMPRESORA",
    cod_nivel_padre: "1419",
    COD_NIVEL: "1762",
    DESCRIPCION: "CONSUMIBLE IMPRESORA",
    COD_NIVEL_PADRE: "1419"
  },
  {
    cod_nivel: "1764",
    descripcion: "BOMBARDINO",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1764",
    DESCRIPCION: "BOMBARDINO",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1765",
    descripcion: "TUBA",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1765",
    DESCRIPCION: "TUBA",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1766",
    descripcion: "CORNETIN",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1766",
    DESCRIPCION: "CORNETIN",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1767",
    descripcion: "CORNETA",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1767",
    DESCRIPCION: "CORNETA",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1768",
    descripcion: "TROMPA",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1768",
    DESCRIPCION: "TROMPA",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1769",
    descripcion: "TROMBON",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1769",
    DESCRIPCION: "TROMBON",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1770",
    descripcion: "FLISCORNO",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1770",
    DESCRIPCION: "FLISCORNO",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1771",
    descripcion: "TUBA WAGNER",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1771",
    DESCRIPCION: "TUBA WAGNER",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1772",
    descripcion: "TROMPETA",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1772",
    DESCRIPCION: "TROMPETA",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1773",
    descripcion: "FLAUTA",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1773",
    DESCRIPCION: "FLAUTA",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1774",
    descripcion: "SAXOFON",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1774",
    DESCRIPCION: "SAXOFON",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1775",
    descripcion: "TROMPA ALTA",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1775",
    DESCRIPCION: "TROMPA ALTA",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1776",
    descripcion: "BARITONO",
    cod_nivel_padre: "1763",
    COD_NIVEL: "1776",
    DESCRIPCION: "BARITONO",
    COD_NIVEL_PADRE: "1763"
  },
  {
    cod_nivel: "1778",
    descripcion: "MELOFONO DE MARCHA",
    cod_nivel_padre: "1777",
    COD_NIVEL: "1778",
    DESCRIPCION: "MELOFONO DE MARCHA",
    COD_NIVEL_PADRE: "1777"
  },
  {
    cod_nivel: "1779",
    descripcion: "TROMPA DE MARCHA",
    cod_nivel_padre: "1777",
    COD_NIVEL: "1779",
    DESCRIPCION: "TROMPA DE MARCHA",
    COD_NIVEL_PADRE: "1777"
  },
  {
    cod_nivel: "1780",
    descripcion: "BARITONO DE MARCHA",
    cod_nivel_padre: "1777",
    COD_NIVEL: "1780",
    DESCRIPCION: "BARITONO DE MARCHA",
    COD_NIVEL_PADRE: "1777"
  },
  {
    cod_nivel: "1781",
    descripcion: "BOMBARDINO MARCHA",
    cod_nivel_padre: "1777",
    COD_NIVEL: "1781",
    DESCRIPCION: "BOMBARDINO MARCHA",
    COD_NIVEL_PADRE: "1777"
  },
  {
    cod_nivel: "1782",
    descripcion: "TUBA MARCHA",
    cod_nivel_padre: "1777",
    COD_NIVEL: "1782",
    DESCRIPCION: "TUBA MARCHA",
    COD_NIVEL_PADRE: "1777"
  },
  {
    cod_nivel: "1783",
    descripcion: "SOUSAFONO",
    cod_nivel_padre: "1777",
    COD_NIVEL: "1783",
    DESCRIPCION: "SOUSAFONO",
    COD_NIVEL_PADRE: "1777"
  },
  {
    cod_nivel: "1785",
    descripcion: "FLAUTIN",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1785",
    DESCRIPCION: "FLAUTIN",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1786",
    descripcion: "CLARINETE",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1786",
    DESCRIPCION: "CLARINETE",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1787",
    descripcion: "OBOE",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1787",
    DESCRIPCION: "OBOE",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1788",
    descripcion: "FAGOT",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1788",
    DESCRIPCION: "FAGOT",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1789",
    descripcion: "FLAUTA DULCE",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1789",
    DESCRIPCION: "FLAUTA DULCE",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1790",
    descripcion: "GAITA",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1790",
    DESCRIPCION: "GAITA",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1791",
    descripcion: "DIGERIDOO",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1791",
    DESCRIPCION: "DIGERIDOO",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1792",
    descripcion: "REQUINTO",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1792",
    DESCRIPCION: "REQUINTO",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1793",
    descripcion: "SILBATO",
    cod_nivel_padre: "1784",
    COD_NIVEL: "1793",
    DESCRIPCION: "SILBATO",
    COD_NIVEL_PADRE: "1784"
  },
  {
    cod_nivel: "1795",
    descripcion: "ACORDEON",
    cod_nivel_padre: "1794",
    COD_NIVEL: "1795",
    DESCRIPCION: "ACORDEON",
    COD_NIVEL_PADRE: "1794"
  },
  {
    cod_nivel: "1796",
    descripcion: "CONCERTINA",
    cod_nivel_padre: "1794",
    COD_NIVEL: "1796",
    DESCRIPCION: "CONCERTINA",
    COD_NIVEL_PADRE: "1794"
  },
  {
    cod_nivel: "1797",
    descripcion: "ARMONICA",
    cod_nivel_padre: "1794",
    COD_NIVEL: "1797",
    DESCRIPCION: "ARMONICA",
    COD_NIVEL_PADRE: "1794"
  },
  {
    cod_nivel: "1798",
    descripcion: "MELODICA",
    cod_nivel_padre: "1794",
    COD_NIVEL: "1798",
    DESCRIPCION: "MELODICA",
    COD_NIVEL_PADRE: "1794"
  },
  {
    cod_nivel: "1799",
    descripcion: "KAZOO",
    cod_nivel_padre: "1794",
    COD_NIVEL: "1799",
    DESCRIPCION: "KAZOO",
    COD_NIVEL_PADRE: "1794"
  },
  {
    cod_nivel: "1801",
    descripcion: "SORDINA",
    cod_nivel_padre: "1800",
    COD_NIVEL: "1801",
    DESCRIPCION: "SORDINA",
    COD_NIVEL_PADRE: "1800"
  },
  {
    cod_nivel: "1802",
    descripcion: "BOQUILLA",
    cod_nivel_padre: "1800",
    COD_NIVEL: "1802",
    DESCRIPCION: "BOQUILLA",
    COD_NIVEL_PADRE: "1800"
  },
  {
    cod_nivel: "1803",
    descripcion: "OTROS ACCESORIOS",
    cod_nivel_padre: "1800",
    COD_NIVEL: "1803",
    DESCRIPCION: "OTROS ACCESORIOS",
    COD_NIVEL_PADRE: "1800"
  },
  {
    cod_nivel: "1804",
    descripcion: "SOPORTE",
    cod_nivel_padre: "1800",
    COD_NIVEL: "1804",
    DESCRIPCION: "SOPORTE",
    COD_NIVEL_PADRE: "1800"
  },
  {
    cod_nivel: "1805",
    descripcion: "ARPA",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1805",
    DESCRIPCION: "ARPA",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1806",
    descripcion: "CITARA",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1806",
    DESCRIPCION: "CITARA",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1807",
    descripcion: "CONTRABAJO",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1807",
    DESCRIPCION: "CONTRABAJO",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1808",
    descripcion: "BANJO",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1808",
    DESCRIPCION: "BANJO",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1809",
    descripcion: "BUZUKI",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1809",
    DESCRIPCION: "BUZUKI",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1810",
    descripcion: "MANDOLINA",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1810",
    DESCRIPCION: "MANDOLINA",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1811",
    descripcion: "VIOLA",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1811",
    DESCRIPCION: "VIOLA",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1812",
    descripcion: "VIOLONCHELO",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1812",
    DESCRIPCION: "VIOLONCHELO",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1813",
    descripcion: "DULCEMELE",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1813",
    DESCRIPCION: "DULCEMELE",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1814",
    descripcion: "LAUD",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1814",
    DESCRIPCION: "LAUD",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1815",
    descripcion: "UKELELE",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1815",
    DESCRIPCION: "UKELELE",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1816",
    descripcion: "VIOLIN",
    cod_nivel_padre: "1429",
    COD_NIVEL: "1816",
    DESCRIPCION: "VIOLIN",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "1818",
    descripcion: "GUITARRA CLASICA",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1818",
    DESCRIPCION: "GUITARRA CLASICA",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1819",
    descripcion: "GUITARRA ELECTROCLASICA",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1819",
    DESCRIPCION: "GUITARRA ELECTROCLASICA",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1820",
    descripcion: "GUITARRA ACUSTICA",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1820",
    DESCRIPCION: "GUITARRA ACUSTICA",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1821",
    descripcion: "GUITARRA ELECTROACUSTICA",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1821",
    DESCRIPCION: "GUITARRA ELECTROACUSTICA",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1822",
    descripcion: "GUITARRA ELECTRICA",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1822",
    DESCRIPCION: "GUITARRA ELECTRICA",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1823",
    descripcion: "BAJO ELECTRICO",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1823",
    DESCRIPCION: "BAJO ELECTRICO",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1825",
    descripcion: "AMPLIFICADOR GUITARRA",
    cod_nivel_padre: "1817",
    COD_NIVEL: "1825",
    DESCRIPCION: "AMPLIFICADOR GUITARRA",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "1827",
    descripcion: "CABLE",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1827",
    DESCRIPCION: "CABLE",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1828",
    descripcion: "CEJILLA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1828",
    DESCRIPCION: "CEJILLA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1829",
    descripcion: "FUNDA GUITARRA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1829",
    DESCRIPCION: "FUNDA GUITARRA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1830",
    descripcion: "PUA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1830",
    DESCRIPCION: "PUA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1831",
    descripcion: "PEDAL EFECTOS",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1831",
    DESCRIPCION: "PEDAL EFECTOS",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1832",
    descripcion: "MULTIEFECTOS GUITARRA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1832",
    DESCRIPCION: "MULTIEFECTOS GUITARRA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1833",
    descripcion: "JUEGO CUERDAS",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1833",
    DESCRIPCION: "JUEGO CUERDAS",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1834",
    descripcion: "REPOSAPIES",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1834",
    DESCRIPCION: "REPOSAPIES",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1835",
    descripcion: "DIAPASON",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1835",
    DESCRIPCION: "DIAPASON",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1836",
    descripcion: "CORREA GUITARRA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1836",
    DESCRIPCION: "CORREA GUITARRA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1837",
    descripcion: "AFINADOR",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1837",
    DESCRIPCION: "AFINADOR",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1838",
    descripcion: "METRONOMO",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1838",
    DESCRIPCION: "METRONOMO",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1839",
    descripcion: "OTROS ACCESORIOS CUERDA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1839",
    DESCRIPCION: "OTROS ACCESORIOS CUERDA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1840",
    descripcion: "SOPORTE GUITARRA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1840",
    DESCRIPCION: "SOPORTE GUITARRA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1841",
    descripcion: "OTROS SOPORTE CUERDA",
    cod_nivel_padre: "1826",
    COD_NIVEL: "1841",
    DESCRIPCION: "OTROS SOPORTE CUERDA",
    COD_NIVEL_PADRE: "1826"
  },
  {
    cod_nivel: "1842",
    descripcion: "PIANO",
    cod_nivel_padre: "1430",
    COD_NIVEL: "1842",
    DESCRIPCION: "PIANO",
    COD_NIVEL_PADRE: "1430"
  },
  {
    cod_nivel: "1843",
    descripcion: "ORGANO",
    cod_nivel_padre: "1430",
    COD_NIVEL: "1843",
    DESCRIPCION: "ORGANO",
    COD_NIVEL_PADRE: "1430"
  },
  {
    cod_nivel: "1844",
    descripcion: "TECLADO ELECTRONICO",
    cod_nivel_padre: "1430",
    COD_NIVEL: "1844",
    DESCRIPCION: "TECLADO ELECTRONICO",
    COD_NIVEL_PADRE: "1430"
  },
  {
    cod_nivel: "1845",
    descripcion: "SINTETIZADOR",
    cod_nivel_padre: "1430",
    COD_NIVEL: "1845",
    DESCRIPCION: "SINTETIZADOR",
    COD_NIVEL_PADRE: "1430"
  },
  {
    cod_nivel: "1853",
    descripcion: "BATERIA",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1853",
    DESCRIPCION: "BATERIA",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1855",
    descripcion: "BOMBO",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1855",
    DESCRIPCION: "BOMBO",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1856",
    descripcion: "CAJA",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1856",
    DESCRIPCION: "CAJA",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1857",
    descripcion: "TOM",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1857",
    DESCRIPCION: "TOM",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1858",
    descripcion: "GOLIAT",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1858",
    DESCRIPCION: "GOLIAT",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1860",
    descripcion: "PLATO CRASH",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1860",
    DESCRIPCION: "PLATO CRASH",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1861",
    descripcion: "PLATO RIDE",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1861",
    DESCRIPCION: "PLATO RIDE",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1862",
    descripcion: "PLATO SPLASH",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1862",
    DESCRIPCION: "PLATO SPLASH",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1863",
    descripcion: "PLATO CHINA",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1863",
    DESCRIPCION: "PLATO CHINA",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1864",
    descripcion: "PLATO CHARLES",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1864",
    DESCRIPCION: "PLATO CHARLES",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1865",
    descripcion: "BAQUETAS",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1865",
    DESCRIPCION: "BAQUETAS",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1866",
    descripcion: "BANCO BATERIA",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1866",
    DESCRIPCION: "BANCO BATERIA",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1867",
    descripcion: "HERRAJE BATERIA",
    cod_nivel_padre: "1852",
    COD_NIVEL: "1867",
    DESCRIPCION: "HERRAJE BATERIA",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "1868",
    descripcion: "BOMBO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1868",
    DESCRIPCION: "BOMBO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1869",
    descripcion: "BONGOS",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1869",
    DESCRIPCION: "BONGOS",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1870",
    descripcion: "CAJA CHINA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1870",
    DESCRIPCION: "CAJA CHINA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1871",
    descripcion: "CAJON FLAMENCO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1871",
    DESCRIPCION: "CAJON FLAMENCO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1872",
    descripcion: "CAMPANA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1872",
    DESCRIPCION: "CAMPANA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1873",
    descripcion: "CAMPANILLA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1873",
    DESCRIPCION: "CAMPANILLA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1874",
    descripcion: "CASCABELES",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1874",
    DESCRIPCION: "CASCABELES",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1875",
    descripcion: "CASTAÑUELAS",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1875",
    DESCRIPCION: "CASTAÑUELAS",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1876",
    descripcion: "CENCERRO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1876",
    DESCRIPCION: "CENCERRO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1877",
    descripcion: "CLAVE",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1877",
    DESCRIPCION: "CLAVE",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1878",
    descripcion: "CONGA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1878",
    DESCRIPCION: "CONGA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1879",
    descripcion: "CORTINA DE SONIDOS",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1879",
    DESCRIPCION: "CORTINA DE SONIDOS",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1880",
    descripcion: "DARBUKA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1880",
    DESCRIPCION: "DARBUKA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1881",
    descripcion: "GONG",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1881",
    DESCRIPCION: "GONG",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1882",
    descripcion: "GUIRO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1882",
    DESCRIPCION: "GUIRO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1883",
    descripcion: "MARACAS",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1883",
    DESCRIPCION: "MARACAS",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1884",
    descripcion: "MARIMBA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1884",
    DESCRIPCION: "MARIMBA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1885",
    descripcion: "METALOFONO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1885",
    DESCRIPCION: "METALOFONO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1886",
    descripcion: "PANDERETA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1886",
    DESCRIPCION: "PANDERETA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1887",
    descripcion: "PANDERO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1887",
    DESCRIPCION: "PANDERO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1888",
    descripcion: "PLATILLOS",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1888",
    DESCRIPCION: "PLATILLOS",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1889",
    descripcion: "SONAJERO  SHAKER",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1889",
    DESCRIPCION: "SONAJERO  SHAKER",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1890",
    descripcion: "TAMBOR",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1890",
    DESCRIPCION: "TAMBOR",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1891",
    descripcion: "TIMBAL",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1891",
    DESCRIPCION: "TIMBAL",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1892",
    descripcion: "TRIANGULO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1892",
    DESCRIPCION: "TRIANGULO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1893",
    descripcion: "XILOFONO",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1893",
    DESCRIPCION: "XILOFONO",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1894",
    descripcion: "DJEMBE",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1894",
    DESCRIPCION: "DJEMBE",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1895",
    descripcion: "ZAMBOMBA",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1895",
    DESCRIPCION: "ZAMBOMBA",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1896",
    descripcion: "OTROS PERCUSION",
    cod_nivel_padre: "1431",
    COD_NIVEL: "1896",
    DESCRIPCION: "OTROS PERCUSION",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "1898",
    descripcion: "SOPORTE LUCES",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1898",
    DESCRIPCION: "SOPORTE LUCES",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1899",
    descripcion: "PUENTE LUCES",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1899",
    DESCRIPCION: "PUENTE LUCES",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1900",
    descripcion: "SOPORTE COLUMNAS",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1900",
    DESCRIPCION: "SOPORTE COLUMNAS",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1902",
    descripcion: "SOPORTE MICROFONO",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1902",
    DESCRIPCION: "SOPORTE MICROFONO",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1903",
    descripcion: "PINZA MICROFONO",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1903",
    DESCRIPCION: "PINZA MICROFONO",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1904",
    descripcion: "ADAPTADOR ROSCA MICRO",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1904",
    DESCRIPCION: "ADAPTADOR ROSCA MICRO",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1905",
    descripcion: "PARAVIENTOS MICROFONO",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1905",
    DESCRIPCION: "PARAVIENTOS MICROFONO",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1907",
    descripcion: "AMPLIFICADOR AURICULARES",
    cod_nivel_padre: "1906",
    COD_NIVEL: "1907",
    DESCRIPCION: "AMPLIFICADOR AURICULARES",
    COD_NIVEL_PADRE: "1906"
  },
  {
    cod_nivel: "1908",
    descripcion: "ETAPA POTENCIA",
    cod_nivel_padre: "1906",
    COD_NIVEL: "1908",
    DESCRIPCION: "ETAPA POTENCIA",
    COD_NIVEL_PADRE: "1906"
  },
  {
    cod_nivel: "1909",
    descripcion: "PREAMPLIFICADOR",
    cod_nivel_padre: "1906",
    COD_NIVEL: "1909",
    DESCRIPCION: "PREAMPLIFICADOR",
    COD_NIVEL_PADRE: "1906"
  },
  {
    cod_nivel: "1912",
    descripcion: "CAJA DE RITMOS",
    cod_nivel_padre: "1911",
    COD_NIVEL: "1912",
    DESCRIPCION: "CAJA DE RITMOS",
    COD_NIVEL_PADRE: "1911"
  },
  {
    cod_nivel: "1913",
    descripcion: "GRABADOR DIGITAL",
    cod_nivel_padre: "1911",
    COD_NIVEL: "1913",
    DESCRIPCION: "GRABADOR DIGITAL",
    COD_NIVEL_PADRE: "1911"
  },
  {
    cod_nivel: "1914",
    descripcion: "SAMPLER",
    cod_nivel_padre: "1911",
    COD_NIVEL: "1914",
    DESCRIPCION: "SAMPLER",
    COD_NIVEL_PADRE: "1911"
  },
  {
    cod_nivel: "1915",
    descripcion: "SOFTWARE GRABACION",
    cod_nivel_padre: "1911",
    COD_NIVEL: "1915",
    DESCRIPCION: "SOFTWARE GRABACION",
    COD_NIVEL_PADRE: "1911"
  },
  {
    cod_nivel: "1916",
    descripcion: "TARJETA SONIDO",
    cod_nivel_padre: "1911",
    COD_NIVEL: "1916",
    DESCRIPCION: "TARJETA SONIDO",
    COD_NIVEL_PADRE: "1911"
  },
  {
    cod_nivel: "1917",
    descripcion: "OTROS EQUIPO GRABACION",
    cod_nivel_padre: "1911",
    COD_NIVEL: "1917",
    DESCRIPCION: "OTROS EQUIPO GRABACION",
    COD_NIVEL_PADRE: "1911"
  },
  {
    cod_nivel: "1921",
    descripcion: "CONTROLADOR",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1921",
    DESCRIPCION: "CONTROLADOR",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1922",
    descripcion: "EFECTO DE HUMOS",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1922",
    DESCRIPCION: "EFECTO DE HUMOS",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1923",
    descripcion: "EFECTO DE BURBUJAS",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1923",
    DESCRIPCION: "EFECTO DE BURBUJAS",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1924",
    descripcion: "EFECTO ESPUMA NIEVE",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1924",
    DESCRIPCION: "EFECTO ESPUMA NIEVE",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1925",
    descripcion: "LIQUIDOS EFECTOS",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1925",
    DESCRIPCION: "LIQUIDOS EFECTOS",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1926",
    descripcion: "SOPORTE EFECTOS",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1926",
    DESCRIPCION: "SOPORTE EFECTOS",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1928",
    descripcion: "LUZ NEGRA ULTRAVIOLETA",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1928",
    DESCRIPCION: "LUZ NEGRA ULTRAVIOLETA",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1929",
    descripcion: "DIMMERS",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1929",
    DESCRIPCION: "DIMMERS",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1930",
    descripcion: "PANEL INTERRUPTORES",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1930",
    DESCRIPCION: "PANEL INTERRUPTORES",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1931",
    descripcion: "EFECTO GOBO",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1931",
    DESCRIPCION: "EFECTO GOBO",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1932",
    descripcion: "EFECTO LASER",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1932",
    DESCRIPCION: "EFECTO LASER",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1933",
    descripcion: "EFECTO LED",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1933",
    DESCRIPCION: "EFECTO LED",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1934",
    descripcion: "BOLA ESPEJO",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1934",
    DESCRIPCION: "BOLA ESPEJO",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1935",
    descripcion: "LUZ ESTROBOSCOPICA FLASH",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1935",
    DESCRIPCION: "LUZ ESTROBOSCOPICA FLASH",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1936",
    descripcion: "FARO GIRATORIO",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1936",
    DESCRIPCION: "FARO GIRATORIO",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1937",
    descripcion: "FOCO PAR",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1937",
    DESCRIPCION: "FOCO PAR",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1938",
    descripcion: "OTRO EFECTO LUCES",
    cod_nivel_padre: "1919",
    COD_NIVEL: "1938",
    DESCRIPCION: "OTRO EFECTO LUCES",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "1939",
    descripcion: "AURICULAR DJ",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1939",
    DESCRIPCION: "AURICULAR DJ",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1940",
    descripcion: "TRANSPORTE EQUIPO DJ",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1940",
    DESCRIPCION: "TRANSPORTE EQUIPO DJ",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1941",
    descripcion: "SOPORTE EQUIPO DJ",
    cod_nivel_padre: "5088",
    COD_NIVEL: "1941",
    DESCRIPCION: "SOPORTE EQUIPO DJ",
    COD_NIVEL_PADRE: "5088"
  },
  {
    cod_nivel: "1942",
    descripcion: "GIRADISCOS",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1942",
    DESCRIPCION: "GIRADISCOS",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1943",
    descripcion: "REPRODUCTOR CD",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1943",
    DESCRIPCION: "REPRODUCTOR CD",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1944",
    descripcion: "MESA MEZCLAS",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1944",
    DESCRIPCION: "MESA MEZCLAS",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1945",
    descripcion: "CONTROLLER",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1945",
    DESCRIPCION: "CONTROLLER",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1946",
    descripcion: "CAJA ACUSTICA",
    cod_nivel_padre: "1918",
    COD_NIVEL: "1946",
    DESCRIPCION: "CAJA ACUSTICA",
    COD_NIVEL_PADRE: "1918"
  },
  {
    cod_nivel: "1948",
    descripcion: "COMPRESOR",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1948",
    DESCRIPCION: "COMPRESOR",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1949",
    descripcion: "MICROFONO VOCALISTA",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1949",
    DESCRIPCION: "MICROFONO VOCALISTA",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1950",
    descripcion: "MICROFONO INSTRUMENTOS",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1950",
    DESCRIPCION: "MICROFONO INSTRUMENTOS",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1951",
    descripcion: "LIMITADOR",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1951",
    DESCRIPCION: "LIMITADOR",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1952",
    descripcion: "ECUALIZADOR",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1952",
    DESCRIPCION: "ECUALIZADOR",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1953",
    descripcion: "CROSSOVER",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1953",
    DESCRIPCION: "CROSSOVER",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1954",
    descripcion: "RACK",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1954",
    DESCRIPCION: "RACK",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1955",
    descripcion: "OTROS MUSICA PROFESIONAL",
    cod_nivel_padre: "1433",
    COD_NIVEL: "1955",
    DESCRIPCION: "OTROS MUSICA PROFESIONAL",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "1962",
    descripcion: "MALETA VIAJE",
    cod_nivel_padre: "498",
    COD_NIVEL: "1962",
    DESCRIPCION: "MALETA VIAJE",
    COD_NIVEL_PADRE: "498"
  },
  {
    cod_nivel: "2000",
    descripcion: "OTRAS GAFAS",
    cod_nivel_padre: "1464",
    COD_NIVEL: "2000",
    DESCRIPCION: "OTRAS GAFAS",
    COD_NIVEL_PADRE: "1464"
  },
  {
    cod_nivel: "2001",
    descripcion: "MODELISMO COCHE",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2001",
    DESCRIPCION: "MODELISMO COCHE",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2002",
    descripcion: "MODELISMO MOTO",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2002",
    DESCRIPCION: "MODELISMO MOTO",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2003",
    descripcion: "MODELISMO AVION",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2003",
    DESCRIPCION: "MODELISMO AVION",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2004",
    descripcion: "MODELISMO HELICOPTERO",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2004",
    DESCRIPCION: "MODELISMO HELICOPTERO",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2005",
    descripcion: "BARCO MODELISMO",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2005",
    DESCRIPCION: "BARCO MODELISMO",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2006",
    descripcion: "ESCENARIOS MODELISMO",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2006",
    DESCRIPCION: "ESCENARIOS MODELISMO",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2007",
    descripcion: "FIGURAS MODELISMO",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2007",
    DESCRIPCION: "FIGURAS MODELISMO",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2008",
    descripcion: "VEHICULO MILITAR ",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2008",
    DESCRIPCION: "VEHICULO MILITAR ",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2009",
    descripcion: "EMISORA MODELISMO",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2009",
    DESCRIPCION: "EMISORA MODELISMO",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2010",
    descripcion: "OTROS MODELISMO",
    cod_nivel_padre: "1446",
    COD_NIVEL: "2010",
    DESCRIPCION: "OTROS MODELISMO",
    COD_NIVEL_PADRE: "1446"
  },
  {
    cod_nivel: "2011",
    descripcion: "COCHE RADIOCONTROL",
    cod_nivel_padre: "1450",
    COD_NIVEL: "2011",
    DESCRIPCION: "COCHE RADIOCONTROL",
    COD_NIVEL_PADRE: "1450"
  },
  {
    cod_nivel: "2012",
    descripcion: "AVION RADIOCONTROL",
    cod_nivel_padre: "1450",
    COD_NIVEL: "2012",
    DESCRIPCION: "AVION RADIOCONTROL",
    COD_NIVEL_PADRE: "1450"
  },
  {
    cod_nivel: "2013",
    descripcion: "BARCO RADIOCONTROL",
    cod_nivel_padre: "1450",
    COD_NIVEL: "2013",
    DESCRIPCION: "BARCO RADIOCONTROL",
    COD_NIVEL_PADRE: "1450"
  },
  {
    cod_nivel: "2014",
    descripcion: "HELICOPTERO RADIOCONTROL",
    cod_nivel_padre: "1450",
    COD_NIVEL: "2014",
    DESCRIPCION: "HELICOPTERO RADIOCONTROL",
    COD_NIVEL_PADRE: "1450"
  },
  {
    cod_nivel: "2015",
    descripcion: "OTROS  RADIOCONTROL",
    cod_nivel_padre: "1450",
    COD_NIVEL: "2015",
    DESCRIPCION: "OTROS  RADIOCONTROL",
    COD_NIVEL_PADRE: "1450"
  },
  {
    cod_nivel: "2016",
    descripcion: "COCHE SLOT",
    cod_nivel_padre: "1451",
    COD_NIVEL: "2016",
    DESCRIPCION: "COCHE SLOT",
    COD_NIVEL_PADRE: "1451"
  },
  {
    cod_nivel: "2017",
    descripcion: "PISTA SLOT",
    cod_nivel_padre: "1451",
    COD_NIVEL: "2017",
    DESCRIPCION: "PISTA SLOT",
    COD_NIVEL_PADRE: "1451"
  },
  {
    cod_nivel: "2018",
    descripcion: "ACCESORIO SLOT",
    cod_nivel_padre: "1451",
    COD_NIVEL: "2018",
    DESCRIPCION: "ACCESORIO SLOT",
    COD_NIVEL_PADRE: "1451"
  },
  {
    cod_nivel: "2019",
    descripcion: "KIT PISTA Y COCHES SLOT",
    cod_nivel_padre: "1451",
    COD_NIVEL: "2019",
    DESCRIPCION: "KIT PISTA Y COCHES SLOT",
    COD_NIVEL_PADRE: "1451"
  },
  {
    cod_nivel: "2021",
    descripcion: "LOCOMOTORA ESCALA H0",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2021",
    DESCRIPCION: "LOCOMOTORA ESCALA H0",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2022",
    descripcion: "KIT MAQUETA ESCALA H0",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2022",
    DESCRIPCION: "KIT MAQUETA ESCALA H0",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2024",
    descripcion: "VIA ESCALA H0",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2024",
    DESCRIPCION: "VIA ESCALA H0",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2025",
    descripcion: "OTROS TREN H0",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2025",
    DESCRIPCION: "OTROS TREN H0",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2027",
    descripcion: "LOCOMOTORA ESCALA N",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2027",
    DESCRIPCION: "LOCOMOTORA ESCALA N",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2028",
    descripcion: "KIT MAQUETA ESCALA N",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2028",
    DESCRIPCION: "KIT MAQUETA ESCALA N",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2029",
    descripcion: "VAGON ESCALA N",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2029",
    DESCRIPCION: "VAGON ESCALA N",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2030",
    descripcion: "VIA ESCALA N",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2030",
    DESCRIPCION: "VIA ESCALA N",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2031",
    descripcion: "OTROS TREN ESCALA N",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2031",
    DESCRIPCION: "OTROS TREN ESCALA N",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2032",
    descripcion: "TRENES MINIATURA OTRAS ESCALAS",
    cod_nivel_padre: "1454",
    COD_NIVEL: "2032",
    DESCRIPCION: "TRENES MINIATURA OTRAS ESCALAS",
    COD_NIVEL_PADRE: "1454"
  },
  {
    cod_nivel: "2033",
    descripcion: "OTRAS UNIDADES APPLE",
    cod_nivel_padre: "5068",
    COD_NIVEL: "2033",
    DESCRIPCION: "OTRAS UNIDADES APPLE",
    COD_NIVEL_PADRE: "5068"
  },
  {
    cod_nivel: "2034",
    descripcion: "DISCO VIRGEN GRABACION",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2034",
    DESCRIPCION: "DISCO VIRGEN GRABACION",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2035",
    descripcion: "DRIVE BLURAY",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2035",
    DESCRIPCION: "DRIVE BLURAY",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2036",
    descripcion: "DRIVE CD ROM",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2036",
    DESCRIPCION: "DRIVE CD ROM",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2037",
    descripcion: "DRIVE CD R",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2037",
    DESCRIPCION: "DRIVE CD R",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2038",
    descripcion: "DRIVE CD RW COMBO DVD",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2038",
    DESCRIPCION: "DRIVE CD RW COMBO DVD",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2039",
    descripcion: "DRIVE DUPLICADOR CD DVD",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2039",
    DESCRIPCION: "DRIVE DUPLICADOR CD DVD",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2040",
    descripcion: "DRIVE DVD ROM",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2040",
    DESCRIPCION: "DRIVE DVD ROM",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2041",
    descripcion: "DRIVE DVD RW",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2041",
    DESCRIPCION: "DRIVE DVD RW",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2043",
    descripcion: "DRIVE FLOPPY DISC",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2043",
    DESCRIPCION: "DRIVE FLOPPY DISC",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2044",
    descripcion: "DISCO DURO",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2044",
    DESCRIPCION: "DISCO DURO",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2045",
    descripcion: "DISCO DURO MULTIMEDIA",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2045",
    DESCRIPCION: "DISCO DURO MULTIMEDIA",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2046",
    descripcion: "DRIVE JAZ",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2046",
    DESCRIPCION: "DRIVE JAZ",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2047",
    descripcion: "DRIVE TAPE",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2047",
    DESCRIPCION: "DRIVE TAPE",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2048",
    descripcion: "DRIVE ZIP",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2048",
    DESCRIPCION: "DRIVE ZIP",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2049",
    descripcion: "OTROS DRIVE",
    cod_nivel_padre: "1415",
    COD_NIVEL: "2049",
    DESCRIPCION: "OTROS DRIVE",
    COD_NIVEL_PADRE: "1415"
  },
  {
    cod_nivel: "2056",
    descripcion: "CABLE MONITOR BNC",
    cod_nivel_padre: "1711",
    COD_NIVEL: "2056",
    DESCRIPCION: "CABLE MONITOR BNC",
    COD_NIVEL_PADRE: "1711"
  },
  {
    cod_nivel: "2064",
    descripcion: "PC VINTAGE APPLE ",
    cod_nivel_padre: "1423",
    COD_NIVEL: "2064",
    DESCRIPCION: "PC VINTAGE APPLE ",
    COD_NIVEL_PADRE: "1423"
  },
  {
    cod_nivel: "2065",
    descripcion: "PC VINTAGE AMIGA",
    cod_nivel_padre: "1423",
    COD_NIVEL: "2065",
    DESCRIPCION: "PC VINTAGE AMIGA",
    COD_NIVEL_PADRE: "1423"
  },
  {
    cod_nivel: "2066",
    descripcion: "PC VINTAGE ATARI",
    cod_nivel_padre: "1423",
    COD_NIVEL: "2066",
    DESCRIPCION: "PC VINTAGE ATARI",
    COD_NIVEL_PADRE: "1423"
  },
  {
    cod_nivel: "2067",
    descripcion: "PC VINTAGE COMMODORE",
    cod_nivel_padre: "1423",
    COD_NIVEL: "2067",
    DESCRIPCION: "PC VINTAGE COMMODORE",
    COD_NIVEL_PADRE: "1423"
  },
  {
    cod_nivel: "2068",
    descripcion: "PC VINTAGE IBM",
    cod_nivel_padre: "1423",
    COD_NIVEL: "2068",
    DESCRIPCION: "PC VINTAGE IBM",
    COD_NIVEL_PADRE: "1423"
  },
  {
    cod_nivel: "2069",
    descripcion: "PC VINTAGE SPECTRUM",
    cod_nivel_padre: "1423",
    COD_NIVEL: "2069",
    DESCRIPCION: "PC VINTAGE SPECTRUM",
    COD_NIVEL_PADRE: "1423"
  },
  {
    cod_nivel: "2070",
    descripcion: "OTROS PC VINTAGE",
    cod_nivel_padre: "1423",
    COD_NIVEL: "2070",
    DESCRIPCION: "OTROS PC VINTAGE",
    COD_NIVEL_PADRE: "1423"
  },
  {
    cod_nivel: "2072",
    descripcion: "BOLA BOWLING",
    cod_nivel_padre: "2071",
    COD_NIVEL: "2072",
    DESCRIPCION: "BOLA BOWLING",
    COD_NIVEL_PADRE: "2071"
  },
  {
    cod_nivel: "2073",
    descripcion: "PIN",
    cod_nivel_padre: "2071",
    COD_NIVEL: "2073",
    DESCRIPCION: "PIN",
    COD_NIVEL_PADRE: "2071"
  },
  {
    cod_nivel: "2074",
    descripcion: "ZAPATOS BOWLING",
    cod_nivel_padre: "2071",
    COD_NIVEL: "2074",
    DESCRIPCION: "ZAPATOS BOWLING",
    COD_NIVEL_PADRE: "2071"
  },
  {
    cod_nivel: "2075",
    descripcion: "GUANTES BOWLING",
    cod_nivel_padre: "2071",
    COD_NIVEL: "2075",
    DESCRIPCION: "GUANTES BOWLING",
    COD_NIVEL_PADRE: "2071"
  },
  {
    cod_nivel: "2076",
    descripcion: "MUÑEQUERA BOWLING",
    cod_nivel_padre: "2071",
    COD_NIVEL: "2076",
    DESCRIPCION: "MUÑEQUERA BOWLING",
    COD_NIVEL_PADRE: "2071"
  },
  {
    cod_nivel: "2077",
    descripcion: "BOTAS AGUA",
    cod_nivel_padre: "994",
    COD_NIVEL: "2077",
    DESCRIPCION: "BOTAS AGUA",
    COD_NIVEL_PADRE: "994"
  },
  {
    cod_nivel: "2079",
    descripcion: "PLANCHA PELO",
    cod_nivel_padre: "444",
    COD_NIVEL: "2079",
    DESCRIPCION: "PLANCHA PELO",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "2081",
    descripcion: "MEDIDOR LASER",
    cod_nivel_padre: "832",
    COD_NIVEL: "2081",
    DESCRIPCION: "MEDIDOR LASER",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "2082",
    descripcion: "ROUTER DSL",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2082",
    DESCRIPCION: "ROUTER DSL",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2083",
    descripcion: "MODEM DIAL UP",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2083",
    DESCRIPCION: "MODEM DIAL UP",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2084",
    descripcion: "ROUTER CABLE",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2084",
    DESCRIPCION: "ROUTER CABLE",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2085",
    descripcion: "SWITCH",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2085",
    DESCRIPCION: "SWITCH",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2086",
    descripcion: "HUB",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2086",
    DESCRIPCION: "HUB",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2087",
    descripcion: "SAI UPS",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2087",
    DESCRIPCION: "SAI UPS",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2088",
    descripcion: "OTROS",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2088",
    DESCRIPCION: "OTROS",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2090",
    descripcion: "CARGADOR BATERIAS",
    cod_nivel_padre: "1033",
    COD_NIVEL: "2090",
    DESCRIPCION: "CARGADOR BATERIAS",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "2091",
    descripcion: "ARRANCADOR BATERIAS",
    cod_nivel_padre: "1033",
    COD_NIVEL: "2091",
    DESCRIPCION: "ARRANCADOR BATERIAS",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "2092",
    descripcion: "TECLADO NUMERICO",
    cod_nivel_padre: "1416",
    COD_NIVEL: "2092",
    DESCRIPCION: "TECLADO NUMERICO",
    COD_NIVEL_PADRE: "1416"
  },
  {
    cod_nivel: "2093",
    descripcion: "DESTORNILLADOR CARRACA",
    cod_nivel_padre: "801",
    COD_NIVEL: "2093",
    DESCRIPCION: "DESTORNILLADOR CARRACA",
    COD_NIVEL_PADRE: "801"
  },
  {
    cod_nivel: "2094",
    descripcion: "MULTIMETRO",
    cod_nivel_padre: "1005",
    COD_NIVEL: "2094",
    DESCRIPCION: "MULTIMETRO",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "2095",
    descripcion: "PINZA AMPERIMETRICA",
    cod_nivel_padre: "1005",
    COD_NIVEL: "2095",
    DESCRIPCION: "PINZA AMPERIMETRICA",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "2096",
    descripcion: "CRIMPADORA",
    cod_nivel_padre: "1005",
    COD_NIVEL: "2096",
    DESCRIPCION: "CRIMPADORA",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "2098",
    descripcion: "BRUJULA ",
    cod_nivel_padre: "47",
    COD_NIVEL: "2098",
    DESCRIPCION: "BRUJULA ",
    COD_NIVEL_PADRE: "47"
  },
  {
    cod_nivel: "2100",
    descripcion: "TACO BILLAR",
    cod_nivel_padre: "2099",
    COD_NIVEL: "2100",
    DESCRIPCION: "TACO BILLAR",
    COD_NIVEL_PADRE: "2099"
  },
  {
    cod_nivel: "2101",
    descripcion: "SET BOLAS BILLAR",
    cod_nivel_padre: "2099",
    COD_NIVEL: "2101",
    DESCRIPCION: "SET BOLAS BILLAR",
    COD_NIVEL_PADRE: "2099"
  },
  {
    cod_nivel: "2102",
    descripcion: "MESA BILLAR",
    cod_nivel_padre: "2099",
    COD_NIVEL: "2102",
    DESCRIPCION: "MESA BILLAR",
    COD_NIVEL_PADRE: "2099"
  },
  {
    cod_nivel: "2104",
    descripcion: "TABLERO AJEDREZ",
    cod_nivel_padre: "2103",
    COD_NIVEL: "2104",
    DESCRIPCION: "TABLERO AJEDREZ",
    COD_NIVEL_PADRE: "2103"
  },
  {
    cod_nivel: "2105",
    descripcion: "FICHAS AJEDREZ",
    cod_nivel_padre: "2103",
    COD_NIVEL: "2105",
    DESCRIPCION: "FICHAS AJEDREZ",
    COD_NIVEL_PADRE: "2103"
  },
  {
    cod_nivel: "2106",
    descripcion: "SET TABLERO FICHAS",
    cod_nivel_padre: "2103",
    COD_NIVEL: "2106",
    DESCRIPCION: "SET TABLERO FICHAS",
    COD_NIVEL_PADRE: "2103"
  },
  {
    cod_nivel: "2107",
    descripcion: "RELOJ AJEDREZ",
    cod_nivel_padre: "2103",
    COD_NIVEL: "2107",
    DESCRIPCION: "RELOJ AJEDREZ",
    COD_NIVEL_PADRE: "2103"
  },
  {
    cod_nivel: "2108",
    descripcion: "MICROSCOPIO",
    cod_nivel_padre: "1395",
    COD_NIVEL: "2108",
    DESCRIPCION: "MICROSCOPIO",
    COD_NIVEL_PADRE: "1395"
  },
  {
    cod_nivel: "2109",
    descripcion: "CONTROLADORA DMX",
    cod_nivel_padre: "1919",
    COD_NIVEL: "2109",
    DESCRIPCION: "CONTROLADORA DMX",
    COD_NIVEL_PADRE: "1919"
  },
  {
    cod_nivel: "2110",
    descripcion: "SET INSTRUMENTO PERCUSION",
    cod_nivel_padre: "1431",
    COD_NIVEL: "2110",
    DESCRIPCION: "SET INSTRUMENTO PERCUSION",
    COD_NIVEL_PADRE: "1431"
  },
  {
    cod_nivel: "2111",
    descripcion: "BOTAS SNOWBOARD",
    cod_nivel_padre: "202",
    COD_NIVEL: "2111",
    DESCRIPCION: "BOTAS SNOWBOARD",
    COD_NIVEL_PADRE: "202"
  },
  {
    cod_nivel: "2112",
    descripcion: "CANDADO",
    cod_nivel_padre: "954",
    COD_NIVEL: "2112",
    DESCRIPCION: "CANDADO",
    COD_NIVEL_PADRE: "954"
  },
  {
    cod_nivel: "2114",
    descripcion: "SET PEINADO",
    cod_nivel_padre: "444",
    COD_NIVEL: "2114",
    DESCRIPCION: "SET PEINADO",
    COD_NIVEL_PADRE: "444"
  },
  {
    cod_nivel: "2115",
    descripcion: "BOMBILLA",
    cod_nivel_padre: "1005",
    COD_NIVEL: "2115",
    DESCRIPCION: "BOMBILLA",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "2122",
    descripcion: "ADAPTADOR MANDO PS2 A PC",
    cod_nivel_padre: "5119",
    COD_NIVEL: "2122",
    DESCRIPCION: "ADAPTADOR MANDO PS2 A PC",
    COD_NIVEL_PADRE: "5119"
  },
  {
    cod_nivel: "2123",
    descripcion: "ALIMENTADOR CORRIENTE PS2",
    cod_nivel_padre: "5119",
    COD_NIVEL: "2123",
    DESCRIPCION: "ALIMENTADOR CORRIENTE PS2",
    COD_NIVEL_PADRE: "5119"
  },
  {
    cod_nivel: "2124",
    descripcion: "ADAPTADOR RED PS2",
    cod_nivel_padre: "5119",
    COD_NIVEL: "2124",
    DESCRIPCION: "ADAPTADOR RED PS2",
    COD_NIVEL_PADRE: "5119"
  },
  {
    cod_nivel: "2125",
    descripcion: "MICROFONO PS2",
    cod_nivel_padre: "5119",
    COD_NIVEL: "2125",
    DESCRIPCION: "MICROFONO PS2",
    COD_NIVEL_PADRE: "5119"
  },
  {
    cod_nivel: "2126",
    descripcion: "ALFOMBRA JUEGO PS2",
    cod_nivel_padre: "5119",
    COD_NIVEL: "2126",
    DESCRIPCION: "ALFOMBRA JUEGO PS2",
    COD_NIVEL_PADRE: "5119"
  },
  {
    cod_nivel: "2136",
    descripcion: "MICROFONO PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2136",
    DESCRIPCION: "MICROFONO PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2137",
    descripcion: "BATERIA ROCKBAND PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2137",
    DESCRIPCION: "BATERIA ROCKBAND PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2138",
    descripcion: "PEDAL ROCKBAND PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2138",
    DESCRIPCION: "PEDAL ROCKBAND PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2139",
    descripcion: "BASE CARGA MOVE PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2139",
    DESCRIPCION: "BASE CARGA MOVE PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2140",
    descripcion: "MANDO MOVE PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2140",
    DESCRIPCION: "MANDO MOVE PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2141",
    descripcion: "ALFOMBRA BAILE PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2141",
    DESCRIPCION: "ALFOMBRA BAILE PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2142",
    descripcion: "BATERIA EXTRA MANDOS PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2142",
    DESCRIPCION: "BATERIA EXTRA MANDOS PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2143",
    descripcion: "BUZZERS PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2143",
    DESCRIPCION: "BUZZERS PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2144",
    descripcion: "GUITARRA ROCKBAND PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2144",
    DESCRIPCION: "GUITARRA ROCKBAND PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2145",
    descripcion: "MANDO BLURAY PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2145",
    DESCRIPCION: "MANDO BLURAY PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2146",
    descripcion: "TECLADO PS3",
    cod_nivel_padre: "2135",
    COD_NIVEL: "2146",
    DESCRIPCION: "TECLADO PS3",
    COD_NIVEL_PADRE: "2135"
  },
  {
    cod_nivel: "2147",
    descripcion: "SOPORTE CONSOLA PS3",
    cod_nivel_padre: "5120",
    COD_NIVEL: "2147",
    DESCRIPCION: "SOPORTE CONSOLA PS3",
    COD_NIVEL_PADRE: "5120"
  },
  {
    cod_nivel: "2148",
    descripcion: "BOLSA TRANSPORTE PS3",
    cod_nivel_padre: "5120",
    COD_NIVEL: "2148",
    DESCRIPCION: "BOLSA TRANSPORTE PS3",
    COD_NIVEL_PADRE: "5120"
  },
  {
    cod_nivel: "2149",
    descripcion: "AURICULAR PS3",
    cod_nivel_padre: "5120",
    COD_NIVEL: "2149",
    DESCRIPCION: "AURICULAR PS3",
    COD_NIVEL_PADRE: "5120"
  },
  {
    cod_nivel: "2150",
    descripcion: "VENTILADOR CONSOLA PS3",
    cod_nivel_padre: "5120",
    COD_NIVEL: "2150",
    DESCRIPCION: "VENTILADOR CONSOLA PS3",
    COD_NIVEL_PADRE: "5120"
  },
  {
    cod_nivel: "2151",
    descripcion: "CAMARA EYE PS3",
    cod_nivel_padre: "5120",
    COD_NIVEL: "2151",
    DESCRIPCION: "CAMARA EYE PS3",
    COD_NIVEL_PADRE: "5120"
  },
  {
    cod_nivel: "2152",
    descripcion: "BOLSA DE TRANSPORTE WII",
    cod_nivel_padre: "5118",
    COD_NIVEL: "2152",
    DESCRIPCION: "BOLSA DE TRANSPORTE WII",
    COD_NIVEL_PADRE: "5118"
  },
  {
    cod_nivel: "2161",
    descripcion: "BATERIA ROCKBAND WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2161",
    DESCRIPCION: "BATERIA ROCKBAND WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2162",
    descripcion: "PEDAL BATERIA WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2162",
    DESCRIPCION: "PEDAL BATERIA WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2163",
    descripcion: "MICROFONO WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2163",
    DESCRIPCION: "MICROFONO WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2164",
    descripcion: "ADAPTADOR INALAMBRICO WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2164",
    DESCRIPCION: "ADAPTADOR INALAMBRICO WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2165",
    descripcion: "ALFOMBRA BAILE WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2165",
    DESCRIPCION: "ALFOMBRA BAILE WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2166",
    descripcion: "BATERIA RECARGABLE MANDO",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2166",
    DESCRIPCION: "BATERIA RECARGABLE MANDO",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2167",
    descripcion: "CARGADOR MANDOS WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2167",
    DESCRIPCION: "CARGADOR MANDOS WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2168",
    descripcion: "WII MOTION PLUS",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2168",
    DESCRIPCION: "WII MOTION PLUS",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2169",
    descripcion: "MANDO CLASICO WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2169",
    DESCRIPCION: "MANDO CLASICO WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2170",
    descripcion: "TECLADO INALAMBRICO WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2170",
    DESCRIPCION: "TECLADO INALAMBRICO WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2171",
    descripcion: "VOLANTE WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2171",
    DESCRIPCION: "VOLANTE WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2172",
    descripcion: "PISTOLA WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2172",
    DESCRIPCION: "PISTOLA WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2173",
    descripcion: "MEMORIA WII",
    cod_nivel_padre: "5118",
    COD_NIVEL: "2173",
    DESCRIPCION: "MEMORIA WII",
    COD_NIVEL_PADRE: "5118"
  },
  {
    cod_nivel: "2174",
    descripcion: "FUNDA PROTECTORA MANDO",
    cod_nivel_padre: "5118",
    COD_NIVEL: "2174",
    DESCRIPCION: "FUNDA PROTECTORA MANDO",
    COD_NIVEL_PADRE: "5118"
  },
  {
    cod_nivel: "2175",
    descripcion: "ANTIRROBO MOTOCICLETA",
    cod_nivel_padre: "1068",
    COD_NIVEL: "2175",
    DESCRIPCION: "ANTIRROBO MOTOCICLETA",
    COD_NIVEL_PADRE: "1068"
  },
  {
    cod_nivel: "2176",
    descripcion: "FONENDOSCOPIO",
    cod_nivel_padre: "488",
    COD_NIVEL: "2176",
    DESCRIPCION: "FONENDOSCOPIO",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "2177",
    descripcion: "FUENTE ALIMENTACION",
    cod_nivel_padre: "1005",
    COD_NIVEL: "2177",
    DESCRIPCION: "FUENTE ALIMENTACION",
    COD_NIVEL_PADRE: "1005"
  },
  {
    cod_nivel: "2178",
    descripcion: "LAMPARA PORTATIL TALLER",
    cod_nivel_padre: "971",
    COD_NIVEL: "2178",
    DESCRIPCION: "LAMPARA PORTATIL TALLER",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "2179",
    descripcion: "TORNILLO MESA TRABAJO",
    cod_nivel_padre: "971",
    COD_NIVEL: "2179",
    DESCRIPCION: "TORNILLO MESA TRABAJO",
    COD_NIVEL_PADRE: "971"
  },
  {
    cod_nivel: "2180",
    descripcion: "MICROMETRO",
    cod_nivel_padre: "832",
    COD_NIVEL: "2180",
    DESCRIPCION: "MICROMETRO",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "2181",
    descripcion: "HERRAMIENTA NEUMATICA",
    cod_nivel_padre: "786",
    COD_NIVEL: "2181",
    DESCRIPCION: "HERRAMIENTA NEUMATICA",
    COD_NIVEL_PADRE: "786"
  },
  {
    cod_nivel: "2182",
    descripcion: "HERRAMIENTA MULTIUSOS",
    cod_nivel_padre: "787",
    COD_NIVEL: "2182",
    DESCRIPCION: "HERRAMIENTA MULTIUSOS",
    COD_NIVEL_PADRE: "787"
  },
  {
    cod_nivel: "2186",
    descripcion: "MODEM 3G USB",
    cod_nivel_padre: "1418",
    COD_NIVEL: "2186",
    DESCRIPCION: "MODEM 3G USB",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "2187",
    descripcion: "CASCO MEDIO HUEVO",
    cod_nivel_padre: "1082",
    COD_NIVEL: "2187",
    DESCRIPCION: "CASCO MEDIO HUEVO",
    COD_NIVEL_PADRE: "1082"
  },
  {
    cod_nivel: "2188",
    descripcion: "MOTO BATERIA NIÑO",
    cod_nivel_padre: "1435",
    COD_NIVEL: "2188",
    DESCRIPCION: "MOTO BATERIA NIÑO",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "2189",
    descripcion: "COMBO TDT",
    cod_nivel_padre: "1270",
    COD_NIVEL: "2189",
    DESCRIPCION: "COMBO TDT",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "2190",
    descripcion: "GUITARRA ROCKBAND WII",
    cod_nivel_padre: "2160",
    COD_NIVEL: "2190",
    DESCRIPCION: "GUITARRA ROCKBAND WII",
    COD_NIVEL_PADRE: "2160"
  },
  {
    cod_nivel: "2192",
    descripcion: "GUITARRA ROCKBAND XBOX 360",
    cod_nivel_padre: "2191",
    COD_NIVEL: "2192",
    DESCRIPCION: "GUITARRA ROCKBAND XBOX 360",
    COD_NIVEL_PADRE: "2191"
  },
  {
    cod_nivel: "2193",
    descripcion: "BATERIA ROCKBAND XBOX 360",
    cod_nivel_padre: "2191",
    COD_NIVEL: "2193",
    DESCRIPCION: "BATERIA ROCKBAND XBOX 360",
    COD_NIVEL_PADRE: "2191"
  },
  {
    cod_nivel: "2194",
    descripcion: "CUADRO",
    cod_nivel_padre: "106",
    COD_NIVEL: "2194",
    DESCRIPCION: "CUADRO",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "2195",
    descripcion: "HORQUILLA",
    cod_nivel_padre: "106",
    COD_NIVEL: "2195",
    DESCRIPCION: "HORQUILLA",
    COD_NIVEL_PADRE: "106"
  },
  {
    cod_nivel: "2196",
    descripcion: "RELOJ DE ORO",
    cod_nivel_padre: "1471",
    COD_NIVEL: "2196",
    DESCRIPCION: "RELOJ DE ORO",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "5000",
    descripcion: "RADIADOR DE PLACA",
    cod_nivel_padre: "5101",
    COD_NIVEL: "5000",
    DESCRIPCION: "RADIADOR DE PLACA",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "5003",
    descripcion: "BATERIA ELECTRONICA",
    cod_nivel_padre: "1852",
    COD_NIVEL: "5003",
    DESCRIPCION: "BATERIA ELECTRONICA",
    COD_NIVEL_PADRE: "1852"
  },
  {
    cod_nivel: "5004",
    descripcion: "CONTROLADOR MIDI",
    cod_nivel_padre: "1433",
    COD_NIVEL: "5004",
    DESCRIPCION: "CONTROLADOR MIDI",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "5005",
    descripcion: "MONITOR ESTUDIO",
    cod_nivel_padre: "1433",
    COD_NIVEL: "5005",
    DESCRIPCION: "MONITOR ESTUDIO",
    COD_NIVEL_PADRE: "1433"
  },
  {
    cod_nivel: "5006",
    descripcion: "ADAPTADOR WIRELESS",
    cod_nivel_padre: "1418",
    COD_NIVEL: "5006",
    DESCRIPCION: "ADAPTADOR WIRELESS",
    COD_NIVEL_PADRE: "1418"
  },
  {
    cod_nivel: "5008",
    descripcion: "ACCESORIO PSVITA",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5008",
    DESCRIPCION: "ACCESORIO PSVITA",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5009",
    descripcion: "JUEGO PSVITA",
    cod_nivel_padre: "5114",
    COD_NIVEL: "5009",
    DESCRIPCION: "JUEGO PSVITA",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "5010",
    descripcion: "AEROGRAFO",
    cod_nivel_padre: "886",
    COD_NIVEL: "5010",
    DESCRIPCION: "AEROGRAFO",
    COD_NIVEL_PADRE: "886"
  },
  {
    cod_nivel: "5011",
    descripcion: "BASCULA PRECISION",
    cod_nivel_padre: "1368",
    COD_NIVEL: "5011",
    DESCRIPCION: "BASCULA PRECISION",
    COD_NIVEL_PADRE: "1368"
  },
  {
    cod_nivel: "5012",
    descripcion: "PLANCHA VITROCERAMICA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "5012",
    DESCRIPCION: "PLANCHA VITROCERAMICA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "5013",
    descripcion: "HAMBURGUESERA",
    cod_nivel_padre: "5109",
    COD_NIVEL: "5013",
    DESCRIPCION: "HAMBURGUESERA",
    COD_NIVEL_PADRE: "5109"
  },
  {
    cod_nivel: "5016",
    descripcion: "ACCESORIO 3DS",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5016",
    DESCRIPCION: "ACCESORIO 3DS",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5017",
    descripcion: "JUEGO 3DS",
    cod_nivel_padre: "5114",
    COD_NIVEL: "5017",
    DESCRIPCION: "JUEGO 3DS",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "5021",
    descripcion: "ACCESORIO DREAMCAST",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5021",
    DESCRIPCION: "ACCESORIO DREAMCAST",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5022",
    descripcion: "MANDO DREAMCAST",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5022",
    DESCRIPCION: "MANDO DREAMCAST",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5023",
    descripcion: "HDD XBOX 360",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5023",
    DESCRIPCION: "HDD XBOX 360",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5024",
    descripcion: "ACCESORIO MEGADRIVE",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5024",
    DESCRIPCION: "ACCESORIO MEGADRIVE",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5025",
    descripcion: "MANDO MEGADRIVE",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5025",
    DESCRIPCION: "MANDO MEGADRIVE",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5026",
    descripcion: "MONITOR LED",
    cod_nivel_padre: "1417",
    COD_NIVEL: "5026",
    DESCRIPCION: "MONITOR LED",
    COD_NIVEL_PADRE: "1417"
  },
  {
    cod_nivel: "5027",
    descripcion: "ALBUM FOTOGRAFICO",
    cod_nivel_padre: "1406",
    COD_NIVEL: "5027",
    DESCRIPCION: "ALBUM FOTOGRAFICO",
    COD_NIVEL_PADRE: "1406"
  },
  {
    cod_nivel: "5028",
    descripcion: "DESPERTADOR",
    cod_nivel_padre: "1471",
    COD_NIVEL: "5028",
    DESCRIPCION: "DESPERTADOR",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "5030",
    descripcion: "NIVEL LASER",
    cod_nivel_padre: "832",
    COD_NIVEL: "5030",
    DESCRIPCION: "NIVEL LASER",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "5031",
    descripcion: "ESTUFA INCANDESCENTE",
    cod_nivel_padre: "5101",
    COD_NIVEL: "5031",
    DESCRIPCION: "ESTUFA INCANDESCENTE",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "5032",
    descripcion: "TWEETER",
    cod_nivel_padre: "1339",
    COD_NIVEL: "5032",
    DESCRIPCION: "TWEETER",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "5034",
    descripcion: "CONSOLA PSVITA",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5034",
    DESCRIPCION: "CONSOLA PSVITA",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5035",
    descripcion: "REPRODUCTOR MP5",
    cod_nivel_padre: "1322",
    COD_NIVEL: "5035",
    DESCRIPCION: "REPRODUCTOR MP5",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "5036",
    descripcion: "CASCO OFF ROAD",
    cod_nivel_padre: "1082",
    COD_NIVEL: "5036",
    DESCRIPCION: "CASCO OFF ROAD",
    COD_NIVEL_PADRE: "1082"
  },
  {
    cod_nivel: "5037",
    descripcion: "AMPLIFICADOR BAJO",
    cod_nivel_padre: "1817",
    COD_NIVEL: "5037",
    DESCRIPCION: "AMPLIFICADOR BAJO",
    COD_NIVEL_PADRE: "1817"
  },
  {
    cod_nivel: "5038",
    descripcion: "MANDO MASTER SYSTEM",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5038",
    DESCRIPCION: "MANDO MASTER SYSTEM",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5039",
    descripcion: "ACCESORIO MASTER SYSTEM",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5039",
    DESCRIPCION: "ACCESORIO MASTER SYSTEM",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5040",
    descripcion: "ACCESORIOS SATURN",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5040",
    DESCRIPCION: "ACCESORIOS SATURN",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5041",
    descripcion: "MANDO SATURN",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5041",
    DESCRIPCION: "MANDO SATURN",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5042",
    descripcion: "MANDO NES",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5042",
    DESCRIPCION: "MANDO NES",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5043",
    descripcion: "MANDO SNES",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5043",
    DESCRIPCION: "MANDO SNES",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5044",
    descripcion: "ROTULA",
    cod_nivel_padre: "1400",
    COD_NIVEL: "5044",
    DESCRIPCION: "ROTULA",
    COD_NIVEL_PADRE: "1400"
  },
  {
    cod_nivel: "5045",
    descripcion: "CHARANGO",
    cod_nivel_padre: "1429",
    COD_NIVEL: "5045",
    DESCRIPCION: "CHARANGO",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "5046",
    descripcion: "AMPLIFICADOR ANTENA",
    cod_nivel_padre: "1305",
    COD_NIVEL: "5046",
    DESCRIPCION: "AMPLIFICADOR ANTENA",
    COD_NIVEL_PADRE: "1305"
  },
  {
    cod_nivel: "5047",
    descripcion: "MEGAFONO",
    cod_nivel_padre: "1321",
    COD_NIVEL: "5047",
    DESCRIPCION: "MEGAFONO",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "5050",
    descripcion: "JUNTA TAPA SILICONA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5050",
    DESCRIPCION: "JUNTA TAPA SILICONA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5051",
    descripcion: "VASO",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5051",
    DESCRIPCION: "VASO",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5052",
    descripcion: "JUNTA CUCHILLAS",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5052",
    DESCRIPCION: "JUNTA CUCHILLAS",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5053",
    descripcion: "JUEGO CUCHILLAS",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5053",
    DESCRIPCION: "JUEGO CUCHILLAS",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5054",
    descripcion: "BASE DEL VASO",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5054",
    DESCRIPCION: "BASE DEL VASO",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5055",
    descripcion: "TAPA  VASO  JUNTA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5055",
    DESCRIPCION: "TAPA  VASO  JUNTA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5056",
    descripcion: "VAROMA COMPLETO ",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5056",
    DESCRIPCION: "VAROMA COMPLETO ",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5057",
    descripcion: "RECIPIENTE VAROMA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5057",
    DESCRIPCION: "RECIPIENTE VAROMA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5058",
    descripcion: "BANDEJA VAROMA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5058",
    DESCRIPCION: "BANDEJA VAROMA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5059",
    descripcion: "TAPA VAROMA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5059",
    DESCRIPCION: "TAPA VAROMA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5060",
    descripcion: "CUBILETE",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5060",
    DESCRIPCION: "CUBILETE",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5061",
    descripcion: "MARIPOSA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5061",
    DESCRIPCION: "MARIPOSA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5062",
    descripcion: "CESTO VASO",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5062",
    DESCRIPCION: "CESTO VASO",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5063",
    descripcion: "ESPATULA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5063",
    DESCRIPCION: "ESPATULA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5064",
    descripcion: "THERMOMIX JUGUETE",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5064",
    DESCRIPCION: "THERMOMIX JUGUETE",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5065",
    descripcion: "BOLSA TRANSPORTE",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5065",
    DESCRIPCION: "BOLSA TRANSPORTE",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5066",
    descripcion: "LIBRO COCINA",
    cod_nivel_padre: "5049",
    COD_NIVEL: "5066",
    DESCRIPCION: "LIBRO COCINA",
    COD_NIVEL_PADRE: "5049"
  },
  {
    cod_nivel: "5067",
    descripcion: "REPRODUCTOR INTERNET",
    cod_nivel_padre: "1270",
    COD_NIVEL: "5067",
    DESCRIPCION: "REPRODUCTOR INTERNET",
    COD_NIVEL_PADRE: "1270"
  },
  {
    cod_nivel: "5069",
    descripcion: "SUPERDRIVE",
    cod_nivel_padre: "5068",
    COD_NIVEL: "5069",
    DESCRIPCION: "SUPERDRIVE",
    COD_NIVEL_PADRE: "5068"
  },
  {
    cod_nivel: "5070",
    descripcion: "TIME CAPSULE",
    cod_nivel_padre: "5068",
    COD_NIVEL: "5070",
    DESCRIPCION: "TIME CAPSULE",
    COD_NIVEL_PADRE: "5068"
  },
  {
    cod_nivel: "5071",
    descripcion: "TIJERA PODA ELECTRICA",
    cod_nivel_padre: "942",
    COD_NIVEL: "5071",
    DESCRIPCION: "TIJERA PODA ELECTRICA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "5072",
    descripcion: "TIJERA ELECTRICA",
    cod_nivel_padre: "849",
    COD_NIVEL: "5072",
    DESCRIPCION: "TIJERA ELECTRICA",
    COD_NIVEL_PADRE: "849"
  },
  {
    cod_nivel: "5073",
    descripcion: "ALTAVOZ EMPOTRABLE",
    cod_nivel_padre: "1339",
    COD_NIVEL: "5073",
    DESCRIPCION: "ALTAVOZ EMPOTRABLE",
    COD_NIVEL_PADRE: "1339"
  },
  {
    cod_nivel: "5074",
    descripcion: "COLECCIONISMO DVD",
    cod_nivel_padre: "1026",
    COD_NIVEL: "5074",
    DESCRIPCION: "COLECCIONISMO DVD",
    COD_NIVEL_PADRE: "1026"
  },
  {
    cod_nivel: "5078",
    descripcion: "MANDO PRO WII U",
    cod_nivel_padre: "5077",
    COD_NIVEL: "5078",
    DESCRIPCION: "MANDO PRO WII U",
    COD_NIVEL_PADRE: "5077"
  },
  {
    cod_nivel: "5079",
    descripcion: "GAME PAD WII U",
    cod_nivel_padre: "5077",
    COD_NIVEL: "5079",
    DESCRIPCION: "GAME PAD WII U",
    COD_NIVEL_PADRE: "5077"
  },
  {
    cod_nivel: "5080",
    descripcion: "JUEGO WII U",
    cod_nivel_padre: "5114",
    COD_NIVEL: "5080",
    DESCRIPCION: "JUEGO WII U",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "5081",
    descripcion: "OTROS ACCESORIOS WII U",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5081",
    DESCRIPCION: "OTROS ACCESORIOS WII U",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5082",
    descripcion: "VAREADORA",
    cod_nivel_padre: "942",
    COD_NIVEL: "5082",
    DESCRIPCION: "VAREADORA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "5085",
    descripcion: "PULIDORA",
    cod_nivel_padre: "1033",
    COD_NIVEL: "5085",
    DESCRIPCION: "PULIDORA",
    COD_NIVEL_PADRE: "1033"
  },
  {
    cod_nivel: "5086",
    descripcion: "FUNDA TABLET",
    cod_nivel_padre: "1414",
    COD_NIVEL: "5086",
    DESCRIPCION: "FUNDA TABLET",
    COD_NIVEL_PADRE: "1414"
  },
  {
    cod_nivel: "5087",
    descripcion: "SMARTPHONE",
    cod_nivel_padre: "5181",
    COD_NIVEL: "5087",
    DESCRIPCION: "SMARTPHONE",
    COD_NIVEL_PADRE: "5181"
  },
  {
    cod_nivel: "5089",
    descripcion: "POLIFUSOR",
    cod_nivel_padre: "896",
    COD_NIVEL: "5089",
    DESCRIPCION: "POLIFUSOR",
    COD_NIVEL_PADRE: "896"
  },
  {
    cod_nivel: "5090",
    descripcion: "BATIDORA DE OBRA",
    cod_nivel_padre: "906",
    COD_NIVEL: "5090",
    DESCRIPCION: "BATIDORA DE OBRA",
    COD_NIVEL_PADRE: "906"
  },
  {
    cod_nivel: "5092",
    descripcion: "SECAMANOS",
    cod_nivel_padre: "542",
    COD_NIVEL: "5092",
    DESCRIPCION: "SECAMANOS",
    COD_NIVEL_PADRE: "542"
  },
  {
    cod_nivel: "5093",
    descripcion: "BRASERO",
    cod_nivel_padre: "5101",
    COD_NIVEL: "5093",
    DESCRIPCION: "BRASERO",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "5095",
    descripcion: "CUCHILLO ELECTRICO",
    cod_nivel_padre: "5107",
    COD_NIVEL: "5095",
    DESCRIPCION: "CUCHILLO ELECTRICO",
    COD_NIVEL_PADRE: "5107"
  },
  {
    cod_nivel: "5096",
    descripcion: "ENVASADORA AL VACIO",
    cod_nivel_padre: "5105",
    COD_NIVEL: "5096",
    DESCRIPCION: "ENVASADORA AL VACIO",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "5102",
    descripcion: "OTROS FRIO",
    cod_nivel_padre: "5100",
    COD_NIVEL: "5102",
    DESCRIPCION: "OTROS FRIO",
    COD_NIVEL_PADRE: "5100"
  },
  {
    cod_nivel: "5103",
    descripcion: "OTROS CALOR",
    cod_nivel_padre: "5101",
    COD_NIVEL: "5103",
    DESCRIPCION: "OTROS CALOR",
    COD_NIVEL_PADRE: "5101"
  },
  {
    cod_nivel: "5112",
    descripcion: "OTROS OTROS LIMPIEZA",
    cod_nivel_padre: "5111",
    COD_NIVEL: "5112",
    DESCRIPCION: "OTROS OTROS LIMPIEZA",
    COD_NIVEL_PADRE: "5111"
  },
  {
    cod_nivel: "5127",
    descripcion: "OTROS LUMINOTERAPIA",
    cod_nivel_padre: "462",
    COD_NIVEL: "5127",
    DESCRIPCION: "OTROS LUMINOTERAPIA",
    COD_NIVEL_PADRE: "462"
  },
  {
    cod_nivel: "5128",
    descripcion: "OTROS APARATOS MASAJE",
    cod_nivel_padre: "466",
    COD_NIVEL: "5128",
    DESCRIPCION: "OTROS APARATOS MASAJE",
    COD_NIVEL_PADRE: "466"
  },
  {
    cod_nivel: "5131",
    descripcion: "OTROS MANDOS",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5131",
    DESCRIPCION: "OTROS MANDOS",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5132",
    descripcion: "OTROS ACCESORIOS CONSOLAS",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5132",
    DESCRIPCION: "OTROS ACCESORIOS CONSOLAS",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5133",
    descripcion: "CONSOLA PS4",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5133",
    DESCRIPCION: "CONSOLA PS4",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5135",
    descripcion: "CONSOLA XBOX ONE",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5135",
    DESCRIPCION: "CONSOLA XBOX ONE",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5136",
    descripcion: "JUEGO PS4",
    cod_nivel_padre: "5114",
    COD_NIVEL: "5136",
    DESCRIPCION: "JUEGO PS4",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "5137",
    descripcion: "JUEGO XBOX ONE",
    cod_nivel_padre: "5114",
    COD_NIVEL: "5137",
    DESCRIPCION: "JUEGO XBOX ONE",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "5139",
    descripcion: "MANDO PS4",
    cod_nivel_padre: "5138",
    COD_NIVEL: "5139",
    DESCRIPCION: "MANDO PS4",
    COD_NIVEL_PADRE: "5138"
  },
  {
    cod_nivel: "5141",
    descripcion: "MANDO XBOX ONE",
    cod_nivel_padre: "5140",
    COD_NIVEL: "5141",
    DESCRIPCION: "MANDO XBOX ONE",
    COD_NIVEL_PADRE: "5140"
  },
  {
    cod_nivel: "5143",
    descripcion: "CAMARA PS4",
    cod_nivel_padre: "5142",
    COD_NIVEL: "5143",
    DESCRIPCION: "CAMARA PS4",
    COD_NIVEL_PADRE: "5142"
  },
  {
    cod_nivel: "5144",
    descripcion: "OTROS ACCESORIOS PS4",
    cod_nivel_padre: "5142",
    COD_NIVEL: "5144",
    DESCRIPCION: "OTROS ACCESORIOS PS4",
    COD_NIVEL_PADRE: "5142"
  },
  {
    cod_nivel: "5145",
    descripcion: "ACCESORIOS XBOX ONE",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5145",
    DESCRIPCION: "ACCESORIOS XBOX ONE",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5146",
    descripcion: "KINECT XBOX ONE",
    cod_nivel_padre: "5145",
    COD_NIVEL: "5146",
    DESCRIPCION: "KINECT XBOX ONE",
    COD_NIVEL_PADRE: "5145"
  },
  {
    cod_nivel: "5147",
    descripcion: "OTROS ACCESORIOS XBOX ONE",
    cod_nivel_padre: "5145",
    COD_NIVEL: "5147",
    DESCRIPCION: "OTROS ACCESORIOS XBOX ONE",
    COD_NIVEL_PADRE: "5145"
  },
  {
    cod_nivel: "5148",
    descripcion: "CONSOLA WII",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5148",
    DESCRIPCION: "CONSOLA WII",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5161",
    descripcion: "CUBERTERIA ALTA GAMA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5161",
    DESCRIPCION: "CUBERTERIA ALTA GAMA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5162",
    descripcion: "BOLIGRAFO ALTA GAMA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5162",
    DESCRIPCION: "BOLIGRAFO ALTA GAMA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5002",
    descripcion: "PULSIOXIMETRO",
    cod_nivel_padre: "488",
    COD_NIVEL: "5002",
    DESCRIPCION: "PULSIOXIMETRO",
    COD_NIVEL_PADRE: "488"
  },
  {
    cod_nivel: "5163",
    descripcion: "PORTAMINAS ALTA GAMA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5163",
    DESCRIPCION: "PORTAMINAS ALTA GAMA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5164",
    descripcion: "PLUMA ESTILOGRAFICA ALTA GAMA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5164",
    DESCRIPCION: "PLUMA ESTILOGRAFICA ALTA GAMA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5165",
    descripcion: "ENCENDEDOR ALTA GAMA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5165",
    DESCRIPCION: "ENCENDEDOR ALTA GAMA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5166",
    descripcion: "CERAMICA ALTA GAMA",
    cod_nivel_padre: "1470",
    COD_NIVEL: "5166",
    DESCRIPCION: "CERAMICA ALTA GAMA",
    COD_NIVEL_PADRE: "1470"
  },
  {
    cod_nivel: "5167",
    descripcion: "RELOJ ALTA GAMA SEÑORA",
    cod_nivel_padre: "1681",
    COD_NIVEL: "5167",
    DESCRIPCION: "RELOJ ALTA GAMA SEÑORA",
    COD_NIVEL_PADRE: "1681"
  },
  {
    cod_nivel: "5168",
    descripcion: "RELOJ ALTA GAMA CABALLERO",
    cod_nivel_padre: "1681",
    COD_NIVEL: "5168",
    DESCRIPCION: "RELOJ ALTA GAMA CABALLERO",
    COD_NIVEL_PADRE: "1681"
  },
  {
    cod_nivel: "5169",
    descripcion: "RELOJ ALTA GAMA UNISEX",
    cod_nivel_padre: "1681",
    COD_NIVEL: "5169",
    DESCRIPCION: "RELOJ ALTA GAMA UNISEX",
    COD_NIVEL_PADRE: "1681"
  },
  {
    cod_nivel: "5170",
    descripcion: "RELOJ PULSERA SEÑORA",
    cod_nivel_padre: "1682",
    COD_NIVEL: "5170",
    DESCRIPCION: "RELOJ PULSERA SEÑORA",
    COD_NIVEL_PADRE: "1682"
  },
  {
    cod_nivel: "5171",
    descripcion: "RELOJ PULSERA CABALLERO",
    cod_nivel_padre: "1682",
    COD_NIVEL: "5171",
    DESCRIPCION: "RELOJ PULSERA CABALLERO",
    COD_NIVEL_PADRE: "1682"
  },
  {
    cod_nivel: "5172",
    descripcion: "RELOJ PULSERA UNISEX",
    cod_nivel_padre: "1682",
    COD_NIVEL: "5172",
    DESCRIPCION: "RELOJ PULSERA UNISEX",
    COD_NIVEL_PADRE: "1682"
  },
  {
    cod_nivel: "5174",
    descripcion: "RELOJ PULSERA PREMIUM SEÑORA",
    cod_nivel_padre: "5173",
    COD_NIVEL: "5174",
    DESCRIPCION: "RELOJ PULSERA PREMIUM SEÑORA",
    COD_NIVEL_PADRE: "5173"
  },
  {
    cod_nivel: "5175",
    descripcion: "RELOJ PULSERA PREMIUM CABALLERO",
    cod_nivel_padre: "5173",
    COD_NIVEL: "5175",
    DESCRIPCION: "RELOJ PULSERA PREMIUM CABALLERO",
    COD_NIVEL_PADRE: "5173"
  },
  {
    cod_nivel: "5176",
    descripcion: "RELOJ PULSERA PREMIUM UNISEX",
    cod_nivel_padre: "5173",
    COD_NIVEL: "5176",
    DESCRIPCION: "RELOJ PULSERA PREMIUM UNISEX",
    COD_NIVEL_PADRE: "5173"
  },
  {
    cod_nivel: "5182",
    descripcion: "MOVIL GSM",
    cod_nivel_padre: "5181",
    COD_NIVEL: "5182",
    DESCRIPCION: "MOVIL GSM",
    COD_NIVEL_PADRE: "5181"
  },
  {
    cod_nivel: "5184",
    descripcion: "LLAVE DINAMOMETRICA",
    cod_nivel_padre: "788",
    COD_NIVEL: "5184",
    DESCRIPCION: "LLAVE DINAMOMETRICA",
    COD_NIVEL_PADRE: "788"
  },
  {
    cod_nivel: "5186",
    descripcion: "ORDENADOR AIO",
    cod_nivel_padre: "1409",
    COD_NIVEL: "5186",
    DESCRIPCION: "ORDENADOR AIO",
    COD_NIVEL_PADRE: "1409"
  },
  {
    cod_nivel: "5188",
    descripcion: "CONSOLA WII U",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5188",
    DESCRIPCION: "CONSOLA WII U",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5189",
    descripcion: "PALA DE PADEL",
    cod_nivel_padre: "299",
    COD_NIVEL: "5189",
    DESCRIPCION: "PALA DE PADEL",
    COD_NIVEL_PADRE: "299"
  },
  {
    cod_nivel: "5185",
    descripcion: "MONITOR DE ACTIVIDAD",
    cod_nivel_padre: "3",
    COD_NIVEL: "5185",
    DESCRIPCION: "MONITOR DE ACTIVIDAD",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "5218",
    descripcion: "AURICULAR",
    cod_nivel_padre: "1321",
    COD_NIVEL: "5218",
    DESCRIPCION: "AURICULAR",
    COD_NIVEL_PADRE: "1321"
  },
  {
    cod_nivel: "5219",
    descripcion: "MOVILIDAD ELECTRICA",
    cod_nivel_padre: "2",
    COD_NIVEL: "5219",
    DESCRIPCION: "MOVILIDAD ELECTRICA",
    COD_NIVEL_PADRE: "2"
  },
  {
    cod_nivel: "5227",
    descripcion: "SEGWAY",
    cod_nivel_padre: "5219",
    COD_NIVEL: "5227",
    DESCRIPCION: "SEGWAY",
    COD_NIVEL_PADRE: "5219"
  },
  {
    cod_nivel: "5242",
    descripcion: "VOLANTE PS4",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5242",
    DESCRIPCION: "VOLANTE PS4",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5244",
    descripcion: "ACCESORIO NINTENDO SWITCH",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5244",
    DESCRIPCION: "ACCESORIO NINTENDO SWITCH",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5245",
    descripcion: "MANDO BUZZ",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5245",
    DESCRIPCION: "MANDO BUZZ",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5255",
    descripcion: "VEHICULO BATERIA NIÑO",
    cod_nivel_padre: "1435",
    COD_NIVEL: "5255",
    DESCRIPCION: "VEHICULO BATERIA NIÑO",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "5256",
    descripcion: "AURICULAR PS4",
    cod_nivel_padre: "5142",
    COD_NIVEL: "5256",
    DESCRIPCION: "AURICULAR PS4",
    COD_NIVEL_PADRE: "5142"
  },
  {
    cod_nivel: "5214",
    descripcion: "BOQUILLA VIENTO MADERA",
    cod_nivel_padre: "1800",
    COD_NIVEL: "5214",
    DESCRIPCION: "BOQUILLA VIENTO MADERA",
    COD_NIVEL_PADRE: "1800"
  },
  {
    cod_nivel: "5220",
    descripcion: "IN-EAR",
    cod_nivel_padre: "5218",
    COD_NIVEL: "5220",
    DESCRIPCION: "IN-EAR",
    COD_NIVEL_PADRE: "5218"
  },
  {
    cod_nivel: "5221",
    descripcion: "DIADEMA",
    cod_nivel_padre: "5218",
    COD_NIVEL: "5221",
    DESCRIPCION: "DIADEMA",
    COD_NIVEL_PADRE: "5218"
  },
  {
    cod_nivel: "5222",
    descripcion: "BANDURRIA",
    cod_nivel_padre: "1429",
    COD_NIVEL: "5222",
    DESCRIPCION: "BANDURRIA",
    COD_NIVEL_PADRE: "1429"
  },
  {
    cod_nivel: "5223",
    descripcion: "HOVERBOARD",
    cod_nivel_padre: "5219",
    COD_NIVEL: "5223",
    DESCRIPCION: "HOVERBOARD",
    COD_NIVEL_PADRE: "5219"
  },
  {
    cod_nivel: "5225",
    descripcion: "MONOCICLO ELECTRICO",
    cod_nivel_padre: "5219",
    COD_NIVEL: "5225",
    DESCRIPCION: "MONOCICLO ELECTRICO",
    COD_NIVEL_PADRE: "5219"
  },
  {
    cod_nivel: "5224",
    descripcion: "PATINETE ELECTRICO",
    cod_nivel_padre: "5219",
    COD_NIVEL: "5224",
    DESCRIPCION: "PATINETE ELECTRICO",
    COD_NIVEL_PADRE: "5219"
  },
  {
    cod_nivel: "5226",
    descripcion: "MONOPATIN ELECTRICO",
    cod_nivel_padre: "5219",
    COD_NIVEL: "5226",
    DESCRIPCION: "MONOPATIN ELECTRICO",
    COD_NIVEL_PADRE: "5219"
  },
  {
    cod_nivel: "5228",
    descripcion: "ACCESORIOS MOVILIDAD ELECTRICA",
    cod_nivel_padre: "5219",
    COD_NIVEL: "5228",
    DESCRIPCION: "ACCESORIOS MOVILIDAD ELECTRICA",
    COD_NIVEL_PADRE: "5219"
  },
  {
    cod_nivel: "5233",
    descripcion: "CAFETERA ITALIANA",
    cod_nivel_padre: "645",
    COD_NIVEL: "5233",
    DESCRIPCION: "CAFETERA ITALIANA",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "5234",
    descripcion: "CAFETERA GOTEO",
    cod_nivel_padre: "645",
    COD_NIVEL: "5234",
    DESCRIPCION: "CAFETERA GOTEO",
    COD_NIVEL_PADRE: "645"
  },
  {
    cod_nivel: "5229",
    descripcion: "GAFAS VR TELEFONIA",
    cod_nivel_padre: "1234",
    COD_NIVEL: "5229",
    DESCRIPCION: "GAFAS VR TELEFONIA",
    COD_NIVEL_PADRE: "1234"
  },
  {
    cod_nivel: "5230",
    descripcion: "GAFAS 3D",
    cod_nivel_padre: "1305",
    COD_NIVEL: "5230",
    DESCRIPCION: "GAFAS 3D",
    COD_NIVEL_PADRE: "1305"
  },
  {
    cod_nivel: "5243",
    descripcion: "MANDO NINTENDO SWITCH",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5243",
    DESCRIPCION: "MANDO NINTENDO SWITCH",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5246",
    descripcion: "JOY-CON IZQUIERDO",
    cod_nivel_padre: "5243",
    COD_NIVEL: "5246",
    DESCRIPCION: "JOY-CON IZQUIERDO",
    COD_NIVEL_PADRE: "5243"
  },
  {
    cod_nivel: "5247",
    descripcion: "JOY-CON DERECHO",
    cod_nivel_padre: "5243",
    COD_NIVEL: "5247",
    DESCRIPCION: "JOY-CON DERECHO",
    COD_NIVEL_PADRE: "5243"
  },
  {
    cod_nivel: "5248",
    descripcion: "MANDO PRO CONTROLLER",
    cod_nivel_padre: "5243",
    COD_NIVEL: "5248",
    DESCRIPCION: "MANDO PRO CONTROLLER",
    COD_NIVEL_PADRE: "5243"
  },
  {
    cod_nivel: "5251",
    descripcion: "VOLANTE JOY-CON",
    cod_nivel_padre: "5244",
    COD_NIVEL: "5251",
    DESCRIPCION: "VOLANTE JOY-CON",
    COD_NIVEL_PADRE: "5244"
  },
  {
    cod_nivel: "5252",
    descripcion: "CORREA DEL MANDO JOY-CON",
    cod_nivel_padre: "5244",
    COD_NIVEL: "5252",
    DESCRIPCION: "CORREA DEL MANDO JOY-CON",
    COD_NIVEL_PADRE: "5244"
  },
  {
    cod_nivel: "5254",
    descripcion: "OTROS ACCESORIOS NINTENDO SWITCH",
    cod_nivel_padre: "5244",
    COD_NIVEL: "5254",
    DESCRIPCION: "OTROS ACCESORIOS NINTENDO SWITCH",
    COD_NIVEL_PADRE: "5244"
  },
  {
    cod_nivel: "5249",
    descripcion: "SOPORTE CARGA MANDOS JOY-CON",
    cod_nivel_padre: "5244",
    COD_NIVEL: "5249",
    DESCRIPCION: "SOPORTE CARGA MANDOS JOY-CON",
    COD_NIVEL_PADRE: "5244"
  },
  {
    cod_nivel: "5250",
    descripcion: "CARGADOR CON PILAS JOY-CON",
    cod_nivel_padre: "5244",
    COD_NIVEL: "5250",
    DESCRIPCION: "CARGADOR CON PILAS JOY-CON",
    COD_NIVEL_PADRE: "5244"
  },
  {
    cod_nivel: "5253",
    descripcion: "DOCK SET BASE",
    cod_nivel_padre: "5244",
    COD_NIVEL: "5253",
    DESCRIPCION: "DOCK SET BASE",
    COD_NIVEL_PADRE: "5244"
  },
  {
    cod_nivel: "5231",
    descripcion: "VEHICULO JUGUETE",
    cod_nivel_padre: "1435",
    COD_NIVEL: "5231",
    DESCRIPCION: "VEHICULO JUGUETE",
    COD_NIVEL_PADRE: "1435"
  },
  {
    cod_nivel: "5235",
    descripcion: "MEMORY CARD PS VITA",
    cod_nivel_padre: "5152",
    COD_NIVEL: "5235",
    DESCRIPCION: "MEMORY CARD PS VITA",
    COD_NIVEL_PADRE: "5152"
  },
  {
    cod_nivel: "5236",
    descripcion: "BOMBA DE AGUA",
    cod_nivel_padre: "942",
    COD_NIVEL: "5236",
    DESCRIPCION: "BOMBA DE AGUA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "5237",
    descripcion: "TIJERA DE PODA",
    cod_nivel_padre: "942",
    COD_NIVEL: "5237",
    DESCRIPCION: "TIJERA DE PODA",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "5238",
    descripcion: "TIJERA CORTASETOS",
    cod_nivel_padre: "942",
    COD_NIVEL: "5238",
    DESCRIPCION: "TIJERA CORTASETOS",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "5239",
    descripcion: "PULVERIZADOR",
    cod_nivel_padre: "942",
    COD_NIVEL: "5239",
    DESCRIPCION: "PULVERIZADOR",
    COD_NIVEL_PADRE: "942"
  },
  {
    cod_nivel: "5240",
    descripcion: "TERMOMETRO INDUSTRIAL",
    cod_nivel_padre: "832",
    COD_NIVEL: "5240",
    DESCRIPCION: "TERMOMETRO INDUSTRIAL",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "5241",
    descripcion: "HIGROMETRO DIGITAL",
    cod_nivel_padre: "832",
    COD_NIVEL: "5241",
    DESCRIPCION: "HIGROMETRO DIGITAL",
    COD_NIVEL_PADRE: "832"
  },
  {
    cod_nivel: "5232",
    descripcion: "MONOPATIN",
    cod_nivel_padre: "317",
    COD_NIVEL: "5232",
    DESCRIPCION: "MONOPATIN",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "319",
    descripcion: "MONOPATIN",
    cod_nivel_padre: "317",
    COD_NIVEL: "319",
    DESCRIPCION: "MONOPATIN",
    COD_NIVEL_PADRE: "317"
  },
  {
    cod_nivel: "5183",
    descripcion: "SMARTWATCH",
    cod_nivel_padre: "1471",
    COD_NIVEL: "5183",
    DESCRIPCION: "SMARTWATCH",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "5288",
    descripcion: "JUEGO GAMEBOY",
    cod_nivel_padre: "1140",
    COD_NIVEL: "5288",
    DESCRIPCION: "JUEGO GAMEBOY",
    COD_NIVEL_PADRE: "1140"
  },
  {
    cod_nivel: "5258",
    descripcion: "JUEGO GAMEBOY COLOR",
    cod_nivel_padre: "1140",
    COD_NIVEL: "5258",
    DESCRIPCION: "JUEGO GAMEBOY COLOR",
    COD_NIVEL_PADRE: "1140"
  },
  {
    cod_nivel: "5259",
    descripcion: "JUEGO GAMEBOY ADVANCE",
    cod_nivel_padre: "1140",
    COD_NIVEL: "5259",
    DESCRIPCION: "JUEGO GAMEBOY ADVANCE",
    COD_NIVEL_PADRE: "1140"
  },
  {
    cod_nivel: "5260",
    descripcion: "JUEGO RETRO",
    cod_nivel_padre: "5114",
    COD_NIVEL: "5260",
    DESCRIPCION: "JUEGO RETRO",
    COD_NIVEL_PADRE: "5114"
  },
  {
    cod_nivel: "5261",
    descripcion: "CONSOLA SPECTRUM",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5261",
    DESCRIPCION: "CONSOLA SPECTRUM",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5262",
    descripcion: "CONSOLA ATARI",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5262",
    DESCRIPCION: "CONSOLA ATARI",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5263",
    descripcion: "CONSOLA COLECO VISION",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5263",
    DESCRIPCION: "CONSOLA COLECO VISION",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5264",
    descripcion: "CONSOLA COMMODORE AMIGA",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5264",
    DESCRIPCION: "CONSOLA COMMODORE AMIGA",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5265",
    descripcion: "CONSOLA MSX",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5265",
    DESCRIPCION: "CONSOLA MSX",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5266",
    descripcion: "CONSOLA NEO GEO",
    cod_nivel_padre: "5113",
    COD_NIVEL: "5266",
    DESCRIPCION: "CONSOLA NEO GEO",
    COD_NIVEL_PADRE: "5113"
  },
  {
    cod_nivel: "5267",
    descripcion: "NINTENDO DS",
    cod_nivel_padre: "1113",
    COD_NIVEL: "5267",
    DESCRIPCION: "NINTENDO DS",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "5268",
    descripcion: "NINTENDO 2DS/3DS",
    cod_nivel_padre: "1113",
    COD_NIVEL: "5268",
    DESCRIPCION: "NINTENDO 2DS/3DS",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "5269",
    descripcion: "NEW NINTENDO 2DS/3DS",
    cod_nivel_padre: "1113",
    COD_NIVEL: "5269",
    DESCRIPCION: "NEW NINTENDO 2DS/3DS",
    COD_NIVEL_PADRE: "1113"
  },
  {
    cod_nivel: "5270",
    descripcion: "MANDO SPECTRUM",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5270",
    DESCRIPCION: "MANDO SPECTRUM",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5271",
    descripcion: "MANDO ATARI",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5271",
    DESCRIPCION: "MANDO ATARI",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5272",
    descripcion: "MANDO COLECO VISION",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5272",
    DESCRIPCION: "MANDO COLECO VISION",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5273",
    descripcion: "MANDO COMMODORE AMIGA",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5273",
    DESCRIPCION: "MANDO COMMODORE AMIGA",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5274",
    descripcion: "MANDO MSX",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5274",
    DESCRIPCION: "MANDO MSX",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5275",
    descripcion: "MANDO NEO GEO",
    cod_nivel_padre: "5115",
    COD_NIVEL: "5275",
    DESCRIPCION: "MANDO NEO GEO",
    COD_NIVEL_PADRE: "5115"
  },
  {
    cod_nivel: "5276",
    descripcion: "ACCESORIO SPECTRUM",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5276",
    DESCRIPCION: "ACCESORIO SPECTRUM",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5277",
    descripcion: "ACCESORIO ATARI",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5277",
    DESCRIPCION: "ACCESORIO ATARI",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5278",
    descripcion: "ACCESORIO COLECO VISION",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5278",
    DESCRIPCION: "ACCESORIO COLECO VISION",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5279",
    descripcion: "ACCESORIO COMMODORE AMIGA",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5279",
    DESCRIPCION: "ACCESORIO COMMODORE AMIGA",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5280",
    descripcion: "ACCESORIO MSX",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5280",
    DESCRIPCION: "ACCESORIO MSX",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5281",
    descripcion: "ACCESORIO NEO GEO",
    cod_nivel_padre: "5116",
    COD_NIVEL: "5281",
    DESCRIPCION: "ACCESORIO NEO GEO",
    COD_NIVEL_PADRE: "5116"
  },
  {
    cod_nivel: "5283",
    descripcion: "ACCESORIOS RELOJERIA",
    cod_nivel_padre: "1471",
    COD_NIVEL: "5283",
    DESCRIPCION: "ACCESORIOS RELOJERIA",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "5284",
    descripcion: "GAFAS",
    cod_nivel_padre: "0",
    COD_NIVEL: "5284",
    DESCRIPCION: "GAFAS",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "5286",
    descripcion: "GAFAS DE SOL INFATIL",
    cod_nivel_padre: "1484",
    COD_NIVEL: "5286",
    DESCRIPCION: "GAFAS DE SOL INFATIL",
    COD_NIVEL_PADRE: "1484"
  },
  {
    cod_nivel: "5287",
    descripcion: "ACCESORIOS GAFAS",
    cod_nivel_padre: "5284",
    COD_NIVEL: "5287",
    DESCRIPCION: "ACCESORIOS GAFAS",
    COD_NIVEL_PADRE: "5284"
  },
  {
    cod_nivel: "698",
    descripcion: "OTROS COCINA",
    cod_nivel_padre: "5105",
    COD_NIVEL: "698",
    DESCRIPCION: "OTROS COCINA",
    COD_NIVEL_PADRE: "5105"
  },
  {
    cod_nivel: "632",
    descripcion: "ASPIRADOR CON BOLSA",
    cod_nivel_padre: "631",
    COD_NIVEL: "632",
    DESCRIPCION: "ASPIRADOR CON BOLSA",
    COD_NIVEL_PADRE: "631"
  },
  {
    cod_nivel: "1326",
    descripcion: "ACCESORIO REPRODUCTOR PORTATIL",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1326",
    DESCRIPCION: "ACCESORIO REPRODUCTOR PORTATIL",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1471",
    descripcion: "RELOJERIA",
    cod_nivel_padre: "0",
    COD_NIVEL: "1471",
    DESCRIPCION: "RELOJERIA",
    COD_NIVEL_PADRE: "0"
  },
  {
    cod_nivel: "1685",
    descripcion: "RELOJ SOBREMESA",
    cod_nivel_padre: "1471",
    COD_NIVEL: "1685",
    DESCRIPCION: "RELOJ SOBREMESA",
    COD_NIVEL_PADRE: "1471"
  },
  {
    cod_nivel: "1996",
    descripcion: "GAFAS DE SOL CABALLERO/UNISEX",
    cod_nivel_padre: "1464",
    COD_NIVEL: "1996",
    DESCRIPCION: "GAFAS DE SOL CABALLERO/UNISEX",
    COD_NIVEL_PADRE: "1464"
  },
  {
    cod_nivel: "617",
    descripcion: "HORNO",
    cod_nivel_padre: "5104",
    COD_NIVEL: "617",
    DESCRIPCION: "HORNO",
    COD_NIVEL_PADRE: "5104"
  },
  {
    cod_nivel: "2184",
    descripcion: "HORNO VITROCERAMICA",
    cod_nivel_padre: "5104",
    COD_NIVEL: "2184",
    DESCRIPCION: "HORNO VITROCERAMICA",
    COD_NIVEL_PADRE: "5104"
  },
  {
    cod_nivel: "1327",
    descripcion: "ALTAVOCES PARA IPOD",
    cod_nivel_padre: "1322",
    COD_NIVEL: "1327",
    DESCRIPCION: "ALTAVOCES PARA IPOD",
    COD_NIVEL_PADRE: "1322"
  },
  {
    cod_nivel: "1683",
    descripcion: "CRONOMETRO",
    cod_nivel_padre: "3",
    COD_NIVEL: "1683",
    DESCRIPCION: "CRONOMETRO",
    COD_NIVEL_PADRE: "3"
  },
  {
    cod_nivel: "1997",
    descripcion: "GAFA DE SOL SEÑORA",
    cod_nivel_padre: "1464",
    COD_NIVEL: "1997",
    DESCRIPCION: "GAFA DE SOL SEÑORA",
    COD_NIVEL_PADRE: "1464"
  },
  {
    cod_nivel: "1999",
    descripcion: "MONTURA GAFAS",
    cod_nivel_padre: "5284",
    COD_NIVEL: "1999",
    DESCRIPCION: "MONTURA GAFAS",
    COD_NIVEL_PADRE: "5284"
  },
  {
    cod_nivel: "1464",
    descripcion: "GAFAS DE SOL",
    cod_nivel_padre: "5284",
    COD_NIVEL: "1464",
    DESCRIPCION: "GAFAS DE SOL",
    COD_NIVEL_PADRE: "5284"
  }
];

export default niveles;
