import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post, PostType } from './components/Post/Post';

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ErickWendel.png",
      name: "Erick Wendel",
      role: "Entrepreneur"
    },
    content: [
      { type: "paragraph", content: "Hey guuuuuuys, whats upp?" },
      { type: "paragraph", content: "It's released NOW the 7th JS Expert week. Go and have fun, also leave a comment below to show some love!!!" },
      { type: 'link', content: "expertJSweek.com"},
    ],
    publishedAt: new Date('2023-03-07 17:23:11'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/0xREALaldc.png",
      name: "Andre Luiz Donatti Costim",
      role: "Developer"
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      { type: "paragraph", content: "I've just uploaded one more project to my portfolio. It's a project that I did in a one week program called NLW Return, a event presented by Rocketseat. The name of the project is DoctorCare" },
      { type: 'link', content: "0xREALaldc.design/doctorcare"},
    ],
    publishedAt: new Date('2023-03-01 14:32:33'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      { type: "paragraph", content: "I've just uploaded one more project to my portfolio. It's a project that I did in a one week program called NLW Return, a event presented by Rocketseat. The name of the project is DoctorCare" },
      { type: 'link', content: "diego3g.design/doctorcare"},
    ],
    publishedAt: new Date('2023-03-04 20:17:11'),
  },
];

export function App() {

  return (
    // when we have more than ONE component in the return, we NEED to have a container around the components
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map( post => { 
            return (
              <Post 
                key={post.id}
                post={post}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}
