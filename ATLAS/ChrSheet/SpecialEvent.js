function checkForSpecial(){
    if (parseInt(document.getElementById('curHP').value) <= parseInt(document.getElementById('maxHP').innerHTML)/4 || parseInt(document.getElementById('curHP').value) == 1){
        document.getElementById('curHP').style.color = "red"
        document.getElementById('maxHP').style.color = "red"
    }
    else
    {
        document.getElementById('curHP').style.color = "black"
        document.getElementById('maxHP').style.color = "black"
    }
}