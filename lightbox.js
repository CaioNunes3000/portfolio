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
	var alts = ['Poster do projeto Notitas', 'Poster do projeto Satyr', 'Print da página de feed do projeto Falow','Thumbnail de um vídeo do grupo de dança Alive'];
	var descricao = ['O notitas surgiu como um projeto final de 2° semestre da equipe Kiotech, antiga 3+1, do curso Sistemas e Mídia Digitais da UFC e veio com o intuito de aumentar o portfolio da UUNDC de aplicações infantis voltadas para a teoria construcionista de Seymour Papert. <br><a href="https://kiotech3k.wordpress.com/">Link para página do projeto</a>',
	'Satyr foi um jogo criado pela equipe 3+1, da qual fiz parte, como projeto final do 1° semestre no curso Sistemas e Mídias Digitais, período 2017-1. O jogo aborda preservação ambiental, temática dos jogos do semestre daquele período. <br><a href="http://3maisum.blogspot.com/">Link para página do projeto</a>',
	'Falow foi uma rede social que surgiu como projeto final da disciplina Engenharia de Software do IFCE, infelizmente não tem link de página do projeto pois foi descontinuado logo após o término da disciplina',
	'Faço alguns dos projetos de divulgação do grupo de dança Alive DG (K-Pop), desde imagens e video de divulgação no stories do instagram até edição de alguns dos vídeos do canal. <br><a href="https://www.youtube.com/channel/UCDh8wuJPPl5ju38P5whOU1Q">Link para o canal do grupo</a>'];
	var img = new Image();
	img.onload = function(){
	  light.appendChild(img);
	  light.innerHTML += '<span class="fechar" onclick="fecharBox()">&times;</span><div id="descricao-trab"><h1>'+nomeProjeto[id]+'</h1><h3>Plataforma: </h3><p>'+plataforma[id]+'</p><h3>Descrição: </h3><p>'+descricao[id]+'</p></div>';
	};
	img.src = urls[id];
	img.alt = alts[id];
	abrirBox();
}
function abrirBox(){
	document.getElementById("overlay").style.display = "block";
}
function fecharBox(){
	document.getElementById("overlay").style.display = "none";
	
}
function scrollar(dir){
	var elmnt = document.getElementById("portfolio");
	if(dir==1){
		elmnt.scrollLeft = 600;
	}
	if(dir==0){
		elmnt.scrollLeft = -600;
	}
	//console.log(x);
}
var animacao = 0;
if(animacao==0){
	var interval = setInterval(function(){
		var elmnt = document.getElementById("hab");
		var x = elmnt.offsetHeight;
		var pagina = window.pageYOffset;
		if(pagina>=x){
			document.getElementById('php').style.animationPlayState = 'running';
			document.getElementById('python').style.animationPlayState = 'running';
			document.getElementById('jvsc').style.animationPlayState = 'running';
			document.getElementById('htcs').style.animationPlayState = 'running';
			document.getElementById('adps').style.animationPlayState = 'running';
			document.getElementById('adpp').style.animationPlayState = 'running';
			document.getElementById('sv').style.animationPlayState = 'running';
			document.getElementById('esf').style.animationPlayState = 'running';
			animacao = 1;
			clearInterval(interval);
		}
	},1000);
}
