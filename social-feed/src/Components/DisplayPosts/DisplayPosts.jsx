const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.parentPosts.map((feedPost) => {
                return (
                <tr>
                    <td>{feedPost.Name}</td>
                    <td>{feedPost.Post}</td>
                </tr>            
                );
            })}
            </tbody>
        </table> );
}
 
export default DisplayPosts;