/*


getHeroes       'GET to /heroes/'
getHero (id)    'GET to /heroes/:id'
postHero        'POST to /heroes'
getVillains     'GET to /villains/'
getVillain(id)  'GET to /villains/:id'
postVillain     'POST to /villains'





*/
const router = require("express").Router({ mergeParams: true });

const {
  getCharacter,
  getCharacters,
  postCharacter,
} = require("../controllers/characterController.js");

router.get("/:character", getCharacters);
router.get("/:character/:id", getCharacter);
router.post("/:character", postCharacter);

module.exports = router;
