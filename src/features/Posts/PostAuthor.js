import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);

    const author =users.find(user=>user.id === userId)
    const authorName = author ? author.name : 'Unknown author'
 
  return <span>by {authorName}</span>
}

export default PostAuthor