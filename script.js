document.addEventListener('DOMContentLoaded', () => {
  const CONTRACT = "0xYOUR_CONTRACT_ADDRESS_HERE";
  const IMAGES = [
    "https://picsum.photos/seed/meme1/600/400",
    "https://picsum.photos/seed/meme2/600/400",
    "https://picsum.photos/seed/meme3/600/400",
    "https://picsum.photos/seed/meme4/600/400",
    "https://picsum.photos/seed/meme5/600/400",
    "https://picsum.photos/seed/meme6/600/400"
  ];

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('contractDisplay').textContent = CONTRACT;
  document.getElementById('copyBtn').addEventListener('click', async e => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      e.target.textContent = "Copied!";
      setTimeout(()=> e.target.textContent = "Copy CA", 1500);
    } catch {
      alert(CONTRACT);
    }
  });

  // populate gallery
  const grid = document.getElementById('galleryGrid');
  IMAGES.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    grid.appendChild(img);
  });

  // modal
  const modal = document.getElementById('buyModal');
  const buyBtn = document.getElementById('buyBtn');
  const closeBtn = document.getElementById('modalClose');
  const cancelBtn = document.getElementById('cancelBuy');
  const execBtn = document.getElementById('execBuy');
  const amountInput = document.getElementById('buyAmount');
  const estMeow = document.getElementById('estMeow');

  buyBtn.onclick = ()=> modal.classList.remove('hidden');
  closeBtn.onclick = cancelBtn.onclick = ()=> modal.classList.add('hidden');

  amountInput.addEventListener('input', () => {
    const val = parseFloat(amountInput.value) || 0;
    estMeow.textContent = val > 0 ? (val*10000000).toLocaleString()+" $MEOW" : "—";
  });

  execBtn.onclick = ()=> {
    alert("Simulated buy only!");
    modal.classList.add('hidden');
  };
});
