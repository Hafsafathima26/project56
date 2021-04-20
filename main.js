
function setDate() {
document.getElementById("date").innerHTML = new Date().toDateString();
}
document.addEventListener('DOMContentLoaded', function() {
    setDate();
}, false);
