const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "d98ff472-5f53-4586-b3ef-8ccce7a717ec"}} // PROJECT PRIVATE KEY
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.r.status).json(e.r.data)
  }


  return res.json({ username: username, secret: "sha256..." }); // secret: is a fake pasword
});

app.listen(3001);