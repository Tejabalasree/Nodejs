//Dynamic logic
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to frontend
app.get("/calculator", (req, res) => {
    res.sendFile(__dirname + "/" + "calculator.html");
});

// Dynamic logic
app.post("/process", (req, res) => {
    // Request data gathering
    const num1 = parseFloat(req.body.num1); // Convert to float to handle decimal inputs
    const num2 = parseFloat(req.body.num2);
    console.log(num1 + " " + num2);

    // Operation determination
    const operation = req.body.cal; // Get the value of the clicked button

    // Business logic
    let result;

    switch (operation) {
        case "Add":
            result = num1 + num2;
            break;
        case "Sub":
            result = num1 - num2;
            break;
        case "Mul":
            result = num1 * num2;
            break;
        case "Div":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }

    // Sending response
    res.send("Result: " + result);
});

// Server logic
app.listen(5000, () => {
    console.log("Server running on port 5000");
});