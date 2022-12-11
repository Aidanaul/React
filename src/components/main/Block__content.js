import WebProg from "../../img/web-programming.png";
function Block__content() {
    return (
        <div class="block__content">
            <div class="block__icon">
                <img src={WebProg} alt="web-programming.png" />
                <div>125</div>
            </div>
            <div class="blockdes">Our projects</div>
        </div>
    );
}
export default Block__content;