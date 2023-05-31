import React from "react";

import classes from "./MainInfo2.module.css";
import item1 from "../../assets/info2_1.png";
import item2 from "../../assets/info2_2.png";
import item3 from "../../assets/info2_3.png";
import item4 from "../../assets/info2_4.png";
import item5 from "../../assets/info2_5.png";
import item6 from "../../assets/info2_6.png";

const MainInfo2 = () => {
    return (
        <div className={classes.main_mustHave_container}>
            <h2>이런 분은 꼭 와주세요!</h2>
            <div className={classes.mustHave_inner}>
                <ul className={classes.mustHave_list}>
                    <li className={classes.mustHave_item}>
                        <img src={item1}></img>
                        <p>대인관계 좋으신 분</p>
                    </li>
                    <li className={classes.mustHave_item}>
                        <img src={item2}></img>
                        <p>매사에 긍정적이신 분</p>
                    </li>
                    <li className={classes.mustHave_item}>
                        <img src={item3}></img>
                        <p>도전적이신 분</p>
                    </li>
                    <li className={classes.mustHave_item}>
                        <img src={item4}></img>
                        <p>악기를 다뤄봤거나<br /> 다루고싶은 분</p>
                    </li>
                    <li className={classes.mustHave_item}>
                        <img src={item5}></img>
                        <p>밴드음악 좋아하시는 분</p>
                    </li>
                    <li className={classes.mustHave_item}>
                        <img src={item6}></img>
                        <p>협업을 중시하시는 분</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainInfo2;