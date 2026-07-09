import "./StatisticsCard.css";

function StatisticsCard(props) {
    return (

        <div className="statistics-card">

            <div className="statistics-icon">
                {props.icon}
            </div>

            <h2 className="statistics-number">
                {props.value}
            </h2>

            <p className="statistics-title">
                {props.title}
            </p>

        </div>

    );
}

export default StatisticsCard;