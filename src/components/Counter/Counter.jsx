import "./Counter.scss"
import { increaseQuantity, decreaseQuantity } from "../../reducers";
import { useDispatch } from "react-redux";

const Counter = ({ quantity, id }) => {
    const dispatch = useDispatch();

    const clickPlus = id => {
        dispatch(increaseQuantity(id));
    };

    const clickMinus = id => {
        dispatch(decreaseQuantity(id));
    };

    return (
        <div className='quantity-form'>
            <button className='minus' onClick={ () => clickMinus(id) } disabled={ quantity === 1}>-</button>
            <input type='text' name='quantity' value={ quantity } className='qty'/>
            <button className='plus' onClick={ () => clickPlus(id) }>+</button>
        </div>
    )
}

export default Counter;
