function show(id_projeto){
	var id = Number(id_projeto);
	var light = document.getElementById("lightbox");
	light.removeChild(light.lastChild);
	light.innerHTML = '';
	var urls = ['images/notitas.png',
	'images/satyr.png',
	'images/falow.png',
	'images/alive.png'];
	var nomeProjeto = ['Notitas','Satyr','Falow','Social Media'];
	var plataforma = ['Web/Desktop - P5.js','Desktop - GameMaker','Web/Desktop - PHP','Desktop/Mobile - Pacote Adobe'];
	var descricao = ['O notitas surgiu como um projeto final de 2° semestre do curso Sistemas e Mídia Digitais da UFC e veio com o intuito de aumentar o portfolio da UUNDC de aplicações infantis voltadas para a teoria construcionista de Seymour Papert. ',
	'proj2','proj3','proj4'];
	var img = new Image();
	img.onload = function(){
	  light.appendChild(img);
	  light.innerHTML += '<span class="fechar" onclick="fecharBox()">&times;</span><div id="descricao-trab"><h1>'+nomeProjeto[id]+'</h1><h3>Plataforma: </h3><p>'+plataforma[id]+'</p><h3>Descrição: </h3><p>'+descricao[id]+'</p></div>';
	};
	img.src = urls[id];
	abrirBox();
}
function abrirBox(){
	document.getElementById("overlay").style.display = "block";
}
function fecharBox(){
	document.getElementById("overlay").style.display = "none";
	
}
