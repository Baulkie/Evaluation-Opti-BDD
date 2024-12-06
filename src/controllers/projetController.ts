import { Request, Response } from "express";
import Project from "../models/projet";
import Tache from "../models/ouvrages";

export const getAllProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

            export const createProject = async (req: Request, res: Response): Promise<any> => {
                try {
                    const { name, description } = req.body;

                    if (!name || !description) {
                        res.status(400).json
                            ({ message: 'Le nom et la description sont obligatoires' });
                        return;
                    }

                    const project = await Project.create({ name, description });
                    await project.save();
                    res.status(201).json({
                        message: 'Le projet à été créer avec succès',
                    });
                } catch (error) {
                    res.status(500).json({ message: 'Internal server error' });
                }
            }

                                export const getProjectById = async (req: Request, res: Response) => {
                                    try {
                                        const project = await Project.findById(req.params.id).populate("author");
                                        res.status(200).json(project);

                                    } catch (error: any) {
                                        res.status(404).json({ message: error.message });
                                    }
                                }

                                            export const updateProject = async (req: Request, res: Response) => {
                                                try {
                                                    const updates = req.body;
                                                    const { id } = req.params;

                                                    const updateProject = await Project.findByIdAndUpdate(id, updates, { new: true });
                                                    if (!updateProject) {
                                                        res.status(404).json({ message: 'Le projet na pas été trouvé' });
                                                    }

                                                    res.status(200).json({ message: 'Le projet à été mis à jour avec succès' });
                                                } catch (error: any) {
                                                    res.status(500).json({ message: error.message });
                                                }
                                            }

                                                            export const deleteProject = async (req: Request, res: Response) => {
                                                                try {
                                                                    const { id } = req.params;
                                                                    const deleteProject = await Project.findByIdAndDelete(id);
                                                                    if (!deleteProject) {
                                                                        res.status(404).json({ message: 'Le projet na pas été trouvé' });
                                                                    }

                                                                    res.status(200).json({ message: 'Le projet à été supprimé avec succès' });
                                                                } catch (error: any) {
                                                                    res.status(500).json({ message: error.message });
                                                                }
                                                            }
