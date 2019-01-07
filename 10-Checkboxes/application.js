const checkboxes = document.querySelectorAll('.item input');
const sentences = document.querySelectorAll('.item p')

console.log(checkboxes);
console.log(sentences);

let lastChecked;

const check = (event) => {
  let inBetween = false;
  if (event.shiftKey && event.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === lastChecked || checkbox === event.target) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = event.target;
};

const listen = (checkbox) => {
  checkbox.addEventListener('click', check);
}
checkboxes.forEach(listen);

