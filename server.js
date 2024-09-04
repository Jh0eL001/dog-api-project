import express from "express";
import axios from "axios";

const app = express()
const port = 5000;
app.use(express.static("public"));

app.get("/",  async (req, res) => {
  try {
    const response =  await axios.get("https://dog.ceo/api/breeds/image/random");
    const dogImageUrl = response.data.message;

    // Render the index.ejs template with the dog image URL
    res.render("index.ejs", { dogImageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send("QUE TOCASTE MARIA!!!");
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`)
})