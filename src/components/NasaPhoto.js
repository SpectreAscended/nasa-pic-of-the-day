import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const API_KEY = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        );

        if (!res.ok) throw new Error('A problem has occured!');

        const data = await res.json();
        console.log(data);
        setPhotoData(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchPhoto();
  }, []);
  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <div>
        {photoData.media_type === 'image' ? (
          <img src={photoData.url} alt={photoData.title} />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p>{photoData.date}</p>
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
};

export default NasaPhoto;
