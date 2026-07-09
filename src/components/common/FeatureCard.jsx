import "./FeatureCard.css";

function FeatureCard(props) {

    return (

        <div className="feature-card">

            <div className="feature-icon">
                {props.icon}
            </div>

            <h3 className="feature-title">
                {props.title}
            </h3>

            <p className="feature-description">
                {props.description}
            </p>

        </div>

    );

}

export default FeatureCard;