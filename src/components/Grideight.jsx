// eslint-disable-next-line no-restricted-globals
let width = screen.width;

export default function Grideight() {

    if(width >= 280 && width <= 480) {
        return(
            <div className="grid-eight">
                <img src="images/mobile/image-gallery-milkbottles.jpg" alt="picture of milk bottles" />
            </div>
        );
    } else {
        return(
            <div className="grid-eight">
                <img src="images/desktop/image-gallery-milkbottles.jpg" alt="picture of milk bottles" />
            </div>
        );
    }
}