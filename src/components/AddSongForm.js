import React,{useState} from 'react';

const AddSongForm = ({addSong}) => {

    const [title,setTitle]= useState('')

    const addNewSong=(e)=>{
        e.preventDefault()
        console.log(title)
        addSong(title)
        setTitle('')
    }


    return (
        <div>
            <form onSubmit={addNewSong}>
                <input type="text"
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}></input>
                <button>Add a new song</button>
            </form>            
        </div>
    );
};

export default AddSongForm;