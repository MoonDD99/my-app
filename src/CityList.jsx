
function CityList(props){
    const {cities} = props;

    return(
        <div>
            <h1>CityList</h1>

            <ul className = "new">
                {cities.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default CityList;
