var input = [5, -6, -8, 4, -3, 6]
var pos = [];
var jumlahpos = 0;
var neg = [];
var jumlahneg = 0;
var x = 0;
var y = 0;


for (var i = 0; i < input.length; i++) 
{
    if (input[i] > 0) 
    {
        pos[x] = input[i]
        x++;
    }
}
console.log(pos);


for (var j = 0; j < pos.length; j++)
{
    jumlahpos += pos[j]
}
console.log(jumlahpos);



for (var k = 0; k < input.length; k++)
{
    if (input[k] < 0)
    {
        neg[y] = input[k]
        y++;
    }
}

console.log(neg);


for (var l = 0; l < neg.length; l++)
{
    jumlahneg -= neg[l]
}

console.log(jumlahneg);




if (jumlahpos > jumlahneg)
{
    console.log('Positif Win');
}
else if (jumlahpos < jumlahneg)
{
    console.log('Negatif Win');
}
else
{
    console.log('Draw');
}