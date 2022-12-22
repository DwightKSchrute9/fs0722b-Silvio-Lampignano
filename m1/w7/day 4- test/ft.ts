async function getData() {
	const url = 'https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f';
	const data = await fetch(url);
	displayData(await data.json());
}

document.addEventListener('DOMContentLoaded', () => {
	getData();
});