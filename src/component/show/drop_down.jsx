export default function Drop_down({data,hendlechange}){
    let op;
    if(data && data.length>1){
        let i=0
     op= data.map((el)=>(<option  value={i}>season{i=i+1}</option>))
    }
    return(
        
        <div>
            {data && data.length==1?<h1 Style="    display: flex;
    padding-left: 7%;
    font-size: 25px;">season1</h1>:<select onChange={hendlechange} >{op}</select>}
        </div>
    )
}