/**
 * Pedir Carta.
 * @constructor
 * @param {Array<String>} deck  es un arreglo de string
 * @returns {<String>} carta retorna carta del deck
 */
export const pedirCarta = (deck) => {
    
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

