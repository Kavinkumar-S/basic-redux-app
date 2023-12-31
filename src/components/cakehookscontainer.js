import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Buycake } from '../redux/cake';
import { BuyIcecream } from '../redux/icecream';
function Cakehookscontainer(props) {
  const numofcakes = useSelector((state)=>state.cake.numberofcakes)
  const numoficecream =  useSelector((state)=>state.iceCream.numoficecream)
  const dispatch = useDispatch() 
  
  console.log("numofcakes",numofcakes);
  
  return (
        <div style={{margin:"20px"}}>
            <h2>
                number of Cakes - {numofcakes}
            </h2>
            <button onClick={()=>dispatch(Buycake())}>
                buy cake
            </button>
            
            <h2>
                number of Icecream - {numoficecream}
            </h2>
            <button onClick={()=>dispatch(BuyIcecream())}>
                buy cake
            </button>



        </div>
    );
}

export default Cakehookscontainer;