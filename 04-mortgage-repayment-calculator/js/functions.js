function resetForm() {
  form.reset();
  resultsEmptySection.classList.remove("hidden");
  resultsCompletedSection.classList.add("hidden");
}

function handleForm(e) {
  const mortgageType = {
    REPAYMENT: "repayment",
    INTEREST_ONLY: "interest-only",
  };

  e.preventDefault();
  const amount = parseFloat(form.amount.value);
  const term = parseFloat(form.term.value);
  const rate = parseFloat(form.rate.value);
  const type = form.type.value;

  // Validate form on submit
  const isFormValid = validateForm(amount, term, rate, type);
  if (!isFormValid) {
    return;
  }

  const monthlyRate = rate / 12 / 100;
  const numberOfPayments = term * 12;

  if (type === mortgageType.REPAYMENT) {
    calcRepayment(amount, monthlyRate, numberOfPayments);
  }

  if (type === mortgageType.INTEREST_ONLY) {
    calcInterestOnly(amount, monthlyRate, term);
  }
}

function calcRepayment(amount, monthlyRate, numberOfPayments) {
  // caso especial: tasa 0
  if (monthlyRate === 0) {
    const monthlyPayment = parseFloat((amount / numberOfPayments).toFixed(2));
    const totalAmount = amount.toFixed(2);
    updateInterface(monthlyPayment, totalAmount);
    return;
  }

  // caso normal (tasa > 0)
  const monthlyPayment = parseFloat(
    (
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    ).toFixed(2)
  );

  const totalAmount = (monthlyPayment * numberOfPayments).toFixed(2);

  updateInterface(monthlyPayment, totalAmount);
}

function calcInterestOnly(amount, monthlyRate, term) {
  const monthlyPayment = (amount * monthlyRate).toFixed(2);
  const totalAmount = (monthlyPayment * 12 * term).toFixed(2);

  updateInterface(monthlyPayment, totalAmount);
}

function updateInterface(monthlyPayment, totalAmount) {
  resultsEmptySection.classList.add("hidden");
  resultsCompletedSection.classList.remove("hidden");
  const resultsAmount = document.getElementById("results-amount");
  const resultsTotal = document.getElementById("results-total");
  const formattedMonthly = Number(monthlyPayment).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedTotal = Number(totalAmount).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  resultsAmount.innerText = `£${formattedMonthly}`;
  resultsTotal.innerText = `£${formattedTotal}`;
}

function validateForm(amount, term, rate, type) {
  let isValid = true;

  const fields = [
    { name: "amount", value: amount },
    { name: "term", value: term },
    { name: "rate", value: rate },
    { name: "type", value: type },
  ];

  fields.forEach((field) => {
    // El campo "type" está fuera del patrón .form-group
    if (field.name === "type") {
      const error = document.getElementById("error-type");

      if (field.value === "") {
        error.classList.remove("hidden");
        isValid = false;
      } else {
        error.classList.add("hidden");
      }
      return;
    }

    const group = document.querySelector(`.form-group[data-field="${field.name}"]`);
    const error = group.querySelector(".required-message");

    if (field.name === "amount" || field.name === "term") {
      if (Number(field.value) <= 0 || isNaN(field.value)) {
        group.classList.add("error");
        error.classList.remove("hidden");
        isValid = false;
      } else {
        group.classList.remove("error");
        error.classList.add("hidden");
      }
      return;
    }

    if (field.name === "rate") {
      if (Number(field.value) < 0 || isNaN(field.value)) {
        group.classList.add("error");
        error.classList.remove("hidden");
        isValid = false;
      } else {
        group.classList.remove("error");
        error.classList.add("hidden");
      }
      return;
    }
  });
  return isValid;
}
