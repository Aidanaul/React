import RIGHT from "../../img/right-arrow.png";
function Block03() {
    return (
        <div class="block">
            <div class="block__title">Наши проекты</div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png"/><div class="block__des">РосНано</div></div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png"/><div class="block__des">Сколково</div></div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png"/><div class="block__des">Проект “Восток”</div></div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png"/><div class="block__des">ТЭЦ Калининграда</div></div>
        </div>
    )
}
export default Block03;