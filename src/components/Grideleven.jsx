// eslint-disable-next-line no-restricted-globals
let width = screen.width;

export default function Grideleven() {
    if(width >= 280 && width <= 480) {
        return(
            <div className="grid-eleven">
                <img src="images/mobile/image-gallery-sugar-cubes.jpg" alt="picture of sugar cubes" />
            </div>
        );
    } else {
        return(
            <div className="grid-eleven">
                <img src="images/desktop/image-gallery-sugarcubes.jpg" alt="picture of sugar cubes" />
            </div>
        );
    }
    
}