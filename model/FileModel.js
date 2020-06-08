import { Schema, model } from 'mongoose';

const fileSchema = new Schema({
    filename: {
        type: String,
        required: true 
    }, 
    file_unique_id: {
        type: String,
    },
    dir: {
        type: String,
        required: true
    }
});

export default model('file', fileSchema);
