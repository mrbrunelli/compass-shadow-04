import { connect } from "mongoose";

function connects(){
    return connect('mongodb://localhost:27017/receitas')
    .then(()=>{
        console.log("db Connected")
    }).catch((error:any)=>{
        console.log(error)
    })
}

export default connects;