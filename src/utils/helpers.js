export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};
