const rectangle = document.querySelector('.rectangle');
const topLeft = document.querySelector('input[name=top-left]');
const topRight = document.querySelector('input[name=top-right]');
const bottomRight = document.querySelector('input[name=bottom-right]');
const bottomLeft = document.querySelector('input[name=bottom-left]');

const handleChangeValue = (e) => {
  if (e.target.value[0] === '-') e.target.value = e.target.value.slice(1);

  let { name, value } = e.target;
  if (!value) value = 0;

  rectangle.style[`border-${name}-radius`] = `${value}px`;
};

topLeft.addEventListener('change', handleChangeValue);
topLeft.addEventListener('keyup', handleChangeValue);

topRight.addEventListener('change', handleChangeValue);
topRight.addEventListener('keyup', handleChangeValue);

bottomRight.addEventListener('change', handleChangeValue);
bottomRight.addEventListener('keyup', handleChangeValue);

bottomLeft.addEventListener('change', handleChangeValue);
bottomLeft.addEventListener('keyup', handleChangeValue);
