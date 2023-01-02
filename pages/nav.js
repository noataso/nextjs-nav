import { useCallback, useRef, useState } from "react";
import styles from "../styles/nav.module.css"
const nav = () => {
    const [isNumber,setIsNumber]=useState(0);
    const [contents,setContents]=useState([
        {
            content:"焼肉食べたい",
        },
        {
            content:"寿司食べたい",
        },
        {
            content:"トマト食べたい",
        },
    ]);
    const tabNav=useRef();
    const handleClick=(e)=>{
        // console.log(tabNav.current.children.length)
        // console.log(tabNav.current.children[0])
        // console.log(e.target.children[0].textContent)
        return setIsNumber((isNumber)=>e.target.children[0].textContent)
    }

    return (
        <div className={styles.tab}>
            <div className={styles.tabNav} ref={tabNav}>
                <div className={styles.tabNavItem} onClick={handleClick}>Tab-<span>0</span></div>
                <div className={styles.tabNavItem} onClick={handleClick}>Tab-<span>1</span></div>
                <div className={styles.tabNavItem} onClick={handleClick}>Tab-<span>2</span></div>
            </div>
            <div className={styles.tabContent}>
                <div className={styles.tabContentItem}>{contents[isNumber].content}</div>
            </div>
        </div>
    );
}

export default nav;