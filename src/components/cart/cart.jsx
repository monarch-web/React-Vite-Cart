import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import CartItem from './cartItem';
import AddItem from './addItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'



function Cart() {

    // Состояние корзины из бэкка
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
            count: "0",
        }
    ])

    // Поиск по названию
    const [search, setSearch] = useState(""); 

    // Создаю переменную которая будет хранить новый массив с отфильтрованными товарами по названию из поска
    const filteredProducts = search.length === 0
    ? basketItems
    : basketItems.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Счетчик кол-ва товаров в корзине
    let [itemCounts, setItemCounts] = useState(0)

    // Обновление счетчика
    useEffect(() => {
        let tempCount = 0;

        for (let item of basketItems) {
            tempCount += item.count
        }

        setItemCounts(tempCount)
    }, [basketItems])

    // Изменение кол-ва товара
    function onCountChange (index, action) {
        let temp = [...basketItems]
        if (action === "inc") {
            temp[index].count = temp[index].count + 1 
        } else if (action === "dec") {
            temp[index].count ? temp[index].count = temp[index].count - 1 : null
        }
        setBasketItems(temp)
    }

    // Удаление товара из таблицы
    function onRemove(name) {
        setBasketItems(basketItems.filter(item => item.name !== name))
    }

    // Поиск по названию в таблице
    function searchItem(value) {
        // Изменяю состояние поиска чтобы использовать его дальше для фильтрации
        setSearch(value)
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
                        {filteredProducts.map((item, index) => <CartItem key={index} id={index} name={item.name} count={item.count} onCountChange={onCountChange} onRemove={onRemove} />)}
                    </tbody>
                </Table>
            </div>
            <div className="cart__footer">
                <AddItem setBasketItems={setBasketItems} />
            </div>
        </div>
     );
}

export default Cart;