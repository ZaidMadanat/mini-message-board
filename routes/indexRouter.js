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
indexRouter.get("/", console.log("Hello Wrold")); 
indexRouter.get("/messages", console.log("Messages"));
indexRouter.get("/", (req, res) => res.render("index", {title: "Mini Messageboard", messages: messages}));

module.exports = indexRouter;