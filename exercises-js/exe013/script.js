// Escrever um algoritmo que lê um value em reais e calcula qual o menor número possível de moneyBills de 100, 50, 10, 5 e 1 em que o value lido pode ser decomposto. Escrever o value lido e a relação de moneyBills necessárias.

var value = 589  
console.log(`value: ${value}`)

var moneyBill100 = parseInt(value/100);
console.log(`Money bills 100: ${moneyBill100}`);

var leftovers = (value-(moneyBill100*100));
var moneyBill50 = parseInt(leftovers/50);
console.log(`Money bills 50: ${moneyBill50}`);

leftovers = (value-((moneyBill100*100)+(moneyBill50*50)));
var moneyBill10 = parseInt(leftovers/10);
console.log(`Money bills 10: ${moneyBill10}`);

leftovers = (value-((moneyBill100*100)+(moneyBill50*50)+(moneyBill10*10)));
var moneyBill5 = parseInt(leftovers/5);
console.log(`Money bills 5: ${moneyBill5}`);

leftovers = (value-((moneyBill100*100)+(moneyBill50*50)+(moneyBill10*10)+(moneyBill5*5)));
var moneyBill1 = parseInt(leftovers/1);
console.log(`Money bills 1: ${moneyBill1}`);

leftovers = (value-((moneyBill100*100)+(moneyBill50*50)+(moneyBill10*10)+(moneyBill5*5)+(moneyBill1*1)));

if (leftovers==1){
console.log(leftovers);
}