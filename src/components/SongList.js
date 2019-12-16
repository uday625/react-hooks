import React,{useState, useEffect} from 'react';
import AddSongForm from './AddSongForm';
import uuid from 'uuid/v1';

const SongList = () => {

    const [songs,setSongs]= useState([
        {title:'Zarah Zarah',id:1},
        {title:'Love the way you are',id:2},
        {title:'Lost sour',id:3},
    ])

    const [age, setAge] = useState(20)

    const addSong =(title) =>{
        setSongs([...songs,{title:title,id:uuid()}])
    }

    useEffect(()=>{
        console.log('useEffect hooks on songs',songs)
    },[songs])

    useEffect(()=>{
        console.log('useEffect hooks on age',age)
    },[age])

    return (
        <div >
            <ul className='song-list'>
                {songs.map(song=>(
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>  
            <AddSongForm addSong={addSong}/>  
            <button onClick={()=>{setAge(age+1)}}>increate age from current age: {age}</button>        
        </div>
    );
};

export default SongList;