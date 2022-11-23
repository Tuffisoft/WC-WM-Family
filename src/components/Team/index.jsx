import "./index.css";

export default function Team(props) {
    const {id, name, team, avatar, shirts } = props

    return (
        <div
            key={id}
            className={"team"}
        >
            
            <div className="box-top">
                <h3>{name}</h3>
                <img
                src={avatar}
                alt={`Image of ${name}`}
                className={"avatar"}
                /></div>
            <p>{team}</p>
                <div className="box-bottom">
            <img
                src={shirts}
                alt={`Image of ${team}`}
                className={"image-shirts"}
            /></div>
        </div>
    );
}