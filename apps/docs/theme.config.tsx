import React from 'react';

export default {
  logo: <span>Ego Exchange Docs</span>,
  project: {
    link: 'https://github.com/ego-exchange/ego-exchange'
  },
  docsRepositoryBase: 'https://github.com/ego-exchange/ego-exchange/tree/main/apps/docs/content/docs',
  footer: {
    text: 'Ego Exchange Documentation'
  },
  useNextSeoProps() {
    return { titleTemplate: '%s – Ego Exchange Docs' };
  }
};
