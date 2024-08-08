import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Form from './components/form/Form';
import { addBlog } from '../../../store/blogSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import STATUSES from '../../globals/status/statuses';

const AddBlog = () => {
  const { status } = useSelector((state) => state.blog);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddBlog = (data) => {
    console.log('Dispatching addBlog with data:', data);
    dispatch(addBlog(data));
    
  };

  useEffect(() => {

    if (status === STATUSES.SUCCESS) {
      navigate('/');
    } 
  }, [status, navigate]);

  return (
    <Layout>
      <Form type='Add' onSubmit={handleAddBlog} />
    </Layout>
  );
};

export default AddBlog;
