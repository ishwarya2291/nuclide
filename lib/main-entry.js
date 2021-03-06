/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @noflow
 */
'use strict';

/* eslint
  comma-dangle: [1, always-multiline],
  prefer-object-spread/prefer-object-spread: 0,
  rulesdir/no-commonjs: 0,
  */

const {__DEV__} = require('../modules/nuclide-node-transpiler/lib/env');

if (__DEV__) {
  require('../modules/nuclide-node-transpiler');

  // The require profiling is really noisy during tests.
  if (!atom.inSpecMode()) {
    require('./internal/track-nuclide-ready').init({
      byLoadOrder: false,
      loadOrderMinDuration: 10,
      byRoot: true,
    });
  }
}

module.exports = require('./main');
