function toggleBox(e) {
    let box = document.getElementById("box");
    e.name === 'menu-outline' ? (e.name = "close-outline", box.classList.add('top-[80px]'), box.classList.add('opacity-100')) : (e.name = "menu-outline", box.classList.remove('top-[80px]'), box.classList.remove('opacity-100'))
}