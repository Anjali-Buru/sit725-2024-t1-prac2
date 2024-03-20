const express = require('express');
const app = express();
const port = 3000;

app.get('/addTwoNumbers', (req, res) => {
    // Extract query parameters num1 and num2 from req.query
    const { var1, var2 } = req.query;

    // Check if both num1 and num2 are provided
    if (!var1 || !var2) {
        return res.status(400).json({ error: "Both numbers are required" });
    }

    // Convert num1 and num2 to numbers
    const x = Number(var1);
    const y = Number(var2);

    // Calculate the sum
    const sum_of_two_numbers = x + y;

    // Send the result as JSON
    res.json({ Total_of_two_numbers : sum_of_two_numbers });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


