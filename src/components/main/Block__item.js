import Services from "../../img/services__item.png";
function Block__item() {
    return (
        <div class="block__item">
            <div class="icon"><img src={Services} alt="./img/services__item.png" /></div>
            <div class="text">
                <div class="title">Создание сайтов</div>
                <div class="des">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</div>
            </div>
        </div>
    );
}
export default Block__item;