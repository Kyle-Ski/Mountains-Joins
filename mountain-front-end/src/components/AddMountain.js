import React from 'react'

const AddMountain = ({
        mountains, 
        handleRemoveMountain, 
        newMountains, 
        handleMountainNameChange, 
        handleMountainElevationChange, 
        handleMountainRangeChange, 
        handleMountainImgChange, 
        handleMountainRankChange, 
        handleSubmit,
        handleAddMountain
    }) => {

        return (
            <div>
                <button className='add-mountain' onClick={handleAddMountain}>+ Another Mountain</button>
                {/* <button className='add-mountain' onClick={consoleL}>console log new mountains</button> */}
                <form onSubmit={handleSubmit} >
            {newMountains.map((mountain, idx)=>(
                <div className='add-m-form'>
                    <input className='input-group' onChange={handleMountainNameChange(idx)} placeholder={`Mountain ${idx + 1} Name`} value={mountain.name}/>
                    <label>Elevation:</label>
                    <input className='input-group' onChange={handleMountainElevationChange(idx)} type='number' min='0' value={mountain.elevation}/>
                    <label>Rank:</label>
                    <input className='input-group' onChange={handleMountainRankChange(idx)} type='number' min='0' value={mountain.rank}/>
                    <input className='input-group' onChange={handleMountainRangeChange(idx)} placeholder='Mountain Range' value={mountain.range}/>
                    <input className='input-group' onChange={handleMountainImgChange(idx)} placeholder={`Image ${idx + 1} URL`} value={mountain.imageUrl}/>
                    <button className='minus-mountain' onClick={handleRemoveMountain(idx)}>-</button>
                </div>
            ))}
                <button className='add-mountain'>Add Mountains</button>
                </form>
                </div>
                
                
        )
    
}

export default AddMountain