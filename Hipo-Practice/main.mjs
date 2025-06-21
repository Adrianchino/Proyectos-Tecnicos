import { data } from "./data.mjs"

let root = document.querySelector('#root');

// card.innerHTML = "XD";

data.map(item => {

	let card = document.createElement("section");
	let main = document.createElement("main");

	// Imagen Personal
	let figure = document.createElement("figure");
	let img = document.createElement("img")

	// Personal Data
	let personal_data = document.createElement("div")
	let name = document.createElement("h2");
	let career = document.createElement("h4");
	let web = document.createElement("h5");

	// About 
	let about = document.createElement("div")
	let title_about = document.createElement("h3");
	let content_about = document.createElement("p");

	// Interests
	let interests = document.createElement("div")
	let title_interests = document.createElement("h3");
	let content_interests = document.createElement("p");

	// Footer
	let footer = document.createElement("footer");
	let fbIcon = document.createElement("img")
	let inIcon = document.createElement("img")

	
	// Clases de los nombres
	card.classList.add("card");
	img.classList.add("img-personal");
	personal_data.classList.add("personal-data")
	name.classList.add("nombre");
	career.classList.add("career");
	web.classList.add("web");
	about.classList.add("about")
	interests.classList.add("interests")
	footer.classList.add("footer")
	fbIcon.classList.add("icon")
	inIcon.classList.add("icon")


	// Ingresar ña informacion de la Data
	name.innerText = item.name;
	career.innerText = item.career;
	web.innerText = item.web

	title_about.innerText ="About";
	content_about.innerText = item.about;

	title_interests.innerText = "Interests";
	content_interests.innerText = item.interests;

	img.src = item.img;
	img.alt = `Fotografia de ${ item.name }`;

	fbIcon.src = item.media[0];
	inIcon.src = item.media[1];
	fbIcon.alt = 'Facebook icon';
	inIcon.alt = 'Instagram icon';

	// ingresar la informacion a los divs
	figure.append(img);
	personal_data.append(name, career, web);
	about.append(title_about, content_about);
	interests.append(title_interests, content_interests);
	main.append(personal_data, about, interests);
	footer.append(fbIcon, inIcon);
	
	// Mostrar la informacion en el HTML
	card.append(figure);
	card.append(main);
	card.append(footer);


	root.append(card);
})
