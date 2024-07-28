import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const TagComponent = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      {/* <Chip label="Chip Outlined" variant="outlined" /> */}
    </Stack>
  );
}

export default TagComponent
