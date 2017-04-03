import { PropTypes } from 'react'
import Color from './Color'
import '../../stylesheets/ColorList.scss'


const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f, onSelect=f=>f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                    {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)}
                       onSelect={() => onSelect(color.id)} />
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func,
    onSelect: PropTypes.func
}

export default ColorList
