import { Box, Modal } from '@mui/material';
import { useRouter } from 'next/router';

const ShortDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Box>
      <Modal isOpen={true} />
    </Box>
  );
};

export default ShortDetail;
