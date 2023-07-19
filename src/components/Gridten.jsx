// eslint-disable-next-line no-restricted-globals
let width = screen.width;

export default function Gridten() {
    if(width >= 280 && width <= 480) {
        return(
            <div className="grid-ten">
                <img src="images/mobile/image-gallery-cone.jpg" alt="picture of cone" />
            </div>
        );
    } else {
        return(
            <div className="grid-ten">
                <img src="images/desktop/image-gallery-cone.jpg" alt="picture of cone" />
            </div>
        );
    }
    
}