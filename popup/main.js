import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import './components/app.js';

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('/shoelace');

window.onunhandledrejection = handleError;
window.addEventListener("error", handleError, /*useCapture*/ true);

function handleError(error) {
  console.error(error);
}