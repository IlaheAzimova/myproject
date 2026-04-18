const menubar = document.getElementById("menubar");
const menuopen = document.getElementById("menuopen");
const closemenu = document.getElementById("closemenu");
menubar.addEventListener("click", () => {
  menubar.classList.toggle("open");
  menubar.classList.toggle("close")
  const menuopen = document.getElementById("menuopen");
  menuopen.style.display = menuopen.style.display === "none" ? "block" : "none";
});

const SERVICES_URL = "https://api142.nurlandev.click/api/services";

function renderServices(data) {
  const serviceIndex = document.getElementById("serviceIndex");
  serviceIndex.innerHTML = "";

  data.map((item) => {
    serviceIndex.innerHTML += `
      <div class="bg-white rounded-lg shadow p-6 w-72">
        <img 
          src="https://api142.nurlandev.click/public/${item.image}" 
          alt="${item.title}"
          class="w-full h-48 object-cover rounded-lg mb-4"
          onerror="this.style.display='none'"
        />
        <div class="text-2xl mb-2">${item.icon || ""}</div>
        <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
        <p class="text-gray-600">${item.description}</p>
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
  const newsIndex = document.getElementById("newsIndex");
  newsIndex.innerHTML = "";

  data.map((item) => {
    newsIndex.innerHTML += `
      <div class="bg-white rounded-lg shadow p-6 w-80">
        <img 
          src="https://api142.nurlandev.click/public/img/news/${item.main_image}" 
          alt="${item.title}"
          class="w-full h-48 object-cover rounded-lg mb-4"
          onerror="this.style.display='none'"
        />

        <h3 class="text-xl font-semibold mb-2">${item.title}</h3>

        <p class="text-gray-600 mb-3 line-clamp-3">
          ${item.content}
        </p>

       
      </div>
    `;
  });
}

fetch(NEWS_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderNews(res.data);
  });

const SLIDER_URL = "https://api142.nurlandev.click/api/sliders";

function renderSlider(data) {
  const sliderIndex = document.getElementById("sliderIndex");
  sliderIndex.innerHTML = "";

  data.map((item) => {
    sliderIndex.innerHTML += `
      <div class="bg-white rounded-lg shadow p-6 w-80">
        <img 
          src="https://api142.nurlandev.click/public/img/sliders/${item.image}" 
          alt="${item.title}"
          class="w-full h-48 object-cover rounded-lg mb-4"
          onerror="this.style.display='none'"
        />

        <h3 class="text-xl font-semibold mb-2">${item.title}</h3>

        <p class="text-gray-600 mb-3 line-clamp-3">
          ${item.description}
        </p>

       
      </div>
    `;
  });
}

fetch(SLIDER_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderSlider(res.data);
  });


const TEAM_URL = "https://api142.nurlandev.click/api/leaders";

function renderTeam(data) {
  const teamIndex = document.getElementById("teamIndex");
  teamIndex.innerHTML = "";

  data.map((item) => {
    teamIndex.innerHTML += `
      <div class="bg-white rounded-lg shadow p-6 w-80">
        <img 
          src="https://api142.nurlandev.click/public/img/leaders/${item.image}" 
          alt="${item.name}"
          class="w-full h-48 object-cover rounded-lg mb-4"
          onerror="this.style.display='none'"
        />

        <h3 class="text-xl font-semibold mb-2">${item.name}</h3>

        <p class="text-gray-600 mb-3 line-clamp-3">
          ${item.position}
        </p>
      

       
      </div>
    `;
  });
}

fetch(TEAM_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderTeam(res.data);
  });
