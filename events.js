const EventEmitter  = require('events');
const http = require('http');


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
 
////////////////////////////////////
const server = http.createServer();


server.on('request', (req,res)=>{
       console.log('Request Received!');
       res.end(`Request received`);

})

server.on('request', (req,res)=>{
    
    res.end(`Another one!`);
    
})
server.on("close", ()=>{
    console.log(`Server closed!`);

})


 server.listen(8000 ,'127.0.0.1',()=>{
     console.log(`Waiting for response!`);

 }
 )