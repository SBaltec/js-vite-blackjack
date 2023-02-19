import { pedirCarta } from "./";
import { valorCarta } from "./";
import { crearCartaHTML } from "./";

// turno de la computadora
/**
 * 
 * @param { Number } puntosMinimos puntos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora para mostrar los puntos
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {
if(!puntosMinimos) throw new Error('puntos minimos son necesario') 
if(!divCartasComputadora) throw new Error('divCartasComputadora es necesario') 
if(!puntosHTML) throw new Error('puntos  HTML son necesario') 
if(!deck) throw new Error('Deck es necesario')
let puntosComputadora =0;    

do {

        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta=crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
