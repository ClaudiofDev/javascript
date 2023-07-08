function verificar() {
    var data = new Date()
    var anoa = data.getFullYear()
    var ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (ano.value.length == 0 || ano.value > anoa){
        window.alert('ERRO!')
    } else {
        var fsex = document.getElementsByName('rad')
        var idade = anoa - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'homem'
        } else if (fsex[1].checked) {
            genero = 'mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        
    }
}
