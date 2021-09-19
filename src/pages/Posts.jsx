import React, { useEffect, useState } from 'react';
import PostServise from '../API/PostServise';
import FormButton from '../components/Animation/button/FormButton';
import Loader from '../components/Animation/Loader/Loader';
import MyModal from '../components/Animation/MyModal/MyModal';
import Pagination from '../components/Animation/pagination/Pagination';
import CreateForm from '../components/CreateForm';
import PostFilter from '../components/PostFilter';
import Postlist from '../components/Postlist';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount, getPagesArray } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const searchPlusSortedPost = usePosts(posts, filter.sort, filter.query);

  let pagesArrays = getPagesArray(totalPages);

  const [fetchPosts, postLoading, postError] = useFetching(async () => {
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="APP">
      <FormButton style={{ marginTop: 25 }} onClick={() => setModal(true)}>
        Create post
      </FormButton>

      <MyModal show={modal} setShow={setModal}>
        <CreateForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <Postlist
          remove={deletePost}
          posts={searchPlusSortedPost}
          title="Posts about IT"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
