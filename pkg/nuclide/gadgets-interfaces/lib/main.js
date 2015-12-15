'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export type Gadget = {
  gadgetId: string;
  deserializeState?: (state: Object) => Object;
  prototype: Object;
};

export type GadgetsService = {
  registerGadget(gadget: Gadget): atom$IDisposable;
};
