function viewMore(event){
	const div=event.currentTarget.parentNode;
	const index=div.dataset.index;
	
	const descrizione=MAP[index].descrizione;
	const mq=MAP[index].mq;
	const prezzo=MAP[index].prezzo;
	
	const h6=document.createElement("h6");
	const p=document.createElement("p");
	const h3=document.createElement("h3");
	
	div.querySelector("div").appendChild(h6);
	div.querySelector("div").appendChild(p);
	div.querySelector("div").appendChild(h3);
	
	div.querySelector("h6").textContent=descrizione;
	div.querySelector("p").textContent=mq;
	div.querySelector("h3").textContent=prezzo;
	
	event.currentTarget.textContent="View less";
	
	event.currentTarget.removeEventListener("click", viewMore);
	event.currentTarget.addEventListener("click", viewLess);
}

function viewLess(event){
	const div=event.currentTarget.parentNode;
	const children=div.childNodes;
	div.querySelector("div").innerHTML="";
	const a=div.querySelector("a");
	a.textContent="View more";
	event.currentTarget.removeEventListener("click", viewLess);
	event.currentTarget.addEventListener("click", viewMore);
}

function search(){
	const input=document.querySelector("#searchbar");
	const filter=input.value.toUpperCase();
	const divs=document.querySelectorAll(".flex-item");
	
	for(let i=0; i<divs.length; i++){
		const div=divs[i];
		const span=div.querySelector("span");
		const h4=span.querySelector("h4");
		for(let j=0; j<span.childNodes.length; j++){
			const text=h4.textContent;
			if(text.toUpperCase().indexOf(filter)>-1){
				div.classList.remove("hidden");
			}
			else{
				div.classList.add("hidden");
			}
		}
	}
	
	const tantidiv=document.querySelectorAll(".flex-container .hidden");
	const footer=document.querySelector("footer");
	if((divs.length-tantidiv.length)<4){
		footer.classList.add("hidden");
	}else{
		footer.classList.remove("hidden");
	}
}

function addPreferiti(event){
	const section=document.querySelector(".preferiti-container");
	const divset=event.currentTarget.parentNode.parentNode;
	const index=divset.dataset.index;
	
	const div=document.createElement("div");
	section.appendChild(div);
	div.classList.add('item-preferiti');
	div.setAttribute("data-index",index);
	
	const span=document.createElement("span");
	span.classList.add('preferiti-sopra');
	
	div.appendChild(span);
	
	const h5=document.createElement("h5");
	const imgs=document.createElement("img");
	const img=document.createElement("img");
	
	h5.textContent=MAP[index].titolo;
	imgs.src=MAP[index].spreferiti;
	img.src=MAP[index].immagine;
	a.textContent=MAP[index].bottone;
	
	div.querySelector("span").appendChild(h5);
	div.querySelector("span").appendChild(imgs);
	div.appendChild(img);
	
	event.currentTarget.removeEventListener("click", addPreferiti);
	imgs.addEventListener("click", removePreferiti);
	
	if(section.childNodes.length==1){
		const h1=document.querySelector("#preferiti");
		h1.classList.remove("hidden");
	}
}

function removePreferiti(event){
	const section=event.currentTarget.parentNode.parentNode.parentNode;
	const div=event.currentTarget.parentNode.parentNode;
	const index=div.dataset.index;
	
	section.removeChild(div);
	
	const div1=document.querySelector("[data-index='"+index+"']");
	const img=div1.querySelector("span img");
	img.addEventListener("click", addPreferiti);
	
	const h1=document.querySelector("#preferiti");
	if(section.childNodes.length==0){
		h1.classList.add("hidden");
	}
}



const article=document.querySelector("article");
const section1=document.createElement("section");
article.appendChild(section1);
const h1=document.createElement("h1");
section1.appendChild(h1);
h1.classList.add("hidden");
h1.setAttribute("id","preferiti");
h1.textContent="Preferiti";
const section2=document.createElement("section");
section1.appendChild(section2);
section2.classList.add("preferiti-container");
const section3=document.createElement("section");
article.appendChild(section3);
const otherh1=document.createElement("h1");
section3.appendChild(otherh1);
otherh1.textContent="Tutte le case";
const section4=document.createElement("section");
section4.classList.add("flex-container");
section3.appendChild(section4);

for(let index in MAP){
	const div=document.createElement("div");
	div.setAttribute("data-index",index);
	section4.appendChild(div);
	div.classList.add("flex-item");
	
	const span=document.createElement("span");
	span.classList.add('preferiti');
	const divb=document.createElement("div");
	
	div.appendChild(span);
	
	const h4=document.createElement("h4");
	const imgp=document.createElement("img");
	const img=document.createElement("img");
	const a=document.createElement("a");
	
	h4.textContent=MAP[index].titolo;
	imgp.src=MAP[index].preferiti;
	img.src=MAP[index].immagine;
	a.textContent=MAP[index].bottone;
	
	div.querySelector("span").appendChild(h4);
	div.querySelector("span").appendChild(imgp);
	div.appendChild(img);
	div.appendChild(divb);
	div.appendChild(a);
	a.classList.add('button');
}

const as=document.querySelectorAll(".button");
for(a of as){
	a.addEventListener("click", viewMore);
}

const preferitis=document.querySelectorAll(".preferiti img");
for(preferiti of preferitis){
	preferiti.addEventListener("click", addPreferiti);
}

const input=document.querySelector("#searchbar");
input.addEventListener('keyup',search);