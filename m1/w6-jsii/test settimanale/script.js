async function getData() {
	const url = 'https://raw.githubusercontent.com/DwightKSchrute9/fs0722b-Silvio-Lampignano/master/m1/w6-jsii/test%20settimanale/users.json';
	const data = await fetch(url);
	displayData(await data.json());
}

document.addEventListener('DOMContentLoaded', () => {
	getData();
});


function displayData(data) {
	const container = document.getElementById("userContainer");
	container.innerHTML = "";
	
	data.forEach((user) => {
		const card = document.createElement('div');
		card.classList.add('card');
		
		const img = document.createElement('img');
		img.src = user.profileURL;
		
		const list = document.createElement('ul');
		
		const name = document.createElement('li');
		name.innerHTML = user.firstName + ' ' + user.lastName;
		list.appendChild(name);
		
		const email = document.createElement('li');
		email.innerHTML = user.email;
		list.appendChild(email);
		
		card.appendChild(img);
		card.appendChild(list);
		
		container.appendChild(card);
	});
}

