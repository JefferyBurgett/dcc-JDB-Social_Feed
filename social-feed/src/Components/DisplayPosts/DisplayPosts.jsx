import Post from '../Post_Folder/Post'
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return ( 
        <div className='display-section'>
            {props.parentPosts.map((feed, index) => {
                return (
                    <Post key={index} Post = {feed}/>               
                )
            })}
        </div> );
}
 
export default DisplayPosts;