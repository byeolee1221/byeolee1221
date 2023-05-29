import React from "react";

import classes from "./MainMenu.module.css";
import menu1 from "../../Assets/menu1.jpg";
import menu2 from "../../Assets/menu2.jpg";
import menu3 from "../../Assets/menu3.jpg";
import menu4 from "../../Assets/menu4.jpg";
import menu5 from "../../Assets/menu5.jpg";
import menu6 from "../../Assets/menu6.jpg";
import menu7 from "../../Assets/menu7.jpg";
import menu8 from "../../Assets/menu8.jpg";
import menu9 from "../../Assets/menu9.jpg";

const MainMenu = (props) => {

    return (
        <div className={classes.main_menu}>
            <h2>MENU</h2>
            <div className={classes.main_menu_container}>
                <ul className={classes.menu_list}>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu1} alt="menu1"/>
                            <p>{props.onMenu[0].title}</p>
                            <p>{props.onMenu[0].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu2} alt="menu2"/>
                            <p>{props.onMenu[1].title}</p>
                            <p>{props.onMenu[1].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu3} alt="menu3"/>
                            <p>{props.onMenu[2].title}</p>
                            <p>{props.onMenu[2].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>  
                            <img src={menu4} alt="menu4"/>
                            <p>{props.onMenu[3].title}</p>
                            <p>{props.onMenu[3].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu5} alt="menu5"/>
                            <p>{props.onMenu[4].title}</p>
                            <p>{props.onMenu[4].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu6} alt="menu6"/>
                            <p>{props.onMenu[5].title}</p>
                            <p>{props.onMenu[5].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu7} alt="menu7"/>
                            <p>{props.onMenu[6].title}</p>
                            <p>{props.onMenu[6].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu8} alt="menu8"/>
                            <p>{props.onMenu[7].title}</p>
                            <p>{props.onMenu[7].price}</p>
                        </button>
                    </li>
                    <li>
                        <button className={classes.menu_list_btn} onClick={props.onMenuClick}>
                            <img src={menu9} alt="menu9"/>
                            <p>{props.onMenu[8].title}</p>
                            <p>{props.onMenu[8].price}</p>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;