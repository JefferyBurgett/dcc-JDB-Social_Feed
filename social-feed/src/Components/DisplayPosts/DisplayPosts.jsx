import Post from '../Post_Folder/Post'

const DisplayPosts = (props) => {
    return ( 
        <table>
            <tbody>
            {props.parentPosts.map((feed, index) => {
                return (
                  <Post key={index} Post = {feed}/>    
                                   
                )
            })}
            </tbody>
        </table> );
}
 
export default DisplayPosts;