import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    console.log(selectedFilesArray);
    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    // @ts-ignore
    setSelectedImages((previousImage) => previousImage.concat(imageArray));
  };
  return (
    <section>
      <label>
        + Add Image
        <br />
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png,image/jpg,image/webp"
        />
      </label>
      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button
                  onClick={() => {
                    setSelectedImages(
                      selectedImages.filter((e) => e !== image)
                    );
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default App;
