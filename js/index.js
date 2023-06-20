import { Ejercito } from "./ejercito.js";

import  {Dado} from "./dado.js";
import { Tablero } from "./tablero.js";
import { Tarjeta } from "./tarjetas.js";
import { Juego } from "./juego.js";
import { Player } from "./player.js";

let tablero2 = {
  continentes: [
    {
      nombre: "America del Norte",
      territorios: [
        { id: 1, nombre: "Alaska", propietario: null, vecino: [2, 6, 28] },
        {
          id: 2,
          nombre: "Alberta",
          propietario: null,
          vecino: [1, 4, 6, 7, 9],
        },
        {
          id: 3,
          nombre: "America Central",
          propietario: null,
          vecino: [4, 9, 38],
        },
        {
          id: 4,
          nombre: "Estados Unidos del Este",
          propietario: null,
          vecino: [2, 3, 4, 7, 8, 9],
        },
        {
          id: 5,
          nombre: "Groenlandia",
          propietario: null,
          vecino: [6, 7, 8, 11],
        },
        {
          id: 6,
          nombre: "Territorio del noreste",
          propietario: null,
          vecino: [1, 2, 5, 7],
        },
        {
          id: 7,
          nombre: "Ontario",
          propietario: null,
          vecino: [2, 4, 5, 6, 8, 9],
        },
        { id: 8, nombre: "Quebec", propietario: null, vecino: [4, 5, 7] },
        {
          id: 9,
          nombre: "Estados Unidos del Oeste",
          propietario: null,
          vecino: [2, 3, 4, 7],
        },
      ],
    },
    {
      nombre: "Europa",
      territorios: [
        {
          id: 10,
          nombre: "Gran Bretaña",
          propietario: null,
          vecino: [11, 12, 13, 16],
        },
        { id: 11, nombre: "Islandia", propietario: null, vecino: [5, 10, 13] },
        {
          id: 12,
          nombre: "Europa del Norte",
          propietario: null,
          vecino: [10, 13, 14, 15, 16],
        },
        {
          id: 13,
          nombre: "Escandinavia",
          propietario: null,
          vecino: [10, 11, 12, 15],
        },
        {
          id: 14,
          nombre: "Europa del Sur",
          propietario: null,
          vecino: [12, 15, 16, 19, 21, 29],
        },
        {
          id: 15,
          nombre: "Rusia",
          propietario: null,
          vecino: [12, 13, 14, 23, 29, 33],
        },
        {
          id: 16,
          nombre: "Europa Occidental",
          propietario: null,
          vecino: [10, 12, 14, 21],
        },
      ],
    },
    {
      nombre: "Africa",
      territorios: [
        { id: 17, nombre: "Congo", propietario: null, vecino: [18, 21, 22] },
        {
          id: 18,
          nombre: "Africa Oriental",
          propietario: null,
          vecino: [17, 19, 20, 22],
        },
        {
          id: 19,
          nombre: "Egipto",
          propietario: null,
          vecino: [14, 18, 21, 29],
        },
        { id: 20, nombre: "Madagascar", propietario: null, vecino: [18, 22] },
        {
          id: 21,
          nombre: "Africa del Norte",
          propietario: null,
          vecino: [14, 16, 17, 18, 19, 36],
        },
        {
          id: 22,
          nombre: "Sudáfrica",
          propietario: null,
          vecino: [17, 18, 20],
        },
      ],
    },
    {
      nombre: "Asia",
      territorios: [
        {
          id: 23,
          nombre: "Afganistan",
          propietario: null,
          vecino: [15, 24, 25, 29, 32, 33],
        },
        {
          id: 24,
          nombre: "China",
          propietario: null,
          vecino: [23, 25, 30, 31, 32, 33, 34],
        },
        {
          id: 25,
          nombre: "India",
          propietario: null,
          vecino: [23, 24, 29, 31],
        },
        {
          id: 26,
          nombre: "Irkutsk",
          propietario: null,
          vecino: [28, 30, 32, 34],
        },
        { id: 27, nombre: "Japon", propietario: null, vecino: [28, 30] },
        {
          id: 28,
          nombre: "Kamtachka",
          propietario: null,
          vecino: [1, 26, 27, 30, 34],
        },
        {
          id: 29,
          nombre: "Oriente Medio",
          propietario: null,
          vecino: [14, 15, 19, 23, 25],
        },
        {
          id: 30,
          nombre: "Mongolia",
          propietario: null,
          vecino: [24, 26, 27, 28, 32],
        },
        {
          id: 31,
          nombre: "Sudeste Asiático",
          propietario: null,
          vecino: [24, 25, 40],
        },
        {
          id: 32,
          nombre: "Siberia",
          propietario: null,
          vecino: [26, 30, 33, 34],
        },
        { id: 33, nombre: "Ural", propietario: null, vecino: [15, 23, 32] },
        { id: 34, nombre: "Yatutsk", propietario: null, vecino: [26, 28, 32] },
      ],
    },
    {
      nombre: "America del Sur",
      territorios: [
        { id: 35, nombre: "Argentina", propietario: null, vecino: [36, 37] },
        {
          id: 36,
          nombre: "Brasil",
          propietario: null,
          vecino: [35, 37, 38, 21],
        },
        { id: 37, nombre: "Peru", propietario: null, vecino: [35, 36, 38] },
        { id: 38, nombre: "Venezuela", propietario: null, vecino: [3, 36, 37] },
      ],
    },
    {
      nombre: "Oceania",
      territorios: [
        {
          id: 39,
          nombre: "Australia Oriental",
          propietario: null,
          vecino: [41, 42],
        },
        { id: 40, nombre: "Indonesia", propietario: null, vecino: [41, 42] },
        {
          id: 41,
          nombre: "Nueva Guinea",
          propietario: null,
          vecino: [39, 40, 42],
        },
        {
          id: 42,
          nombre: "Australia Occidental",
          propietario: null,
          vecino: [39, 40, 41],
        },
      ],
    },
  ],
};


/*Probando juego*/
let tituloBienvenida = document.getElementById("tituloBienvenida");
tituloBienvenida.style.display = "none";
let botonJugador = document.getElementById("botonSelectJugador");
let opcion = document.getElementById("players");
let tituloPlayer = document.getElementById("tituloPlayer");
let reparteTerritorio = document.getElementById("reparteTerritorios");

let dadoAtacante = new Dado("rojo", "atacante");
let dadoAtacante2 = new Dado("rojo", "atacante");
let dadoAtacante3 = new Dado("rojo", "atacante");
let dadoDefensor = new Dado("blanco", "defensor");
let dadoDefensor2 = new Dado("blanco", "defensor");




reparteTerritorio.style.display = "none";
let mesa = new Tablero(tablero2);
let a;

const cantidadEjercito = [35, 30, 25, 20];
const listaJugadores = [];

botonJugador.addEventListener("click", function () {
for (let index = 0; index < opcion.value; index++) {
  let numPlayer=index+1;
  listaJugadores.push(new Player(new Ejercito(cantidadEjercito[opcion.value - 3 ]),"Jugador "+numPlayer));
}
  if (opcion.value === "3") {
    console.log("Has escogido la opcion de 3 jugadores");
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "4") {
    console.log("Has escogido la opcion de 4 jugadores");
    console.log(listaJugadores);
    console.log(mesa);
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "5") {
    console.log(listaJugadores);
    console.log(mesa);
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "6") {
    console.log("Has escogido la opcion de 6 jugadores");
    console.log(listaJugadores);
    console.log(mesa);
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else {
    console.log("Tienes que elegir alguna de las opciones.");
    tituloBienvenida.style.display = "none";
  }
  tituloBienvenida.style.display = "block";
  reparteTerritorio.style.display = "block";
});
reparteTerritorio.addEventListener("click", function () {
  let mostrarTerritorio;
  let valorDadoAtacante = dadoAtacante.tirarDado();
  let valorDadoAtacante2 = dadoAtacante2.tirarDado();
  let valorDadoAtacante3 = dadoAtacante3.tirarDado();
  let valorDadoDefensor = dadoDefensor.tirarDado();
  let valorDadoDefensor2 = dadoDefensor2.tirarDado();
  let sumaAtacante = valorDadoAtacante + valorDadoAtacante2 + valorDadoAtacante3;
  let sumaDefensor = valorDadoDefensor + valorDadoDefensor2;

  if (opcion.value === "3") {
    let turnoActual = 0;
    a = mesa.repartirTerritorio(listaJugadores);
    mesa.mostrarEstado();
    mostrarTerritorio = mesa.obtenerTerritoriosPorJugador(listaJugadores);
    //console.log(mostrarTerritorio)
    for (const jugador in mostrarTerritorio) {
      const territorios = mostrarTerritorio[jugador];
      const jugadorDiv = document.createElement("div");
      const jugadorHeader = document.createElement("h1");
      jugadorHeader.textContent =jugador;
      jugadorDiv.appendChild(jugadorHeader);
      for (const territorio of territorios) {
        console.log('Territorios de '+jugador+':'+territorios.join(", "));
        const territorioElement = document.createElement("p");
        territorioElement.textContent = territorio;
        const atacarButton = document.createElement("button");
        atacarButton.textContent = "Atacar";
        atacarButton.style.display= "inline-block"
        
        atacarButton.addEventListener("click", ()=>{
          const actualPlayer= listaJugadores[turnoActual];
          //const territorioAtacante = mesa.getTerritorioByNombre(territorio, actualPlayer);
          //console.log(territorioAtacante); 
          console.log(mostrarTerritorio[actualPlayer.nombre]);  
          if( mostrarTerritorio[actualPlayer.nombre] == actualPlayer.nombre){
            console.log("No puedes,es tu territorio");
          }else{
            if(sumaDefensor<sumaAtacante){
              console.log("Ataque");
              //mostrarTerritorio[jugador] = mesa.obtenerTerritoriosPorJugador([jugador])[jugador];
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
              console.log('Territoriossss de '+actualPlayer.nombre+':'+territorios.join(", "));
            } else if(sumaDefensor>sumaAtacante){
              console.log("Defensa");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }else{
              console.log("empate");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }
          }
            console.log(actualPlayer);
        });
        jugadorDiv.appendChild(territorioElement);
        territorioElement.appendChild(atacarButton);
      }
      document.body.appendChild(jugadorDiv);  
    }
    //mesa.atacar(31,40);
    reparteTerritorio.style.display = "none";
    console.log(turnoActual);
  } else if(opcion.value === "4"){
    a = mesa.repartirTerritorio(listaJugadores);
    mesa.mostrarEstado();
    mostrarTerritorio = mesa.obtenerTerritoriosPorJugador(listaJugadores);
    for (const jugador in mostrarTerritorio) {
      const territorios = mostrarTerritorio[jugador];
      const jugadorDiv = document.createElement("div");
      const jugadorHeader = document.createElement("h1");
      //console.log(tablero2)
      jugadorHeader.textContent =jugador;
      jugadorDiv.appendChild(jugadorHeader);
      for (const territorio of territorios) {
        console.log('Territorios de '+jugador+':'+territorios.join(", "));
        const territorioElement = document.createElement("p");
        territorioElement.textContent = territorio;
        const atacarButton = document.createElement("button");
        atacarButton.textContent = "Atacar";
        atacarButton.style.display= "inline-block"
        atacarButton.addEventListener("click",function (){
          const actualPlayer= listaJugadores[turnoActual];
          //const territorioAtacante = mesa.getTerritorioByNombre(territorio, actualPlayer);
          //console.log(territorioAtacante); 
          console.log(territorio);  
          if( territorio.propietario === actualPlayer){
            //console.log("fUNCIONA");
            console.log("No puedes,es tu territorio");
          }else{
            if(sumaDefensor<sumaAtacante){
              console.log("Ataque");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            } else if(sumaDefensor>sumaAtacante){
              console.log("Defensa");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }else{
              console.log("empate");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }
          }
            console.log(actualPlayer);
        });
        jugadorDiv.appendChild(territorioElement);
        territorioElement.appendChild(atacarButton);
      }
      document.body.appendChild(jugadorDiv);
    }
    //mesa.atacar(31,40);
    reparteTerritorio.style.display = "none";
  } else if(opcion.value === "5"){
    a = mesa.repartirTerritorio(listaJugadores);
    mesa.mostrarEstado();
    mostrarTerritorio = mesa.obtenerTerritoriosPorJugador(listaJugadores);
    for (const jugador in mostrarTerritorio) {
      const territorios = mostrarTerritorio[jugador];
      const jugadorDiv = document.createElement("div");
      const jugadorHeader = document.createElement("h1");
      //console.log(tablero2)
      jugadorHeader.textContent =jugador;
      jugadorDiv.appendChild(jugadorHeader);
      for (const territorio of territorios) {
        console.log('Territorios de '+jugador+':'+territorios.join(", "));
        const territorioElement = document.createElement("p");
        territorioElement.textContent = territorio;
        const atacarButton = document.createElement("button");
        atacarButton.textContent = "Atacar";
        atacarButton.style.display= "inline-block"
        atacarButton.addEventListener("click",function (){
          const actualPlayer= listaJugadores[turnoActual];
          //const territorioAtacante = mesa.getTerritorioByNombre(territorio, actualPlayer);
          //console.log(territorioAtacante); 
          console.log(territorio);  
          if( territorio.propietario === actualPlayer){
            //console.log("fUNCIONA");
            console.log("No puedes,es tu territorio");
          }else{
            if(sumaDefensor<sumaAtacante){
              console.log("Ataque");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            } else if(sumaDefensor>sumaAtacante){
              console.log("Defensa");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }else{
              console.log("empate");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }
          }
            console.log(actualPlayer);
        });
        jugadorDiv.appendChild(territorioElement);
        territorioElement.appendChild(atacarButton);
      }
      document.body.appendChild(jugadorDiv);
    }
    //mesa.atacar(31,40);
    reparteTerritorio.style.display = "none";
  } else if(opcion.value === "6"){
    let turnoActual = 0;
    a = mesa.repartirTerritorio(listaJugadores);
    mesa.mostrarEstado();
    mostrarTerritorio = mesa.obtenerTerritoriosPorJugador(listaJugadores);
    for (const jugador in mostrarTerritorio) {
      const territorios = mostrarTerritorio[jugador];
      const jugadorDiv = document.createElement("div");
      const jugadorHeader = document.createElement("h1");
      jugadorHeader.textContent =jugador;
      jugadorDiv.appendChild(jugadorHeader);
      for (const territorio of territorios) {
        console.log('Territorios de '+jugador+':'+territorios.join(", "));
        const territorioElement = document.createElement("p");
        territorioElement.textContent = territorio;

        const atacarButton = document.createElement("button");
        atacarButton.textContent = "Atacar";
        atacarButton.style.display= "inline-block"

        atacarButton.addEventListener("click", ()=>{
          const actualPlayer= listaJugadores[turnoActual];
          //const territorioAtacante = mesa.getTerritorioByNombre(territorio, actualPlayer);
          //console.log(territorioAtacante); 
          console.log(territorio);  
          if( territorio.propietario === actualPlayer){
            console.log("No puedes,es tu territorio");
          }else{
            if(sumaDefensor<sumaAtacante){
              console.log("Ataque");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            } else if(sumaDefensor>sumaAtacante){
              console.log("Defensa");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }else{
              console.log("empate");
              turnoActual = (turnoActual + 1) % listaJugadores.length;
              console.log(turnoActual);
            }
          }
            console.log(actualPlayer);
        });
        jugadorDiv.appendChild(territorioElement);
        territorioElement.appendChild(atacarButton);
      }
      document.body.appendChild(jugadorDiv);
    }
    reparteTerritorio.style.display = "none";
  }
});
