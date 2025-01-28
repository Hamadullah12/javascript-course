import style from "./todoItem.module.css"
export default function TodoItem({ item }) {
    return <div className={style.item}>  
        <div  className={style.itemName}>{item}</div>
    <hr className={style.line} />
    </div>
}