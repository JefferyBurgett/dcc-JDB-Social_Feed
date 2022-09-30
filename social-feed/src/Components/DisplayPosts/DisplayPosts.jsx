import Post from '../Post_Folder/Post'
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return ( 
        <div className='display-section'>
            {/* <tbody> */}
            {props.parentPosts.map((feed, index) => {
                return (
                    <Post key={index} Post = {feed}/>               
                )
            })}
            {/* </tbody> */}
        </div> );
}
 
export default DisplayPosts;