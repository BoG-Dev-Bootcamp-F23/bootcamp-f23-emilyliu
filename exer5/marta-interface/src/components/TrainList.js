import Train from './Train';

export default function TrainList(props) {
    const { color, data } = props;
    const railArrivals = data["RailArrivals"]

    function determineDirection() {
        if (color === "gold" | color === "red") {
            return (
                <div>
                    <button>Arriving</button>
                    <button>Scheduled</button>
                    <button>Northbound</button>
                    <button>Southbound</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button>Arriving</button>
                    <button>Scheduled</button>
                    <button>Eastbound</button>
                    <button>Westbound</button>
                </div>
            )
        }
    }

    return (
        

        <div className = "train_list_component">
            <div>
                { determineDirection() }
            </div>
            {railArrivals.map((train) => {
                if (train["LINE"] === color) {
                    return <Train data = {train} />
                }
            })}
        </div>
    );
}