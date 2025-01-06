import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setisLiked] = useState(false);
    let [click, setclick] = useState(0)
        let toggleLike = () => {
        setisLiked(!isLiked);
        setclick(click + 1);

    }
    let styles = { color: "red" };
    return (
        <div>
            <h4>Clicks={click}</h4>
                   <h2 onClick={toggleLike}>
                     {isLiked ? <i className="fa-solid fa-heart"  style={styles}></i> :
                    <i className="fa-regular fa-heart"></i>
                }
            </h2>
        </div>
    )
}