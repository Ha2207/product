express = require("express");
const fs = require("fs");
const hostname = 'localhost' ;
const port =  process.env.port ||  5000 ;
solan = 0;


app = express();
// ----------------------------
router = express.Router();

router.get("/" , (req,res) => {
    content = fs.readFileSync("./views/home.html");
    res.end(content);
} );
router.get("/about" , (req,res) => {
    content = fs.readFileSync("./views/about.html");
    res.end(content);
} );
router.get("/profile" , (req,res) => {
    content = fs.readFileSync("./views/profile.html");
    res.end(content);
} );
router.get("/products" , (req,res) => {
    content = fs.readFileSync("./views/products.html");
    res.end(content);
} );
router.get("/cart" , (req,res) => {
    content = fs.readFileSync("./views/cart.html");
    res.end(content);
} );

// ----------------------------
app.use("/", router);
app.use( express.static("public") );
app.listen( port );

console .log( `Server running at
    http://${hostname}:${port}/` );