import {Request , Response} from "express";
import Tache from "../models/ouvrages";
import Ouvrages from "../models/ouvrages";


        export const createOuvrages = async (req: Request, res: Response): Promise <any> => {
            try {
                const { projectId, title, done, dueDate } = req.body;

                if (!projectId || !title) {
                    res.status(400).json({ message: 'Le projet ID et le titre sont obligatoires' });
                    return;
                }

                const newOuvrages = new Ouvrages ({ projectId, title, done, dueDate });
                const savedOuvrages = await newOuvrages.save();

                res.status(201).json({
                    message : 'La tache à été crée avec succès',
                    Tache : savedOuvrages
                })

            } catch (error : any) {
                if (error.code === 11000) {
                    return res.status(409).json({ message: ' Cet Ouvrages existe deja' });
                }
                console.log(error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        }

                        export const getAllOuvrages = async (req: Request, res: Response) => {
                            try {
                                const Ouvrages = await Tache.find().populate("projectId");
                                res.status(200).json(Ouvrages);
                            } catch (error : any) {
                                res.status(500).json({ message: error.message });
                            }
                        }

                                    export const getOuvragesById = async (req: Request, res: Response) => {
                                        try {
                                            const Ouvrages = await Tache.findById(req.params.id);
                                            res.status(200).json(Ouvrages);
                                        } catch (error : any) {
                                            res.status(500).json({ message: error.message });
                                        }
                                    }

                                                export const updateOuvrages = async (req: Request, res: Response): Promise <any> => {
                                                    try {
                                                        const updates = req.body;
                                                        const { id } = req.params;
                                                        const Ouvrages = await Tache.findByIdAndUpdate(id, updates, { new: true });

                                                        if (!Ouvrages) {
                                                            return res.status(404).json({ message: 'La tache na pas été trouvée' });
                                                        }

                                                        res.status(200).json({ message: 'La tache a été mise à jour avec sucees', Ouvrages });
                                                    } catch (error : any) {
                                                        res.status(500).json({ message: error.message });
                                                    }
                                                }

                                                            export const deleteOuvrages = async (req: Request, res: Response): Promise <any> => {
                                                                try {
                                                                    const { id } = req.params;
                                                                    const Ouvrages = await Tache.findByIdAndDelete(id);
                                                                    if (!Ouvrages) {
                                                                        return res.status(404).json({ message: 'La tache na pas été trouvé' });
                                                                    }
                                                                    res.status(200).json({ message: 'La tache à été supprimé avec succès', Ouvrages });
                                                                } catch (error : any) {
                                                                    res.status(500).json({ message: error.message });
                                                                }
                                                            }