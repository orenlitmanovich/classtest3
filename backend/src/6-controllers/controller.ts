import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import MeetingModel from "../4-models/meeting-group-model";

const router = express.Router();


router.get("/developergroups", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const developmentgroups=await logic.getAllDeveloperGroup()
        response.json(developmentgroups)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/meetings-per-developergroup/:devGroupId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const developergroup=+request.params.devGroupId
        const meeting = await logic.getMeetingsByDeveloperGroup(developergroup)
        response.json(meeting)
    }
    catch (err: any) {
        next(err);
    }
});



export default router;