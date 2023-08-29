import { connect, useDispatch, useSelector } from "react-redux";
import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { buySandwich } from "../redux/food/foodAction";
import { useState } from "react";

const MyStore = ({apple, orange, sandwich, buyApple, buyOrange, buySandwich}) => {
  
  const [itemCount , setItemCount] = useState({
    apple: 1,
    orange: 1,
    sandwich: 1
  })
  // const { apple, orange } = useSelector((state) => state.fruit);
  // const { sandwich } = useSelector((state) => state.food);
  // const dispatch = useDispatch();
  return (
    <div>
      <h5 className="text-center mt-3">تعداد سیب ها: {apple}</h5>
      <h5 className="text-center mt-3">تعداد پرتقال ها: {orange}</h5>
      <h5 className="text-center mt-3">تعداد ساندویچ ها: {sandwich}</h5>

      <div className="text-center mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 col-lg-2">
            <div className="input-group dir_ltr">
              <input type="number" className="form-control" value={itemCount.apple} onChange={(e) => setItemCount({...itemCount, apple: e.target.value})}/>
              <button className="btn btn-secondary input-group-text" onClick={() => 
                buyApple(itemCount.apple)}>خرید سیب ({itemCount.apple})</button>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <div className="input-group dir_ltr">
              <input type="number" className="form-control" value={itemCount.orange} onChange={(e) => setItemCount({...itemCount, orange: e.target.value})}/>
              <button className="btn btn-warning input-group-text" onClick={() => 
                buyOrange(itemCount.orange)}>خرید پرتقال ({itemCount.orange})</button>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <div className="input-group dir_ltr">
              <input type="number" className="form-control" value={itemCount.sandwich} onChange={(e) => setItemCount({...itemCount, sandwich: e.target.value})}/>
              <button className="btn btn-success input-group-text" onClick={() => 
                buySandwich(itemCount.sandwich)}>خرید ساندویچ ({itemCount.sandwich})</button>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

const stateToProps = state => {
  return {
    apple: state.fruit.apple,
    orange: state.fruit.orange,
    sandwich: state.food.sandwich
  }
}

const dispatchToProps = dispatch => {
  return {
    buyApple: (count)=> dispatch(buyApple(count)),
    buyOrange: (count) => dispatch(buyOrange(count)),
    buySandwich: (count) => dispatch(buySandwich(count))
  }
}
export default connect(stateToProps, dispatchToProps)(MyStore);