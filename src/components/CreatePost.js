import React, { useEffect, useState } from 'react';
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const navigate = useNavigate();

  const handleCreatePost = async () => {
    // auth.currentUserがnullでないことを確認
    if (auth.currentUser) {
      await addDoc(collection(db, "posts"), {
        title: title,
        postsText: postText,
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      });

      navigate("/");
    } else {
      // ユーザーがログインしていない場合の処理（必要に応じて）
      console.error("User is not authenticated");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);  // navigateを依存関係に追加

  return (
    <div className="CreatePostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>

        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>

        <button className='postButton' onClick={handleCreatePost}>投稿する</button>
      </div>
    </div>
  );
}

export default CreatePost;
