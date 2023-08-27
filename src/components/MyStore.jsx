import { connect } from "react-redux";
import { buyApple, buyOrange } from "../redux/fruit/fruitAction";

const MyStore = ({apple, orange, buyApple, buyOrange}) => {
   
    return(
        <div>
          <h5 className="text-center mt-3">تعداد سیب ها: {apple}</h5>
          <h5 className="text-center mt-3">تعداد پرتقال ها: {orange}</h5>
          <div className="text-center mt-4">
            <button className="btn btn-secondary ms-3" onClick={buyApple}>خرید سیب</button>
            <button className="btn btn-warning" onClick={buyOrange}>خرید پرتقال</button>
          </div>
        </div>
    )
}

const stateToProps = state => {
  return {
    apple: state.apple,
    orange: state.orange
  }
}

const dispatchToProps = dispatch => {
  return {
    buyApple: ()=> dispatch(buyApple()),
    buyOrange: () => dispatch(buyOrange())
  }
}

export default connect(stateToProps, dispatchToProps)(MyStore);