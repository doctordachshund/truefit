const app = require("./app.js");

// Create a port for the app to listen on
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
