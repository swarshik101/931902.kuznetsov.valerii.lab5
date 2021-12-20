modal = document.querySelector(".modal");
header = document.querySelector(".modal__header");
content = document.querySelector(".modal__content");
overlay = document.querySelector(".overlay");

var news = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.  ',
  'В ВМС США появился первый экипаж корабля, который определяет себя как сухопутную дивизию. В оперативном штабе главного управления ВМС США заявили о первом в истории коллективном заявлении от экипажа целого корабля о переходе в другой род войск.'
]

openModal = (e) => {
  news_card = document.getElementById(e);
  header.innerText = news_card.querySelector(".header").innerText;
  content.innerText = news[e];
  modal.style.display = "block";
  overlay.style.display = "block";
  document.addEventListener("keyup", closeModal);
  overlay.addEventListener("click", closeModal);
}

closeModal = (e) => {
  console.log(e);
  if (e.type == "click" || e.code == 'Escape') {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.removeEventListener("keyup", closeModal);
    overlay.removeEventListener("click", closeModal);
  }
}