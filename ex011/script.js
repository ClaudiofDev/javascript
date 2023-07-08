function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora < 12 && hora >= 5) {
         img.src = '../imagens/fotomanha.png'
    } else if (hora < 18 && hora >= 12) {
        img.src = '../imagens/fototarde.png' 
    } else {
        img.src = '../imagens/fotonoite.png'
    }



}