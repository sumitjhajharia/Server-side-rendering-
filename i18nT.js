const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
});

module.exports = {
  default: NextI18NextInstance,
  appWithTranslation: NextI18NextInstance.appWithTranslation,
  withTranslation: NextI18NextInstance.withTranslation,
  i18n: NextI18NextInstance.i18n,
};
