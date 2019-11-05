const arbolCategorias = [
    {
        "idLevel": 2,
        "name": "DEPORTES",
        "idParentLevel": 0,
        "lastUpdated": "2011-02-07 12:59:08"
    },
    {
        "idLevel": 3,
        "name": "AEROBIC Y FITNESS",
        "idParentLevel": 2,
        "lastUpdated": "2011-01-07 13:10:51"
    },
    {
        "idLevel": 4,
        "name": "CINTA CORRER",
        "idParentLevel": 3,
        "lastUpdated": "2011-07-10 14:44:37"
    },
    {
        "idLevel": 5,
        "name": "STEP",
        "idParentLevel": 3,
        "lastUpdated": "2011-02-07 18:08:54"
    },
    {
        "idLevel": 6,
        "name": "BICICLETA ESTATICA",
        "idParentLevel": 3,
        "lastUpdated": "2011-01-07 20:18:23"
    },
    {
        "idLevel": 8,
        "name": "BICICLETA ELIPTICA",
        "idParentLevel": 3,
        "lastUpdated": "2011-02-07 18:12:21"
    },
    {
        "idLevel": 9,
        "name": "MAQUINA REMOS",
        "idParentLevel": 3,
        "lastUpdated": "2011-01-07 20:25:38"
    },
    {
        "idLevel": 10,
        "name": "STEPPER",
        "idParentLevel": 3,
        "lastUpdated": "2011-01-07 20:54:06"
    },
    {
        "idLevel": 11,
        "name": "PLATAFORMA VIBRATORIA",
        "idParentLevel": 3,
        "lastUpdated": "2011-01-07 20:53:32"
    },
    {
        "idLevel": 12,
        "name": "ESTERILLA",
        "idParentLevel": 3,
        "lastUpdated": "2011-01-07 20:56:11"
    },
    {
        "idLevel": 13,
        "name": "ELECTROESTIMULADOR",
        "idParentLevel": 3,
        "lastUpdated": "2011-07-10 10:06:54"
    },
    {
        "idLevel": 14,
        "name": "CAMA ELASTICA",
        "idParentLevel": 3,
        "lastUpdated": "2011-09-09 10:55:26"
    },
    {
        "idLevel": 15,
        "name": "MUSCULACION",
        "idParentLevel": 3,
        "lastUpdated": "2011-09-09 10:56:46"
    },
    {
        "idLevel": 16,
        "name": "APARATO CARGA GUIADA",
        "idParentLevel": 15,
        "lastUpdated": "2011-09-09 11:40:29"
    },
    {
        "idLevel": 17,
        "name": "BANCO MUSCULACION",
        "idParentLevel": 15,
        "lastUpdated": "2011-09-09 11:41:16"
    },
    {
        "idLevel": 20,
        "name": "BARRA DE TRACCION",
        "idParentLevel": 15,
        "lastUpdated": "2011-09-09 11:42:22"
    },
    {
        "idLevel": 21,
        "name": "KIT MANCUERNAS",
        "idParentLevel": 15,
        "lastUpdated": "2011-09-09 13:56:59"
    },
    {
        "idLevel": 22,
        "name": "BARRA DE PESAS",
        "idParentLevel": 15,
        "lastUpdated": "2011-09-09 11:48:19"
    },
    {
        "idLevel": 23,
        "name": "DISCO DE PESAS",
        "idParentLevel": 15,
        "lastUpdated": "2011-09-09 21:42:42"
    },
    {
        "idLevel": 24,
        "name": "GUANTES MUSCULACION",
        "idParentLevel": 15,
        "lastUpdated": "2011-09-09 12:40:38"
    },
    {
        "idLevel": 25,
        "name": "PULSOMETRO",
        "idParentLevel": 3,
        "lastUpdated": "2011-09-09 12:44:48"
    },
    {
        "idLevel": 26,
        "name": "PODOMETRO",
        "idParentLevel": 3,
        "lastUpdated": "2011-09-09 12:45:18"
    },
    {
        "idLevel": 27,
        "name": "ROPA FITNESS",
        "idParentLevel": 3,
        "lastUpdated": "2011-09-09 12:48:41"
    },
    {
        "idLevel": 28,
        "name": "OTROS FITNESS",
        "idParentLevel": 3,
        "lastUpdated": "2011-09-09 12:50:31"
    },
    {
        "idLevel": 29,
        "name": "ATLETISMO Y RUNNING",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 12:53:17"
    },
    {
        "idLevel": 30,
        "name": "ROPA ATLETISMO",
        "idParentLevel": 29,
        "lastUpdated": "2011-09-09 12:54:18"
    },
    {
        "idLevel": 31,
        "name": "CALZADO ATLETISMO",
        "idParentLevel": 29,
        "lastUpdated": "2011-09-09 12:55:20"
    },
    {
        "idLevel": 32,
        "name": "OTROS ATLETISMO",
        "idParentLevel": 29,
        "lastUpdated": "2011-09-09 12:56:00"
    },
    {
        "idLevel": 33,
        "name": "BALONCESTO",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 12:56:44"
    },
    {
        "idLevel": 34,
        "name": "CANASTA BALONCESTO",
        "idParentLevel": 33,
        "lastUpdated": "2011-09-09 12:57:51"
    },
    {
        "idLevel": 35,
        "name": "BALON BALONCESTO",
        "idParentLevel": 33,
        "lastUpdated": "2011-02-10 20:25:47"
    },
    {
        "idLevel": 36,
        "name": "ZAPATILLAS BALONCESTO",
        "idParentLevel": 33,
        "lastUpdated": "2011-09-09 12:59:28"
    },
    {
        "idLevel": 37,
        "name": "ROPA BALONCESTO",
        "idParentLevel": 33,
        "lastUpdated": "2011-09-09 13:00:31"
    },
    {
        "idLevel": 38,
        "name": "MERCHANDISING EQUIPOS",
        "idParentLevel": 33,
        "lastUpdated": "2011-09-09 13:01:31"
    },
    {
        "idLevel": 39,
        "name": "BALONMANO",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 13:02:42"
    },
    {
        "idLevel": 40,
        "name": "ZAPATILLAS BALONMANO",
        "idParentLevel": 39,
        "lastUpdated": "2011-09-09 13:03:39"
    },
    {
        "idLevel": 41,
        "name": "BALON BALONMANO",
        "idParentLevel": 39,
        "lastUpdated": "2011-09-09 13:04:07"
    },
    {
        "idLevel": 42,
        "name": "PROTECCIONES BALONMANO",
        "idParentLevel": 39,
        "lastUpdated": "2011-09-09 13:05:04"
    },
    {
        "idLevel": 43,
        "name": "BEISBOL",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 13:05:47"
    },
    {
        "idLevel": 44,
        "name": "GUANTE BEISBOL",
        "idParentLevel": 43,
        "lastUpdated": "2011-09-09 13:06:27"
    },
    {
        "idLevel": 45,
        "name": "BATE BEISBOL",
        "idParentLevel": 43,
        "lastUpdated": "2011-09-09 13:06:54"
    },
    {
        "idLevel": 46,
        "name": "BOLA BEISBOL",
        "idParentLevel": 43,
        "lastUpdated": "2011-09-09 13:07:24"
    },
    {
        "idLevel": 47,
        "name": "CAMPING",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 13:08:30"
    },
    {
        "idLevel": 48,
        "name": "CANTIMPLORA",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:09:16"
    },
    {
        "idLevel": 49,
        "name": "BASTON",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:09:35"
    },
    {
        "idLevel": 50,
        "name": "LINTERNA",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:10:42"
    },
    {
        "idLevel": 51,
        "name": "SISTEMA DE ALUMBRADO",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:11:39"
    },
    {
        "idLevel": 52,
        "name": "MOCHILA",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:12:04"
    },
    {
        "idLevel": 53,
        "name": "NEVERA",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:14:01"
    },
    {
        "idLevel": 54,
        "name": "AISLANTE SACO DORMIR",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:14:31"
    },
    {
        "idLevel": 55,
        "name": "SACO DORMIR",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:15:07"
    },
    {
        "idLevel": 56,
        "name": "SILLA",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:15:49"
    },
    {
        "idLevel": 57,
        "name": "TIENDA CAMPAÑA",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 21:42:01"
    },
    {
        "idLevel": 58,
        "name": "UTENSILIO ALIMENTACION",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:24:20"
    },
    {
        "idLevel": 59,
        "name": "MOBILIARIO",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:24:54"
    },
    {
        "idLevel": 60,
        "name": "OTROS CAMPING",
        "idParentLevel": 47,
        "lastUpdated": "2011-09-09 13:25:37"
    },
    {
        "idLevel": 61,
        "name": "CAZA",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 13:26:47"
    },
    {
        "idLevel": 62,
        "name": "ROPA DE CAZA",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:27:37"
    },
    {
        "idLevel": 63,
        "name": "CARTUCHERA",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:28:04"
    },
    {
        "idLevel": 64,
        "name": "MORRAL",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:28:23"
    },
    {
        "idLevel": 65,
        "name": "PORTAPAJARO",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:28:46"
    },
    {
        "idLevel": 66,
        "name": "ASIENTO CAZADOR",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:30:38"
    },
    {
        "idLevel": 67,
        "name": "HERRAMIENTA CAZADOR",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:31:16"
    },
    {
        "idLevel": 68,
        "name": "CASCO ANTIRUIDO",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:32:14"
    },
    {
        "idLevel": 69,
        "name": "PRISMATICOS",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 21:41:06"
    },
    {
        "idLevel": 70,
        "name": "EQUIPO VISION NOCTURNA",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 21:39:17"
    },
    {
        "idLevel": 71,
        "name": "POLAINAS",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:43:33"
    },
    {
        "idLevel": 72,
        "name": "BOLSA DE CAZA",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:43:59"
    },
    {
        "idLevel": 73,
        "name": "ACCESORIO PARA ARMAS",
        "idParentLevel": 61,
        "lastUpdated": "2011-02-10 20:22:46"
    },
    {
        "idLevel": 74,
        "name": "MIRA TELESCOPICA",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:45:01"
    },
    {
        "idLevel": 75,
        "name": "RECLAMO",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:45:32"
    },
    {
        "idLevel": 76,
        "name": "OTROS CAZA",
        "idParentLevel": 61,
        "lastUpdated": "2011-09-09 13:46:00"
    },
    {
        "idLevel": 77,
        "name": "CICLISMO",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 13:46:57"
    },
    {
        "idLevel": 78,
        "name": "ACCESORIOS Y COMPLEMENTOS",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 13:47:51"
    },
    {
        "idLevel": 79,
        "name": "BOMBA HINCHADO",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 13:49:28"
    },
    {
        "idLevel": 80,
        "name": "PORTABEBE BICICLETA",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 13:49:59"
    },
    {
        "idLevel": 81,
        "name": "RODILLO CICLISMO",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 13:50:36"
    },
    {
        "idLevel": 82,
        "name": "CUENTAKILOMETROS",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 13:51:27"
    },
    {
        "idLevel": 83,
        "name": "CESTA BICICLETA",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 13:58:45"
    },
    {
        "idLevel": 84,
        "name": "BOLSA PORTAEQUIPAJE",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:30:59"
    },
    {
        "idLevel": 85,
        "name": "FUNDA BICICLETA",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:31:26"
    },
    {
        "idLevel": 86,
        "name": "SOPORTE BICICLETA",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:31:48"
    },
    {
        "idLevel": 87,
        "name": "HERRAMIENTA CICLISMO",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:32:45"
    },
    {
        "idLevel": 88,
        "name": "MOCHILA CAMEL BAG",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:33:27"
    },
    {
        "idLevel": 89,
        "name": "BIDON",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:33:50"
    },
    {
        "idLevel": 90,
        "name": "PORTABIDONES BICI",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:34:19"
    },
    {
        "idLevel": 91,
        "name": "ACCESORIO VISIBILIDAD",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:35:36"
    },
    {
        "idLevel": 92,
        "name": "ILUMINACION BICICLETA",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:36:17"
    },
    {
        "idLevel": 93,
        "name": "ANTIRROBO",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:56:16"
    },
    {
        "idLevel": 94,
        "name": "OTROS ACCESORIOS CICLISMO",
        "idParentLevel": 78,
        "lastUpdated": "2011-09-09 14:57:15"
    },
    {
        "idLevel": 95,
        "name": "BICICLETAS",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 14:58:14"
    },
    {
        "idLevel": 96,
        "name": "BICICLETA MONTAÑA",
        "idParentLevel": 95,
        "lastUpdated": "2019-09-19 13:26:43"
    },
    {
        "idLevel": 97,
        "name": "BICICLETA CARRETERA",
        "idParentLevel": 95,
        "lastUpdated": "2019-09-20 14:43:08"
    },
    {
        "idLevel": 98,
        "name": "BICICLETA PASEO",
        "idParentLevel": 95,
        "lastUpdated": "2011-09-09 16:47:49"
    },
    {
        "idLevel": 99,
        "name": "BMX",
        "idParentLevel": 95,
        "lastUpdated": "2010-05-11 11:55:32"
    },
    {
        "idLevel": 100,
        "name": "BICICLETA PLEGABLE",
        "idParentLevel": 95,
        "lastUpdated": "2011-09-09 16:49:57"
    },
    {
        "idLevel": 101,
        "name": "BICICLETA RECLINADA",
        "idParentLevel": 95,
        "lastUpdated": "2011-09-09 16:50:36"
    },
    {
        "idLevel": 102,
        "name": "TANDEM",
        "idParentLevel": 95,
        "lastUpdated": "2011-09-09 16:51:40"
    },
    {
        "idLevel": 103,
        "name": "MONOCICLO",
        "idParentLevel": 95,
        "lastUpdated": "2011-09-09 16:53:51"
    },
    {
        "idLevel": 104,
        "name": "BICICLETA NIÑO",
        "idParentLevel": 95,
        "lastUpdated": "2011-09-09 16:54:22"
    },
    {
        "idLevel": 105,
        "name": "OTRAS BICICLETAS",
        "idParentLevel": 95,
        "lastUpdated": "2011-09-09 16:55:16"
    },
    {
        "idLevel": 106,
        "name": "PIEZAS BICICLETAS",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 16:56:02"
    },
    {
        "idLevel": 107,
        "name": "CASSETTE",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 16:57:50"
    },
    {
        "idLevel": 108,
        "name": "CAMBIO",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 16:58:13"
    },
    {
        "idLevel": 109,
        "name": "DESVIADOR",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 16:58:33"
    },
    {
        "idLevel": 110,
        "name": "MANILLAR",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 16:58:52"
    },
    {
        "idLevel": 111,
        "name": "ALARGADOR MANILLAR",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 16:59:09"
    },
    {
        "idLevel": 112,
        "name": "SILLIN",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 16:59:24"
    },
    {
        "idLevel": 113,
        "name": "TIJA",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 16:59:36"
    },
    {
        "idLevel": 114,
        "name": "RUEDA",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 17:02:27"
    },
    {
        "idLevel": 115,
        "name": "PEDALES",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 17:02:47"
    },
    {
        "idLevel": 116,
        "name": "CALAPIES",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 17:03:03"
    },
    {
        "idLevel": 117,
        "name": "OTRAS PIEZAS BICICLETAS",
        "idParentLevel": 106,
        "lastUpdated": "2011-09-09 17:03:43"
    },
    {
        "idLevel": 118,
        "name": "RECAMBIOS BICICLETA",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 17:04:28"
    },
    {
        "idLevel": 119,
        "name": "CAMARA DE AIRE",
        "idParentLevel": 118,
        "lastUpdated": "2011-09-09 17:05:29"
    },
    {
        "idLevel": 120,
        "name": "CUBIERTA",
        "idParentLevel": 118,
        "lastUpdated": "2011-09-09 17:05:52"
    },
    {
        "idLevel": 121,
        "name": "REPARA PINCHAZO",
        "idParentLevel": 118,
        "lastUpdated": "2011-09-09 17:06:18"
    },
    {
        "idLevel": 122,
        "name": "OTROS RECAMBIOS BICICLETA",
        "idParentLevel": 118,
        "lastUpdated": "2011-09-09 17:07:03"
    },
    {
        "idLevel": 123,
        "name": "ROPA CICLISMO",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 17:07:53"
    },
    {
        "idLevel": 124,
        "name": "CULOTTE",
        "idParentLevel": 123,
        "lastUpdated": "2011-09-09 17:10:11"
    },
    {
        "idLevel": 125,
        "name": "MAILLOT",
        "idParentLevel": 123,
        "lastUpdated": "2011-09-09 17:10:40"
    },
    {
        "idLevel": 126,
        "name": "GUANTES",
        "idParentLevel": 123,
        "lastUpdated": "2011-09-09 17:11:15"
    },
    {
        "idLevel": 127,
        "name": "MALLA",
        "idParentLevel": 123,
        "lastUpdated": "2011-09-09 17:11:50"
    },
    {
        "idLevel": 128,
        "name": "OTRA ROPA CICLISMO",
        "idParentLevel": 123,
        "lastUpdated": "2011-09-09 17:12:18"
    },
    {
        "idLevel": 129,
        "name": "ZAPATILLA CICLISMO",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 17:14:37"
    },
    {
        "idLevel": 130,
        "name": "CASCO CICLISMO",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 17:15:26"
    },
    {
        "idLevel": 131,
        "name": "OTROS CICLISMO",
        "idParentLevel": 77,
        "lastUpdated": "2011-09-09 17:18:08"
    },
    {
        "idLevel": 132,
        "name": "COMETAS",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 17:18:51"
    },
    {
        "idLevel": 133,
        "name": "COMETA DELTA",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:20:50"
    },
    {
        "idLevel": 134,
        "name": "COMETA MONOHILO",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:21:29"
    },
    {
        "idLevel": 135,
        "name": "COMETA DE TRACCION",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:21:53"
    },
    {
        "idLevel": 136,
        "name": "KITE BOARD",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:22:12"
    },
    {
        "idLevel": 137,
        "name": "KITE BUGGY",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:22:40"
    },
    {
        "idLevel": 138,
        "name": "FRISBEE",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:23:28"
    },
    {
        "idLevel": 139,
        "name": "BOOMERANG",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:28:43"
    },
    {
        "idLevel": 140,
        "name": "OTROS ACCESORIOS COMETAS",
        "idParentLevel": 132,
        "lastUpdated": "2011-09-09 17:29:11"
    },
    {
        "idLevel": 141,
        "name": "ESCALADA Y TREKKING",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 17:33:03"
    },
    {
        "idLevel": 142,
        "name": "DISIPADOR",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:35:18"
    },
    {
        "idLevel": 143,
        "name": "CASCO",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:35:44"
    },
    {
        "idLevel": 144,
        "name": "ARNES",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:36:00"
    },
    {
        "idLevel": 145,
        "name": "PIES DE GATO",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:36:28"
    },
    {
        "idLevel": 146,
        "name": "FISURERO",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:36:45"
    },
    {
        "idLevel": 147,
        "name": "MOSQUETON",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:37:00"
    },
    {
        "idLevel": 148,
        "name": "ROPA ESCALADA",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:37:30"
    },
    {
        "idLevel": 149,
        "name": "CUERDA ESCALADA",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:39:04"
    },
    {
        "idLevel": 150,
        "name": "PRESAS ESCALADA",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:40:10"
    },
    {
        "idLevel": 151,
        "name": "PIOLET",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:41:11"
    },
    {
        "idLevel": 152,
        "name": "BIDON ESTANCO BARRANCO",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:41:34"
    },
    {
        "idLevel": 153,
        "name": "CRAMPONES",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:41:51"
    },
    {
        "idLevel": 154,
        "name": "RAQUETA PARA NIEVE",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:42:28"
    },
    {
        "idLevel": 155,
        "name": "ALTA MONTAÑA",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:42:56"
    },
    {
        "idLevel": 156,
        "name": "ROPA TECNICA",
        "idParentLevel": 155,
        "lastUpdated": "2011-09-09 17:43:41"
    },
    {
        "idLevel": 157,
        "name": "TIENDA CAMPAÑA",
        "idParentLevel": 155,
        "lastUpdated": "2011-09-09 17:44:17"
    },
    {
        "idLevel": 158,
        "name": "MOCHILA",
        "idParentLevel": 155,
        "lastUpdated": "2011-09-09 17:44:42"
    },
    {
        "idLevel": 159,
        "name": "SACO DORMIR",
        "idParentLevel": 155,
        "lastUpdated": "2011-09-09 17:45:00"
    },
    {
        "idLevel": 160,
        "name": "OTROS ACCESORIOS ESCALADA",
        "idParentLevel": 141,
        "lastUpdated": "2011-09-09 17:45:44"
    },
    {
        "idLevel": 161,
        "name": "FUTBOL",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 17:46:18"
    },
    {
        "idLevel": 162,
        "name": "BALON FUTBOL",
        "idParentLevel": 161,
        "lastUpdated": "2011-09-09 17:52:11"
    },
    {
        "idLevel": 163,
        "name": "BOTAS FUTBOL",
        "idParentLevel": 161,
        "lastUpdated": "2011-09-09 17:52:50"
    },
    {
        "idLevel": 164,
        "name": "GUANTES PORTERO",
        "idParentLevel": 161,
        "lastUpdated": "2011-09-09 17:53:33"
    },
    {
        "idLevel": 165,
        "name": "ROPA FUTBOL",
        "idParentLevel": 161,
        "lastUpdated": "2011-09-09 17:54:06"
    },
    {
        "idLevel": 166,
        "name": "EQUIPAMIENTO",
        "idParentLevel": 161,
        "lastUpdated": "2011-09-09 17:54:40"
    },
    {
        "idLevel": 167,
        "name": "MINI PORTERIA FUTBOL",
        "idParentLevel": 166,
        "lastUpdated": "2011-09-09 17:55:39"
    },
    {
        "idLevel": 169,
        "name": "OTROS ACCESORIOS FUTBOL",
        "idParentLevel": 161,
        "lastUpdated": "2011-09-09 17:56:52"
    },
    {
        "idLevel": 170,
        "name": "FUTBOL AMERICANO",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 17:57:20"
    },
    {
        "idLevel": 171,
        "name": "CASCO",
        "idParentLevel": 170,
        "lastUpdated": "2011-09-09 17:58:32"
    },
    {
        "idLevel": 172,
        "name": "BALON",
        "idParentLevel": 170,
        "lastUpdated": "2011-09-09 17:58:51"
    },
    {
        "idLevel": 173,
        "name": "PROTECCIONES",
        "idParentLevel": 170,
        "lastUpdated": "2011-09-09 17:59:31"
    },
    {
        "idLevel": 174,
        "name": "OTROS FUTBOL AMERICANO",
        "idParentLevel": 170,
        "lastUpdated": "2011-09-09 18:00:07"
    },
    {
        "idLevel": 175,
        "name": "GIMNASIA",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 18:00:46"
    },
    {
        "idLevel": 176,
        "name": "MAILLOT",
        "idParentLevel": 175,
        "lastUpdated": "2011-09-09 18:01:25"
    },
    {
        "idLevel": 177,
        "name": "MALLAS",
        "idParentLevel": 175,
        "lastUpdated": "2011-09-09 18:01:49"
    },
    {
        "idLevel": 178,
        "name": "MATERIAL GIMNASIA",
        "idParentLevel": 175,
        "lastUpdated": "2011-09-09 18:02:14"
    },
    {
        "idLevel": 179,
        "name": "BALON DE ESPUMA",
        "idParentLevel": 178,
        "lastUpdated": "2011-09-09 18:02:51"
    },
    {
        "idLevel": 180,
        "name": "BASTON GIMNASIA",
        "idParentLevel": 178,
        "lastUpdated": "2011-09-09 18:03:16"
    },
    {
        "idLevel": 181,
        "name": "PELOTA MANIPULACION",
        "idParentLevel": 178,
        "lastUpdated": "2011-09-09 18:03:38"
    },
    {
        "idLevel": 182,
        "name": "CUERDA SALTAR",
        "idParentLevel": 178,
        "lastUpdated": "2011-09-09 18:03:59"
    },
    {
        "idLevel": 183,
        "name": "CINTAS",
        "idParentLevel": 178,
        "lastUpdated": "2011-09-09 18:04:15"
    },
    {
        "idLevel": 184,
        "name": "MAZA",
        "idParentLevel": 178,
        "lastUpdated": "2011-09-09 18:04:29"
    },
    {
        "idLevel": 185,
        "name": "ZAPATILLAS GIMNASIA",
        "idParentLevel": 175,
        "lastUpdated": "2011-09-09 18:05:17"
    },
    {
        "idLevel": 186,
        "name": "OTROS ACCESORIOS GIMNASIA",
        "idParentLevel": 175,
        "lastUpdated": "2011-09-09 18:05:42"
    },
    {
        "idLevel": 187,
        "name": "GOLF",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 18:06:28"
    },
    {
        "idLevel": 188,
        "name": "BOLA GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:15:57"
    },
    {
        "idLevel": 189,
        "name": "BOLSA GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:17:00"
    },
    {
        "idLevel": 190,
        "name": "CARRO GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:18:09"
    },
    {
        "idLevel": 191,
        "name": "PALO GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:19:40"
    },
    {
        "idLevel": 192,
        "name": "HIERRO",
        "idParentLevel": 191,
        "lastUpdated": "2011-09-09 18:26:59"
    },
    {
        "idLevel": 193,
        "name": "MADERA",
        "idParentLevel": 191,
        "lastUpdated": "2011-09-09 18:28:23"
    },
    {
        "idLevel": 194,
        "name": "DRIVER",
        "idParentLevel": 191,
        "lastUpdated": "2011-09-09 18:29:21"
    },
    {
        "idLevel": 195,
        "name": "PUTTER",
        "idParentLevel": 191,
        "lastUpdated": "2011-09-09 18:29:36"
    },
    {
        "idLevel": 196,
        "name": "HIBRIDO",
        "idParentLevel": 191,
        "lastUpdated": "2011-09-09 18:30:43"
    },
    {
        "idLevel": 197,
        "name": "WEDGE",
        "idParentLevel": 191,
        "lastUpdated": "2011-09-09 18:31:29"
    },
    {
        "idLevel": 198,
        "name": "ROPA GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:32:22"
    },
    {
        "idLevel": 199,
        "name": "CALZADO GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:32:46"
    },
    {
        "idLevel": 200,
        "name": "GUANTE GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:33:16"
    },
    {
        "idLevel": 201,
        "name": "OTROS GOLF",
        "idParentLevel": 187,
        "lastUpdated": "2011-09-09 18:33:41"
    },
    {
        "idLevel": 202,
        "name": "INVIERNO",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 18:34:36"
    },
    {
        "idLevel": 203,
        "name": "ESQUIS Y FIJACIONES",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:39:41"
    },
    {
        "idLevel": 204,
        "name": "BASTONES  ESQUI",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:37:11"
    },
    {
        "idLevel": 205,
        "name": "SNOWBOARD",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:40:07"
    },
    {
        "idLevel": 206,
        "name": "BOLSA TRANSPORTE",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:41:39"
    },
    {
        "idLevel": 207,
        "name": "BOTAS ESQUI",
        "idParentLevel": 202,
        "lastUpdated": "2011-02-10 20:27:10"
    },
    {
        "idLevel": 208,
        "name": "CASCO ESQUI",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:42:42"
    },
    {
        "idLevel": 209,
        "name": "GAFAS DE ESQUI",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:43:14"
    },
    {
        "idLevel": 210,
        "name": "MASCARA VENTISCA",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:43:42"
    },
    {
        "idLevel": 211,
        "name": "GUANTES ESQUI",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:44:08"
    },
    {
        "idLevel": 212,
        "name": "ROPA ESQUI",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:44:33"
    },
    {
        "idLevel": 213,
        "name": "PANTALON",
        "idParentLevel": 212,
        "lastUpdated": "2011-09-09 18:45:15"
    },
    {
        "idLevel": 214,
        "name": "CHAQUETA",
        "idParentLevel": 212,
        "lastUpdated": "2011-09-09 18:45:37"
    },
    {
        "idLevel": 215,
        "name": "MONO ESQUI",
        "idParentLevel": 212,
        "lastUpdated": "2011-09-09 18:46:03"
    },
    {
        "idLevel": 216,
        "name": "OTROS ROPA ESQUI",
        "idParentLevel": 212,
        "lastUpdated": "2011-09-09 18:46:33"
    },
    {
        "idLevel": 217,
        "name": "TRINEO",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:47:09"
    },
    {
        "idLevel": 218,
        "name": "PROTECCIONES",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:47:52"
    },
    {
        "idLevel": 219,
        "name": "OTROS DEPORTES INVIERNO",
        "idParentLevel": 202,
        "lastUpdated": "2011-09-09 18:48:45"
    },
    {
        "idLevel": 220,
        "name": "SUBMARINISMO",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 18:49:18"
    },
    {
        "idLevel": 221,
        "name": "ALETAS",
        "idParentLevel": 220,
        "lastUpdated": "2011-02-10 20:24:18"
    },
    {
        "idLevel": 222,
        "name": "BOLSA TRANSPORTE",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:50:36"
    },
    {
        "idLevel": 223,
        "name": "NEOPRENO",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:53:17"
    },
    {
        "idLevel": 224,
        "name": "ESCARPINES",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:54:18"
    },
    {
        "idLevel": 225,
        "name": "GUANTES SUBMARINISMO",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:56:21"
    },
    {
        "idLevel": 226,
        "name": "TUBO SUBMARINISMO",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:56:57"
    },
    {
        "idLevel": 227,
        "name": "MASCARA",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:57:18"
    },
    {
        "idLevel": 228,
        "name": "CINTURON",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:57:44"
    },
    {
        "idLevel": 229,
        "name": "PLOMOS",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:58:09"
    },
    {
        "idLevel": 230,
        "name": "REGULADOR",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:59:26"
    },
    {
        "idLevel": 231,
        "name": "EQUIPOS DE CONTROL",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 18:59:45"
    },
    {
        "idLevel": 232,
        "name": "BRUJULA",
        "idParentLevel": 231,
        "lastUpdated": "2011-09-09 19:01:41"
    },
    {
        "idLevel": 233,
        "name": "CONSOLA",
        "idParentLevel": 231,
        "lastUpdated": "2011-09-09 19:03:25"
    },
    {
        "idLevel": 234,
        "name": "MANOMETRO",
        "idParentLevel": 231,
        "lastUpdated": "2011-09-09 19:03:45"
    },
    {
        "idLevel": 235,
        "name": "ORDENADOR BUCEO",
        "idParentLevel": 231,
        "lastUpdated": "2011-09-09 19:05:59"
    },
    {
        "idLevel": 236,
        "name": "PROFUNDIMETRO",
        "idParentLevel": 231,
        "lastUpdated": "2011-09-09 19:08:25"
    },
    {
        "idLevel": 237,
        "name": "TERMOMETRO",
        "idParentLevel": 231,
        "lastUpdated": "2011-09-09 19:08:51"
    },
    {
        "idLevel": 238,
        "name": "LINTERNA SUBACUATICA",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 19:09:32"
    },
    {
        "idLevel": 239,
        "name": "BOTELLA",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 19:10:03"
    },
    {
        "idLevel": 240,
        "name": "JACKET",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 19:10:28"
    },
    {
        "idLevel": 241,
        "name": "OTROS SUBMARINISMO",
        "idParentLevel": 220,
        "lastUpdated": "2011-09-09 19:11:44"
    },
    {
        "idLevel": 242,
        "name": "PIRAGUA Y KAYAK",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 19:13:15"
    },
    {
        "idLevel": 243,
        "name": "ROPA",
        "idParentLevel": 242,
        "lastUpdated": "2011-09-09 19:43:17"
    },
    {
        "idLevel": 244,
        "name": "REMO",
        "idParentLevel": 242,
        "lastUpdated": "2011-09-09 19:43:41"
    },
    {
        "idLevel": 245,
        "name": "KAYAK",
        "idParentLevel": 242,
        "lastUpdated": "2011-09-09 19:44:50"
    },
    {
        "idLevel": 246,
        "name": "CASCO",
        "idParentLevel": 242,
        "lastUpdated": "2011-09-09 19:45:07"
    },
    {
        "idLevel": 247,
        "name": "OTROS PIRAGUA KAYAK",
        "idParentLevel": 242,
        "lastUpdated": "2011-09-09 19:47:07"
    },
    {
        "idLevel": 248,
        "name": "NATACION",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 19:47:42"
    },
    {
        "idLevel": 249,
        "name": "BAÑADOR",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:48:57"
    },
    {
        "idLevel": 250,
        "name": "CHANCLAS",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:49:19"
    },
    {
        "idLevel": 251,
        "name": "TOALLA",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:49:44"
    },
    {
        "idLevel": 252,
        "name": "ALBORNOZ",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:50:05"
    },
    {
        "idLevel": 253,
        "name": "GAFAS DE NATACION",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:50:27"
    },
    {
        "idLevel": 254,
        "name": "GORRO NATACION",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:50:45"
    },
    {
        "idLevel": 255,
        "name": "APRENDER A NADAR",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:51:10"
    },
    {
        "idLevel": 256,
        "name": "CHURRO",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:51:28"
    },
    {
        "idLevel": 257,
        "name": "TABLA BATEO",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:51:45"
    },
    {
        "idLevel": 259,
        "name": "AQUAGYM",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:53:01"
    },
    {
        "idLevel": 260,
        "name": "OTROS NATACION",
        "idParentLevel": 248,
        "lastUpdated": "2011-09-09 19:53:21"
    },
    {
        "idLevel": 261,
        "name": "NAUTICA",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 19:53:55"
    },
    {
        "idLevel": 262,
        "name": "LANCHA",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:11:00"
    },
    {
        "idLevel": 263,
        "name": "BARCO INFLABLE",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:10:15"
    },
    {
        "idLevel": 264,
        "name": "MOTOR LANCHA",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:12:30"
    },
    {
        "idLevel": 265,
        "name": "COMPASS",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:12:55"
    },
    {
        "idLevel": 266,
        "name": "SONDA",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:13:14"
    },
    {
        "idLevel": 267,
        "name": "EQUIPO FONDEO",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:13:44"
    },
    {
        "idLevel": 268,
        "name": "ACCESORIO AMARRE",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:14:23"
    },
    {
        "idLevel": 269,
        "name": "AMORTIGUADOR AMARRE",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:14:51"
    },
    {
        "idLevel": 270,
        "name": "ANCLA",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:15:11"
    },
    {
        "idLevel": 271,
        "name": "BICHERO",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:15:32"
    },
    {
        "idLevel": 272,
        "name": "CABESTRANTE",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:15:49"
    },
    {
        "idLevel": 273,
        "name": "DEFENSA EMBARCACION",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:16:18"
    },
    {
        "idLevel": 274,
        "name": "DEFENSA PANTALAN",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:16:54"
    },
    {
        "idLevel": 275,
        "name": "ESCALERA",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:17:28"
    },
    {
        "idLevel": 276,
        "name": "MOLINETE",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:17:45"
    },
    {
        "idLevel": 277,
        "name": "REMO",
        "idParentLevel": 267,
        "lastUpdated": "2011-09-09 20:18:17"
    },
    {
        "idLevel": 278,
        "name": "SEGURIDAD Y SALVAMENTO",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:18:57"
    },
    {
        "idLevel": 279,
        "name": "BALSA SUPERVIVENCIA",
        "idParentLevel": 278,
        "lastUpdated": "2011-09-09 20:19:47"
    },
    {
        "idLevel": 280,
        "name": "CHALECO SALVAVIDAS",
        "idParentLevel": 278,
        "lastUpdated": "2011-09-09 20:20:04"
    },
    {
        "idLevel": 281,
        "name": "ARO SALVAVIDAS",
        "idParentLevel": 278,
        "lastUpdated": "2011-09-09 20:20:23"
    },
    {
        "idLevel": 282,
        "name": "EXTINTOR",
        "idParentLevel": 278,
        "lastUpdated": "2011-09-09 20:20:56"
    },
    {
        "idLevel": 283,
        "name": "OTROS SEGURIDAD",
        "idParentLevel": 278,
        "lastUpdated": "2011-09-09 20:21:31"
    },
    {
        "idLevel": 284,
        "name": "CHALECO FLOTACION",
        "idParentLevel": 278,
        "lastUpdated": "2011-09-09 20:23:30"
    },
    {
        "idLevel": 285,
        "name": "CASCO PROTECCION",
        "idParentLevel": 278,
        "lastUpdated": "2011-09-09 20:23:54"
    },
    {
        "idLevel": 286,
        "name": "OTROS NAUTICOS",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:24:58"
    },
    {
        "idLevel": 287,
        "name": "TRAJE NEOPRENO",
        "idParentLevel": 286,
        "lastUpdated": "2011-09-09 20:26:47"
    },
    {
        "idLevel": 288,
        "name": "TABLAS",
        "idParentLevel": 261,
        "lastUpdated": "2011-09-09 20:27:27"
    },
    {
        "idLevel": 289,
        "name": "KITESURF",
        "idParentLevel": 288,
        "lastUpdated": "2011-09-09 20:28:18"
    },
    {
        "idLevel": 290,
        "name": "WINDSURF",
        "idParentLevel": 288,
        "lastUpdated": "2011-09-09 20:28:46"
    },
    {
        "idLevel": 291,
        "name": "WAKEBOARD",
        "idParentLevel": 288,
        "lastUpdated": "2011-09-09 20:29:05"
    },
    {
        "idLevel": 292,
        "name": "ESQUI NAUTICO",
        "idParentLevel": 288,
        "lastUpdated": "2011-09-09 20:29:26"
    },
    {
        "idLevel": 293,
        "name": "SKIMBOARD",
        "idParentLevel": 288,
        "lastUpdated": "2011-09-09 20:29:43"
    },
    {
        "idLevel": 294,
        "name": "BODYBOARD",
        "idParentLevel": 288,
        "lastUpdated": "2011-02-10 20:26:46"
    },
    {
        "idLevel": 295,
        "name": "HINCHADOR",
        "idParentLevel": 286,
        "lastUpdated": "2011-09-09 20:30:45"
    },
    {
        "idLevel": 296,
        "name": "COMETA KITESURF",
        "idParentLevel": 286,
        "lastUpdated": "2011-09-09 20:31:33"
    },
    {
        "idLevel": 297,
        "name": "INFLABLE TRACCION",
        "idParentLevel": 286,
        "lastUpdated": "2011-09-09 20:33:01"
    },
    {
        "idLevel": 298,
        "name": "OTROS NAUTICOS",
        "idParentLevel": 286,
        "lastUpdated": "2011-09-09 20:33:53"
    },
    {
        "idLevel": 299,
        "name": "RAQUETA",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 20:34:46"
    },
    {
        "idLevel": 300,
        "name": "ZAPATILLAS",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:35:52"
    },
    {
        "idLevel": 301,
        "name": "RAQUETA",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:36:18"
    },
    {
        "idLevel": 302,
        "name": "PELOTAS",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:37:17"
    },
    {
        "idLevel": 303,
        "name": "VOLANTES BADMINTON",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:37:43"
    },
    {
        "idLevel": 304,
        "name": "FUNDAS",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:38:21"
    },
    {
        "idLevel": 305,
        "name": "MESA PING PONG",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:38:47"
    },
    {
        "idLevel": 306,
        "name": "ACCESORIOS PING PONG",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:39:21"
    },
    {
        "idLevel": 307,
        "name": "OTROS DEPORTE RAQUETA",
        "idParentLevel": 299,
        "lastUpdated": "2011-09-09 20:39:46"
    },
    {
        "idLevel": 308,
        "name": "HOCKEY",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 20:40:29"
    },
    {
        "idLevel": 309,
        "name": "PATINES",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:41:37"
    },
    {
        "idLevel": 310,
        "name": "STICK",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:41:51"
    },
    {
        "idLevel": 311,
        "name": "CASCO",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:42:13"
    },
    {
        "idLevel": 312,
        "name": "MASCARA",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:42:31"
    },
    {
        "idLevel": 313,
        "name": "PELOTA",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:42:49"
    },
    {
        "idLevel": 314,
        "name": "DISCO HOCKEY",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:43:20"
    },
    {
        "idLevel": 315,
        "name": "PROTECCIONES",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:43:43"
    },
    {
        "idLevel": 316,
        "name": "OTROS HOCKEY",
        "idParentLevel": 308,
        "lastUpdated": "2011-09-09 20:44:03"
    },
    {
        "idLevel": 317,
        "name": "PATINAJE",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 20:44:32"
    },
    {
        "idLevel": 318,
        "name": "PATINES",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:47:44"
    },
    {
        "idLevel": 320,
        "name": "WAVEBOARD",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:48:37"
    },
    {
        "idLevel": 321,
        "name": "PATINETE",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:48:53"
    },
    {
        "idLevel": 322,
        "name": "PROTECCIONES PATINAJE",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:49:18"
    },
    {
        "idLevel": 323,
        "name": "CASCO",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:49:34"
    },
    {
        "idLevel": 324,
        "name": "CALZADO CON RUEDAS",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:49:56"
    },
    {
        "idLevel": 325,
        "name": "ACCESORIO PATINAJE",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:50:30"
    },
    {
        "idLevel": 326,
        "name": "OTROS PATINAJE",
        "idParentLevel": 317,
        "lastUpdated": "2011-09-09 20:50:50"
    },
    {
        "idLevel": 327,
        "name": "PESCA",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 20:51:23"
    },
    {
        "idLevel": 328,
        "name": "CAÑA PESCAR",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 20:52:54"
    },
    {
        "idLevel": 329,
        "name": "CAÑA DE PESCAR TELESCOPICA",
        "idParentLevel": 328,
        "lastUpdated": "2011-09-09 20:58:59"
    },
    {
        "idLevel": 331,
        "name": "CAÑA DE PESCAR ENCHUFABLE",
        "idParentLevel": 328,
        "lastUpdated": "2011-09-09 20:59:47"
    },
    {
        "idLevel": 332,
        "name": "CAÑA DE PESCAR CURRICAN",
        "idParentLevel": 328,
        "lastUpdated": "2011-09-09 21:00:09"
    },
    {
        "idLevel": 333,
        "name": "CAÑA DE PESCAR SIMPLE",
        "idParentLevel": 328,
        "lastUpdated": "2011-09-09 21:00:30"
    },
    {
        "idLevel": 334,
        "name": "CARRETE PESCA",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 21:01:07"
    },
    {
        "idLevel": 335,
        "name": "HILO PESCAR",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 21:02:01"
    },
    {
        "idLevel": 336,
        "name": "SACADERA",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 21:02:17"
    },
    {
        "idLevel": 337,
        "name": "RETEL",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 21:02:42"
    },
    {
        "idLevel": 338,
        "name": "REJONCILLO",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 21:03:02"
    },
    {
        "idLevel": 339,
        "name": "ROPA PESCA",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 21:03:24"
    },
    {
        "idLevel": 340,
        "name": "OTROS ARTICULOS DE PESCA",
        "idParentLevel": 327,
        "lastUpdated": "2011-09-09 21:03:47"
    },
    {
        "idLevel": 341,
        "name": "PRECISION",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 21:04:32"
    },
    {
        "idLevel": 342,
        "name": "TIRO AL ARCO",
        "idParentLevel": 341,
        "lastUpdated": "2011-09-09 21:05:04"
    },
    {
        "idLevel": 343,
        "name": "DIANA",
        "idParentLevel": 342,
        "lastUpdated": "2011-09-09 21:05:50"
    },
    {
        "idLevel": 344,
        "name": "FLECHA",
        "idParentLevel": 342,
        "lastUpdated": "2011-09-09 21:06:13"
    },
    {
        "idLevel": 345,
        "name": "ACCESORIOS TIRO AL ARCO",
        "idParentLevel": 342,
        "lastUpdated": "2011-09-09 21:06:45"
    },
    {
        "idLevel": 346,
        "name": "PETANCA",
        "idParentLevel": 341,
        "lastUpdated": "2011-09-09 21:07:24"
    },
    {
        "idLevel": 347,
        "name": "DARDOS",
        "idParentLevel": 341,
        "lastUpdated": "2011-09-09 21:07:55"
    },
    {
        "idLevel": 348,
        "name": "DIANA",
        "idParentLevel": 347,
        "lastUpdated": "2011-09-09 21:08:51"
    },
    {
        "idLevel": 349,
        "name": "DARDOS",
        "idParentLevel": 347,
        "lastUpdated": "2011-09-09 21:10:13"
    },
    {
        "idLevel": 350,
        "name": "ACCESORIOS DARDOS",
        "idParentLevel": 347,
        "lastUpdated": "2011-09-09 21:11:00"
    },
    {
        "idLevel": 351,
        "name": "LUCHA",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 21:14:35"
    },
    {
        "idLevel": 352,
        "name": "COMBATE Y ARTES MARCIALES",
        "idParentLevel": 351,
        "lastUpdated": "2011-09-09 21:15:41"
    },
    {
        "idLevel": 353,
        "name": "PROTECCIONES",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:20:49"
    },
    {
        "idLevel": 354,
        "name": "GUANTES",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:22:46"
    },
    {
        "idLevel": 355,
        "name": "BOTAS",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:23:09"
    },
    {
        "idLevel": 356,
        "name": "SACO",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:23:28"
    },
    {
        "idLevel": 357,
        "name": "ESCUDO",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:23:46"
    },
    {
        "idLevel": 358,
        "name": "CUERDA SALTAR",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:24:07"
    },
    {
        "idLevel": 359,
        "name": "OTROS ACCESORIOS BOXEO",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:25:19"
    },
    {
        "idLevel": 361,
        "name": "KIMONO",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:26:44"
    },
    {
        "idLevel": 362,
        "name": "ZOORIE",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:28:11"
    },
    {
        "idLevel": 363,
        "name": "CINTURON",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:28:40"
    },
    {
        "idLevel": 364,
        "name": "PROTECCIONES",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:29:08"
    },
    {
        "idLevel": 365,
        "name": "PANTALON FULL CONTACT",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:29:37"
    },
    {
        "idLevel": 366,
        "name": "PETO TAEKWONDO",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:30:12"
    },
    {
        "idLevel": 367,
        "name": "NUNCHAKU",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:31:27"
    },
    {
        "idLevel": 368,
        "name": "OTROS ARTES MARCIALES",
        "idParentLevel": 352,
        "lastUpdated": "2011-09-09 21:31:58"
    },
    {
        "idLevel": 369,
        "name": "EQUITACION",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 21:32:31"
    },
    {
        "idLevel": 370,
        "name": "CASCO JINETE",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:33:13"
    },
    {
        "idLevel": 371,
        "name": "GUANTES JINETE",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:35:02"
    },
    {
        "idLevel": 372,
        "name": "ESPUELAS",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:35:24"
    },
    {
        "idLevel": 373,
        "name": "FUSTA",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:35:39"
    },
    {
        "idLevel": 374,
        "name": "CALZADO JINETE",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:35:57"
    },
    {
        "idLevel": 375,
        "name": "ROPA JINETE",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:36:18"
    },
    {
        "idLevel": 376,
        "name": "SILLA DE MONTAR",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:36:42"
    },
    {
        "idLevel": 377,
        "name": "OTROS EQUITACION",
        "idParentLevel": 369,
        "lastUpdated": "2011-09-09 21:37:16"
    },
    {
        "idLevel": 378,
        "name": "OTROS DEPORTES",
        "idParentLevel": 2,
        "lastUpdated": "2011-09-09 21:38:26"
    },
    {
        "idLevel": 379,
        "name": "BEBES Y JUGUETES",
        "idParentLevel": 0,
        "lastUpdated": "2011-09-09 21:48:54"
    },
    {
        "idLevel": 380,
        "name": "ACCESORIOS BAÑO",
        "idParentLevel": 5180,
        "lastUpdated": "2011-09-09 21:49:40"
    },
    {
        "idLevel": 381,
        "name": "BAÑERA BEBE",
        "idParentLevel": 380,
        "lastUpdated": "2011-09-09 21:50:24"
    },
    {
        "idLevel": 382,
        "name": "BAÑERA CAMBIADOR BEBE",
        "idParentLevel": 380,
        "lastUpdated": "2011-09-09 21:50:54"
    },
    {
        "idLevel": 383,
        "name": "HAMACA BAÑO",
        "idParentLevel": 380,
        "lastUpdated": "2011-09-09 21:51:10"
    },
    {
        "idLevel": 384,
        "name": "SILLA BAÑO BEBE",
        "idParentLevel": 380,
        "lastUpdated": "2011-09-09 21:51:34"
    },
    {
        "idLevel": 385,
        "name": "TERMOMETRO BAÑO",
        "idParentLevel": 380,
        "lastUpdated": "2011-09-09 21:52:02"
    },
    {
        "idLevel": 386,
        "name": "OTROS ACCESORIOS BAÑO",
        "idParentLevel": 380,
        "lastUpdated": "2011-09-09 21:52:35"
    },
    {
        "idLevel": 387,
        "name": "ALIMENTACION",
        "idParentLevel": 379,
        "lastUpdated": "2011-09-09 21:52:59"
    },
    {
        "idLevel": 388,
        "name": "BIBERON",
        "idParentLevel": 387,
        "lastUpdated": "2011-09-09 21:53:35"
    },
    {
        "idLevel": 389,
        "name": "CALIENTABIBERON",
        "idParentLevel": 387,
        "lastUpdated": "2011-09-09 21:54:47"
    },
    {
        "idLevel": 390,
        "name": "ESTERILIZADOR",
        "idParentLevel": 387,
        "lastUpdated": "2011-09-09 21:55:09"
    },
    {
        "idLevel": 391,
        "name": "ROBOT COCINA BEBES",
        "idParentLevel": 387,
        "lastUpdated": "2011-09-09 21:55:41"
    },
    {
        "idLevel": 392,
        "name": "TRONA",
        "idParentLevel": 387,
        "lastUpdated": "2011-09-09 21:55:57"
    },
    {
        "idLevel": 393,
        "name": "UTENSILIO",
        "idParentLevel": 387,
        "lastUpdated": "2011-09-09 21:56:21"
    },
    {
        "idLevel": 394,
        "name": "OTROS ALIMENTACION BEBE",
        "idParentLevel": 387,
        "lastUpdated": "2011-09-09 21:56:48"
    },
    {
        "idLevel": 395,
        "name": "CORREPASILLOS",
        "idParentLevel": 5180,
        "lastUpdated": "2011-09-09 21:58:24"
    },
    {
        "idLevel": 396,
        "name": "TRANSPORTE BEBES",
        "idParentLevel": 379,
        "lastUpdated": "2011-09-09 21:58:51"
    },
    {
        "idLevel": 397,
        "name": "CAPAZO",
        "idParentLevel": 396,
        "lastUpdated": "2011-09-09 22:00:00"
    },
    {
        "idLevel": 398,
        "name": "SILLA PASEO",
        "idParentLevel": 396,
        "lastUpdated": "2011-09-09 22:00:23"
    },
    {
        "idLevel": 399,
        "name": "CONJUNTO DUO",
        "idParentLevel": 396,
        "lastUpdated": "2011-09-09 22:01:31"
    },
    {
        "idLevel": 400,
        "name": "CONJUNTO TRIO",
        "idParentLevel": 396,
        "lastUpdated": "2011-09-09 22:01:51"
    },
    {
        "idLevel": 401,
        "name": "ACCESORIO CARRITO BEBE",
        "idParentLevel": 396,
        "lastUpdated": "2011-09-09 22:02:24"
    },
    {
        "idLevel": 402,
        "name": "MOCHILA PORTABEBE",
        "idParentLevel": 396,
        "lastUpdated": "2011-09-09 22:02:47"
    },
    {
        "idLevel": 403,
        "name": "SILLA PARA COCHE",
        "idParentLevel": 396,
        "lastUpdated": "2011-09-09 22:16:55"
    },
    {
        "idLevel": 404,
        "name": "CUNAS Y MINICUNAS",
        "idParentLevel": 379,
        "lastUpdated": "2011-09-09 22:18:07"
    },
    {
        "idLevel": 405,
        "name": "CUNA",
        "idParentLevel": 404,
        "lastUpdated": "2011-09-09 22:18:36"
    },
    {
        "idLevel": 406,
        "name": "CUNA VIAJE",
        "idParentLevel": 404,
        "lastUpdated": "2011-09-09 22:18:51"
    },
    {
        "idLevel": 407,
        "name": "MINICUNA",
        "idParentLevel": 404,
        "lastUpdated": "2011-09-09 22:19:09"
    },
    {
        "idLevel": 408,
        "name": "PARQUE INFANTIL",
        "idParentLevel": 404,
        "lastUpdated": "2011-09-09 22:19:27"
    },
    {
        "idLevel": 409,
        "name": "HAMACA",
        "idParentLevel": 404,
        "lastUpdated": "2011-09-09 22:19:44"
    },
    {
        "idLevel": 410,
        "name": "JUGUETES BEBES",
        "idParentLevel": 1435,
        "lastUpdated": "2011-09-09 22:20:29"
    },
    {
        "idLevel": 411,
        "name": "MATERNIDAD Y PREMAMA",
        "idParentLevel": 5180,
        "lastUpdated": "2011-09-09 22:21:34"
    },
    {
        "idLevel": 412,
        "name": "MOBILIARIO INFANTIL",
        "idParentLevel": 5180,
        "lastUpdated": "2011-09-09 22:21:53"
    },
    {
        "idLevel": 413,
        "name": "DECORACION INFANTIL",
        "idParentLevel": 5180,
        "lastUpdated": "2011-09-09 22:22:21"
    },
    {
        "idLevel": 414,
        "name": "SEGURIDAD Y SALUD",
        "idParentLevel": 5180,
        "lastUpdated": "2011-09-09 22:22:40"
    },
    {
        "idLevel": 415,
        "name": "INTERFONO",
        "idParentLevel": 414,
        "lastUpdated": "2011-09-09 22:23:27"
    },
    {
        "idLevel": 416,
        "name": "BABY MONITOR",
        "idParentLevel": 414,
        "lastUpdated": "2011-09-09 22:23:55"
    },
    {
        "idLevel": 417,
        "name": "BARRERAS",
        "idParentLevel": 414,
        "lastUpdated": "2011-09-09 22:25:30"
    },
    {
        "idLevel": 418,
        "name": "PROTECTOR",
        "idParentLevel": 414,
        "lastUpdated": "2011-09-09 22:26:10"
    },
    {
        "idLevel": 419,
        "name": "HUMIDIFICADOR BEBE",
        "idParentLevel": 414,
        "lastUpdated": "2011-09-09 22:26:37"
    },
    {
        "idLevel": 420,
        "name": "BASCULA",
        "idParentLevel": 414,
        "lastUpdated": "2011-09-09 22:27:05"
    },
    {
        "idLevel": 421,
        "name": "OTROS SEGURIDAD Y SALUD",
        "idParentLevel": 414,
        "lastUpdated": "2011-09-09 22:27:37"
    },
    {
        "idLevel": 422,
        "name": "OTROS BEBE",
        "idParentLevel": 379,
        "lastUpdated": "2011-09-09 22:28:38"
    },
    {
        "idLevel": 423,
        "name": "ELECTRODOMESTICOS",
        "idParentLevel": 0,
        "lastUpdated": "2011-11-09 10:32:49"
    },
    {
        "idLevel": 424,
        "name": "AFEITADO Y DEPILADO",
        "idParentLevel": 5098,
        "lastUpdated": "2011-11-09 10:33:24"
    },
    {
        "idLevel": 425,
        "name": "AFEITADORA ELECTRICA",
        "idParentLevel": 424,
        "lastUpdated": "2011-11-09 10:36:54"
    },
    {
        "idLevel": 426,
        "name": "RECORTAPELOS NARIZ OREJAS",
        "idParentLevel": 424,
        "lastUpdated": "2011-11-09 10:37:18"
    },
    {
        "idLevel": 427,
        "name": "DEPILADORA ELECTRICA",
        "idParentLevel": 424,
        "lastUpdated": "2011-11-09 10:34:54"
    },
    {
        "idLevel": 428,
        "name": "DEPILADORA CERA",
        "idParentLevel": 424,
        "lastUpdated": "2011-11-09 10:35:13"
    },
    {
        "idLevel": 429,
        "name": "DEPILADORA ELECTROLISIS",
        "idParentLevel": 424,
        "lastUpdated": "2011-11-09 10:35:34"
    },
    {
        "idLevel": 430,
        "name": "DEPILADORA LASER",
        "idParentLevel": 424,
        "lastUpdated": "2011-11-09 10:35:52"
    },
    {
        "idLevel": 431,
        "name": "OTROS AFEITADO DEPILACION",
        "idParentLevel": 424,
        "lastUpdated": "2011-11-09 10:36:31"
    },
    {
        "idLevel": 432,
        "name": "BRONCEADO",
        "idParentLevel": 5098,
        "lastUpdated": "2011-11-09 10:37:46"
    },
    {
        "idLevel": 433,
        "name": "SOLARIUM FACIAL",
        "idParentLevel": 432,
        "lastUpdated": "2011-11-09 10:38:32"
    },
    {
        "idLevel": 434,
        "name": "SOLARIUM CUERPO ENTERO",
        "idParentLevel": 432,
        "lastUpdated": "2011-11-09 10:38:48"
    },
    {
        "idLevel": 435,
        "name": "CUIDADO BUCAL",
        "idParentLevel": 5098,
        "lastUpdated": "2011-11-09 10:39:13"
    },
    {
        "idLevel": 436,
        "name": "OTROS BRONCEADO",
        "idParentLevel": 432,
        "lastUpdated": "2011-11-09 10:39:57"
    },
    {
        "idLevel": 437,
        "name": "CEPILLO DIENTES ELECTRICO",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:42:05"
    },
    {
        "idLevel": 438,
        "name": "RECAMBIO CEPILLO DIENTES",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:42:43"
    },
    {
        "idLevel": 439,
        "name": "LIMPIADOR ULTRASONIDOS",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:43:07"
    },
    {
        "idLevel": 440,
        "name": "HIDROPULSOR",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:53:16"
    },
    {
        "idLevel": 441,
        "name": "IRRIGADOR BUCAL",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:43:43"
    },
    {
        "idLevel": 442,
        "name": "BLANQUEADOR DENTAL",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:44:06"
    },
    {
        "idLevel": 443,
        "name": "PURIFICADOR UV",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:44:34"
    },
    {
        "idLevel": 444,
        "name": "CUIDADO DEL CABELLO",
        "idParentLevel": 5098,
        "lastUpdated": "2011-11-09 10:45:26"
    },
    {
        "idLevel": 445,
        "name": "SECADOR PELO",
        "idParentLevel": 444,
        "lastUpdated": "2019-10-07 13:49:18"
    },
    {
        "idLevel": 446,
        "name": "SECADOR PELO VIAJE",
        "idParentLevel": 444,
        "lastUpdated": "2011-11-09 10:48:35"
    },
    {
        "idLevel": 447,
        "name": "SECADOR PELO DE PIE",
        "idParentLevel": 444,
        "lastUpdated": "2011-11-09 10:49:04"
    },
    {
        "idLevel": 448,
        "name": "CEPILLO MOLDEADOR DE AIRE",
        "idParentLevel": 444,
        "lastUpdated": "2011-11-09 10:49:46"
    },
    {
        "idLevel": 449,
        "name": "RIZADOR PELO",
        "idParentLevel": 444,
        "lastUpdated": "2011-11-09 10:50:10"
    },
    {
        "idLevel": 450,
        "name": "CORTADORA PELO",
        "idParentLevel": 444,
        "lastUpdated": "2011-11-09 10:50:31"
    },
    {
        "idLevel": 451,
        "name": "ALISADOR PELO",
        "idParentLevel": 444,
        "lastUpdated": "2011-02-10 20:25:10"
    },
    {
        "idLevel": 452,
        "name": "OTROS CUIDADO CABELLO",
        "idParentLevel": 444,
        "lastUpdated": "2011-11-09 10:51:44"
    },
    {
        "idLevel": 453,
        "name": "OTROS CUIDADO BUCAL",
        "idParentLevel": 435,
        "lastUpdated": "2011-11-09 10:52:18"
    },
    {
        "idLevel": 454,
        "name": "CUIDADO FACIAL",
        "idParentLevel": 5098,
        "lastUpdated": "2011-11-09 10:53:42"
    },
    {
        "idLevel": 455,
        "name": "SAUNA FACIAL",
        "idParentLevel": 454,
        "lastUpdated": "2011-11-09 10:55:45"
    },
    {
        "idLevel": 456,
        "name": "LIMPIADOR POROS",
        "idParentLevel": 454,
        "lastUpdated": "2011-11-09 10:56:08"
    },
    {
        "idLevel": 457,
        "name": "OTROS CUIDADO FACIAL",
        "idParentLevel": 454,
        "lastUpdated": "2011-11-09 10:56:32"
    },
    {
        "idLevel": 459,
        "name": "BASCULA BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 10:57:38"
    },
    {
        "idLevel": 460,
        "name": "ESPEJO BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 11:03:07"
    },
    {
        "idLevel": 461,
        "name": "OTROS DUCHA Y BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 11:03:37"
    },
    {
        "idLevel": 462,
        "name": "LUMINOTERAPIA",
        "idParentLevel": 5098,
        "lastUpdated": "2011-11-09 11:04:06"
    },
    {
        "idLevel": 463,
        "name": "LAMPARA INFRARROJOS",
        "idParentLevel": 462,
        "lastUpdated": "2011-11-09 11:04:46"
    },
    {
        "idLevel": 464,
        "name": "LAMPARA LUMINOTERAPIA",
        "idParentLevel": 462,
        "lastUpdated": "2011-11-09 11:05:07"
    },
    {
        "idLevel": 465,
        "name": "MASAJES",
        "idParentLevel": 5177,
        "lastUpdated": "2011-11-09 11:05:49"
    },
    {
        "idLevel": 466,
        "name": "APARATOS MASAJE",
        "idParentLevel": 5098,
        "lastUpdated": "2011-11-09 11:06:33"
    },
    {
        "idLevel": 467,
        "name": "MASAJEADOR PIES",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:07:18"
    },
    {
        "idLevel": 468,
        "name": "CINTURON MASAJE",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:07:40"
    },
    {
        "idLevel": 469,
        "name": "COJIN MASAJE",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:08:00"
    },
    {
        "idLevel": 470,
        "name": "MASAJEADOR INFRARROJOS",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:08:50"
    },
    {
        "idLevel": 471,
        "name": "MASAJEADOR VIBRATORIO",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:09:11"
    },
    {
        "idLevel": 472,
        "name": "MANTA ELECTRICA",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:09:34"
    },
    {
        "idLevel": 473,
        "name": "COLCHONETA HIDROMASAJE",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:09:53"
    },
    {
        "idLevel": 474,
        "name": "MASAJEADOR INTIMO",
        "idParentLevel": 466,
        "lastUpdated": "2011-11-09 11:10:15"
    },
    {
        "idLevel": 475,
        "name": "CAMILLA  MASAJE",
        "idParentLevel": 465,
        "lastUpdated": "2011-11-09 11:10:59"
    },
    {
        "idLevel": 476,
        "name": "SILLA MASAJE",
        "idParentLevel": 465,
        "lastUpdated": "2011-11-09 11:11:13"
    },
    {
        "idLevel": 477,
        "name": "SILLON MASAJES",
        "idParentLevel": 465,
        "lastUpdated": "2011-11-09 11:11:27"
    },
    {
        "idLevel": 478,
        "name": "OTROS MASAJES",
        "idParentLevel": 465,
        "lastUpdated": "2011-11-09 11:11:47"
    },
    {
        "idLevel": 479,
        "name": "MANICURA Y PEDICURA",
        "idParentLevel": 5177,
        "lastUpdated": "2011-11-09 11:12:36"
    },
    {
        "idLevel": 480,
        "name": "SET MANICURA PEDICURA",
        "idParentLevel": 479,
        "lastUpdated": "2011-11-09 11:13:15"
    },
    {
        "idLevel": 481,
        "name": "SECADORES MANICURA",
        "idParentLevel": 479,
        "lastUpdated": "2011-11-09 11:13:40"
    },
    {
        "idLevel": 482,
        "name": "OTROS MANICURA PEDICURA",
        "idParentLevel": 479,
        "lastUpdated": "2011-11-09 11:14:22"
    },
    {
        "idLevel": 483,
        "name": "ORTOPEDIA",
        "idParentLevel": 5177,
        "lastUpdated": "2011-11-09 11:14:52"
    },
    {
        "idLevel": 484,
        "name": "ANDADOR",
        "idParentLevel": 483,
        "lastUpdated": "2011-11-09 11:15:26"
    },
    {
        "idLevel": 485,
        "name": "MULETAS",
        "idParentLevel": 483,
        "lastUpdated": "2011-11-09 11:15:56"
    },
    {
        "idLevel": 486,
        "name": "SILLA DE RUEDAS",
        "idParentLevel": 483,
        "lastUpdated": "2011-11-09 11:28:54"
    },
    {
        "idLevel": 487,
        "name": "OTROS ORTOPEDIA",
        "idParentLevel": 483,
        "lastUpdated": "2011-11-09 11:32:27"
    },
    {
        "idLevel": 488,
        "name": "APARATOS SALUD",
        "idParentLevel": 5177,
        "lastUpdated": "2011-11-09 11:32:56"
    },
    {
        "idLevel": 489,
        "name": "ANALIZADOR GRASA CORPORAL",
        "idParentLevel": 488,
        "lastUpdated": "2011-11-09 11:33:45"
    },
    {
        "idLevel": 490,
        "name": "AUDIFONO",
        "idParentLevel": 488,
        "lastUpdated": "2011-11-09 11:34:01"
    },
    {
        "idLevel": 491,
        "name": "INHALADOR",
        "idParentLevel": 488,
        "lastUpdated": "2011-11-09 11:34:13"
    },
    {
        "idLevel": 492,
        "name": "NEBULIZADOR",
        "idParentLevel": 488,
        "lastUpdated": "2011-11-09 11:34:27"
    },
    {
        "idLevel": 493,
        "name": "TENSIOMETRO",
        "idParentLevel": 488,
        "lastUpdated": "2011-11-09 11:34:56"
    },
    {
        "idLevel": 494,
        "name": "TERMOMETRO",
        "idParentLevel": 488,
        "lastUpdated": "2011-11-09 11:35:26"
    },
    {
        "idLevel": 495,
        "name": "OTROS SALUD",
        "idParentLevel": 488,
        "lastUpdated": "2011-11-09 11:39:01"
    },
    {
        "idLevel": 496,
        "name": "PERFUME",
        "idParentLevel": 5179,
        "lastUpdated": "2011-11-09 11:42:48"
    },
    {
        "idLevel": 498,
        "name": "HOGAR Y COMPLEMENTOS",
        "idParentLevel": 0,
        "lastUpdated": "2011-11-09 11:45:58"
    },
    {
        "idLevel": 499,
        "name": "ARTICULOS ANIMALES",
        "idParentLevel": 498,
        "lastUpdated": "2011-11-09 11:46:30"
    },
    {
        "idLevel": 500,
        "name": "GATOS",
        "idParentLevel": 499,
        "lastUpdated": "2011-11-09 11:47:03"
    },
    {
        "idLevel": 501,
        "name": "TRANSPORTIN DE GATOS",
        "idParentLevel": 500,
        "lastUpdated": "2011-11-09 11:48:28"
    },
    {
        "idLevel": 502,
        "name": "COMEDERO BEBEDERO DE GATOS",
        "idParentLevel": 500,
        "lastUpdated": "2011-11-09 11:48:50"
    },
    {
        "idLevel": 503,
        "name": "COLLAR DE GATOS",
        "idParentLevel": 500,
        "lastUpdated": "2011-11-09 11:49:05"
    },
    {
        "idLevel": 504,
        "name": "RASCADOR DE GATOS",
        "idParentLevel": 500,
        "lastUpdated": "2011-11-09 11:49:22"
    },
    {
        "idLevel": 505,
        "name": "JUGUETE DE GATOS",
        "idParentLevel": 500,
        "lastUpdated": "2011-11-09 11:49:39"
    },
    {
        "idLevel": 506,
        "name": "HAMSTERS",
        "idParentLevel": 499,
        "lastUpdated": "2011-11-09 11:50:29"
    },
    {
        "idLevel": 507,
        "name": "JAULA HAMSTERS",
        "idParentLevel": 506,
        "lastUpdated": "2011-11-09 11:50:49"
    },
    {
        "idLevel": 508,
        "name": "PAJAROS",
        "idParentLevel": 499,
        "lastUpdated": "2011-11-09 11:53:26"
    },
    {
        "idLevel": 509,
        "name": "JAULA DE PAJAROS",
        "idParentLevel": 508,
        "lastUpdated": "2011-11-09 11:54:10"
    },
    {
        "idLevel": 510,
        "name": "SOPORTE JAULA DE PAJAROS",
        "idParentLevel": 508,
        "lastUpdated": "2011-11-09 11:54:38"
    },
    {
        "idLevel": 511,
        "name": "COMEDERO DE PAJAROS",
        "idParentLevel": 508,
        "lastUpdated": "2011-11-09 11:54:55"
    },
    {
        "idLevel": 512,
        "name": "BEBEDERO DE PAJAROS",
        "idParentLevel": 508,
        "lastUpdated": "2011-11-09 11:55:21"
    },
    {
        "idLevel": 513,
        "name": "INCUBADORA",
        "idParentLevel": 508,
        "lastUpdated": "2011-11-09 11:55:42"
    },
    {
        "idLevel": 514,
        "name": "CAJA NIDO DE PAJAROS",
        "idParentLevel": 508,
        "lastUpdated": "2011-11-09 11:56:01"
    },
    {
        "idLevel": 515,
        "name": "PECES Y ACUARIOS",
        "idParentLevel": 499,
        "lastUpdated": "2011-11-09 11:56:40"
    },
    {
        "idLevel": 516,
        "name": "ACUARIO",
        "idParentLevel": 515,
        "lastUpdated": "2011-11-09 11:57:58"
    },
    {
        "idLevel": 517,
        "name": "SISTEMA DE FILTRACION",
        "idParentLevel": 515,
        "lastUpdated": "2011-11-09 11:58:51"
    },
    {
        "idLevel": 518,
        "name": "DECORACION ACUARIOS",
        "idParentLevel": 515,
        "lastUpdated": "2011-11-09 11:59:14"
    },
    {
        "idLevel": 519,
        "name": "ILUMINACION ACUARIO",
        "idParentLevel": 515,
        "lastUpdated": "2011-11-09 11:59:42"
    },
    {
        "idLevel": 520,
        "name": "SISTEMA CALEFACCION",
        "idParentLevel": 515,
        "lastUpdated": "2011-11-09 12:01:12"
    },
    {
        "idLevel": 521,
        "name": "MEDIDOR REGULADOR",
        "idParentLevel": 515,
        "lastUpdated": "2011-11-09 12:01:42"
    },
    {
        "idLevel": 522,
        "name": "BASE ACUARIO",
        "idParentLevel": 515,
        "lastUpdated": "2011-11-09 12:01:59"
    },
    {
        "idLevel": 523,
        "name": "PERROS",
        "idParentLevel": 499,
        "lastUpdated": "2011-11-09 12:02:28"
    },
    {
        "idLevel": 524,
        "name": "TRANSPORTIN DE PERROS",
        "idParentLevel": 523,
        "lastUpdated": "2011-11-09 12:03:50"
    },
    {
        "idLevel": 525,
        "name": "COMEDERO BEBEDERO DE PERROS",
        "idParentLevel": 523,
        "lastUpdated": "2011-11-09 12:04:07"
    },
    {
        "idLevel": 526,
        "name": "CORREA",
        "idParentLevel": 523,
        "lastUpdated": "2011-11-09 12:04:28"
    },
    {
        "idLevel": 527,
        "name": "ARNES",
        "idParentLevel": 523,
        "lastUpdated": "2011-11-09 12:04:47"
    },
    {
        "idLevel": 528,
        "name": "COLLAR DE PERROS",
        "idParentLevel": 523,
        "lastUpdated": "2011-11-09 12:05:23"
    },
    {
        "idLevel": 529,
        "name": "JUGUETE DE PERROS",
        "idParentLevel": 523,
        "lastUpdated": "2011-11-09 12:05:40"
    },
    {
        "idLevel": 530,
        "name": "REPTILES",
        "idParentLevel": 499,
        "lastUpdated": "2011-11-09 12:06:13"
    },
    {
        "idLevel": 531,
        "name": "TERRARIO",
        "idParentLevel": 530,
        "lastUpdated": "2011-11-09 12:07:26"
    },
    {
        "idLevel": 532,
        "name": "SISTEMA CALEFACCION",
        "idParentLevel": 530,
        "lastUpdated": "2011-11-09 12:07:56"
    },
    {
        "idLevel": 533,
        "name": "OTROS ARTICULOS ANIMALES",
        "idParentLevel": 499,
        "lastUpdated": "2011-11-09 12:08:51"
    },
    {
        "idLevel": 534,
        "name": "AUTOMATIZACION HOGAR",
        "idParentLevel": 498,
        "lastUpdated": "2011-11-09 12:10:01"
    },
    {
        "idLevel": 535,
        "name": "PORTERO AUTOMATICO",
        "idParentLevel": 534,
        "lastUpdated": "2011-11-09 12:53:01"
    },
    {
        "idLevel": 536,
        "name": "SENSOR MOVIMIENTO",
        "idParentLevel": 534,
        "lastUpdated": "2011-11-09 12:53:51"
    },
    {
        "idLevel": 537,
        "name": "MANDO A DISTANCIA",
        "idParentLevel": 534,
        "lastUpdated": "2011-11-09 12:54:40"
    },
    {
        "idLevel": 538,
        "name": "TERMOSTATO ELECTRONICO",
        "idParentLevel": 534,
        "lastUpdated": "2011-11-09 12:55:01"
    },
    {
        "idLevel": 539,
        "name": "PROTECTOR DE SOBRECARGA",
        "idParentLevel": 534,
        "lastUpdated": "2011-11-09 12:55:34"
    },
    {
        "idLevel": 540,
        "name": "TEMPORIZADOR",
        "idParentLevel": 534,
        "lastUpdated": "2011-11-09 12:57:05"
    },
    {
        "idLevel": 541,
        "name": "OTRO AUTOMATIZACION HOGAR",
        "idParentLevel": 534,
        "lastUpdated": "2011-11-09 12:58:41"
    },
    {
        "idLevel": 542,
        "name": "BAÑO",
        "idParentLevel": 498,
        "lastUpdated": "2011-11-09 12:59:04"
    },
    {
        "idLevel": 543,
        "name": "TELEDUCHA",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:02:03"
    },
    {
        "idLevel": 544,
        "name": "COLUMNA HIDROMASAJE",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:02:26"
    },
    {
        "idLevel": 545,
        "name": "EXTRACTOR BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:02:46"
    },
    {
        "idLevel": 546,
        "name": "GRIFO BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:03:07"
    },
    {
        "idLevel": 547,
        "name": "MAMPARA",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:03:20"
    },
    {
        "idLevel": 548,
        "name": "MUEBLE BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:03:42"
    },
    {
        "idLevel": 549,
        "name": "TOALLERO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:03:57"
    },
    {
        "idLevel": 550,
        "name": "JABONERO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:04:12"
    },
    {
        "idLevel": 551,
        "name": "ACCESORIO PARA EL BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:04:34"
    },
    {
        "idLevel": 552,
        "name": "OTROS BAÑO",
        "idParentLevel": 542,
        "lastUpdated": "2011-11-09 13:04:52"
    },
    {
        "idLevel": 553,
        "name": "CLIMATIZACION",
        "idParentLevel": 423,
        "lastUpdated": "2011-11-09 13:15:20"
    },
    {
        "idLevel": 554,
        "name": "AIRE ACONDICIONADO",
        "idParentLevel": 5100,
        "lastUpdated": "2011-11-09 13:16:26"
    },
    {
        "idLevel": 555,
        "name": "CLIMATIZADOR EVAPORATIVO",
        "idParentLevel": 5100,
        "lastUpdated": "2011-11-09 13:17:19"
    },
    {
        "idLevel": 556,
        "name": "FILTRO AIRE",
        "idParentLevel": 5099,
        "lastUpdated": "2011-11-09 13:17:36"
    },
    {
        "idLevel": 557,
        "name": "CALEFACTOR DE TERRAZA",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:17:54"
    },
    {
        "idLevel": 558,
        "name": "CALENTADOR AGUA",
        "idParentLevel": 5099,
        "lastUpdated": "2011-11-09 13:18:24"
    },
    {
        "idLevel": 559,
        "name": "CHIMENEA ELECTRICA",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:18:51"
    },
    {
        "idLevel": 560,
        "name": "ESTUFA DE LEÑA",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:19:12"
    },
    {
        "idLevel": 561,
        "name": "DESHUMIDIFICADOR",
        "idParentLevel": 5099,
        "lastUpdated": "2011-11-09 13:19:36"
    },
    {
        "idLevel": 562,
        "name": "HUMIDIFICADOR",
        "idParentLevel": 5099,
        "lastUpdated": "2010-05-11 11:55:09"
    },
    {
        "idLevel": 563,
        "name": "RADIADOR ACEITE",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:21:41"
    },
    {
        "idLevel": 564,
        "name": "RADIADOR ELECTRICO",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:23:18"
    },
    {
        "idLevel": 565,
        "name": "RADIADOR HALOGENO",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:23:53"
    },
    {
        "idLevel": 566,
        "name": "RADIADOR CONVECTOR",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:24:18"
    },
    {
        "idLevel": 567,
        "name": "VENTILADOR",
        "idParentLevel": 5100,
        "lastUpdated": "2011-11-09 13:24:35"
    },
    {
        "idLevel": 568,
        "name": "SECATOALLAS",
        "idParentLevel": 5099,
        "lastUpdated": "2011-11-09 13:24:57"
    },
    {
        "idLevel": 569,
        "name": "TERMOVENTILADOR",
        "idParentLevel": 5101,
        "lastUpdated": "2011-11-09 13:25:19"
    },
    {
        "idLevel": 570,
        "name": "OTROS OTROS CLIMATIZACION",
        "idParentLevel": 5099,
        "lastUpdated": "2011-11-09 13:25:58"
    },
    {
        "idLevel": 571,
        "name": "HOGAR COCINA",
        "idParentLevel": 498,
        "lastUpdated": "2011-11-09 13:27:31"
    },
    {
        "idLevel": 572,
        "name": "CUBERTERIA",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:29:45"
    },
    {
        "idLevel": 573,
        "name": "CUCHILLERIA",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:30:30"
    },
    {
        "idLevel": 574,
        "name": "CUCHILLO COCINA",
        "idParentLevel": 573,
        "lastUpdated": "2011-11-09 13:31:02"
    },
    {
        "idLevel": 575,
        "name": "AFILADOR",
        "idParentLevel": 573,
        "lastUpdated": "2011-11-09 13:31:16"
    },
    {
        "idLevel": 576,
        "name": "SET CUCHILLOS COCINA",
        "idParentLevel": 573,
        "lastUpdated": "2011-11-09 13:31:57"
    },
    {
        "idLevel": 577,
        "name": "ENVASES Y HERMETICOS",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:32:26"
    },
    {
        "idLevel": 578,
        "name": "FRASCO",
        "idParentLevel": 577,
        "lastUpdated": "2011-11-09 13:32:56"
    },
    {
        "idLevel": 579,
        "name": "CONTENEDOR DE PLASTICO",
        "idParentLevel": 577,
        "lastUpdated": "2011-11-09 13:33:19"
    },
    {
        "idLevel": 580,
        "name": "ESTANTE",
        "idParentLevel": 577,
        "lastUpdated": "2011-11-09 13:33:35"
    },
    {
        "idLevel": 581,
        "name": "CRISTALERIA",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:34:48"
    },
    {
        "idLevel": 582,
        "name": "FILTROS Y PURIFICADORES",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:35:10"
    },
    {
        "idLevel": 583,
        "name": "FILTRO OSMOSIS",
        "idParentLevel": 582,
        "lastUpdated": "2011-11-09 13:36:14"
    },
    {
        "idLevel": 584,
        "name": "OTROS FILTRO COCINA",
        "idParentLevel": 582,
        "lastUpdated": "2011-11-09 13:36:37"
    },
    {
        "idLevel": 585,
        "name": "GRIFO COCINA",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:37:30"
    },
    {
        "idLevel": 586,
        "name": "SARTENES Y CAZUELAS",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:39:49"
    },
    {
        "idLevel": 587,
        "name": "SARTEN",
        "idParentLevel": 586,
        "lastUpdated": "2011-11-09 13:40:21"
    },
    {
        "idLevel": 588,
        "name": "OLLA",
        "idParentLevel": 586,
        "lastUpdated": "2011-11-09 13:40:43"
    },
    {
        "idLevel": 589,
        "name": "OLLA A PRESION",
        "idParentLevel": 586,
        "lastUpdated": "2011-11-09 13:43:39"
    },
    {
        "idLevel": 590,
        "name": "BATERIA COCINA",
        "idParentLevel": 586,
        "lastUpdated": "2011-11-09 13:44:16"
    },
    {
        "idLevel": 591,
        "name": "WOK",
        "idParentLevel": 586,
        "lastUpdated": "2011-11-09 13:44:32"
    },
    {
        "idLevel": 592,
        "name": "UTENSILIO COCINA",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:45:23"
    },
    {
        "idLevel": 593,
        "name": "VAJILLA",
        "idParentLevel": 571,
        "lastUpdated": "2011-11-09 13:47:15"
    }
]

export default arbolCategorias;