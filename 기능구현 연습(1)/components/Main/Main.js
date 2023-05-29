import React, { useState } from "react";

import MainTitle from "./MainTitle";
import MainMenu from "./MainMenu";
import MainCart from "./MainCart";

const menu = [
    {id: Math.random().toString(), title: '아메리카노', price: '2,500원'},
    {id: Math.random().toString(), title: '카푸치노', price: '3,500원'},
    {id: Math.random().toString(), title: '카페라떼', price: '3,000원'},
    {id: Math.random().toString(), title: '인절미 컵빙수', price: '4,300원'},
    {id: Math.random().toString(), title: '블랙슈가마블티', price: '4,000원'},
    {id: Math.random().toString(), title: '민트초코라떼', price: '3,300원'},
    {id: Math.random().toString(), title: '블루청 레몬에이드', price: '4,000원'},
    {id: Math.random().toString(), title: '크림 쿠키 프라페', price: '2,500원'},
    {id: Math.random().toString(), title: '레몬 아이스티', price: '3,000원'},
];

const Main = () => {
    const [count, setCount] = useState(0);

    const menuClickHandler = () => {
        setCount(count + 1);
    }
   
    return (
        <main>
            <MainTitle />
            <MainMenu onMenuClick={menuClickHandler} onMenu={menu} />
            <MainCart onCount={count}/>
        </main>
    );
}

export default Main;