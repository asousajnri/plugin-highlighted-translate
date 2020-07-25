import 'regenerator-runtime/runtime';

import { operators, translate, getSelected } from '../libs/index';
const { isApprovedTag } = operators;

import popup from './modules/popup';

const handleMouseUp = e => {
  const tagMouseuped = e.target;

  chrome.storage.sync.get(['plugin_hl-t'], async response => {
    const { preffixCountry } = response['plugin_hl-t'];

    const { objectSelection, selectedText } = getSelected();
    if (!selectedText || !isApprovedTag(tagMouseuped.tagName).length) return;

    const { sourceLanguage, translatedText } = await translate(preffixCountry)(selectedText);
    if (sourceLanguage !== 'en' || objectSelection.anchorNode === null) return;

    popup.show({
      objectSelection,
      selectedText,
      sourceLanguage,
      translatedText,
    });
  });
};

const start = () => {
  popup.render();
  popup.closeWithMouseEvent();
  document.addEventListener('mouseup', handleMouseUp);
};

chrome.extension.onMessage.addListener(({ renderHTMLPopupOnPage }, ...args) => {
  if (renderHTMLPopupOnPage) {
    start();
  } else {
    popup.remove();
    popup.removeCloseWithMouseEvent();
    document.removeEventListener('mouseup', handleMouseUp);
  }
});
