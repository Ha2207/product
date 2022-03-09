express = require("express");
const fs = require("fs");
const hostname = 'localhost' ;
const port =  process.env.port ||  5000 ;
solan = 0;


app = express();
// ----------------------------
router = express.Router();

router.get("/" , (req,res) => {
    res.end(" tam cho ve mot it tin tuc !!! ");
} );
router.get("/about" , (req,res) => {} );
router.get("/profile" , (req,res) => {} );
router.get("/products" , (req,res) => {} );
router.get("/cart" , (req,res) => {} );

// ----------------------------
app.use("/", router);
app.listen( port );

console .log( `Server running at
    http://${hostname}:${port}/` );
