document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
  
    // Function to update active link
    const updateActiveLink = () => {
      let currentSection = "";
  
      // Loop through sections to find the one in view
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70; // Offset for fixed header
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });
  
      // Update active class
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      }
      );
    };
  
    // Listen for scroll events
    window.addEventListener("scroll", updateActiveLink);
  });
  