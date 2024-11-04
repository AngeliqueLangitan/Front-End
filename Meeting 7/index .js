//1. PROMISE
// Function to return a Promise
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000); // Timeout duration of 2000 milliseconds
    });
}

// Async function to log the message
async function messages() {
    const msg = await helloWorld(); // Wait for helloWorld to resolve
    console.log(msg); // Log the message to the console
}

// Call the messages function
messages();

// //2. FETCH
// // Function to fetch user data
// function ambilDataUser() {
//     fetch("https://reqres.in/api/users")
//         .then(response => {
//             return response.json(); // Parse the JSON response
//         })
//         .then(users => {
//             // Log only the 'email' of each user
//             users.data.forEach(user => {
//                 console.log(user.email); // Display user's email
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error); // Handle any errors
//         });
// }

// // Call the function
// ambilDataUser();

// //3. ASYNC AWAIT
// // Function to fetch user data using async/await
// async function ambilDataUser() {
//     try {
//         const response = await fetch("https://reqres.in/api/users"); // Fetch data from the API
//         const users = await response.json(); // Parse the JSON response
        
//         // Log only the 'email' of each user
//         users.data.forEach(user => {
//             console.log(user.email); // Display user's email
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error); // Handle any errors
//     }
// }

// // Call the function
// ambilDataUser();

// //4. AXIOS

// const ambilDataUser = async () => {
//     let result = await fetch ("https://reqres.in/api/users");
//     result.data.data.forEach((user) => {
//         console.log(user.email);
//     });
// }

// ambilDataPengguna();
