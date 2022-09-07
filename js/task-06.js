const validation = document.querySelector("#validation-input");

const addRemovePassword = (remove, add) => {
  validation.classList.remove(`${remove}`);
  validation.classList.add(`${add}`);
};

const validPassword = (e) => {
  if (Number(validation.dataset.length) < e.currentTarget.value.length) {
    addRemovePassword("valid", "invalid");
  } else {
    addRemovePassword("invalid", "valid");
  }
};

validation.addEventListener("blur", validPassword);