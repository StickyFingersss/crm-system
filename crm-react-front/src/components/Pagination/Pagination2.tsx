import React from 'react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import TodoList from '../../pages/TodoList/TodoList';
import { useMyDispatch, useMySelector } from '../../redux/hooks';
import { fetchTodos } from '../../redux/thunkActions';

import './Pagination2.css';

export default function Pagination2() {
  const todos = useMySelector((store) => store.todoSlice.todos);
  const session = useMySelector((store) => store.isAutenticatedSlice.session);
  const [selectedManager, setSelectedManager] = useState<number | null>(null);
  const dispatch = useMyDispatch();

  useEffect(() => {
    void dispatch(fetchTodos());
  }, [dispatch]);

  const todosPerPage = 3;
  const [currentTodos, setCurrentTodos] = useState(null);

  const [pageCount, setPageCount] = useState(0);
  const [todoOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = todoOffset + todosPerPage;
    const filteredTodos = todos?.filter(
      (todo) =>
        (!selectedManager && Number(todo.user_id) === session?.userId) ||
        Number(todo.user_id) === Number(selectedManager)
    );

    const slicedTodos = filteredTodos?.slice(todoOffset, endOffset);
    setPageCount(Math.ceil(filteredTodos?.length / todosPerPage));
    setCurrentTodos(slicedTodos);
  }, [todoOffset, todosPerPage, todos, selectedManager, session]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * todosPerPage) % todos?.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <TodoList
        currentTodos={currentTodos}
        selectedManager={selectedManager}
        setSelectedManager={setSelectedManager}
      />
      <ReactPaginate
        className='paginate'
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
