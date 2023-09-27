// Use the delete Keyword to Remove Object Properties
let fruit = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

delete fruit.apples;
console.log(fruit);
/*
{
    oranges: 32, 
    plums: 28, 
    bananas: 13, 
    grapes: 35, 
    strawberries: 27
}
*/
