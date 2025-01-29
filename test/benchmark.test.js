'use strict';

import Benchmark from 'benchmark';
import { ssid } from '../index.js';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';
import shortid from 'shortid';

const suite = new Benchmark.Suite();

suite
    .add('secure-short-id', () => {
        ssid(8);
    })
    .add('nanoid', () => {
        nanoid(8);
    })
    .add('uuid', () => {
        uuidv4(8);
    })
    .add('shortid', () => {
        shortid.generate(8);
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: true });
