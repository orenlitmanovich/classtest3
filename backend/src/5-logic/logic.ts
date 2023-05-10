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
        
        const gifts = await dal.execute(sql)

        return gifts
}

export default {
    getAllDeveloperGroup,
    getMeetingsByDeveloperGroup
}