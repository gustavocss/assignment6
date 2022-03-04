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
  getHeroes,
  getHero,
  postHero,
} = require("../controllers/characterController.js");

router.get("/heroes", getHeroes);
router.get("/heroes/:id", getHero);
router.post("/heroes", postHero);
router.get("/villains", getHeroes);
router.get("/villains/:id", getHero);
router.post("/villains", postHero);

module.exports = router;
