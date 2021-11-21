import React, { useRef, useState } from "react";

const UploadFile = ({ data, setData, multiple = false, index = 0, name, allImages, setAllImages }) => {

    const inputFile = useRef(null)
    const [imagesNumber, setImagesNumber] = useState();

    const updateValue = (imageLinks) => {
        if (multiple) {
            setData({
                ...data, [index]: {
                    ...data[index],
                    [name]: [...imageLinks],
                }
            })
        }
        else {
            setData({
                ...data,
                [name]: [...imageLinks],
            })
        }

    }

    const showImageData = (e) => {
        const imageLinks = [];
        let newFileName = {};

        for (var i = 0; i < e.target.files.length; i++) {
            var newName = `${e.target.files.length === 1 ? `House` : `Room`}-${Date.now()}-${Math.floor(Math.random() * 10000)}.${e.target.files[i].name.split('.').pop()}`;
            newFileName[e.target.files.length === 1 ? `image` : `image${i + 1}`] = newName;

            imageLinks.push(e.target.files[i]);
        }

        updateValue(imageLinks);
        setImagesNumber(imageLinks.length);
        let key = multiple ? data[index]["intitule"] : "house";

        setAllImages([...allImages, { [key]: [...imageLinks,newFileName] }]);
    }

    return (
        <div>
            <div className="file-upload">
                <div className="file-upload-select" onClick={() => inputFile.current.click()}>
                    <div className="file-select-button" >Choose File</div>
                    {/* <div className="file-select-name">{imagesNumber > 0 ? `${imagesNumber} files selected` : "No file chosen..."}</div> */}
                    <div className="file-select-name">
                        {
                            index > 0 ? 
                                data[index]["images"].length > 0 ? `${data[index]["images"].length} files selected` : "No file choosen..."
                                :
                                data["image"].length > 0 ? `${data["image"].length} files selected` : "No file choosen..."
                        }
                    </div>
                    <input
                        type="file"
                        name={name}
                        ref={inputFile}
                        multiple={multiple ? "multiple" : ""}
                        onChange={showImageData}
                        accept="image/png, image/jpeg"
                    />
                </div>
            </div>
        </div>
    )
}

export default UploadFile;