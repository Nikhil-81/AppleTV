export default function Footer({data}){
    return(
        <div Style={"background-color: #F0F0F3;"}>
            <div className="style_about">
                <div>
                    <h1>Information</h1>
                    <div><h4>Genere</h4><p>{data.gener}</p></div>
                    <div><h4>Released</h4><p>{data.release}</p></div>
                    <div><h4>Rated</h4><p>{data.rated}</p></div>
                    <div><h4>Region of Origin</h4><p>{data.region}</p></div>
                </div>
                <div>
                    <h1>Languages</h1>
                    <div><h4>Original Audio</h4><p>{data.o_audo}</p></div>
                    <div><h4>Audio</h4><p>{data.audo}</p></div>
                    <div><h4>Subtitles</h4><p>{data.subtitle}</p></div>
                </div>
                <div>
                    <h1>Accessibility</h1>
                    <div><snap Style={"    border: 1px solid gray;padding: 0px 3px;border-radius: 7px;"}>CC</snap><p>{data.cc}</p></div>
                    <div><snap Style={"    border: 1px solid gray;padding: 0px 3px;border-radius: 7px;"}>AD</snap><p>{data.ad}</p></div>
                </div>
            </div>
        </div>
    )
}