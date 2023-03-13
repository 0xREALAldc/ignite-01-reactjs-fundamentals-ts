import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
// import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
                     
interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  // when we already know the options to the variable, like for 'type' that we know it only will be the two below, we can specify in this way
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

                      //destructuring
export function Post({ post }: PostProps) {    
  const [comments, setComments] = useState([
    'Great milestone man, cheers!'
  ])
  const [newCommentText, setNewCommentText] = useState('');
                                                                                 // here we put the locale that we choose to convert to the location of the user
  const publishedDateFormatted = format(post.publishedAt, "d 'of' LLLL 'at' h:mm"/*, { locale: ptBR,  }*/)
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,  { 
    addSuffix: true,
    /*locale: ptBR */ 
  }) // also can pass it here the 'locale'


  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Please fill in the comment')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave a feedback</strong>

        <textarea 
          name='comment'
          placeholder='Leave a comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map( comment => {
          return (
            <Comment 
              key={comment} 
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}