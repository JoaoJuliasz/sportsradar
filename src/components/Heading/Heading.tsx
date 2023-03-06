import './heading.styles.css';

type Props = {
    text: string
}

const Heading = ({ text }: Props) => {
    return (
        <h3 className="heading">{text}</h3>

    );
};

export default Heading;