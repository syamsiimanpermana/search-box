// mendapatkan semua elemen
const search = document.querySelector(".search");
const input = search.querySelector("input");
const box = search.querySelector(".autocom-box");
const icon = search.querySelector(".icon");
const linktag = search.querySelector("a");
let weblink;

// jika user mengetikan sesuatu
input.onkeyup = (e) => {
	let datauser = e.target.value; 
	let arraykosong = [];
	if (datauser) {
		icon.onclick = ()=>{
			weblink = "https://google.com/search?q=" + datauser;
			linktag.setAttribute("href", weblink);
			console.log(weblink);
			linktag.click();
		}

		arraykosong = suggestions.filter((data) =>{
			// memfilter isi array
			return data.toLocaleLowerCase().startsWith(datauser.toLocaleLowerCase());
		});

		arraykosong = arraykosong.map((data)=>{
			return data = '<li>'+ data +'</li>';
		});

		tampilkansuggestion(arraykosong);
		let semualist = box.querySelectorAll("li");
		search.classList.add("aktif");

		for (var i = 0; i < semualist.length; i++) {
			// menambahkan event clik
			semualist[i].setAttribute("onclick", "select(this)");
		}

	}else{
		search.classList.remove("aktif");
	}
}

window.onload = ()=>{
	input.value = '';
}

function select(element){
	let pilihanuser = element.textContent;
	input.value = pilihanuser;
	search.classList.remove("aktif");
}

function tampilkansuggestion(list) {
	let datalist;
	if (!list.length) {
		uservalue = input.value;
		datalist = '<li>'+ uservalue +'</li>';
	} else {
		datalist = list.join('');
	}
	box.innerHTML = datalist;
}
