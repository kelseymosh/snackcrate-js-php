//Write a function to manipulate phone numbers into the expected format
    //Expected user input +1 (813)-416-5555, 813-416-5555, (813)-416-5555
    //Acceptable value to return 8134165555
    const manipulatePhoneNumber = (phoneNumber) => {
        let integers = [];
        
        for (let i = 0; i < phoneNumber.length; i++) {
            if (typeof phoneNumber[i] === 'string') {
                integers.push(phoneNumber[i])
            }
        }
        return integers
    }
    // console.log(manipulatePhoneNumber(813-416-5555)) 
        
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
    // console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))