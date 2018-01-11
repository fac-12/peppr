const queries = require( './queries');


exports.addRecipe = (req,res) => {
  const { title, ingredients, method, imageUrl, tags } = req.body;
  const { id } = req.user;


  //validate
  if(!title || !ingredients || !method ){
    return res,status(422).send({error: 'You must provide a title, ingredient and method'})
  }

  queries
  .addRecipe(id, title, ingredients, method, imageUrl, tags)
  .then(()=>{
    res.status(200).send();
  })
 .catch(console.log)
}
