const EventEmitter  = require('events');



class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales();

myEmitter.on('newSale',()=>{
    console.log("there was a new sale!");

});


myEmitter.on('newSale',()=>{
    console.log("customer name: Ishant");
});


myEmitter.on('newSale',stock=>{
    console.log(`there are ${stock} products left`);

} );

myEmitter.emit('newSale', 10);
 

