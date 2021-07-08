import './Meme.css'

function Meme(props) {
    return (
        <div className="meme-card">
            <h2>{props.text}</h2>
            <img src = {props.source} text = {props.text} />
            <h3>{props.title}</h3>
        </div>
    );
}

export default Meme;