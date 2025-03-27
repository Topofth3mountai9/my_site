export const split_text_into_spans = (selector) => {
  let elements = document.querySelectorAll(selector);
  // console.log(elements);
  elements.forEach((element) => {
    // console.log(element);
    let text = element.innerText;
    let split_text = text
      .split('')
      .map(function (char) {
        return `<span>${char === ' ' ? '&nbsp;nbsp;' : char}</span>`;
      })
      .join('');
    element.innerHTML = split_text;
  });
};
