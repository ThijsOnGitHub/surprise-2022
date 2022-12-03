import {QuestionStates} from "@/components/sceneItems/Question.vue";

export class Session{
    constructor() {
        this.users={}
        this.scene=0
    }

    public scenesData=[
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new SceneData(true),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new SceneData(true),
        /*new SceneData(true),
        new SceneData(false,{kloppen:0,sintVerhaal:0}),
        new SceneData(false),
        new SceneData(false),
        new SceneData(true),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new QuestionScene(),
        new SceneData(false),
        new SceneData(false)*/
    ]
    public users:{[userId:string]:User}
    public scene:number
}

class SceneData{
    constructor(showNext:boolean,object?:{[key:string]:any}) {
        this.showNext=showNext
        if(object){
            Object.entries(object).forEach(value => {
                this[value[0]]=value[1]
            })
        }
    }
    [key:string]:any
    public showNext:boolean
}

class QuestionScene extends SceneData{
    constructor(showNext:boolean =false) {
        super(showNext);
        this.showAnswer=false
        this.questionState="askQuestion"
    }
    questionState:QuestionStates
    showAnswer:boolean
}

export class User{
    constructor(
        name:string
    ) {
        this.name=name
        this.gameData=new GameData()
    }
    public name:string
    public gameData?:GameData

}
export class GameData{
    constructor() {
        this.submittedAnswers={}
    }
    public submittedAnswers:{[key:string]: { answers:string,isCorrect: boolean }}|null
}
export type Roles = 'admin'|'screen'|'user'|'subScreen';
