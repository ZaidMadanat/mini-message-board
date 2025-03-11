const { Router } = require("express"); 

const messages = [ 
    { 
        text: "Hit there!", 
        user: "Amando", 
        added: new Date()
    }, 
    { 
        text: "Hello World!", 
        user: "Charles", 
        added: new Date()
    }
];


const indexRouter = Router(); 




module.exports = indexRouter;