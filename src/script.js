const menubar = document.getElementById("menubar");
const menuopen = document.getElementById("menuopen");
const closemenu = document.getElementById("closemenu");
if (menubar) {
  menubar.addEventListener("click", () => {
    menubar.classList.toggle("open");
    menubar.classList.toggle("close");
    const menuopen = document.getElementById("menuopen");
    if (menuopen) {
      menuopen.style.display =
        menuopen.style.display === "none" ? "block" : "none";
    }
  });
}

const SERVICES_URL = "https://api142.nurlandev.click/api/services";

function renderServices(data) {
  const servicesSection = document.getElementById("servicesSection");
  servicesSection.innerHTML = "";

  data.map((item) => {
    servicesSection.innerHTML += `
      <div class=" bg-white border-0 shadow-2xl p-8 rounded-lg">
              <div class="flex items-center">
                <span
                  class="bg-[#18191d] hover:bg-[#e9a132] duration-300 rounded-lg py-3 px-2"
                >
                  <i class="${item.icon || ""} text-[30px] text-white"></i
                ></span>
                <p class="text-[#18191d] font-[600] text-[18px] px-2">
                 ${item.title}
                </p>
              </div>
              <p class="text-[#666] text-[16px] py-3">
               ${item.description}
              </p>
              <img
                src="https://api142.nurlandev.click/public/${item.image}"
                alt=""
                class="h-[30vh] w-[100%] object-cover"
              />
            </div>
    `;
  });
}

fetch(SERVICES_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderServices(res.data);
  });

const NEWS_URL = "https://api142.nurlandev.click/api/news";

function renderNews(data) {
  const news = document.getElementById("news");
  news.innerHTML = "";

  data.map((item) => {
    news.innerHTML += `



      <article class="blog-card">
              <div class="blog-card-image">
                <img  src="https://api142.nurlandev.click/public/img/news/${item.main_image}"  alt="${item.title}" />
              </div>
              <div class="blog-card-body">
                <div class="blog-meta">
                  <span><i class="fa-solid fa-user"></i> By admin</span>
                  <span><i class="fa-solid fa-comments"></i> 3 comments</span>
                </div>
                <h3>${item.title}</h3>
                <p>
                  ${item.content}
                </p>
              </div>
            </article>
    `;
  });
}

fetch(NEWS_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderNews(res.data);
  });

const SLIDER_URL = "https://api142.nurlandev.click/api/sliders";
const wrapper = document.getElementById("sliderWrapper");

function renderSlider(data) {
  wrapper.innerHTML = "";

  data.forEach((item) => {
    wrapper.innerHTML += `
  <div class="swiper-slide"
    style="
      background:
        linear-gradient(to right, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.2) 100%),
        url('https://api142.nurlandev.click/public/img/sliders/${item.image}');
      background-size: cover;
      background-position: center;
      padding-top: 120px;
      display: flex;
      align-items: center;
    "
  >
    <div class="text-white max-w-2xl">
      <p class="text-[#e9a132] text-sm font-semibold uppercase tracking-widest mb-3">
        This Week Only for World Premier
      </p>
      <h1 class="text-5xl font-extrabold leading-tight mb-6">
        ${item.title}
      </h1>
      <p class="text-gray-300 text-base mb-8 max-w-lg leading-relaxed">
        ${item.description}
      </p>
      <button class="bg-[#e9a132] hover:bg-[#ce9f02] duration-300 px-8 py-3 rounded text-white font-semibold">
        Get A Quote
      </button>
    </div>
  </div>
`;
  });

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: { enabled: true },
  });

  document
    .querySelector(".swiper-button-prev-custom")
    .addEventListener("click", () => swiper.slidePrev());
  document
    .querySelector(".swiper-button-next-custom")
    .addEventListener("click", () => swiper.slideNext());
}
fetch(SLIDER_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderSlider(res.data);
  });

const TEAM_URL = "https://api142.nurlandev.click/api/leaders";

function renderTeam(data) {
  const team = document.getElementById("team");
  team.innerHTML = "";

  data.map((item) => {
    team.innerHTML += `
     <article class="team-card">
              <div class="team-photo">
                <img src="https://api142.nurlandev.click/public/img/leaders/${item.image}"  alt="${item.name}" />
                <div class="team-socials">
                  <a href="#" aria-label="Facebook"
                    ><i class="fa-brands fa-facebook-f"></i
                  ></a>
                  <a href="#" aria-label="Twitter"
                    ><i class="fa-brands fa-twitter"></i
                  ></a>
                  <a href="#" aria-label="Dribbble"
                    ><i class="fa-brands fa-dribbble"></i
                  ></a>
                </div>
              </div>
              <div class="team-info">
                <h3>${item.name}</h3>
                <p> ${item.position}</p>
              </div>
            </article>
    `;
  });
}

fetch(TEAM_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderTeam(res.data);
  });

const testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 2 },
  },
});

document.getElementById("testimonialPrev").addEventListener("click", () => {
  testimonialSwiper.slidePrev();
});
document.getElementById("testimonialNext").addEventListener("click", () => {
  testimonialSwiper.slideNext();
});

const slider = document.getElementById('slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const cards = document.querySelectorAll('.card');

let counter = 0;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    slider.style.transform = `translateX(${-counter * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    // Ekran genişliyinə görə görünən kart sayını təyin et
    let visibleCards = 4;
    if (window.innerWidth <= 540) visibleCards = 1;
    else if (window.innerWidth <= 768) visibleCards = 2;
    else if (window.innerWidth <= 1100) visibleCards = 3;

    if (counter >= cards.length - visibleCards) {
        counter = 0; // Sona çatanda başa qayıt
    } else {
        counter++;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    let visibleCards = 4;
    if (window.innerWidth <= 540) visibleCards = 1;
    else if (window.innerWidth <= 768) visibleCards = 2;
    else if (window.innerWidth <= 1100) visibleCards = 3;

    if (counter <= 0) {
        counter = cards.length - visibleCards;
    } else {
        counter--;
    }
    updateSlider();
});

window.addEventListener('resize', updateSlider);
