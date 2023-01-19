export interface Moves {
    move: Move;
    version_group_details: Array<VersionGroupDetail>;
}



export interface VersionGroupDetail {
    level_learned_at: number
    moveLearnMethod: Move
}

export interface Move {
    name: String;
    url: String;
}
 export interface learnMethod {
     url: String;
 }


export interface EggMethod extends learnMethod{
    name : "egg"
}

export interface MachineMethod extends learnMethod{
    name: "machine"
}

export interface LevelMethod extends learnMethod{
    name: "level-up"
}

export interface TutorMethod extends learnMethod{
    name: "tutor"
}