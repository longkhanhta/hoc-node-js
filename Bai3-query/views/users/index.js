
var input = document.getElementById('crrtxt');
input.value = sessionStorage.getItem('draft');
input.addEventListener('change', update);
function update() {
    sessionStorage.setItem('draft', input.value);
}