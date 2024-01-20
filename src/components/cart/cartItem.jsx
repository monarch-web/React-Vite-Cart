import Button from 'react-bootstrap/Button';
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

export default CartItem;