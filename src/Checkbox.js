import React, {useState, useEffect} from 'react'
import Button from "./Button"

function Checkbox() {
    const [clothing, setClothing] = useState(false)
    const [food, setFood] = useState(false)
    const [backpack, setBackpack] = useState(false)
    const [tech, setTech] = useState(false)
    const [chargers, setChargers] = useState(false)
    const [money, setMoney] = useState(false)
    const [counter, setCounter] = useState(6)

    const toggleTodoItem = (updateItem) => () => {
        updateItem(prevItem => !prevItem)
    }

    useEffect(() => {
        var checkBoolean = [clothing, food, backpack, tech, chargers, money]
        var countFalse = 0
        for (var i = 0; i < checkBoolean.length; i++) {
            if (checkBoolean[i] === false) {
                countFalse += 1
            }
        }
        setCounter(countFalse)
    }, [clothing, food, backpack, tech, chargers, money])
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="boxBlack">
                        <h2>Things left to pack:</h2>
                        <h1 className="huge">{counter}</h1>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="box">
                        <form>
                            <div>
                                <input type="checkbox"
                                name="clothing"
                                checked={clothing === true}
                                onChange={toggleTodoItem(setClothing)}  />
                                <label>Clothing</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="food"
                                checked={food === true}
                                onChange={toggleTodoItem(setFood)} />
                                <label>Food</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="backpack"
                                checked={backpack === true}
                                onChange={toggleTodoItem(setBackpack)} />
                                <label>Backpack</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="tech"
                                checked={tech === true}
                                onChange={toggleTodoItem(setTech)} />
                                <label>Tech Stuff</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="chargers"
                                checked={chargers === true}
                                onChange={toggleTodoItem(setChargers)} />
                                <label>Chargers</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="money"
                                checked={money === true}
                                onChange={toggleTodoItem(setMoney)} />
                                <label>Money + Extra</label><br />
                            </div>

                            <Button primary>Reset!</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkbox