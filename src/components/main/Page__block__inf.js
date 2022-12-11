import Laptop from "../../img/laptopimg.png";
import Page__content from "./Page__content";
function Page__block__inf() {
    return (
        <div class="page__block__inf">
            <div class="page__img"><img src={Laptop} alt="./img/laptopimg.png" /></div>
            < Page__content />
        </div>
        
    );
}
export default Page__block__inf;