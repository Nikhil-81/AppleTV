export default function Footer({data}){
    return(
        <div Style={"background-color: #F0F0F3;"}>
            <div className="style_about">
                <div>
                    <h1>Information</h1>
                    <div><h4>Released</h4><p>Drama</p></div>
                    <div><h4>Rated</h4><p>A</p></div>
                    <div><h4>Region of Origin</h4><p>USA</p></div>
                </div>
                <div>
                    <h1>Languages</h1>
                    <div><h4>Original Audio</h4><p>United Kingdom</p></div>
                    <div><h4>Audio</h4><p>English</p></div>
                    <div><h4>Subtitles</h4><p>English</p></div>
                </div>
                <div>
                    <h1>Accessibility</h1>
                    <div><snap Style={"    border: 1px solid gray;padding: 0px 3px;border-radius: 7px;"}>CC</snap><p>Closed captions (CC) refer to subtitles in the available language with the addition of relevant non-dialogue information.</p></div>
                    <div><snap Style={"    border: 1px solid gray;padding: 0px 3px;border-radius: 7px;"}>AD</snap><p>Audio descriptions (AD) refer to a narration track describing what is happening on screen, to provide context for those who are blind or have low vision.</p></div>
                </div>
            </div>
        </div>
    )
}