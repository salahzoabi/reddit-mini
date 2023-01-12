import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { v4 } from 'uuid'
import '../../assets/CustomSelect.css'

export default function CustomSelect({value, options, onchange}) {
    return (
        <div className="select">
            <select value={value} className="standard-select" onChange={onchange}>
                {
                    options.map(option => <option value={option} key={v4()} >{option}</option>)
                }
            </select>
            <FontAwesomeIcon className='custom-select-dropdown-arrow' icon={faArrowDown} />
        </div>
    )
}
