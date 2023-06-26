import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../store/CounterSlice";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);

    const incrementHandler = () => {
        dispatch(CounterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(CounterActions.increase(5));
    }

    const decrementHandler = () => {
        dispatch(CounterActions.decrement());
    }

    return (
        <main>
            <div className={classes.main_container}>
                <div className={classes.main_title_box}>
                    <h1 className={classes.main_title}>리덕스 카운터</h1>
                    <p className={classes.title_counter}>{counter}</p>
                </div>
                <div className={classes.main_btns}>
                    <button onClick={incrementHandler} type="button">1 증가</button>
                    <button onClick={increaseHandler} type="button">5 증가</button>
                    <button onClick={decrementHandler} type="button">1 감소</button>
                </div>
            </div>
        </main>
    );
}

export default Counter;