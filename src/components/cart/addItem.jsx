import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function AddItem({setBasketItems}) {

    function handlerAdd() {
        if (!inputRef.current.value) {
            return
        }
        setBasketItems((prev) => [...prev, {
            name: inputRef.current.value,
            count: 0
        }])
        inputRef.current.value = ""
    }

    const inputRef = useRef()

    return (  
        <>
            <Button variant="primary" onClick={handlerAdd}>Добавить</Button>
            <input ref={inputRef} type="text" name="newItemValue" id="newItemValue"/>
        </>
    );
}

AddItem.propTypes ={ 
    setBasketItems: PropTypes.func.isRequired
}
export default AddItem;