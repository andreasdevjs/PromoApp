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
        "idLevel": 892,
        "name": "SIERRA MINIATURA",
        "idParentLevel": 862,
        "lastUpdated": "2011-11-09 18:50:34"
    },
    {
        "idLevel": 893,
        "name": "ACCESORIOS",
        "idParentLevel": 886,
        "lastUpdated": "2011-11-09 18:50:58"
    },
    {
        "idLevel": 894,
        "name": "OTRAS",
        "idParentLevel": 849,
        "lastUpdated": "2011-06-10 20:53:02"
    },
    {
        "idLevel": 895,
        "name": "HERRAMIENTA ESPECIALIZADA",
        "idParentLevel": 786,
        "lastUpdated": "2011-11-09 18:52:26"
    },
    {
        "idLevel": 896,
        "name": "HERRAMIENTA FONTANERIA",
        "idParentLevel": 895,
        "lastUpdated": "2011-11-09 18:52:52"
    },
    {
        "idLevel": 897,
        "name": "SOPLETE",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:53:17"
    },
    {
        "idLevel": 898,
        "name": "CURVATUBOS",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:53:31"
    },
    {
        "idLevel": 899,
        "name": "MORDAZA DE CADENA",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:53:42"
    },
    {
        "idLevel": 900,
        "name": "ABOCARDADORA",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:53:54"
    },
    {
        "idLevel": 901,
        "name": "LLAVE LAVABO",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:54:10"
    },
    {
        "idLevel": 902,
        "name": "LLAVE CORREA",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:54:25"
    },
    {
        "idLevel": 903,
        "name": "DESATASCADOR",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:54:40"
    },
    {
        "idLevel": 904,
        "name": "BOMBA DE VACIO",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:54:56"
    },
    {
        "idLevel": 905,
        "name": "OTRAS FONTANERIA",
        "idParentLevel": 896,
        "lastUpdated": "2011-11-09 18:55:27"
    },
    {
        "idLevel": 906,
        "name": "HERRAMIENTA ALBA\u00d1ILERIA",
        "idParentLevel": 895,
        "lastUpdated": "2011-11-09 18:56:01"
    },
    {
        "idLevel": 907,
        "name": "PLOMADA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:56:28"
    },
    {
        "idLevel": 908,
        "name": "PALA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:56:46"
    },
    {
        "idLevel": 909,
        "name": "PICO",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:56:59"
    },
    {
        "idLevel": 910,
        "name": "PALETA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:57:17"
    },
    {
        "idLevel": 911,
        "name": "CARRETILLA DE MANO",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:57:37"
    },
    {
        "idLevel": 912,
        "name": "PALETIN",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:57:51"
    },
    {
        "idLevel": 913,
        "name": "LLANA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:58:04"
    },
    {
        "idLevel": 914,
        "name": "PEINE CEMENTO COLA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:58:22"
    },
    {
        "idLevel": 915,
        "name": "RASPADOR",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:58:38"
    },
    {
        "idLevel": 917,
        "name": "RAEDERA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:59:08"
    },
    {
        "idLevel": 918,
        "name": "FIJA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:59:21"
    },
    {
        "idLevel": 920,
        "name": "MAQUINA DE GOTELE O TIROLESA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 18:59:52"
    },
    {
        "idLevel": 921,
        "name": "REGLA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 19:00:07"
    },
    {
        "idLevel": 922,
        "name": "CUBO",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 19:00:21"
    },
    {
        "idLevel": 923,
        "name": "TAMIZ",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 19:00:36"
    },
    {
        "idLevel": 924,
        "name": "CORTADORA AZULEJOS",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 19:01:01"
    },
    {
        "idLevel": 925,
        "name": "OTRAS ALBA\u00d1ILERIA",
        "idParentLevel": 906,
        "lastUpdated": "2011-11-09 19:01:32"
    },
    {
        "idLevel": 926,
        "name": "HERRAMIENTA CRISTALERIA",
        "idParentLevel": 895,
        "lastUpdated": "2011-11-09 19:02:10"
    },
    {
        "idLevel": 927,
        "name": "CORTA VIDRIOS",
        "idParentLevel": 926,
        "lastUpdated": "2011-11-09 19:02:55"
    },
    {
        "idLevel": 928,
        "name": "CORREAS CRISTALERO",
        "idParentLevel": 926,
        "lastUpdated": "2011-11-09 19:03:08"
    },
    {
        "idLevel": 929,
        "name": "GUANTES CRISTALERO",
        "idParentLevel": 926,
        "lastUpdated": "2011-11-09 19:03:30"
    },
    {
        "idLevel": 930,
        "name": "VENTOSAS",
        "idParentLevel": 926,
        "lastUpdated": "2011-11-09 19:03:49"
    },
    {
        "idLevel": 931,
        "name": "DISCO ABRASIVO",
        "idParentLevel": 926,
        "lastUpdated": "2011-11-09 19:04:07"
    },
    {
        "idLevel": 932,
        "name": "CORTA CIRCULOS",
        "idParentLevel": 926,
        "lastUpdated": "2011-11-09 19:04:24"
    },
    {
        "idLevel": 933,
        "name": "OTRAS CRISTALERIA",
        "idParentLevel": 926,
        "lastUpdated": "2011-11-09 19:04:44"
    },
    {
        "idLevel": 934,
        "name": "HERRAMIENTA DE PINTURA",
        "idParentLevel": 895,
        "lastUpdated": "2011-11-09 19:05:34"
    },
    {
        "idLevel": 935,
        "name": "PINCEL",
        "idParentLevel": 934,
        "lastUpdated": "2011-11-09 19:07:07"
    },
    {
        "idLevel": 936,
        "name": "BROCHA",
        "idParentLevel": 934,
        "lastUpdated": "2011-11-09 19:06:53"
    },
    {
        "idLevel": 937,
        "name": "RODILLO",
        "idParentLevel": 934,
        "lastUpdated": "2011-11-09 19:07:41"
    },
    {
        "idLevel": 938,
        "name": "BANDEJA RODILLO",
        "idParentLevel": 934,
        "lastUpdated": "2011-11-09 19:07:58"
    },
    {
        "idLevel": 939,
        "name": "TUBO EXTENSION",
        "idParentLevel": 934,
        "lastUpdated": "2011-11-09 19:08:19"
    },
    {
        "idLevel": 940,
        "name": "PISTOLA DE PINTAR",
        "idParentLevel": 934,
        "lastUpdated": "2011-11-09 19:08:42"
    },
    {
        "idLevel": 941,
        "name": "OTRAS PINTURA",
        "idParentLevel": 934,
        "lastUpdated": "2011-11-09 19:09:01"
    },
    {
        "idLevel": 942,
        "name": "HERRAMIENTA DE JARDINERIA",
        "idParentLevel": 895,
        "lastUpdated": "2011-11-09 19:09:29"
    },
    {
        "idLevel": 943,
        "name": "CORTACESPED",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:10:59"
    },
    {
        "idLevel": 944,
        "name": "CORTABORDES",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:11:25"
    },
    {
        "idLevel": 945,
        "name": "CORTASETOS",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:11:43"
    },
    {
        "idLevel": 946,
        "name": "LIMPIADORA ALTA PRESION",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:12:54"
    },
    {
        "idLevel": 947,
        "name": "ESCARIFICADOR",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:13:49"
    },
    {
        "idLevel": 948,
        "name": "MOTOAZADA",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:14:05"
    },
    {
        "idLevel": 949,
        "name": "MOTOSIERRA",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:14:33"
    },
    {
        "idLevel": 950,
        "name": "DESBROZADORA",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:16:20"
    },
    {
        "idLevel": 951,
        "name": "SOPLADOR",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:17:01"
    },
    {
        "idLevel": 952,
        "name": "BIOTRITURADOR",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:19:30"
    },
    {
        "idLevel": 953,
        "name": "OTROS JARDINERIA",
        "idParentLevel": 942,
        "lastUpdated": "2011-11-09 19:19:48"
    },
    {
        "idLevel": 954,
        "name": "CONSUMIBLE",
        "idParentLevel": 786,
        "lastUpdated": "2011-11-09 19:20:56"
    },
    {
        "idLevel": 955,
        "name": "BROCAS",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:24:38"
    },
    {
        "idLevel": 956,
        "name": "HOJAS SIERRA",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:25:49"
    },
    {
        "idLevel": 957,
        "name": "MUELAS",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:26:02"
    },
    {
        "idLevel": 958,
        "name": "LIMAS",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:26:36"
    },
    {
        "idLevel": 959,
        "name": "LIJAS",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:27:24"
    },
    {
        "idLevel": 960,
        "name": "ACEITE LUBRICANTE",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:27:43"
    },
    {
        "idLevel": 961,
        "name": "CEPILLOS",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:28:01"
    },
    {
        "idLevel": 962,
        "name": "ENSAMBLAJE",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:28:19"
    },
    {
        "idLevel": 963,
        "name": "OTROS CONSUMIBLES",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:29:59"
    },
    {
        "idLevel": 964,
        "name": "DISCOS",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:31:08"
    },
    {
        "idLevel": 965,
        "name": "MANDRILES",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:31:28"
    },
    {
        "idLevel": 966,
        "name": "CORONA",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:31:43"
    },
    {
        "idLevel": 967,
        "name": "FRESA",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:31:57"
    },
    {
        "idLevel": 968,
        "name": "BATERIA",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:32:28"
    },
    {
        "idLevel": 969,
        "name": "CARGADOR",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:32:44"
    },
    {
        "idLevel": 970,
        "name": "SILICONA",
        "idParentLevel": 954,
        "lastUpdated": "2011-11-09 19:32:58"
    },
    {
        "idLevel": 971,
        "name": "EQUIPAMIENTO TALLER",
        "idParentLevel": 786,
        "lastUpdated": "2011-11-09 19:33:34"
    },
    {
        "idLevel": 972,
        "name": "YUNQUE",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:34:01"
    },
    {
        "idLevel": 973,
        "name": "BANCO DE TRABAJO",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:34:13"
    },
    {
        "idLevel": 974,
        "name": "MOBILIARIO TALLER",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:34:32"
    },
    {
        "idLevel": 975,
        "name": "ACCESORIOS TALLER",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:34:56"
    },
    {
        "idLevel": 976,
        "name": "TALADRO COLUMNA",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:35:27"
    },
    {
        "idLevel": 977,
        "name": "ASPIRADOR TALLER",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:35:51"
    },
    {
        "idLevel": 978,
        "name": "COMPRESOR",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:36:06"
    },
    {
        "idLevel": 980,
        "name": "ANDAMIO",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:36:39"
    },
    {
        "idLevel": 981,
        "name": "ESCALERA",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:36:58"
    },
    {
        "idLevel": 982,
        "name": "TABURETE",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:37:13"
    },
    {
        "idLevel": 983,
        "name": "GENERADOR ELECTRICIDAD",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:37:38"
    },
    {
        "idLevel": 984,
        "name": "POLIPASTO",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:38:04"
    },
    {
        "idLevel": 985,
        "name": "CABESTRANTE",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:38:24"
    },
    {
        "idLevel": 986,
        "name": "SOLDADURA",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:38:39"
    },
    {
        "idLevel": 987,
        "name": "EQUIPO SOLDADURA",
        "idParentLevel": 986,
        "lastUpdated": "2011-11-09 19:39:16"
    },
    {
        "idLevel": 988,
        "name": "SOLDADOR",
        "idParentLevel": 986,
        "lastUpdated": "2011-11-09 19:39:33"
    },
    {
        "idLevel": 989,
        "name": "DESOLDADOR",
        "idParentLevel": 986,
        "lastUpdated": "2011-11-09 19:39:56"
    },
    {
        "idLevel": 990,
        "name": "ACCESORIO SOLDADURA",
        "idParentLevel": 986,
        "lastUpdated": "2011-11-09 19:40:18"
    },
    {
        "idLevel": 991,
        "name": "PISTOLA SILICONA",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:41:00"
    },
    {
        "idLevel": 992,
        "name": "CAJA HERRAMIENTAS",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:41:24"
    },
    {
        "idLevel": 993,
        "name": "OTROS EQUIPAMIENTO",
        "idParentLevel": 971,
        "lastUpdated": "2011-11-09 19:41:45"
    },
    {
        "idLevel": 994,
        "name": "EQUIPO PROTECCION",
        "idParentLevel": 786,
        "lastUpdated": "2011-11-09 19:42:14"
    },
    {
        "idLevel": 995,
        "name": "ARNES SEGURIDAD",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:43:18"
    },
    {
        "idLevel": 996,
        "name": "TAPONES OIDO",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:43:39"
    },
    {
        "idLevel": 997,
        "name": "CASCO PROTECCION RUIDO",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:43:57"
    },
    {
        "idLevel": 998,
        "name": "CASCO OBRA",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:44:11"
    },
    {
        "idLevel": 999,
        "name": "CALZADO SEGURIDAD",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:44:33"
    },
    {
        "idLevel": 1000,
        "name": "GUANTE TRABAJO",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:44:59"
    },
    {
        "idLevel": 1001,
        "name": "GAFAS PROTECCION",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:45:19"
    },
    {
        "idLevel": 1002,
        "name": "MASCARA DE PROTECCION",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:45:40"
    },
    {
        "idLevel": 1003,
        "name": "ROPA TRABAJO",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:46:16"
    },
    {
        "idLevel": 1004,
        "name": "OTROS PROTECCION",
        "idParentLevel": 994,
        "lastUpdated": "2011-11-09 19:46:53"
    },
    {
        "idLevel": 1005,
        "name": "ELECTRICIDAD",
        "idParentLevel": 786,
        "lastUpdated": "2011-11-09 19:47:32"
    },
    {
        "idLevel": 1006,
        "name": "CUADRO ELECTRICO",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:48:28"
    },
    {
        "idLevel": 1007,
        "name": "FUSIBLE",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:48:43"
    },
    {
        "idLevel": 1008,
        "name": "TRANSFORMADOR",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:49:15"
    },
    {
        "idLevel": 1009,
        "name": "CONVERTIDOR",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:49:35"
    },
    {
        "idLevel": 1010,
        "name": "PROLONGADOR",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:49:55"
    },
    {
        "idLevel": 1011,
        "name": "ENROLLACABLES",
        "idParentLevel": 5158,
        "lastUpdated": "2011-11-09 19:50:21"
    },
    {
        "idLevel": 1012,
        "name": "BASE MULTIPLE",
        "idParentLevel": 5158,
        "lastUpdated": "2011-11-09 19:51:00"
    },
    {
        "idLevel": 1013,
        "name": "MECANISMO ELECTRICO",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:51:22"
    },
    {
        "idLevel": 1015,
        "name": "CABLE INTERIOR",
        "idParentLevel": 5158,
        "lastUpdated": "2011-11-09 19:52:57"
    },
    {
        "idLevel": 1016,
        "name": "CABLE EXTERIOR",
        "idParentLevel": 5158,
        "lastUpdated": "2011-11-09 19:53:34"
    },
    {
        "idLevel": 1018,
        "name": "CABLE ANTENA",
        "idParentLevel": 5155,
        "lastUpdated": "2011-11-09 19:56:16"
    },
    {
        "idLevel": 1019,
        "name": "CABLE TELEFONO",
        "idParentLevel": 5160,
        "lastUpdated": "2011-11-09 19:55:00"
    },
    {
        "idLevel": 1020,
        "name": "OTROS CABLES ELECTRICIDAD",
        "idParentLevel": 5158,
        "lastUpdated": "2011-11-09 19:55:52"
    },
    {
        "idLevel": 1021,
        "name": "MULTIPLICADOR",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:57:08"
    },
    {
        "idLevel": 1022,
        "name": "CASQUILLO",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:57:32"
    },
    {
        "idLevel": 1023,
        "name": "GUIA PASAHILOS",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:57:51"
    },
    {
        "idLevel": 1024,
        "name": "OTROS ELECTRICIDAD",
        "idParentLevel": 1005,
        "lastUpdated": "2011-11-09 19:58:07"
    },
    {
        "idLevel": 1025,
        "name": "HERRAMIENTA MASIVA",
        "idParentLevel": 786,
        "lastUpdated": "2011-11-09 19:58:46"
    },
    {
        "idLevel": 1026,
        "name": "CINE DVD PELICULAS",
        "idParentLevel": 0,
        "lastUpdated": "2011-11-09 19:59:25"
    },
    {
        "idLevel": 1027,
        "name": "PELICULA DVD",
        "idParentLevel": 1026,
        "lastUpdated": "2011-11-09 20:00:51"
    },
    {
        "idLevel": 1028,
        "name": "PELICULA VHS",
        "idParentLevel": 1026,
        "lastUpdated": "2011-11-09 20:01:06"
    },
    {
        "idLevel": 1029,
        "name": "PELICULA BLURAY",
        "idParentLevel": 1026,
        "lastUpdated": "2011-11-09 20:01:36"
    },
    {
        "idLevel": 1030,
        "name": "PELICULA SUPER 8",
        "idParentLevel": 1026,
        "lastUpdated": "2011-11-09 20:02:08"
    },
    {
        "idLevel": 1031,
        "name": "OTROS FORMATOS",
        "idParentLevel": 1026,
        "lastUpdated": "2011-11-09 20:02:33"
    },
    {
        "idLevel": 1033,
        "name": "AUTOMOVIL",
        "idParentLevel": 786,
        "lastUpdated": "2011-11-09 20:03:54"
    },
    {
        "idLevel": 1034,
        "name": "ACEITES",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:05:21"
    },
    {
        "idLevel": 1035,
        "name": "KIT ALARMA AUTOMOVIL",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:05:50"
    },
    {
        "idLevel": 1036,
        "name": "ALCOHOLIMETRO",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:06:05"
    },
    {
        "idLevel": 1037,
        "name": "ALFOMBRAS",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:06:21"
    },
    {
        "idLevel": 1038,
        "name": "ANTIRROBO",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:07:15"
    },
    {
        "idLevel": 1039,
        "name": "BACA",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:07:39"
    },
    {
        "idLevel": 1040,
        "name": "CADENA NIEVE",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:08:05"
    },
    {
        "idLevel": 1041,
        "name": "CONVERTIDOR",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:08:26"
    },
    {
        "idLevel": 1042,
        "name": "COMPRESOR PORTATIL",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:08:40"
    },
    {
        "idLevel": 1043,
        "name": "KIT MANOS LIBRES",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:09:02"
    },
    {
        "idLevel": 1044,
        "name": "ARTICULO LIMPIEZA",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:09:30"
    },
    {
        "idLevel": 1045,
        "name": "LLANTAS",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:09:53"
    },
    {
        "idLevel": 1046,
        "name": "SENSOR APARCAMIENTO",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:10:15"
    },
    {
        "idLevel": 1047,
        "name": "TRIANGULO EMERGENCIA",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:10:55"
    },
    {
        "idLevel": 1048,
        "name": "KIT HERRAMIENTAS",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:11:12"
    },
    {
        "idLevel": 1049,
        "name": "GATO",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:11:26"
    },
    {
        "idLevel": 1050,
        "name": "BOTIQUIN EMERGENCIA",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:11:47"
    },
    {
        "idLevel": 1051,
        "name": "EXTINTOR VEHICULO",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:12:15"
    },
    {
        "idLevel": 1052,
        "name": "ACCESORIO TUNNING",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:12:34"
    },
    {
        "idLevel": 1053,
        "name": "ACCESORIO TODOTERRENO",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:13:00"
    },
    {
        "idLevel": 1054,
        "name": "OTROS ACCESORIOS",
        "idParentLevel": 1033,
        "lastUpdated": "2011-11-09 20:13:19"
    },
    {
        "idLevel": 1055,
        "name": "CAR AUDIO",
        "idParentLevel": 1321,
        "lastUpdated": "2011-11-09 20:14:10"
    },
    {
        "idLevel": 1056,
        "name": "AUTORRADIO",
        "idParentLevel": 1055,
        "lastUpdated": "2012-03-10 18:17:31"
    },
    {
        "idLevel": 1057,
        "name": "AMPLIFICADOR",
        "idParentLevel": 1055,
        "lastUpdated": "2011-11-09 20:15:57"
    },
    {
        "idLevel": 1058,
        "name": "ALTAVOCES",
        "idParentLevel": 1055,
        "lastUpdated": "2011-11-09 20:16:37"
    },
    {
        "idLevel": 1059,
        "name": "SISTEMA VIDEO Y DVD",
        "idParentLevel": 1055,
        "lastUpdated": "2011-11-09 20:18:11"
    },
    {
        "idLevel": 1060,
        "name": "SUBWOOFERS",
        "idParentLevel": 1055,
        "lastUpdated": "2011-11-09 20:18:42"
    },
    {
        "idLevel": 1061,
        "name": "CAPACITADOR",
        "idParentLevel": 1055,
        "lastUpdated": "2011-11-09 20:19:08"
    },
    {
        "idLevel": 1062,
        "name": "GPS",
        "idParentLevel": 1408,
        "lastUpdated": "2011-11-09 20:19:33"
    },
    {
        "idLevel": 1063,
        "name": "SISTEMA NAVEGACION GPS",
        "idParentLevel": 1062,
        "lastUpdated": "2011-11-09 20:21:47"
    },
    {
        "idLevel": 1064,
        "name": "LOCALIZADOR GPS",
        "idParentLevel": 1062,
        "lastUpdated": "2011-11-09 20:23:28"
    },
    {
        "idLevel": 1065,
        "name": "ACCESORIO GPS",
        "idParentLevel": 1062,
        "lastUpdated": "2011-11-09 20:24:16"
    },
    {
        "idLevel": 1067,
        "name": "AVISADOR RADAR",
        "idParentLevel": 1062,
        "lastUpdated": "2011-11-09 20:25:24"
    },
    {
        "idLevel": 1068,
        "name": "MOTOCICLETA",
        "idParentLevel": 2,
        "lastUpdated": "2011-11-09 20:26:13"
    },
    {
        "idLevel": 1069,
        "name": "ACCESORIO MOTO",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:26:54"
    },
    {
        "idLevel": 1070,
        "name": "VESTIMENTA",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:27:06"
    },
    {
        "idLevel": 1071,
        "name": "CHAQUETA MOTORISTA",
        "idParentLevel": 1070,
        "lastUpdated": "2010-05-11 12:06:56"
    },
    {
        "idLevel": 1072,
        "name": "CAMISETA OFF ROAD",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:28:50"
    },
    {
        "idLevel": 1073,
        "name": "GORRA",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:29:05"
    },
    {
        "idLevel": 1074,
        "name": "GUANTES MOTORISTA",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:29:28"
    },
    {
        "idLevel": 1075,
        "name": "PANTALON MOTORISTA",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:30:01"
    },
    {
        "idLevel": 1076,
        "name": "BOTAS MOTORISTA",
        "idParentLevel": 1070,
        "lastUpdated": "2011-02-10 20:27:32"
    },
    {
        "idLevel": 1077,
        "name": "PROTECCION MOTORISTA",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:30:58"
    },
    {
        "idLevel": 1078,
        "name": "ROPTA TERMICA",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:31:22"
    },
    {
        "idLevel": 1079,
        "name": "TRAJE MONO",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:32:12"
    },
    {
        "idLevel": 1080,
        "name": "IMPERMEABLE",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:32:48"
    },
    {
        "idLevel": 1081,
        "name": "OTROS",
        "idParentLevel": 1070,
        "lastUpdated": "2011-11-09 20:33:32"
    },
    {
        "idLevel": 1082,
        "name": "CASCO",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:34:04"
    },
    {
        "idLevel": 1083,
        "name": "CASCO ABATIBLE",
        "idParentLevel": 1082,
        "lastUpdated": "2011-11-09 20:34:39"
    },
    {
        "idLevel": 1084,
        "name": "CASCO CONVERTIBLE",
        "idParentLevel": 1082,
        "lastUpdated": "2011-11-09 20:34:56"
    },
    {
        "idLevel": 1085,
        "name": "CASCO INTEGRAL",
        "idParentLevel": 1082,
        "lastUpdated": "2011-11-09 20:35:11"
    },
    {
        "idLevel": 1086,
        "name": "CASCO JET",
        "idParentLevel": 1082,
        "lastUpdated": "2011-11-09 20:35:28"
    },
    {
        "idLevel": 1087,
        "name": "RECAMBIO CASCOS",
        "idParentLevel": 1082,
        "lastUpdated": "2011-11-09 20:35:45"
    },
    {
        "idLevel": 1088,
        "name": "GAFAS MOTORISTA",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:36:19"
    },
    {
        "idLevel": 1089,
        "name": "EQUIPAJE",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:36:38"
    },
    {
        "idLevel": 1090,
        "name": "BOLSO MOTORISTA",
        "idParentLevel": 1089,
        "lastUpdated": "2011-11-09 20:37:20"
    },
    {
        "idLevel": 1091,
        "name": "MOCHILA MOTORISTA",
        "idParentLevel": 1089,
        "lastUpdated": "2011-11-09 20:37:39"
    },
    {
        "idLevel": 1092,
        "name": "RI\u00d1ONERA MOTORISTA",
        "idParentLevel": 1089,
        "lastUpdated": "2011-11-09 20:37:55"
    },
    {
        "idLevel": 1093,
        "name": "INTERCOMUNICADORES",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:38:36"
    },
    {
        "idLevel": 1094,
        "name": "INTERCOMUNICADOR",
        "idParentLevel": 1093,
        "lastUpdated": "2011-11-09 20:39:47"
    },
    {
        "idLevel": 1095,
        "name": "ACCESORIO INTERCOMUNICADOR",
        "idParentLevel": 1093,
        "lastUpdated": "2011-11-09 20:40:11"
    },
    {
        "idLevel": 1096,
        "name": "OTROS CAR AUDIO",
        "idParentLevel": 1055,
        "lastUpdated": "2011-11-09 20:41:48"
    },
    {
        "idLevel": 1097,
        "name": "OTROS GPS",
        "idParentLevel": 1062,
        "lastUpdated": "2011-11-09 20:42:46"
    },
    {
        "idLevel": 1098,
        "name": "MINIMOTO",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:43:16"
    },
    {
        "idLevel": 1099,
        "name": "ACCESORIO QUAD",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:43:50"
    },
    {
        "idLevel": 1100,
        "name": "ACCESORIO KART",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:44:43"
    },
    {
        "idLevel": 1101,
        "name": "ACCESORIO SCOOTER",
        "idParentLevel": 1068,
        "lastUpdated": "2011-11-09 20:45:25"
    },
    {
        "idLevel": 1102,
        "name": "ACCESORIO BARCO",
        "idParentLevel": 261,
        "lastUpdated": "2011-11-09 20:45:49"
    },
    {
        "idLevel": 1103,
        "name": "VIDEOJUEGOS",
        "idParentLevel": 0,
        "lastUpdated": "2011-11-09 20:49:55"
    },
    {
        "idLevel": 1104,
        "name": "COLECCIONISMO VINTAGE",
        "idParentLevel": 1103,
        "lastUpdated": "2011-11-09 20:50:40"
    },
    {
        "idLevel": 1106,
        "name": "JUEGO PC",
        "idParentLevel": 5114,
        "lastUpdated": "2010-05-11 12:14:23"
    },
    {
        "idLevel": 1107,
        "name": "JOYSTICK PC",
        "idParentLevel": 5129,
        "lastUpdated": "2011-11-09 20:51:56"
    },
    {
        "idLevel": 1108,
        "name": "CONTROL PAD PC",
        "idParentLevel": 5129,
        "lastUpdated": "2011-11-09 20:52:12"
    },
    {
        "idLevel": 1109,
        "name": "VOLANTE PC",
        "idParentLevel": 5129,
        "lastUpdated": "2011-11-09 20:55:54"
    },
    {
        "idLevel": 1110,
        "name": "MAQUINA RECREATIVA",
        "idParentLevel": 1103,
        "lastUpdated": "2011-11-09 20:56:35"
    },
    {
        "idLevel": 1112,
        "name": "ACCESORIO DS",
        "idParentLevel": 5117,
        "lastUpdated": "2011-11-09 20:57:28"
    },
    {
        "idLevel": 1113,
        "name": "NINTENDO SERIE DS",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 20:59:26"
    },
    {
        "idLevel": 1118,
        "name": "JUEGO NINTENDO DS",
        "idParentLevel": 5114,
        "lastUpdated": "2011-11-09 21:04:03"
    },
    {
        "idLevel": 1121,
        "name": "OTROS ACCESORIO WII",
        "idParentLevel": 5118,
        "lastUpdated": "2010-05-10 12:32:01"
    },
    {
        "idLevel": 1123,
        "name": "WIIMOTE",
        "idParentLevel": 2160,
        "lastUpdated": "2011-11-09 21:11:39"
    },
    {
        "idLevel": 1124,
        "name": "NUNCHUCK",
        "idParentLevel": 2160,
        "lastUpdated": "2011-11-09 21:11:53"
    },
    {
        "idLevel": 1125,
        "name": "WII FIT",
        "idParentLevel": 2160,
        "lastUpdated": "2011-11-09 21:12:18"
    },
    {
        "idLevel": 1126,
        "name": "JUEGO WII",
        "idParentLevel": 5114,
        "lastUpdated": "2011-11-09 21:12:51"
    },
    {
        "idLevel": 1128,
        "name": "ACCESORIO GAMECUBE",
        "idParentLevel": 5116,
        "lastUpdated": "2011-11-09 21:13:52"
    },
    {
        "idLevel": 1129,
        "name": "CONSOLA GAMECUBE",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 21:14:37"
    },
    {
        "idLevel": 1130,
        "name": "MANDO GAMECUBE",
        "idParentLevel": 5115,
        "lastUpdated": "2011-11-09 21:14:58"
    },
    {
        "idLevel": 1131,
        "name": "JUEGO GAMECUBE",
        "idParentLevel": 5114,
        "lastUpdated": "2011-11-09 21:15:24"
    },
    {
        "idLevel": 1133,
        "name": "ACCESORIO NINTENDO 64",
        "idParentLevel": 5116,
        "lastUpdated": "2011-11-09 21:16:52"
    },
    {
        "idLevel": 1134,
        "name": "CONSOLA NINTENDO 64",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 21:17:27"
    },
    {
        "idLevel": 1135,
        "name": "MANDO NINTENDO 64",
        "idParentLevel": 5115,
        "lastUpdated": "2011-11-09 21:17:42"
    },
    {
        "idLevel": 1136,
        "name": "JUEGO NINTENDO 64",
        "idParentLevel": 5114,
        "lastUpdated": "2010-05-11 12:13:59"
    },
    {
        "idLevel": 1138,
        "name": "ACCESORIO GAMEBOY",
        "idParentLevel": 5116,
        "lastUpdated": "2011-11-09 21:20:30"
    },
    {
        "idLevel": 1139,
        "name": "CONSOLA GAMEBOY",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 21:21:11"
    },
    {
        "idLevel": 1140,
        "name": "JUEGO GAMEBOY",
        "idParentLevel": 5114,
        "lastUpdated": "2010-05-11 12:12:27"
    },
    {
        "idLevel": 1142,
        "name": "ACCESORIO SNES",
        "idParentLevel": 5116,
        "lastUpdated": "2011-11-09 21:23:29"
    },
    {
        "idLevel": 1143,
        "name": "CONSOLA SNES",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 21:24:03"
    },
    {
        "idLevel": 1144,
        "name": "JUEGO SNES",
        "idParentLevel": 5114,
        "lastUpdated": "2010-05-11 12:15:40"
    },
    {
        "idLevel": 1146,
        "name": "ACCESORIO NES",
        "idParentLevel": 5116,
        "lastUpdated": "2011-11-09 21:25:54"
    },
    {
        "idLevel": 1147,
        "name": "CONSOLA NES",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 21:26:44"
    },
    {
        "idLevel": 1148,
        "name": "JUEGO NES",
        "idParentLevel": 5114,
        "lastUpdated": "2010-05-11 12:13:33"
    },
    {
        "idLevel": 1149,
        "name": "OTROS ACCESORIOS NINTENDO",
        "idParentLevel": 5116,
        "lastUpdated": "2011-11-09 21:27:52"
    },
    {
        "idLevel": 1151,
        "name": "ACCESORIO PS1",
        "idParentLevel": 5116,
        "lastUpdated": "2011-02-10 20:23:37"
    },
    {
        "idLevel": 1152,
        "name": "CONSOLA PS1",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 21:29:46"
    },
    {
        "idLevel": 1155,
        "name": "MANDO PS1",
        "idParentLevel": 5115,
        "lastUpdated": "2011-11-09 21:33:09"
    },
    {
        "idLevel": 1156,
        "name": "MEMORY CARD PS1",
        "idParentLevel": 5152,
        "lastUpdated": "2011-11-09 21:33:57"
    },
    {
        "idLevel": 1157,
        "name": "JUEGO PS1",
        "idParentLevel": 5114,
        "lastUpdated": "2011-02-10 20:23:15"
    },
    {
        "idLevel": 1159,
        "name": "ACCESORIO PS2",
        "idParentLevel": 5119,
        "lastUpdated": "2011-11-09 21:35:33"
    },
    {
        "idLevel": 1160,
        "name": "CONSOLA PS2",
        "idParentLevel": 5113,
        "lastUpdated": "2011-11-09 21:37:03"
    },
    {
        "idLevel": 1163,
        "name": "MANDO PS2",
        "idParentLevel": 5130,
        "lastUpdated": "2011-11-09 21:40:29"
    },
    {
        "idLevel": 1164,
        "name": "MEMORY CARD PS2",
        "idParentLevel": 5152,
        "lastUpdated": "2011-11-09 21:40:58"
    },
    {
        "idLevel": 1165,
        "name": "VOLANTE PS2",
        "idParentLevel": 5130,
        "lastUpdated": "2011-11-09 21:41:22"
    },
    {
        "idLevel": 1166,
        "name": "MULTITAP",
        "idParentLevel": 5119,
        "lastUpdated": "2011-11-09 21:41:43"
    },
    {
        "idLevel": 1167,
        "name": "JUEGO PS2",
        "idParentLevel": 5114,
        "lastUpdated": "2011-02-10 20:21:59"
    }
]

export default arbolCategorias;