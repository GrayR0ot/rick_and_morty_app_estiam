import "./categoryfilter.css"
import {capitalize} from "lodash";
import PropTypes from "prop-types";

const CategoryFilter = (props) => {

    const {name, categories, handleChangeFilter} = props

    return (
        <div className="filter-container">
            <div className="filter-header">{name}:</div>
            <div className="filters">
                {
                    categories.map((category, index) => {
                        return (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={category}
                                    onChange={(e) => handleChangeFilter(e, name.toLowerCase())}
                                />
                                {capitalize(category)}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

CategoryFilter.propTypes = {
    name: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleChangeFilter: PropTypes.func.isRequired
}

export default CategoryFilter
