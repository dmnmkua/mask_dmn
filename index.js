const defaultOptions = {
  mask: '', // mask type for example '(XXX) XXX-XX-XX'
  regexForX: /[\d]/g, // regex for X, default all numbers,
  eventType: 'input', // event type for input, example 'input', 'blur'
}

const replaceAndReturnArray = (value, regex) => value.match(regex) || [];

function mask(cssSelector, options) {
  const opt = {...defaultOptions, ...options};
  const { mask, regexForX, eventType } = opt;
  const elements = document.querySelectorAll(cssSelector);

  elements.forEach(elem => {
    elem.addEventListener(eventType, ev => {
      if(ev.target.tagName !== 'INPUT') return;
      let value = ev.target.value;

      if(!mask.length) return value;

      let arrValue = replaceAndReturnArray(value, regexForX);
      for(let i = 0; i < arrValue.length; i++) {
        if(mask[i] !== 'X' && i <= mask.length) {
          arrValue.splice(i, 0, mask[i]);
        }
      }

      ev.target.value = arrValue.join('').substring(0, mask.length);
    })
  });
}

export default mask;