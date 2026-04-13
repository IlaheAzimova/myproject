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