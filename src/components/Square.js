
import './Square.css';


function Square(props) {

    // function capitalizeFirstLetter(word) {
    //     return word.charAt(0).toUpperCase() + word.slice(1);
    // }
    return (
        <div className="square">
            {props.question}
        </div>
    );
}

export default Square;