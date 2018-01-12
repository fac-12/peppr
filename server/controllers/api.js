const queries = require( './queries');


exports.addRecipe = (req,res) => {
  const { title, ingredients, method, imageUrl, tags } = req.body;
  const { id } = req.user;

  //validate
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
  })
}
