import MES from "../../img/mes.png";
import CALL from "../../img/call.png";
import PLACEHOLDER from "../../img/placeholder.png";
function Block01() {
    return (
        <div class="block">
            <div class="block__title">Контактная информация</div>
            <div class="block__text"><img class="block__img" src={MES} alt="./img/mes.png" /><div class="block__des">test@test.ru</div></div>
            <div class="block__text"><img class="block__img" src={CALL}  alt="./img/call.png"/><div class="block__des">+8 777 555 66 99</div></div>
            <div class="block__text"><img class="block__img" src={PLACEHOLDER} alt="./img/placeholder.png" /><div class="block__des">Москва, Бульвар Ленина 33</div></div>
        </div>
    );
}
export default Block01;