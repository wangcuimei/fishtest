import Vue from 'vue';

console.log(Vue);

document.getElementById("aBtn").onclick = function () {
  require.ensure([], function () {
    //import a from './a.js';
    var a = require('./a.js');
    console.log(a.data);
  });
};

document.getElementById("bBtn").onclick = function () {
  require.ensure([], function () {
    //import b from './b.js';
    var b = require('./b.js');
    console.log(b.data);
  });
};