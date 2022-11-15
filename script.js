var app = new Vue({
    el: '#root',
    data: {
        db :[
                {
                    "project": { "id": 1, "name": "Mars Rover" },
                    "employee": { "id": 1, "name": "Mario" },
                    "date": "2021-08-26T22:00:00.000Z",
                    "hours": 5
                },
                {
                    "project": { "id": 2, "name": "Manhattan" },
                    "employee": { "id": 2, "name": "Giovanni" },
                    "date": "2021-08-30T22:00:00.000Z",
                    "hours": 3
                },
                {
                    "project": { "id": 1, "name": "Mars Rover" },
                    "employee": { "id": 1, "name": "Mario" },
                    "date": "2021-08-31T22:00:00.000Z",
                    "hours": 3
                },
                {
                    "project": { "id": 1, "name": "Mars Rover" },
                    "employee": { "id": 3, "name": "Lucia" },
                    "date": "2021-08-31T22:00:00.000Z",
                    "hours": 3
                },
                {
                    "project": { "id": 2, "name": "Manhattan" },
                    "employee": { "id": 1, "name": "Mario" },
                    "date": "2021-08-26T22:00:00.000Z",
                    "hours": 2
                },
                {
                    "project": { "id": 2, "name": "Manhattan" },
                    "employee": { "id": 2, "name": "Giovanni" },
                    "date": "2021-08-31T22:00:00.000Z",
                    "hours": 4
                },
        ],
        newDb:[],
        options:[],
        months:["January","February","March","April","May","June","July","August","September","October","November","December"],

    },
    methods:{
        formatDate(date) {  
            let convertDate = new Date(date);
            let year = convertDate.getFullYear();
            let month = convertDate.getMonth();
            let day = convertDate.getDate();
            return `${day} ${this.months[month]} ${year}`
        },
        show_table(){
            // this.db.forEach((elm) => {
            //     let hours = ""
            //     let result=[]
            //     if(this.options.length==1){
            //         if(this.options.includes("project")){
            //             Object.entries(elm).forEach(([key, value]) => {
            //                 if(key=="project" && !result.includes(value["name"])){

            //                     result.push(value);
            //                 }
            //                 console.log(result);
            //             //se la chiave è project  restituisci elm.name and hours 
            //             })   
            //         }
            //     }
                
            // });

            let projectName=[];
            let hours = 0;
            this.db.forEach((elm,i) => {
                projectName.forEach((element,i) =>{
                    console.log(elm.project.name)
                    if(elm.project.name == element.project.name){
                        element.hours += elm.hours
                    }else{
                        projectName.push(
                            //elm.project.name
                            {
                            project: {name: elm.project.name},
                            hours: 0
                            }
                        )
                    }
                })
                //if(!projectName.project.name.includes(elm.project.name)){
                   
               // } 
                    
                //projectName[i].hours+= elm.hours

            })
            //console.log(projectName)


        }

        
        
    }

})