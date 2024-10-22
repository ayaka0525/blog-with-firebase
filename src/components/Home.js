import React from 'react';
import './Home.css';
import { auth, db } from '../firebase';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts(); // useEffect内で関数を実行
  }, []); // 空の依存配列を指定し、コンポーネントがマウントされた時だけ実行

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (

          <div className='postContents' key={post.id}>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>


        <div className='postTextContainer'>
         {post.postsText}
        </div>
        <div className="nameAndDeleteButton">
          <h3>@{post.author.username}</h3>
          {post.author.id === auth.currentUser?.uid && (
          <button onClick={() => handleDelete(post.id)}>削除</button>
        )}
        </div>

      </div>
  );


  })}
    </div>
  );
};

export default Home;
