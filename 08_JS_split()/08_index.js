"use strict"

var details = "John-(+284)264-5879, Smith-(+272)718-9438, Garry-(+972)284-4928, David-(+284)735-4826";
var result = details.split(',');
var John = document.write(result[0], '<br/>');
var Smith = document.write(result[1], '<br/>');
var Garry = document.write(result[2], '<br/>');
var David = document.write(result[3]);

console.table(result);