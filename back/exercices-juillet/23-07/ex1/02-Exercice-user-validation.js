app.post("/users", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Le champ 'username' est requis." });
  }


  if (typeof username !== 'string') {
    return res.status(400).json({ error: "Le champ 'username' doit être une chaîne de caractères." });
  }

  const trimmedUsername = username.trim();
  if (trimmedUsername.length === 0) {
    return res.status(400).json({ error: "Le champ 'username' ne peut pas être vide." });
  }

  if (trimmedUsername.length < 3 || trimmedUsername.length > 20) {
    return res.status(400).json({ error: "Le 'username' doit contenir entre 3 et 20 caractères." });
  }

  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(trimmedUsername)) {
    return res.status(400).json({ error: "Le 'username' ne doit contenir que des lettres, chiffres ou underscores." });
  }

  res.status(201).json({ message: "Username valide." });
});