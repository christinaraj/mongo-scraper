var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
	author:{
		type: String
	},
	content: {
		type: String
	}
});

var Note = mongoose.model('Note', noteSchema);

module.exports = Note;