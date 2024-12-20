import express from "express";

const app = express();
const port = 3000;

// Middleware to parse request body
app.use(express.urlencoded({ extended: true })); // For form-encoded data
app.use(express.json()); // For JSON data

// Serve static files
app.use(express.static("public"));

// Set view engine
app.set("view engine", "ejs");
app.set("views", "./views");

const messagesArray = [
    "Chal malik ka phone rakhde gandu",
    "Chal ek or mouka dia tujhe",
    "Insaan ko kabhi hamesha dobara try karna chahiye",
    "7 7 1 7 14 hai be password",
    "Cahl thera photu le liya maine",
    "Gali to nahi dunga lekin chutya hai tu",
    "Dobara daal matlab password re",
    "143 shona daal ye hai password",
    "Aaj kon se colour ki chaddi pehne ho",
    "Kyu nahi ho rahi padhai...",
    "Padhai likhai karo IAS wais bano",
    "Aaj site band hai",
    "Incognito nahi khulegi aaj",
    "Aaj mutthalgiri nahi chalegi",
    "Hila hila ke dimag kamjor ho gaya tera"
];

let message = " ";

// Route to render login page
app.get("/", (req, res) => {
    res.render("index", { message });
});

// Route to handle form submission
app.post("/login", (req, res) => {
    const password = req.body.password; // Access the password from the request body
    console.log(`Password entered: ${password}`);

    // Perform authentication logic here
    if (password === "xxx") {
        res.send("Login successful!");
    } else {
        message = messagesArray[Math.floor(Math.random() * messagesArray.length)];
        res.render("index", { message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
