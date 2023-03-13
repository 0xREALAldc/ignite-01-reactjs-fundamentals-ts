import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [cheeringCount, setCheeringCount] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleCheeringComment() {
    // setCheeringCount(cheeringCount + 1)
    setCheeringCount((state) => {
      return state + 1
    })

    console.log(cheeringCount)
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/diego3g.png" 
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="03 of March - 15:47h" dateTime="2023-03-05 15:47:53">About 1h ago</time>
            </div>

            <button 
              title="Delete comment"
              onClick={handleDeleteComment}
            >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleCheeringComment}>
            <ThumbsUp />
            Cheering <span>{cheeringCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}