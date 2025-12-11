btnClear.addEventListener("click", resetForm);
form.addEventListener("submit", handleForm);

// Validates amount, term and rate fields in real time (as the user types)
["amount", "term", "rate"].forEach((field) => {
  const input = document.getElementById(field);

  input.addEventListener("input", () => {
    const value = input.value;
    const group = document.querySelector(`.form-group[data-field="${field}"]`);
    const error = group.querySelector(".required-message");

    if (field === "amount" || field === "term") {
      if (Number(value) <= 0 || value === "") {
        group.classList.add("error");
        error.classList.remove("hidden");
      } else {
        group.classList.remove("error");
        error.classList.add("hidden");
      }
      return;
    }

    if (field === "rate") {
      if (value === "" || Number(value) < 0) {
        group.classList.add("error");
        error.classList.remove("hidden");
      } else {
        group.classList.remove("error");
        error.classList.add("hidden");
      }
    }
  });
});

// Validates type field in real time (as the user types)
document.querySelectorAll('input[name="type"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const selected = document.querySelector('input[name="type"]:checked');
    const error = document.getElementById("error-type");

    if (!selected) {
      error.classList.remove("hidden");
    } else {
      error.classList.add("hidden");
    }
  });
});
