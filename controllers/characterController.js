const getCharacters = (req, res, next) => {
  const { character } = req.params.character;
  if (character === "heroes") {
    res.status(200).json({ heroes: [{ name: "cleiton" }, { name: "batman" }] });
  } else if (character === "villains") {
    res
      .status(200)
      .json({ villains: [{ name: "cleiton" }, { name: "batman" }] });
  } else {
    res.status(404).send("Not found");
  }
};

const getCharacter = (req, res) => {
  const { id, character } = req.params;
  if (character === "heroes") {
    res
      .status(200)
      .json({ id: id, name: `this is the ${character} with id ${id}` });
  } else if (character === "villains") {
    res
      .status(200)
      .json({ id: id, name: `this is the ${character} with id ${id}` });
  } else {
    res.status(404).send("Not found");
  }
};

const postCharacter = (req, res) => {
  const { character } = req.params;
  // append to heroes or villains
  const { name, powers, hp } = req.body;
  type = character;
  res.json({ name, powers, type, hp });
};

module.exports = {
  getCharacter,
  getCharacters,
  postCharacter,
};
