import ImageComp from './ImageComp'
import ContentComp from './ContentComp'

const Blogs=(blogs)=>{
    console.log(blogs);
    return(
        <div className="BlogCard">
        <div className="Head">
            
            <img className="avatar header" src={blogs.image} alt=""/>
            <h4 className="card-title header">{blogs.name}</h4>
        </div>
        <div className="card-body">
        {blogs.type==="text"?<ContentComp {...blogs} />:<ImageComp {...blogs}/>}
          
        </div>
       
    </div>
    )
}

export default Blogs