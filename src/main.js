/* eslint-disable */
import { preFetchLib, bindVueRuntime } from 'hel-micro';
import * as Vue from 'vue';

bindVueRuntime({ Vue });

(async function () {
  await preFetchLib('hel-hrportal-component', { versionId: '0.0.1'});

  await import('./loadApp');
}()).catch(err => {
  console.error('loadApp err: ', err);
});
