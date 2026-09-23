import express from "express";

const app = express();

// GET

app.get("/working", (req, res) => {
  res.send("I am working Perfectly");
});

app.get("/profile", (req, res) => {
  res.status(200).json({
    name: "Zeeshan Ali",
    userId: "123",
  });
});

const PORT = 5050;

app.listen(PORT, () => {
  console.log("Server is Running on PORT 5050");
});
