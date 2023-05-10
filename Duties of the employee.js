var employee ={
    mohsen :["html","js","css"],
    mohamad :["angolar","riact","vue"],
    mohamad :["c#","c++","java"],
}
var iskarbar =prompt("به چه شخصی می خواهید وظیفه اضافه کنید ")
var new_tasdk=prompt("چه وظیفه ای می خواهید به کاربر اضافه کنید ")

var employe_task=(employee[iskarbar])
employe_task.push(new_tasdk)
console.log(employee)