import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function CartItem({name, count, id, onCountChange, onRemove}) {
    function btnHandler(action) {
        onCountChange(id, action);
    }

    function removeHandler(name) {
        onRemove(name);
    }

    return ( 
        <>
            <tr> 
                <td>{name}</td> 
                <td>{count}</td>
                <td>
                    <Button variant="primary" onClick={() => btnHandler("inc")}>Увеличить</Button>
                    <Button variant="danger" onClick={() => btnHandler("dec")} disabled={count == 0 ? "disabled" : ""}>Убавить</Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => removeHandler(name)}>Удалить</Button>
                </td>
            </tr>
        </>
     );
}

CartItem.protoTypes= {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onCountChange: PropTypes.func,
    onRemove: PropTypes.func,
}

export default CartItem;