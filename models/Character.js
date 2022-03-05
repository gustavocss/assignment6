const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function stringToArray(powerString) {
    return powerString.split(',').map((element) => element.trim());
}

const CharacterSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30,
    },
    powers: {
        type: [String],
        default: ['Super strength'],
        set: stringToArray,
    },
    type: {
        type: String,
        enum: ['hero', 'villain'],
        default: 'hero',
    },
    hp: {
        type: Number,
        default: 1,
    },
});

CharacterSchema.virtual('description').get(() => {
    let descriptionString = `${this.name} is a ${this.type === 'hero' ? 'noble hero' : 'nefarious villain'} whose special powers are `;
    for (power of this.powers) {
        descriptionString += power;
        descriptionString += ' ';
    }

    return descriptionString;
});

CharacterSchema.statics.findByType = function (type) {
    return this.find({ type });
};

const Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;

/*

  // Assign a function to the "statics" object of our animalSchema
  animalSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, 'i') });
  };
  // Or, equivalently, you can call `animalSchema.static()`.
  animalSchema.static('findByBreed', function(breed) { return this.find({ breed }); });

*/
