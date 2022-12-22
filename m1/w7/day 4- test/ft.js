"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//chiamata fetch
function getCapi() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = '765b2daf-41d5-4e94-a0d5-abd918f57b8f.json';
        const data = yield fetch(url);
        displayCapi(yield data.json());
    });
}
function displayCapi(data) {
    //console.log(data)
    const container = document.getElementById("userContainer");
    if (container) {
        container.innerHTML = "";
        data.forEach((c) => {
            const capo = new Capo(c.id, c.codprod, c.collezione, c.capo, c.modello, c.quantita, c.colore, c.prezzoivaesclusa, c.prezzoivainclusa, c.disponibile, c.saldo);
            const card = document.createElement('div');
            card.classList.add('card');
            const list = document.createElement('ul');
            const modello = document.createElement('li');
            modello.innerHTML = capo.codprod + ' ' + capo.modello + ' ' + capo.capo + ' ' + capo.collezione + ' ';
            list.appendChild(modello);
            const saldo = document.createElement('li');
            saldo.innerHTML = capo.getsaldocapo() + '';
            list.appendChild(saldo);
            const prezzoFinale = document.createElement('li');
            saldo.innerHTML = capo.getacquistocapo() + '';
            list.appendChild(prezzoFinale);
            card.appendChild(list);
            container.appendChild(card);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    getCapi();
});
//classe card prodotto
class Capo {
    // il costruttore della classe referenzia le proprietà
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    // dichiarazione metodi
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
    getsaldocapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
}
