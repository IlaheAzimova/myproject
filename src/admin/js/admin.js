// let products = document.getElementById("products");

// let data = [];

// function render(data) {
//   products.innerHTML = "";
//   data.map((item) => {
//     products.innerHTML += `
//      <div onclick="showDetail(${item.id})" id="${item.id}" class="p-4 border border-[#cbcbcb] rounded-xl flex items-center md:items-start justify-between flex-col">
//             <div class="relative">
//               <img src="${item.img}" alt="" />
              
//             </div>
//             <div class="flex justify-between gap-3 flex-col w-full">
//               <p class="text-[#889397] text-[14px] font-semibold">
//                 ${item.category}
//               </p>
//               <div>
//                 <h4 class="font-bold">${item.title}</h4>
                
//               </div>
//               <div class="flex items-center justify-between">
//                 <p class="font-semibold">$${item.price}</p>
               
//               </div>
//             </div>
//           </div>
//     `;
//   });
// }

// // getAllProducts

// function getAllProducts() {
//   fetch("https://69c817bf63393440b317688f.mockapi.io/product")
//     .then((res) => res.json())
//     .then((res) => {
//       data = res;
//       render(data);
//     });
// }

// // postProduct

// function addProduct() {
//   let name = document.getElementById("name");
//   let price = document.getElementById("price");
//   let category = document.getElementById("category");
//   let image = document.getElementById("image");

//   const newProduct = {
//     title: name.value,
//     price: +price.value,
//     category: category.value,
//     img: image.value,
//   };

//   fetch("https://69c817bf63393440b317688f.mockapi.io/product", {
//     method: "POST",
//     body: JSON.stringify(newProduct),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => res.json())
//     .then(() => {
//       name.value = "";
//       price.value = "";
//       category.value = "";
//       image.value = "";
//       showToast("Product added successfully!");
//       setTimeout(() => {
//         window.location.href = "index.htm";
//       }, 1500);
//     });
// }

// deleteProduct


// detail

// function createSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, '')
//     .replace(/[\s_-]+/g, '-')
//     .replace(/^-+|-+$/g, '');
// }

// function showDetail(productId) {
//   const product = data.find(p => p.id == productId);
//   const slug = createSlug(product.title);
//   window.location.href = `productDetail.htm?p=${slug}`;
// }

// function showToast(message, type = "success") {
//   Toastify({
//     text: message,
//     duration: 3000,
//     gravity: "top",
//     position: "right",
//     stopOnFocus: true,
//     style: {
//       background: type === "success" ? "#0aad0a" : "#e24b4a",
//       borderRadius: "8px",
//       fontSize: "14px",
//       fontWeight: "500",
//     },
//   }).showToast();
// }

// getAllProducts();



document.addEventListener('DOMContentLoaded', () => {
      // header
      var toggleOpen = document.getElementById('toggleOpen');
      var toggleClose = document.getElementById('toggleClose');
      var collapseMenu = document.getElementById('collapseMenu');

      function handleClick() {
        if (collapseMenu.style.display === 'block') {
          collapseMenu.style.display = 'none';
        } else {
          collapseMenu.style.display = 'block';
        }
      }

      toggleOpen.addEventListener('click', handleClick);
      toggleClose.addEventListener('click', handleClick);

      // sidebar
      let sidebarToggleBtn = document.getElementById('toggle-sidebar');
      let sidebar = document.getElementById('sidebar');
      let sidebarCollapseMenu = document.getElementById('sidebar-collapse-menu');

      sidebarToggleBtn.addEventListener('click', () => {
        if (!sidebarCollapseMenu.classList.contains('open')) {
            sidebarCollapseMenu.classList.add('open');
            sidebarCollapseMenu.style.cssText = 'width: 270px; visibility: visible; opacity: 1; height: calc(100vh - 72px)';
            sidebarToggleBtn.style.cssText = 'left: 250px;';
        } else {
            sidebarCollapseMenu.classList.remove('open');
            sidebarCollapseMenu.style.cssText = 'width: 32px; visibility: hidden; opacity: 0; height: calc(100vh - 72px)';
            sidebarToggleBtn.style.cssText = 'left: 10px;';
        }

      });
    });

document.addEventListener('DOMContentLoaded', () => {
        let modal = document.getElementById('modal');
        let openModalBtn = document.getElementById('openModal');
        let closeModalBtns = [document.getElementById('closeIcon'), document.getElementById('closeButton')];

        function showModal() {
            modal.classList.remove('hidden');
        }

        function hideModal() {
            modal.classList.add('hidden');
        }

        openModalBtn.addEventListener('click', showModal);

        closeModalBtns.forEach(btn => btn.addEventListener('click', hideModal));

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', (event) => {
            if (event.target === modal.firstElementChild) {
                hideModal();
            }
        });
    });