import {model, Schema, Document} from 'mongoose';


// Définir une interface pour notre utilisateur
interface IProjet extends Document {
    name: string;
    description: string;
    createdAt: Date;
    status : 'planned' | 'in-progress' | 'completed';
}

// Créer notre schéma pour les projets
const projetSchema = new Schema<IProjet>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    status: { type: String, enum: ['planned', 'in-progress', 'completed'], default: 'planned' },
})

projetSchema.index({name: 'text', description: 'text'})
const Projet = model<IProjet>('Projet', projetSchema);


export default Projet