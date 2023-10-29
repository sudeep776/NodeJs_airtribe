const express = require("express")
const router = express.Router()

const movies = [{
  id:1,
name:"RRR",
year:2023,
director:'SSR',
genre:['Crime','Drama'],
rating:9.3,
},{
  id:2,
  name:"Jawaan",
  year:2023,
  director:'Atlee',
  genre:['action','drama'],
  rating:9.1,
}]

router.get("/", (req, res) => {
  res.send(movies);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id, 10));
  res.send(movie);
});

router.post("/", (req, res) => {
  const movie = req.body;
  movie.id = movies.length + 1;
  console.log({ body: req.body });
  movies.push(movie);
  res.send({ success: true });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const movie = req.body;
  movie.id = parseInt(id, 10);
  movies[id - 1] = movie;
  res.send({ success: true });
});

module.exports = router;