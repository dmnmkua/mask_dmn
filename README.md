## example:
```
import mask from 'mask_dmn';

const options = {
  mask: '(XXX) XXX-XX-XX', // example, where X is any symbol
  regexForX: '/[\d]/g', // regex for X, default all numbers,
  eventType: 'input', // event type for input, example 'input', 'blur'
}

mask('.input-class', options);
```