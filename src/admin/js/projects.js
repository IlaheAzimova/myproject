let project = document.getElementById("project");
let formList = document.getElementById("formList");
const BASE_URL = "https://api142.nurlandev.click/api/projects";

let data = [];

function render(data) {
  project.innerHTML = "";
  data.map((item) => {
    project.innerHTML += `
    
             <tr class="even:bg-blue-50">
                  <td class="p-4 text-[15px] text-slate-900 font-medium">
                  <img src="https://api142.nurlandev.click/public/${item.image}" alt="" />
                  </td>
                  <td class="p-4 text-[15px] text-slate-600 font-medium">
                      ${item.title}
                  </td>
                  <td class="p-4 text-[15px] text-slate-600 font-medium">
                     ${item.description}
                  </td>
                  <td class="p-4 text-[15px] text-slate-600 font-medium">
                      ${item.icon}
                  </td>
                  <td class="p-4 text-[15px] text-slate-600 font-medium"> ${item.status == 1 ? "Aktiv" : "DeAktiv"}
                  <td class="p-4">
                    <div class="flex items-center">
                      <button onclick="editProject(${item.id})" class="mr-3 cursor-pointer" title="Edit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                          viewBox="0 0 348.882 348.882"
                        >
                          <path
                            d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                            data-original="#000000"
                          />
                          <path
                            d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      <button onclick='deleteProject(${item.id})' title="Delete" class="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 fill-red-500 hover:fill-red-700"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          />
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
    `;
  });
}

// getAllProducts

function getAllProducts() {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((res) => {
      data = res.data;
      render(data);
    });
}

// postProduct

function addProject() {
  let projectTitle = document.getElementById("projectTitle");
  let projectIcon = document.getElementById("projectIcon");
  let projectDesc = document.getElementById("projectDesc");
  let projectImage = document.getElementById("projectImage");
  let projectOrder = document.getElementById("projectOrder");
  let projectStatus = document.getElementById("projectStatus");
  let projectContent = document.getElementById("projectContent");

  const formData = new FormData();

  formData.append("title", projectTitle.value);
  formData.append("description", projectDesc.value);
  formData.append("content", projectContent.value);
  formData.append("sort_order", projectOrder.value);
  formData.append("status", projectStatus.value);
  formData.append("icon", projectIcon.value);
  if (projectImage.files[0]) {
    formData.append("image", projectImage.files[0]);
    0;
  }

  fetch(BASE_URL, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      if (res.status) {
        projectTitle.value = "";
        projectIcon.value = "";
        projectDesc.value = "";
        projectImage.value = "";
        projectContent.value = "";
        projectOrder.value = "";
        projectStatus.value = "";

        document.getElementById("modal").classList.add("hidden");

        showToast("Project added successfully!");
        getAllProducts();
      } else {
        showToast("Xəta baş verdi!", "error");
      }
    });
}

// deleteProduct

function deleteProject(id) {
  if (!confirm("Silmək istədiyinizə əminsiniz?")) return;

  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status) {
        showToast("Project silindi!");
        getAllProducts();
      } else {
        showToast("Xəta baş verdi!", "error");
      }
    });
}

// editProject
let editProjectId = document.getElementById("editProjectId");
let editProjectImage = document.getElementById("editProjectImage");
let editProjectTitle = document.getElementById("editProjectTitle");
let editProjectDesc = document.getElementById("editProjectDesc");
let editProjectIcon = document.getElementById("editProjectIcon");

function editProject(id) {
  const item = data.find((x) => x.id == id);

  editProjectId.value = item.id;
  editProjectTitle.value = item.title;
  editProjectDesc.value = item.description;
  editProjectIcon.value = item.icon;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function yenileProject() {
  const id = editProjectId.value;
  if (!id) return alert("Mehsul secin!");

  const formData = new FormData();

  formData.append("title", editProjectTitle.value);
  formData.append("description", editProjectDesc.value);
  formData.append("icon", editProjectIcon.value);

  if (editProjectImage.files[0]) {
    formData.append("image", editProjectImage.files[0]);
  }

  fetch(`${BASE_URL}/${id}`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status) {
        showToast("Ugurla yenilendi");
        updateForm();
        getAllProducts();
      } else {
        showToast("Xeta bas verdi", "error");
      }
    });
}

function updateForm() {
  formList.reset();
  editProjectId.value = "";
}

function showToast(message, type = "success") {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: type === "success" ? "#0aad0a" : "#e24b4a",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
    },
  }).showToast();
}

getAllProducts();
