const inputs = document.querySelectorAll('.controls input');
console.log(inputs)

const modifyInput = (event) => {
  const suffix = event.target.dataset.unity
  document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
};

inputs.forEach((input) => {
  input.addEventListener('change', modifyInput);
  });
