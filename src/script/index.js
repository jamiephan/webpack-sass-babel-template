// Styles
import '../style/main.scss';

const createElement = new Promise((resolve) => {
  // eslint-disable-next-line no-undef
  const element = document.createElement('div');
  // eslint-disable-next-line max-len
  element.innerHTML = '<br>Babel and Webpack have been configured properly.';
  resolve(element);
});
/**
 * Insert a Promised HTMLElement into DOM.
 * @param {Promise} element The Promise the resolved as HTMLElement
 */
async function insertElement(element) {
  const div = await element.then((d) => d);
  // eslint-disable-next-line no-undef
  document.body.appendChild(div);
}
insertElement(createElement);
