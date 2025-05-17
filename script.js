// script para rolagem suave ao clicar no menu
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// script para destacar o menu conforme o usuário scrolla as seções
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const menuItems = document.querySelectorAll(".navbar a");

  let scrollY = window.scrollY;
  let windowBottom = scrollY + window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (
      (scrollY >= sectionTop && scrollY < sectionBottom) ||
      (windowBottom >= document.body.scrollHeight && section.id === "contato")
    ) {
      const currentId = section.getAttribute("id");

      menuItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${currentId}`) {
          item.classList.add("active");
        }
      });
    }
  });
});


