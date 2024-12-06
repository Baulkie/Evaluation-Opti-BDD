import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import tacheRoutes from './routes/OuvragesRoutes';
import projetRoutes from './routes/ProjectsRoutes';
import dotenv from 'dotenv';
dotenv.config();


// Créer notre app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/Projects', projetRoutes);
app.use ('/Ouvrages', tacheRoutes);

const uri = process.env.MONGO_URI
mongoose.connect(uri as string)
    .then(() => {
        console.log('Connection sur MongoDB')
    })
    .catch((error) => {
        console.log('Erreur de connection sur MongoDB', error)
    })


app.listen(PORT, () => {
    console.log(`Exemple app listening on port ${PORT}`)
})