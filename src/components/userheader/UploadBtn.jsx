import Add from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const UploadBtn = () => {
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
      <Link href={`/upload`}>Upload</Link>
    </Button>
  );
};

export default UploadBtn;
