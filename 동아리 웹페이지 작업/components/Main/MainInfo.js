import React, { Fragment } from "react";

import classes from "./MainInfo.module.css";
import video from "../../assets/background.mp4";
import info1 from "../../assets/info1.jpg";
import info2 from "../../assets/info2.jpg";
import info3 from "../../assets/info3.jpg";

const MainInfo = () => {
    return (
        <Fragment>
            <div className={classes.main_video}>
                <video src={video} autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsinline"></video>
            </div>
            <div className={classes.main_info_container}>
                <h2 className={classes.main_info_title}>함께하면 만날 수 있는 것</h2>
                <div className={classes.main_inner}>
                    <img src={info1} alt="동아리 야유회"></img>
                    <div className={classes.info_description}>
                        <h2>동아리 정기 야유회</h2>
                        <p>
                            밴드동아리만의 일상 외에도<br />
                            1년에 한번씩 단조로운 일상에서 벗어나<br />
                            새로운 장소에서 더 끈끈한 우정을 다집니다.
                        </p>
                        <button type="button">동아리 기록 보러가기 <span>→</span></button>
                    </div>
                </div>
                <div className={classes.main_inner}>
                    <div className={classes.info_description}>
                        <h2>다채로운 공연행사 활동</h2>
                        <p>
                            밴드동아리만 즐길 수 있는<br />
                            여러분들의 숨겨진 모습을 갈고 닦아서<br />
                            무대 위에서 마음 속 품었던 꿈을 펼쳐보세요.
                        </p>
                    </div>
                    <img src={info3} alt="동아리 공연"></img>
                </div>
                <div className={classes.main_inner}>
                    <img src={info2} alt="동아리 정기공연"></img>
                    <div className={classes.info_description}>
                        <h2>동아리 정기공연</h2>
                        <p>
                            1년에 단 한 번,<br />
                            여러분이 1년간 쌓아왔던 모든 것을<br />
                            소중한 사람들 앞에서 맘껏 보여주세요!
                        </p>
                        <a href="https://www.youtube.com/@pans_pm" id={classes.info_youtube}>공연영상 보러가기 <span>→</span></a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MainInfo;