//Write a function to create an 'X' by 'X' tic tac toe board defined by the "boardSize" value and make it playable.
    //Retrieve information from a GET to dictate moves
    //Key and example Values In the GET
        //XY='0,3'
        //turn=x
        //boardSize=12



//Write a function to manipulate phone numbers into the expected format
    //Expected user input +1 (813)-416-5555, 813-416-5555, (813)-416-5555
    //Acceptable value to return 8134165555
const validatePhoneNumber = (phoneNumber) => {

}
    
    
    //Write a function to display an html form on a client side interface.
        //Form values will be First Name, Last Name, Zip Code, Email Address 
    
    
    
    //Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
        //moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
    const moveZeros = (array) => {
        let zeros = [];
        let nonZeros = [];
    
        array.forEach(element => (element === 0) ? zeros.push(element): nonZeros.push(element))
        return nonZeros.concat(zeros)
    }
    
    console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))