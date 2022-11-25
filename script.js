const rectangle = document.querySelector('.rectangle');
const topLeft = document.querySelector('input[name=top-left]');
const topRight = document.querySelector('input[name=top-right]');
const bottomRight = document.querySelector('input[name=bottom-right]');
const bottomLeft = document.querySelector('input[name=bottom-left]');
const copyCssButton = document.querySelector('#copy-css-button');

const handleChangeValue = (e) => {
  if (e.target.value[0] === '-') e.target.value = e.target.value.slice(1);

  let { name, value } = e.target;
  if (!value) value = 0;

  const valueElement = document.querySelector(`#${name}-value`);
  valueElement.textContent = value;

  rectangle.style[`border-${name}-radius`] = `${value}px`;
};

const handleCopyCss = () => {
  const paragraphs = Array.from(document.querySelectorAll('.resulting-css'));
  const resultingCss = paragraphs.reduce((result, next) => {
    return result += `${next.textContent};\n`;
  }, '');
  navigator.clipboard.writeText(resultingCss);
  showCopyFeedback();
};

const showCopyFeedback = () => {
  copyCssButton.textContent = 'Copied!';
  setTimeout(() => copyCssButton.textContent = 'Copy CSS', 1500);
};

topLeft.addEventListener('change', handleChangeValue);
topLeft.addEventListener('keyup', handleChangeValue);

topRight.addEventListener('change', handleChangeValue);
topRight.addEventListener('keyup', handleChangeValue);

bottomRight.addEventListener('change', handleChangeValue);
bottomRight.addEventListener('keyup', handleChangeValue);

bottomLeft.addEventListener('change', handleChangeValue);
bottomLeft.addEventListener('keyup', handleChangeValue);

copyCssButton.addEventListener('pointerup', handleCopyCss);