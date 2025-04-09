import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/proxy", async (req, res) => {
  const { url, options } = req.body;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors du proxy: " + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 Proxy running on port ${PORT}`);
});
