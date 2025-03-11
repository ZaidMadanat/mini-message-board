const { Router } = require("express"); 


const indexRouter = Router(); 


// Starting messages "Data Base"
const messages = [ 
    { 
        text: "Hi there!", 
        user: "Amando", 
        added: new Date()
    }, 
    { 
        text: "Hello World!", 
        user: "Charles", 
        added: new Date()
    }
];

// Rendering EJS files for index and form, with 
// the home route rendering a title and messages and new pointing to form
indexRouter.get("/", (req, res) => res.render("index", {title: "Mini Messageboard", messages: messages})); 
indexRouter.get("/new", (req, res) => res.render("form"))

// Taking the request from the form and pushing it onto our messages. 
indexRouter.post("/new", (req, res) => { 
    messageText = req.body.messageText
    user = req.body.user; 
    messages.push({text: messageText, user: user, added: new Date()});
    res.redirect("/");
});

module.exports = indexRouter;