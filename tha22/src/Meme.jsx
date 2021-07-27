import React, {useState} from 'react'
import fileDownload from 'js-file-download'
import axios from 'axios'

// function download image is inspired from a code snippet from stackoverflow


function downloadImage(url, img) {
    axios.get(url, {
        responseType: 'blob'
    })
    .then((res) => {
      fileDownload(res.data, img)
    });
  }

export default function Meme({meme, setMeme}) {
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "helloworls09",
        password: "devilseye",
        boxes: []
    });
    function generateMeme () {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, i)=> {
            url += `&boxes[${i}][text]=${box.text}`
        });
        fetch(url).then(res => res.json()).then((data,err) => {
            if(data.data !== undefined) {
                setMeme({...meme, url: data.data.url});
            } else {
                setMeme({...meme, url: 'xyz'});
            }
            
        });

    }
    return (
        <div className="meme">
            <div className="main">
                <h1>Meme</h1>
                <div>
                    <img src={meme.url} alt="AN ERROR OCCURED / WRONG USERNAME OR PASSWORD" className="image-meme" />
                </div>
                <div className="inps">
                    {[...Array(meme.box_count)].map((element,i)=>{
                        return (
                            <input key = {i} className="inp" type="text" placeholder = {`Meme box ${i}`} onChange={(e)=> {
                                const newBox = form.boxes;
                                newBox[i] = {text: e.target.value};
                                setForm({...form, boxes: newBox});
                            }}/>
                        )
                    })}
                </div>
                <div className="ch-cr">
                    <button onClick={generateMeme}>Create Template</button>
                    <button onClick = {() => {
                        setMeme(null)
                    }}>Choose Template</button>
                    <button onClick={() => {
                        downloadImage(meme.url, `${meme.id}.jpg`);
                    }}>Download Image</button>
                </div>
            </div>
        </div>
    )
}
