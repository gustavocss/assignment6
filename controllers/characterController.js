const getHeroes = (req, res) => {
  res.json({ heroes: [{ name: "cleiton" }, { name: "batman" }] });
};

const getHero = (req, res) => {
  const { id } = req.params;
  res.json({ id: id, name: `this is the hero with id ${id}` });
};

const postHero = (req, res) => {
  const { name, powers, hp } = req.body;
  type = "hero";
  res.json({ name, powers, type, hp });
};

const getVillains = (req, res) => {
  res.json({ villains: [{ name: "cleiton" }, { name: "batman" }] });
};

const getVillain = (req, res) => {
  const { id } = req.params;
  res.json({ id: id, name: `this is the villain with id ${id}` });
};

const postVillain = (req, res) => {
  const { name, powers, hp, type } = req.body;
  res.json({ name, powers, type, hp });
};

module.exports = {
  getHeroes,
  getHero,
  postHero,
  getVillains,
  getVillain,
  postVillain,
};
