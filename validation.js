// Variables
const inputs = document.querySelectorAll("input");
const patterns = {
  username: /^[A-Za-zÀ-ÖØ-öø-ÿ\d]{5,12}$/,
  password: /^[\w@-]{8,20}$/i,
  email: /^([A-Za-zÀ-ÖØ-öø-ÿ\d\._-]+)@([A-Za-zÀ-ÖØ-öø-ÿ\d-]+)\.([A-Za-zÀ-ÖØ-öø-ÿ]{2,66})(\.[A-Za-zÀ-ÖØ-öø-ÿ]{2,8})?$/,
  telephone: /^\d{11}$/,
  slug: /^[A-Za-zÀ-ÖØ-öø-ÿ\d-]{8,20}$/
};

// Validation function
const validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
};

// Add event listeners to inputs
inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
