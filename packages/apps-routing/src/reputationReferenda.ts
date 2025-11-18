// Copyright 2017-2025 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Route, TFunction } from './types.js';

import Component, { useCounter } from '@polkadot/app-reputation-referenda';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: [
        'tx.referenda.submit',
        'tx.reputationVoting.vote',
        'consts.referenda.tracks'
      ]
    },
    group: 'governance',
    icon: 'person-booth',
    name: 'reputation-referenda',
    text: t('nav.reputation-referenda', 'Reputation Referenda', { ns: 'apps-routing' }),
    useCounter
  };
}
