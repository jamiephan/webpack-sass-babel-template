// Styles
import './../style/main.scss';

const createElement = new Promise(resolve => {
  const element = document.createElement('div');
  element.innerHTML = ` <br>Babel and Webpack have been configured properly.`;
  resolve(element);
});

async function insertElement(element) {
  const div = await element.then(d => d);
  document.body.appendChild(div);
}
insertElement(createElement);
