const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Fonctions utilitaires pour lire/écrire des fichiers JSON
const readJson = (path) => {
  const raw = fs.readFileSync(path, 'utf-8');
  return JSON.parse(raw);
};
const writeJson = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};
const afficherFichier = (chemin) => {
  const contenu = readJson(chemin);
  console.log(contenu);
};
afficherFichier('./data/posts.json');

// Test de démarrage
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API du mini-blog !');
});

// Routes
// GET /posts
app.get('/posts', (req, res) => {
  try {
    const posts = readJson('./data/posts.json');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la lecture des articles" });
  }
});

// GET /posts/:id
app.get('/posts/:id', (req, res) => {
  try {
    const posts = readJson('./data/posts.json');
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: "Article non trouvé" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /posts
app.post('/posts', (req, res) => {
  try {
    const posts = readJson('./data/posts.json');
    const newPost = {
      id: Date.now(),
      title: req.body.title,
      content: req.body.content,
      author: req.body.author || "Anonyme"
    };
    posts.push(newPost);
    writeJson('./data/posts.json', posts);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la création de l’article" });
  }
});

// PATCH /posts/:id
app.patch('/posts/:id', (req, res) => {
  try {
    const posts = readJson('./data/posts.json');
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: "Article non trouvé" });
    Object.assign(post, req.body);
    writeJson('./data/posts.json', posts);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la modification" });
  }
});

// DELETE /posts/:id
app.delete('/posts/:id', (req, res) => {
  try {
    let posts = readJson('./data/posts.json');
    const id = parseInt(req.params.id);
    const exists = posts.some(p => p.id === id);
    if (!exists) return res.status(404).json({ error: "Article non trouvé" });
    posts = posts.filter(p => p.id !== id);
    writeJson('./data/posts.json', posts);
    res.json({ message: "Article supprimé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la suppression "});
  }
});

// GET /posts/:id/comments
app.get('/posts/:id/comments', (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const comments = readJson('./data/comments.json');
    const filteredComments = comments.filter(c => c.postId === postId);
    res.json(filteredComments);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la lecture des commentaires" });
  }
});

// POST /posts/:id/comments
app.post('/posts/:id/comments', (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const comments = readJson('./data/comments.json');
    const newComment = {
      id: Date.now(),
      postId: postId,
      author: req.body.author || "Anonyme",
      content: req.body.content
    };
    comments.push(newComment);
    writeJson('./data/comments.json', comments);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la création du commentaire" });
  }
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  try {
    let comments = readJson('./data/comments.json');
    const id = parseInt(req.params.id);
    const exists = comments.some(c => c.id === id);
    if (!exists) return res.status(404).json({ error: "Commentaire non trouvé" });
    comments = comments.filter(c => c.id !== id);
    writeJson('./data/comments.json', comments);
    res.json({ message: "Commentaire supprimé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la suppression du commentaire" });
  }
}); 


// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
