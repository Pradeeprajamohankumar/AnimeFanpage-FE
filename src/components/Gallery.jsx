import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
    const [characters, setCharacters] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [quotes, setQuotes] = useState('');
    const [abilities, setAbilities] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      try {
          const response = await axios.get('https://animefanpage-be.onrender.com/characters');
          const data=await response.data;
          setCharacters(data);  // Assuming response.data is an array of characters
          console.log(data);
      } catch (error) {
          console.error('Error fetching characters:', error);
      }
  };


    const handleCreate = async (event) => {
        event.preventDefault(); // Prevent page refresh

        try {
            if (id) {
                await axios.put(`https://animefanpage-be.onrender.com/characters/${id}`, {
                    name,
                    image,
                    description,
                    quotes,
                    abilities,
                });
                alert('Character updated successfully');
            } else {
                await axios.post('https://animefanpage-be.onrender.com/characters', {
                    name,
                    image,
                    description,
                    quotes,
                    abilities,
                });
                alert('Character added successfully');
            }
            clearForm();
            fetchData();
        } catch (error) {
            console.error('Error:', error);
            alert(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://animefanpage-be.onrender.com/characters/${id}`);
            alert('Character deleted successfully');
            fetchData();
        } catch (error) {
            console.error('Error deleting character:', error);
        }
    };

    const handleEdit = (character) => {
        setId(character._id);
        setName(character.name);
        setImage(character.image);
        setDescription(character.description);
        setQuotes(character.quotes);
        setAbilities(character.abilities);
    };

    const clearForm = () => {
        setId('');
        setName('');
        setImage('');
        setDescription('');
        setQuotes('');
        setAbilities('');
    };

    return (
        <div className="gallery-container">
            <div className="gallery-form">
                <h2>Add/Edit Character</h2>
                <form onSubmit={handleCreate}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                    <input type="text" value={quotes} onChange={(e) => setQuotes(e.target.value)} placeholder="Quotes" />
                    <input type="text" value={abilities} onChange={(e) => setAbilities(e.target.value)} placeholder="Abilities" />
                    <button type="submit">{id ? 'Update' : 'Create'}</button>
                </form>
            </div>
            <div className="characters-gallery">
                {characters.map((character) => (
                    <div key={character._id} className="character-card">
                        <img src={character.image} alt={character.name} />
                        <div className="card-content">
                            <h3>{character.name}</h3>
                            <p>{character.description}</p>
                            <div className="buttons">
                                <button className="edit" onClick={() => handleEdit(character)}>Edit</button>
                                <button className="delete" onClick={() => handleDelete(character._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
