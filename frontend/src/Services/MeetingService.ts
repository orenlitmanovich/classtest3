import axios from "axios";
import MeetingModel from "../Models/meeting-group-model";
import DeveloperGroupModel from "../Models/developer-group-model";
import appConfig from "../Utils/config";

class meetingService {

    public async getAllDevelopers(): Promise<DeveloperGroupModel[]> {
        const response = await axios.get<DeveloperGroupModel[]>(appConfig.DeveloperGroupUrl);
        const developerGroup = response.data;
        return developerGroup;
    }

    public async meetingsByDeveloperGroup(devGroupId: number): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(appConfig.meetingsPerDeveloperGroupUrl + devGroupId);
        const meeting = response.data;
        return meeting;
    }

    public async addMeeting(meeting: MeetingModel): Promise<void> {
        await axios.post<MeetingModel>(appConfig.meetingsUrl, meeting);
    }

}

const meetingservice = new meetingService();

export default meetingservice;