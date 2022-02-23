const mainContent = document.querySelector('main');
const tabs = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

mainContent.onclick = (event) => {
    const id = event.target.dataset.id;
    if (id) {
        tabs.forEach( (tab)=>tab.classList.remove("active"));
    }
    event.target.classList.add("active");

    contents.forEach((content) => content.classList.remove("active"));

    const activeTab = document.getElementById(id);
    activeTab.classList.add("active");
}