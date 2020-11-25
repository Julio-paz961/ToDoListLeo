import React, {useState, useEffect} from 'react'

function Checkbox() {
    const [clothing, setClothing] = useState(false)
    const [food, setFood] = useState(false)
    const [backpack, setBackpack] = useState(false)
    const [tech, setTech] = useState(false)
    const [chargers, setChargers] = useState(false)
    const [money, setMoney] = useState(false)
    const [counter, setCounter] = useState(6)

    function changeClothing() {
        setClothing(prevClothing => !prevClothing)
    }

    function changeFood() {
        setFood(prevFood => !prevFood)
    }

    function changeBackpack() {
        setBackpack(prevBackpack => !prevBackpack)
    }

    function changeTech() {
        setTech(prevTech => !prevTech)
    }

    function changeChargers() {
        setChargers(prevChargers => !prevChargers)
    }

    function changeMoney() {
        setMoney(prevMoney => !prevMoney)
    }

    useEffect(() => {
        var Opa = [clothing, food, backpack, tech, chargers, money]
        var contador = 0
        for (var i = 0; i < Opa.length; i++) {
            if (Opa[i] === false) {
                contador += 1
            }
        }
        setCounter(contador)
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
                                onChange={changeClothing}  />
                                <label>Clothing</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="food"
                                checked={food === true}
                                onChange={changeFood} />
                                <label>Food</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="backpack"
                                checked={backpack === true}
                                onChange={changeBackpack} />
                                <label>Backpack</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="tech"
                                checked={tech === true}
                                onChange={changeTech} />
                                <label>Tech Stuff</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="chargers"
                                checked={chargers === true}
                                onChange={changeChargers} />
                                <label>Chargers</label><br />
                            </div>
                            <div>
                                <input type="checkbox"
                                name="money"
                                checked={money === true}
                                onChange={changeMoney} />
                                <label>Money + Extra</label><br />
                            </div>

                            <button className="button">Reset!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkbox