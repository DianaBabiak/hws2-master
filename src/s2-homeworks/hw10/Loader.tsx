import style from "./Loader.module.css";
import loading from "../../assets/Spinner-2.7s-307px.svg";


export const Loader = () => {

    return (
        <div className={style.wrapperImg}>
            <img src={loading}/>
        </div>

    )
}