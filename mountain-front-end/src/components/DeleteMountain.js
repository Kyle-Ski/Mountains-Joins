import React from 'react'
import {Dropdown} from 'semantic-ui-react'

const style = {
    dropdown: {
        width: '25vw',
        margin: '10px'
    }
}

const DeleteMountain = ({deleteMountain, mountains, selectMountainId, userMountains}) => {

    const structureDropdown = (mountain) => {
        return mountain.map(mountain => {
            return(
                {
                    text: mountain.name,
                    value: mountain.id,
                }
            )
        })
    }

    return (
        <div>
            <Dropdown onChange={selectMountainId} style={style.dropdown} placeholder='Mountain' fluid search selection options={structureDropdown(userMountains)} />
            <button onClick={deleteMountain} className='delete-mountain'>Delete Mountain</button>
        </div>

    )
}

export default DeleteMountain