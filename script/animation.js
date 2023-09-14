const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Use querySelectorAll to select all elements with the "hidden" class
const hiddenElements = document.querySelectorAll(".hidden");

// Convert NodeList to an array using the spread operator
[...hiddenElements].forEach((el) => observer.observe(el));
