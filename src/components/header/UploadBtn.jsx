import Add from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const UploadBtn = () => {
  const userId = window.localStorage.getItem('userId');

  return (
    <Button
      sx={{
        width: 100,
        color: 'gray',
        borderColor: '#333',
      }}
      variant="outlined"
      startIcon={<Add />}
    >
      <Link href={`/upload/${userId}`}>Upload</Link>
    </Button>
  );
};

export default UploadBtn;
