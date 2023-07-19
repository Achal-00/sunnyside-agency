export default function Client(props) {
    return(
        <div className="client__details">
            <img src={props.image} alt="picture of client" />
            <p>{props.message}</p>
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
        </div>
    );
}
