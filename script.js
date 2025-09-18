let input=document.getElementById("date")
input.max=new Date().toISOString().split('T')[0]
let result=document.getElementById("result")


function cal(){
    let date=new Date(input.value)
    let m1=date.getMonth()+1
    let d1=date.getDate()
    let y1=date.getFullYear()
    let current=new date()
    let m2=current.getMonth()+1
    let d2=current.getDate()
    let y2=current.getFullYear()

    let m3,d3,y3
    y3=y2-y1
    if (m2>=m1){
        m3=m2-m1
    }else{
        y3--
        m3=12+m2-m1
    }
    if(d2>d1){
        d3=d2-d1
    }else{
        m3--
    }
function days(years,month){
        return new Date(years,month,0).getDate()
    }


    result.innerHTML=`you are <span>${y3}</span>  years, <span>${m3}</span>months,<span>${d3}</span>days`
}







































// let input=document.getElementById("date")
// input.max=new Date().toISOString().split("T")[0]
// let result=document.getElementById("result")

// function cal(){
//     let birth=new Date(input.value)
//     let d1=birth.getDate()
//     let m1=birth.getMonth()+1
//     let y1=birth.getFullYear()
//     let current=new Date()
//     let d2=current.getDate()
//     let m2=current.getMonth()+1
//     let y2=current.getFullYear()
//     let y3,m3,d3
//     y3=y2-y1
//     if(m2>m1){
//         m3=m2-m1
//     }else{
//         y3--
//         m3=12+m2-m1
//     }
//     if(d2> d1){
//         d3=d2-d1
//     }else{
//         m3--
//         d3=days(y1,m1)+d2-d1
//     }
    
// result.innerHTML=`you are <span>${y3}</span>  years, <span>${m3}</span>months,<span>${d3}</span>days`


// function days(years,month){
//         return new Date(years,month,0).getDate()
//     }
    
// }
