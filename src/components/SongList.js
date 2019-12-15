import React,{useState} from 'react';
import AddSongForm from './AddSongForm';
import uuid from 'uuid/v1';

const SongList = () => {

    const [songs,setSongs]= useState([
        {title:'Zarah Zarah',id:1},
        {title:'Love the way you are',id:2},
        {title:'Lost sour',id:3},
    ])

    const addSong =(title) =>{
        setSongs([...songs,{title:title,id:uuid()}])
    }

    return (
        <div >
            <ul className='song-list'>
                {songs.map(song=>(
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>  
            <AddSongForm addSong={addSong}/>          
        </div>
    );
};

export default SongList;