import Search from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';
import Link from 'next/link';
import React, { useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <Box
      sx={{
        position: 'relative',
        border: '1px solid #333',
        borderRadius: '2rem',
        backgroundColor: '#0f0f0f',
        width: '450px',
        height: '42px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <InputBase
        value={input}
        onChange={handleChangeInput}
        placeholder="Search accounts and videos"
        sx={{
          width: '100%',
          color: 'inherit',
          '& .MuiInputBase-input': {
            padding: '5px',
            paddingLeft: '15px',
            width: '100%',
          },
        }}
      />
      <Box
        sx={{
          width: '40px',
          borderLeft: '1px solid #333',
          alignItems: 'center',
          padding: '8px',
        }}
      >
        <Link href={`/search/${input}`}>
          <Search style={{ color: 'gray' }} />
        </Link>
      </Box>
    </Box>
  );
};

export default SearchBar;
