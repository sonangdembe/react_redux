import { createSlice } from '@reduxjs/toolkit';
import STATUSES from '../src/globals/status/statuses';
import API from '../src/http';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    status: null,
    data: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setBlog(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setStatus, setBlog } = blogSlice.actions;
export default blogSlice.reducer;

export function addBlog(data) {
  return async function addBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post('blog', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('API response:', response);

      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error('API error:', error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get('blog');
      console.log('API response:', response);

      if (response.status === 201 && response.data.blog.length > 0) {
        dispatch(setBlog(response.data.blog));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error('API error:', error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function deleteBlog(id, token) {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`blog/${id}`, {
        headers: {
          token: token,
        },
      });
      console.log('API response:', response);

      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error('API error:', error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
