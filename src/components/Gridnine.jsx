// eslint-disable-next-line no-restricted-globals
let width = screen.width;

export default function Gridnine() {
    if(width >= 280 && width <= 480) {
        return(
            <div className="grid-nine">
                <img src="images/mobile/image-gallery-orange.jpg" alt="picture of orange" />
            </div>
        );
    } else {
        return(
            <div className="grid-nine">
                <img src="images/desktop/image-gallery-orange.jpg" alt="picture of orange" />
            </div>
        );
    }
}