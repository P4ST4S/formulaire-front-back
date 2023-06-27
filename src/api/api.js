const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/formulaire", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données établie");
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à la base de données", error);
  });

const formulaireSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
  },
  object: {
    type: String,
    required: true,
  },
  where: {
    type: String,
    required: true,
  },
});

const Formulaire = mongoose.model("Formulaire", formulaireSchema);

app.post("/formulaire", async (req, res) => {
  try {
    const formulaire = new Formulaire(req.body);
    await formulaire.save();
    res.status(201).json(formulaire);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Serveur à l'écoute");
});
