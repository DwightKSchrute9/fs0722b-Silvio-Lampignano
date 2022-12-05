const list = [];

function submitForm() {
	const birthDate = document.getElementById("birthDate");
	
	list.push(
		{
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			birthDate: new Date(birthDate.value)
		}
	);
	
	updateList();
}


function updateList() {
	const table = document.querySelector("#resultTable tbody");
	table.innerHTML = "";
	
	list.forEach((formData) => {
		const row = table.insertRow(-1);
		const firstNameCell = row.insertCell(0);
		const lastNameCell = row.insertCell(1);
		const ageCell = row.insertCell(2);
		
		firstNameCell.innerHTML = formData.firstName;
		lastNameCell.innerHTML = formData.lastName;
		ageCell.innerHTML = getAge(formData.birthDate);
	});
}

function getAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

