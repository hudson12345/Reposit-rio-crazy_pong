let canvasPong = document.getElementById('canvas');/*varial para manipular o elemento canvas atraves do id*/
let quadro = canvasPong.getContext('2d');/*deixa o canvas pronto para receber desenhos 2D*/
quadro.fillStyle = "red";
quadro.fillRect(100, 100, 200, 200);