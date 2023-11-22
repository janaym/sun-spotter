import React from 'react';
import '../styles/AddImage.scss'

export default function AddImage({ handleFileInput, imagePreview }) {

  return (
    <div className='addImage__container'>
      {!imagePreview && 
          <div className="file-upload">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
            </svg>
            <h3>Drag a file here or click to upload</h3>
            <p>Maximun file size 2MB</p>
            <input type="file" onChange={handleFileInput} name='image' id='createSpot__form-id--image' />
          </div>
       }
      {/* <input  type='file' className='drop-container' placeholder='Image Upload' name='image' id='createSpot__form-id--image'></input>} */}
      {imagePreview && 
        <div className='addImage__image'>
          <button className='addImage__remove-image' onClick={handleFileInput}>X</button>
          <img src={imagePreview}></img>
        </div>
      }
    </div>
  );
};