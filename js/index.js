const menu = document.getElementById('jeader');
const logo = document.getElementById('devPediaLogo');

menu.addEventListener('mouseover', (e) => {
  document.getElementById(e.target.id).style.color="yellow";
  document.getElementById(e.target.id).style.cursor="pointer";
});

menu.addEventListener('mouseout', (e) => {
  document.getElementById(e.target.id).style.color="white";
});

menu.addEventListener('click', (e) => {
  if (e.target.id != "jeader") {
    open(e.target.id+'.html', 'contenedor');
  }
})

logo.addEventListener('click', () => {
  open('index.html', '_self');
});
