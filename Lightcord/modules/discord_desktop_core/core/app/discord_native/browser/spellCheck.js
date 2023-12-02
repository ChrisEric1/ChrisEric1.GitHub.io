"use strict";

const electron = require('electron');

const {
  SPELLCHECK_REPLACE_MISSPELLING,
  SPELLCHECK_GET_AVAILABLE_DICTIONARIES,
  SPELLCHECK_SET_LOCALE,
  SPELLCHECK_SET_LEARNED_WORDS
} = require('../common/constants').IPCEvents;

let _learnedWords = new Set();

let _hasLoadedLearnedWords = false;
electron.ipcMain.handle(SPELLCHECK_REPLACE_MISSPELLING, async (event, correction) => {
  event.sender.replaceMisspelling(correction);
});
electron.ipcMain.handle(SPELLCHECK_GET_AVAILABLE_DICTIONARIES, async _ => {
  return electron.session.defaultSession.availableSpellCheckerLanguages;
});
electron.ipcMain.handle(SPELLCHECK_SET_LOCALE, async (_, locale) => {
  electron.session.defaultSession.setSpellCheckerLanguages([locale]);
});
electron.ipcMain.handle(SPELLCHECK_SET_LEARNED_WORDS, async (_, newLearnedWords) => {
  const session = electron.session.defaultSession;

  if (!_hasLoadedLearnedWords) {
    const dictionaryContents = await session.listWordsInSpellCheckerDictionary();
    _learnedWords = new Set(dictionaryContents);
    _hasLoadedLearnedWords = true;
  }

  _learnedWords.forEach(word => {
    if (!newLearnedWords.has(word)) {
      session.removeWordFromSpellCheckerDictionary(word);
    }
  });

  newLearnedWords.forEach(word => {
    if (!_learnedWords.has(word)) {
      session.addWordToSpellCheckerDictionary(word);
    }
  });
  _learnedWords = new Set(newLearnedWords);
});