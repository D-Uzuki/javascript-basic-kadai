const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
  const h2Element = document.getElementById('text');
  h2Element.textContent = 'ボタンをクリックしました';
});