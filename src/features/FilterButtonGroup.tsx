import { Button, Stack } from '@mui/material';
import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
  isOpenFilter: boolean;
  isOpenSearch: boolean;
  onFilterClick: () => void;
  onSearchClick: () => void;
};

export const FilterButtonGroup: FC<Props> = ({
  isOpenFilter,
  isOpenSearch,
  onFilterClick,
  onSearchClick,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <Button
        fullWidth
        variant="contained"
        endIcon={isOpenFilter ? <RemoveIcon /> : <AddIcon />}
        onClick={onFilterClick}
      >
        絞り込み
      </Button>
      <Button
        fullWidth
        variant="contained"
        endIcon={isOpenSearch ? <RemoveIcon /> : <AddIcon />}
        onClick={onSearchClick}
      >
        検索する
      </Button>
    </Stack>
  );
};
