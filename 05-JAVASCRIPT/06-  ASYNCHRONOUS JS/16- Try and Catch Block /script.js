// Example 1:
try {
    console.log("Step 1");       //  Ye chalega
    console.log("Step 2");
    // Galat code
    let a = b + 1;               //  b defined nahi → error
    console.log("Step 3");       //  Ye nahi chalega
} catch(error) {
    console.log("Error caught:", error.message); //  Ye run hoga
}

console.log("After try/catch"); //  Ye bhi chalega

// Example 2:
async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Post Title:", data.title);

    } catch (error) {
        // Agar fetch fail ho jaye ya JSON parsing me error aaye
        console.log("Error caught:", error);
    } finally {
        // Ye block hamesha run hoga
        console.log("Fetch attempt finished.");
    }
}

fetchPost();

