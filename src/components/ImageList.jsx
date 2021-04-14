import ImageCard from './ImageCard';
const ImageList = (props) =>{
  
 return <div className="list-grid container">
 {props.images.map((img)=>{
     return <ImageCard key={img.id}  alt={img.description} src={img.urls.regular} />
     })}
 </div>
}
export default ImageList;

