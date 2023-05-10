import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import DeveloperGroupModel from "../4-models/developer-group-model"
import MeetingModel from "../4-models/meeting-group-model"

async function getAllDeveloperGroup():Promise<DeveloperGroupModel[]>{
    const sql="SELECT * FROM developmentGroups"
    const developmentGroups=await dal.execute(sql)
    return developmentGroups

}


async function getMeetingsByDeveloperGroup(devGroupId:number): Promise<MeetingModel[]>{
    const sql=`
        SELECT M.*, D.devGroupName
            FROM meetings AS M JOIN developmentGroups AS D
            ON M.devGroupId=D.devGroupId
            WHERE M.devGroupId=${devGroupId} `
        
        const meetings = await dal.execute(sql)

        return meetings
}

async function addMeeting(meeting:MeetingModel):Promise<MeetingModel>{
    const sql = `
        INSERT INTO meetings VALUES(
            DEFAULT,
            '${meeting.devGroupId}',
            '${meeting.meetingStart}',
            '${meeting.meetingEnd}',
            '${meeting.description}',
            '${meeting.meetingRoom}'
        )
    `
            const info:OkPacket=await dal.execute(sql)
            meeting.meetingId = info.insertId
    return meeting
 }


export default {
    getAllDeveloperGroup,
    getMeetingsByDeveloperGroup,
    addMeeting
}