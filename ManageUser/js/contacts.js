/* 
Activity: Contact manager
*/

//#region Globalvariable declaration section
var programQuit=1;
var userinputarray= [];

//#endregion

console.log("Welcome to Contacts Manager! Below are the options to choose from");

var contactNames = {
    
    init: function(firstname,lastname){
        this.firstname =firstname;
        this.lastname=lastname;
    },

    describe: function(){
        
        var name = "Last Name: " + this.lastname +","+ " First Name: " + this.firstname;
        return name;
    }
};

while (programQuit)
{
    console.log("1: List Contacts \n 2: Add a Contact \n 0: Quit operation");
    var input = prompt("Enter the operation number that you want to perform ");
    switch(input)
        {
                case '1': ListContacts();
                    break;

                case '2': AddContacts();
                    break;

                case '0': quit();   
                    break;

                default:
                    alert("Entered Operation number doesnt exist");
                    break;
        }
}

//#region Functions
function ListContacts(){
        var initialNameList= [];
        var initialName1 = Object.create(contactNames);
        var initialName2 = Object.create(contactNames);

        initialName1.init("Smith","John");
        initialName2.init("Doe","Jane");

        initialNameList.push(initialName1);
        initialNameList.push(initialName2);
        console.log("Here is list of all your contacts");
        
        initialNameList.forEach(function(contactNames) {
        console.log(contactNames.describe());            
        });

        //Length check is required for initial searches before user has entered any Contact
        if(userinputarray.length >0)
        {
            userinputarray.forEach(function(contactNames)
            {
                console.log(contactNames.describe());  

            });
        }
}

function AddContacts(){
        
        
        var inputLastName = prompt("Enter LastName of the user");
        var inputFirstName = prompt("Enter FirstName of the user");

        var userinput = Object.create(contactNames);
        userinput.init(inputLastName,inputFirstName);
        userinputarray.push(userinput);
        console.log("Contact added");
}


function quit(){
        programQuit=0;
        console.log("Thank you for choosing our service");
        
}
//#endregion