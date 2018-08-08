var input = 'kaKJB812&##@&12asj';


var regExhuruf = /[^A-Za-z]/g;
huruf = input.replace(regExhuruf, '')
hasilhuruf = huruf.split('');

console.log(hasilhuruf);


var regExangka = /[^0-9]/g;
angka = input.replace(regExangka, '');
hasilangka = angka.split('');

console.log(hasilangka);