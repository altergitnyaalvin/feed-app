import { useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { storage } from "../../config/firebase"
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

const UploadImage = () => {
    const [image, setImage] = useState('')
    const [progress, setProgress] = useState(0)
    const [urlImage, setUrlImage] = useState('')

    const handleUploadImage = () => {
        if(image){
            console.log('image ', image);
            const storageRef = ref(storage, `/image/${image.name}`) // set ref firebase storage
            const uploadFile = uploadBytesResumable(storageRef, image) // handle upload file to firebase

            uploadFile.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgress(percent)
                },
                (err) => {
                    console.log('Error uploading file ', err);
                    alert('Error uploading file')
                },
                () => {
                    // download url
                    getDownloadURL(uploadFile.snapshot.ref).then((url) => {
                        console.log('success downloading ', url);
                        setUrlImage(url)
                        alert('Uploaded file successfully')
                    });
                }
            )

        }
    }

    return(
        <div>
            <Input 
                id='uploadImage'
                name="uploadImage"
                type='file'
                onChange={(e) => setImage(e.target.files[0])}
                // value={image}
                placeholder={'Upload your image'}
            />
            <p>{progress} %</p>
            <Button text='Upload Now' onClick={handleUploadImage} id='btnUploadImage' className='btn'/>
        </div>
    )
}

export default UploadImage