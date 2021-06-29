function SectionTitle(props) {
    return(
        <div id={props.id} className="grid-container">
            <div className="underline-container divider-col">
                <div className="underline"></div>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
} export default SectionTitle;