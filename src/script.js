const BASE_URL = "https://api142.nurlandev.click/api/services";

function renderServices(data) {
  const container = document.getElementById("services-container");
  container.innerHTML = "";

  data.map((item) => {
    container.innerHTML += `
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

fetch(BASE_URL)
  .then((res) => res.json())
  .then((res) => {
    if (res.data) renderServices(res.data);
  });