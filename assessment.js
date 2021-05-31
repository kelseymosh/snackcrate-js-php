//Write a function to manipulate phone numbers into the expected format
    //Expected user input +1 (813)-416-5555, 813-416-5555, (813)-416-5555
    //Acceptable value to return 8134165555
const manipulatePhoneNumber = (phoneNumber) => {
    let numbers = phoneNumber.replace(/[^0-9]/g, '')
    return (numbers.length > 10) ? numbers.slice(1) : numbers
}
// console.log(manipulatePhoneNumber("+1 (813)-416-5555")) 


//Write a function to display an html form on a client side interface.
    //Form values will be First Name, Last Name, Zip Code, Email Address 
const createForm = () => {
    const form = document.querySelector('form')
    const firstName = document.createElement('input')
    firstName.value = 'First Name'

    const lastName = document.createElement('input')
    lastName.value = 'Last Name'

    const zipCode = document.createElement('input')
    zipCode.value = 'Zip Code'

    const emailAddress = document.createElement('input')
    emailAddress.value = 'Email Address'

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    form.append(firstName, lastName, zipCode, emailAddress, submit)
}
createForm()

//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
    //moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
const moveZeros = (array) => {
    let zeros = [];
    let nonZeros = []; 
        
    array.forEach(element => (element === 0) ? zeros.push(element): nonZeros.push(element))
    return nonZeros.concat(zeros)
}
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
