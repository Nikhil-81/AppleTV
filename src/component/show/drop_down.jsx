export default function Drop_down({data,hendlechange}){
    let op;
    if(data && data.length>1){
        let i=0
     op= data.map((el)=>(<option  value={i}>season{i=i+1}</option>))
    }
    return(
        
        <div>
            {data && data.length==1?<h1>season1</h1>:<select onChange={hendlechange} >{op}</select>}
        </div>
    )
}