const app = require('./src/app');

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Welcome to the API!");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

