import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import DeveloperGroupModel from "../4-models/developer-group-model"
import MeetingModel from "../4-models/meeting-group-model"

async function getAllDeveloperGroup():Promise<DeveloperGroupModel[]>{
    const sql="SELECT * FROM developmentGroups"
    const developmentGroups=await dal.execute(sql)
    return developmentGroups

}


export default {
    getAllDeveloperGroup
}