//Using a variable to store a string//
var username;
var message;
username = 'Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;

//Using quotes inside a string//
var title;
var message;
title = "Molly's Special Offers";
message = '<a herf=\"sale.html\">25% off!</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message;

//Using a variable to store a boolean//
var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;