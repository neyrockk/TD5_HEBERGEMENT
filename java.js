let popup = document.getElementById('popup');
function spawn(){
    popup.style.visibility ="visible"
    popup.style.opacity ="1"
}
function cacher(){
    popup.style.visibility ="hidden"
}
function despawn(){
    setTimeout(cacher, 1)
    popup.style.opacity ="0"
}
