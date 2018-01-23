const queries = require( './queries');


exports.addRecipe = (req, res) => {
  const { title, ingredients, method, imageUrl, tags } = req.body;
  const { id } = req.user;

  if(!title || !ingredients || !method || !id ){
    return res.status(422).send();
  }

  queries
  .addRecipe(id, title, ingredients, method, imageUrl, tags)
  .then(()=>{
    res.status(200).send();
  })
  .catch((err) => {
    res.status(500).send();
  });
}

exports.getRecipes = (req, res) => {
  const { id } = req.user;

  queries
  .getRecipes(id)
  .then((recipes) => {
    res.status(200).send(recipes);
  })
  .catch((err) => {
    res.status(500).send();
  });
}

exports.getSingleRecipe = (req, res) => {
  const { id } = req.params;

  queries
  .getSingleRecipe(id)
  .then((recipe) => {
    res.status(200).send(recipe);
  })
  .catch((err) => {
    res.status(500).send();
  });
}

exports.deleteRecipe = (req, res) => {
  const { id } = req.params;

  queries
  .deleteRecipe(id)
  .then(() => {
    res.status(200).send();
  })
  .catch((err) => {
    res.status(500).send();
  });
}
