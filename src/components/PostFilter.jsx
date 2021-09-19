import React from 'react';
import MyInput from './Animation/input/MyInput';
import MySelect from './Animation/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Searh"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selected) => setFilter({ ...filter, sort: selected })}
        startValue="Sort by"
        options={[
          { value: 'title', name: 'by title' },
          { value: 'body', name: 'by description' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
