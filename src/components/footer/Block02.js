import RIGHT from "../../img/right-arrow.png";
function Block02() {
    return (
        <div class="block">
            <div class="block__title">Основные ссылки</div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png" /><div class="block__des">Главная</div></div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png" /><div class="block__des">Наши проекты</div></div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png" /><div class="block__des">Наши услуги</div></div>
            <div class="block__text"><img class="block__img" src={RIGHT} alt="./img/right-arrow.png" /><div class="block__des">Контакты</div></div>
        </div>
    );
}
export default Block02;