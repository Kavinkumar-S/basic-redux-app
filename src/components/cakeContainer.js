import React from "react";
import { Buycake } from "../redux/cake";
import { connect } from "react-redux";
function Cakecontainer(props) {

    console.log("props",props);

    return (
        <div>
          <h2>
            Number of cakes - {props.numberofCakes}
            </h2>  

        <button onClick={props.buyCake}>
            buy cake
        </button>

        </div>
    );
}

const mapStatetoprops = (state)=>{
    return {
        numberofCakes : state.cake.numberofcakes
    }
}
const mapDispatchtoprops = (dispatch)=>{
    return {
        buyCake: ()=>dispatch(Buycake())
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(Cakecontainer);