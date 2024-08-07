function init() {
  const drawerEl = document.querySelector(".drawer");
  const openDrawerBtn = document.querySelector(".drawer-open");
  const closeDrawerBtn = document.querySelector(".drawer-close");

  openDrawerBtn?.addEventListener?.("click", () => {
    drawerEl.classList.remove("hidden");
  });

  closeDrawerBtn?.addEventListener?.("click", () => {
    drawerEl.classList.add("hidden");
  });
}
init();
