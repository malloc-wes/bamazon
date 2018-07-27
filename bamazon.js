var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port:8889,
    user:"root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err){
    if( err) throw err;
    console.log("connection successful!");
    makeTable();
});

var makeTable = function(){
    connection.query("SELECT * FROM products", function(err, res){
        for(var i=0; i<res.length; i++){
            console.log(res[i].itemId+" || "+res[i].productName+" || "+res[i].departmentName+" || "+res[i].Price+" || "+res[i].stockQuantity+"\n");
        }
        promptUser(res);
    })
}
var promptUser = function(res){
    inquirer.prompt([{
        type:'input',
        name: 'choice',
        message: 'What would you like to buy? [Exit with C]'
    }]).then(function(answer){
        var correct = false;
        for (var i=0;i<res.length;i++){
            if(res[i].productName==answer.choice){
                correct=true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type:'input',
                    name:'quantity',
                    message: 'How many are you buying?',
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else{
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stockQuantity-answer.quantity)>0){
                        connection.query("UPDATE products SET stockquantity= ' " +(res[id].stockQuantity-answer.quantity)+" 'WHERE productname= '"+product+"'",function(err,res2){
                            console.log("Product Purchased!");
                            makeTable();
                        })
                    }else{
                        console.log("Not a valid entry.");
                        promptUser(res)
                    }
                })
            }
        }
    })
}