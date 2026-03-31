const labels = ['', 'Péssimo', 'Ruim', 'Regular', 'Bom', 'Excelente'];

function goTo(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const id = n === 0 ? 'home' : 'p' + n;
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function rate(page, value) {
  document.querySelectorAll('#stars-' + page + ' .star').forEach((s, i) => {
    s.classList.toggle('selected', i < value);
  });
  document.getElementById('label-' + page).textContent = labels[value];
  document.getElementById('btn-' + page).disabled = false;
}

function toggleSub(item) {
  const sub = item.nextElementSibling;
  const isOpen = sub.classList.contains('open');

  document.querySelectorAll('.submenu.open').forEach(s => {
    s.classList.remove('open');
    s.previousElementSibling.classList.remove('expanded');
  });

  if (!isOpen) {
    sub.classList.add('open');
    item.classList.add('expanded');
  }
}