"use strict";

const electron = require('electron');

const EventEmitter = require('events');

const {
  getElectronMajorVersion
} = require('../../../common/processUtils');

const {
  SPELLCHECK_RESULT,
  SPELLCHECK_REPLACE_MISSPELLING,
  SPELLCHECK_GET_AVAILABLE_DICTIONARIES,
  SPELLCHECK_SET_LOCALE,
  SPELLCHECK_SET_LEARNED_WORDS
} = require('../common/constants').IPCEvents;

if (getElectronMajorVersion() < 8) {
  async function setSpellCheckProvider(locale, autoCorrectWord, provider) {
    const asyncProvider = {
      spellCheck: (words, callback) => callback(words.filter(word => !provider.spellCheck(word)))
    };
    electron.webFrame.setSpellCheckProvider(locale, asyncProvider);
  }

  async function replaceMisspelling(word) {
    electron.ipcRenderer.invoke(SPELLCHECK_REPLACE_MISSPELLING, word);
  }

  module.exports = {
    setSpellCheckProvider,
    replaceMisspelling
  };
} else {
  const events = new EventEmitter();
  electron.ipcRenderer.on(SPELLCHECK_RESULT, handleSpellcheckData);

  function handleSpellcheckData(_, misspelledWord, dictionarySuggestions) {
    events.emit('spellcheck-result', misspelledWord, dictionarySuggestions);
  }

  function on() {
    events.on.apply(events, arguments);
  }

  function removeListener() {
    events.removeListener.apply(events, arguments);
  }

  async function getAvailableDictionaries() {
    return electron.ipcRenderer.invoke(SPELLCHECK_GET_AVAILABLE_DICTIONARIES);
  }

  async function setLocale(locale) {
    let succeeded = true;

    try {
      await electron.ipcRenderer.invoke(SPELLCHECK_SET_LOCALE, locale);
    } catch (_) {
      succeeded = false;
    }

    return succeeded;
  }

  async function setLearnedWords(learnedWords) {
    return electron.ipcRenderer.invoke(SPELLCHECK_SET_LEARNED_WORDS, learnedWords);
  }

  async function replaceMisspelling(correction) {
    return electron.ipcRenderer.invoke(SPELLCHECK_REPLACE_MISSPELLING, correction);
  }

  module.exports = {
    on,
    removeListener,
    getAvailableDictionaries,
    setLocale,
    setLearnedWords,
    replaceMisspelling
  };
}