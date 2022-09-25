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
            {props.parentPosts.map((feed, index) => {
                return (
                    <tr key={index}>
                    <td>{index}</td>
                    <td>{feed.Name}</td>
                    <td>{feed.Post}</td>
                </tr>            
                );
            })}
            </tbody>
        </table> );
}
 
export default DisplayPosts;