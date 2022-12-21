import './loader.css';

const Loader = ({loading}) => {

    return (
        <div style={{display: loading ? 'flex' : 'none'}} className="clock-container">
            <div className="clock-loader"/>
        </div>
    )
}

export default Loader
