document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const symbol = question.querySelector("span");

     
      if (answer.style.display === "block") {
        answer.style.display = "none";
        symbol.textContent = "+";
      } else {
        answer.style.display = "block";
        symbol.textContent = "–";
      }
    });
  });
});
