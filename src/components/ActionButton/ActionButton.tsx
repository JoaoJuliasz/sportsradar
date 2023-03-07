import './actionButton.styles.css'

type Props = {
    text: string
    clickFunction: () => void
}

const ActionButton = ({ text, clickFunction }: Props) => {
    return (
        <a onClick={clickFunction} className="action-btn">{text}</a>
    );
};

export default ActionButton;