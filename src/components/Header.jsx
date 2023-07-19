import Navbar from "./Navbar"

// eslint-disable-next-line no-restricted-globals
let width=screen.width;

export default function Header() {
    if(width >= 280 && width <= 480) {
        return(
            <div className="main__header">
                <Navbar />
                <h1 className="main__heading">WE ARE CREATIVES</h1>
                <img src="images/icon-arrow-down.svg" alt="arrow down icon" className="arrow__down" />
            </div>
        );
    } else {
        return(
            <div className="main__header">
                <Navbar />
                <h1 className="main__heading">WE ARE CREATIVES</h1>
                <img src="images/icon-arrow-down.svg" alt="arrow down icon" className="arrow__down" />
            </div>
        );
    }
}