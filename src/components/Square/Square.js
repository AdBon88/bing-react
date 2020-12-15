import './Square.css';

function Square(props) {
    return (
        <div className={props.class}>
            {props.question}
        </div>
    );
}

export default Square;