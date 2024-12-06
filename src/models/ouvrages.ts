import { Schema, model, Document } from "mongoose";

// Définir une interface pour les taches
interface IOuvrages extends Document {
    projectId: Schema.Types.ObjectId;
    title : string;
    done : boolean;
    dueDate : Date;
}


// Créer un schéma pour les taches
const OuvragesSchema = new Schema<IOuvrages>({
    projectId: {type: Schema.Types.ObjectId, ref: 'Projet', required: true},
    title: {type: String, required: true},
    done: {type: Boolean, default : false},
    dueDate: {type: Date, required: false},
})

const Ouvrages = model<IOuvrages>('Ouvrages', OuvragesSchema);

export default Ouvrages