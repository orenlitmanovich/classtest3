class MeetingModel{
    public meetingId:number;
    public devGroupId:number;
    public meetingStart:Date;
    public meetingEnd:Date;
    public description:string;
    public meetingRoom:string;
    
    

    public constructor(meeting:MeetingModel){
        this.meetingId=meeting.meetingId
        this.devGroupId=meeting.devGroupId
        this.meetingStart=meeting.meetingStart
        this.meetingEnd=meeting.meetingEnd
        this.description=meeting.description
        this.meetingRoom=meeting.meetingRoom
        
        
    }
    
}

export default MeetingModel