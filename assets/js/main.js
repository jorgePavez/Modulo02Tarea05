//carga de datos
let centroMedico = [
    [{
            hora: "11:00",
            especialista: "IGNACIO SCHULZ",
            paciente: "FRANCISCA ROJAS",
            rut: "9878782-1",
            prevision: "FONASA"
        },
        {
            hora: "11:30",
            especialista: "FEDERICO SUBERCASEAUX",
            paciente: "PAMELA ESTRADA",
            rut: "15345241-3",
            prevision: "ISAPRE"
        },
        {
            hora: "15:00",
            especialista: "FERNANDO WURTHZ",
            paciente: "ARMANDO LUNA",
            rut: "16445345-9",
            prevision: "ISAPRE"
        },
        {
            hora: "15:30",
            especialista: "ANA MARIA GODOY",
            paciente: "MANUEL GODOY",
            rut: "17666419-0",
            prevision: "FONASA"
        },
        {
            hora: "16:00",
            especialista: "PATRICIA SUAZO",
            paciente: "RAMON ULLOA",
            rut: "14989389-K",
            prevision: "FONASA"
        }
    ],
    [{
            hora: "8:00",
            especialista: "MARIA PAZ ALTUZARRA",
            paciente: "PAULA SANCHEZ",
            rut: "15554774-5",
            prevision: "FONASA"
        },
        {
            hora: "10:00",
            especialista: "RAUL ARAYA",
            paciente: "ANGÉLICA NAVAS",
            rut: "15444147-9",
            prevision: "ISAPRE"
        },
        {
            hora: "10:30",
            especialista: "MARIA ARRIAGADA",
            paciente: "ANA KLAPP",
            rut: "17879423-9",
            prevision: "ISAPRE"
        },
        {
            hora: "11:00",
            especialista: "ALEJANDRO BADILLA",
            paciente: "FELIPE MARDONES",
            rut: "1547423-6",
            prevision: "ISAPRE"
        },
        {
            hora: "11:30",
            especialista: "CECILIA BUDNIK",
            paciente: "DIEGO MARRE",
            rut: "16554741-K",
            prevision: "FONASA"
        },
        {
            hora: "12:00",
            especialista: "ARTURO CAVAGNARO",
            paciente: "CECILIA MENDEZ",
            rut: "9747535-8",
            prevision: "ISAPRE"
        },
        {
            hora: "12:30",
            especialista: "ANDRES KANACRI",
            paciente: "MARCIAL SUAZO",
            rut: "11254785-5",
            prevision: "ISAPRE"
        }
    ],
    [{
            hora: "8:30",
            especialista: "ANDREA ZUÑIGA",
            paciente: "MARCELA RETAMAL",
            rut: "11123425-6",
            prevision: "ISAPRE"
        },
        {
            hora: "11:00",
            especialista: "MARIA PIA ZAÑARTU",
            paciente: "ANGEL MUÑOZ",
            rut: "9878789-2",
            prevision: "ISAPRE"
        },
        {
            hora: "11:30",
            especialista: "SCARLETT WITTING",
            paciente: "MARIO KAST",
            rut: "7998789-5",
            prevision: "FONASA"
        },
        {
            hora: "13:00",
            especialista: "FRANCISCO VON TEUBER",
            paciente: "KARIN FERNANDEZ",
            rut: "18887662-K",
            prevision: "FONASA"
        },
        {
            hora: "13:30",
            especialista: "EDUARDO VIÑUELA",
            paciente: "HUGO SANCHEZ",
            rut: "17665461-4",
            prevision: "FONASA"
        },
        {
            hora: "14:00",
            especialista: "RAQUEL VILLASECA",
            paciente: "ANA SEPULVEDA",
            rut: "14441281-0",
            prevision: "ISAPRE"
        }
    ]
];

//recorre los datos para mostrar el primer y ultimo paciente 
const mostrarPrimerUltimo = () => {
    for (let i = 0; i < 3; i++) {
        for (let x = 0; x < centroMedico[i].length; x++) {
            if (x == 0) {
                document.write(`<p>Primer paciente: ${centroMedico[i][x].paciente} - ${centroMedico[i][x].prevision}  | `);
            };
            if (x == centroMedico[i].length - 1) {
                document.write(`Último paciente: ${centroMedico[i][x].paciente} - ${centroMedico[i][x].prevision} </p>`);
            };
        };
    };

};
mostrarPrimerUltimo();

//recorrer los datos para mostrarlos en la tabla
const mostrarTabla = () => {
    for (let i = 0; i < 3; i++) {
        document.write(`<table class="table table-borderless table-striped table-dark"><thead><tr><th scope="col">ESPECIALIDAD</th><th scope="col">ID</th><th scope="col">HORA</th><th scope="col">ESPECIALISTA</th><th scope="col">PACIENTE</th><th scope="col">RUT</th><th scope="col">PREVISION</th></tr></thead><tbody>`)


        for (let x = 0; x < centroMedico[i].length; x++) {

            if (i == 0) {
                let nombreEspecialidad = "RADIOLOGÍA";
                document.write(`<th scope="row">${nombreEspecialidad}</th>`);
            }
            if (i == 1) {
                let nombreEspecialidad = "TRAUMATOLOGIA";
                document.write(`<th scope="row">${nombreEspecialidad}</th>`);
            }
            if (i == 2) {
                let nombreEspecialidad = "DENTAL";
                document.write(`<th scope="row">${nombreEspecialidad}</th>`);
            }
            document.write(`<td>${x+1}</td>`);
            document.write(`<td>${centroMedico[i][x].hora}</td>`);
            document.write(`<td>${centroMedico[i][x].especialista}</td>`);
            document.write(`<td>${centroMedico[i][x].paciente}</td>`);
            document.write(`<td>${centroMedico[i][x].rut}</td>`);
            document.write(`<td>${centroMedico[i][x].prevision}</td></tr>`);
        };
        document.write(`</tr></tbody></table>`)
    };

};
mostrarTabla();



/* 
console.log(centroMedico[i][x].hora);
console.log(centroMedico[i][x].especialista);
console.log(centroMedico[i][x].rut);
console.log(centroMedico[i][x].paciente);
console.log(centroMedico[i][x].prevision); 
*/

/* 
let largoCentroMedico = centroMedico.length
let largoDental = centroMedico[2].length;
let largoTrauma = centroMedico[1].length;
let largoRadio = centroMedico[0].length; 
console.log(largoCentroMedico);
console.log(largoDental);
console.log(largoRadio);
console.log(largoTrauma); 
console.log(centroMedico[0][4].especialista);
console.log(centroMedico); 
*/