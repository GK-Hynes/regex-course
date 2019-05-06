// Variables
const inputs = document.querySelectorAll("input");
const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/i,
  email: /^([a-z\d\._-]+)@([a-z\d-]+)\.([a-z]{2,66})(\.[a-z]{2,8})?$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/
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
