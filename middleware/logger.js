let date = new Date();

let currentHours = date.getHours();


let currentDay = date.getDate();


function logger (req,res,next){
    if (currentHours > 10 && currentHours < 1 && currentDay > 0 && currentDay < 7 ){
        next();
    }else{
        res.send("<img src='https://tse1.mm.bing.net/th?id=OIP.7zOWdAXChYxOtcB6HzI6nwHaEv&pid=Api&P=0'/>")
    }
}


module.exports= logger