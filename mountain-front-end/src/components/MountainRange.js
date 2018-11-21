import React from 'react'
import Mountain from './Mountain';

const MountainRange = ({mountains}) => {

    const loadMountains = (list) => {
        return list.map((mountain, i) => {
            return (
                <Mountain key={i} 
                    mountain={mountain} 
                    elevation={mountain.elevation}
                    rank={mountain.rank}
                    imageUrl={mountain.imageUrl}
                    name={mountain.name}
                    range={mountain.range}
                />
            )
        })
    }

    return (
        <div>
            {loadMountains(mountains)}
        </div>
    )
}
export default MountainRange