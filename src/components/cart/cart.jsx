import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'
import { useEffect, useState } from 'react';
import CartItem from './cartItem';



function Cart() {
    const [basketItems, setBasketItems] = useState([
        {
            name: "ball",
            count: 0,
        },
        {
            name: "window",
            count: 0,
        },
        {
            name: "sheep",
            count: 0,
        }
    ])

    let [itemCounts, setItemCounts] = useState(0)

    useEffect(() => {
        for (let item of basketItems) {
            setItemCounts(itemCounts += item.count);
        }
    })

    function onCountChange (index, action) {
        let temp = [...basketItems]
        if (action === "inc") {
            temp[index].count = temp[index].count + 1 
        } else if (action === "dec") {
            temp[index].count ? temp[index].count = temp[index].count - 1 : null
        }
        setBasketItems(temp)
    }

    function onRemove(name) {
        setBasketItems(basketItems.filter(item => item.name !== name))
    }

    function searchItem(value) {
        setBasketItems(basketItems.filter(item => item.name.includes(value)))
    }

    return ( 
        <div className='cart'>
            <div className="cart__header">
                <h2 className="header__title">
                    Заголовок
                </h2>
                <span className="cart__counter">
                    Корзина: {itemCounts}
                </span>
            </div>
            <div className="cart__body">
                <Table striped bordered hover className='table' variant='dark' responsive="xl">
                    <thead>
                        <tr>
                            <th>
                                Поиск
                            </th>
                            <th colSpan={3}>
                                <input type="search" onChange={(e) => searchItem(e.target.value)}/>
                            </th>
                        </tr>
                        <tr className='table__row'>
                            <th>Название</th>
                            <th>Количество</th>
                            <th>Упарвление</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basketItems.map((item, index) => <CartItem key={index} id={index} name={item.name} count={item.count} onCountChange={onCountChange} onRemove={onRemove} />)}
                    </tbody>
                </Table>
            </div>
            <div className="cart__footer">

            </div>
        </div>
     );
}

export default Cart;