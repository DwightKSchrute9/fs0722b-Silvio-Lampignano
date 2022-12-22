   //chiamata fetch
async function getCapi() {
	const url = '765b2daf-41d5-4e94-a0d5-abd918f57b8f.json';
	const data = await fetch(url);
	displayCapi(await data.json());
}
function displayCapi(data: Capo[]) {
	//console.log(data)
	const container = document.getElementById("userContainer");
	if (container) {
		
		container.innerHTML = "";

		data.forEach((c) => {
			const capo = new Capo(c.id, c.codprod,c.collezione,c.capo,c.modello,c.quantita,c.colore,c.prezzoivaesclusa,c.prezzoivainclusa,c.disponibile,c.saldo)
			const card = document.createElement('div');
			card.classList.add('card');
				
		
			
				const list = document.createElement('ul');
				
		const modello = document.createElement('li');
				modello.innerHTML = capo.codprod + ' ' + capo.modello + ' ' + capo.capo+ ' '+ capo.collezione + ' ';
				list.appendChild(modello);
			
				const saldo = document.createElement('li');
			saldo.innerHTML = capo.getsaldocapo()+'';
			list.appendChild(saldo);
				const prezzoFinale = document.createElement('li');
			saldo.innerHTML = capo.getacquistocapo()+'';
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
 class Capo{

	//proprietà di classe
id:number;
codprod:number;
collezione:string;
capo:string;
modello:number;
quantita:number;
colore:string;
prezzoivaesclusa:number;
prezzoivainclusa:number;
disponibile:string;
saldo:number;
// il costruttore della classe referenzia le proprietà

    constructor (id: number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
     this.id= id
     this.codprod=codprod
     this.collezione=collezione
     this.capo=capo
     this.modello=modello
     this.quantita=quantita
     this.colore=colore
     this.prezzoivaesclusa=prezzoivaesclusa
     this.prezzoivainclusa=prezzoivainclusa
     this.disponibile=disponibile
     this.saldo=saldo

    
}

	
	 // dichiarazione metodi
    public  getacquistocapo():number{
		return this.prezzoivainclusa - this.getsaldocapo();
	}
	public  getsaldocapo():number{

		return this.prezzoivainclusa * this.saldo /100
 
	}
	
		
		
	//}
	

  }
