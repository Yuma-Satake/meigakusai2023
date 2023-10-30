import { EVENT_DAY_INFO } from '@/const/eventDayInfo';
import { discloserWrapper } from '@/hooks/recoilWrapper/discloserWrapper';
import { isOpenScheduleState } from '@/hooks/state/isOpenScheduleState';
import { modalStyle } from '@/styles/modalStyle';
import {
  Box,
  Grid,
  IconButton,
  Modal,
  Stack,
  Table,
  TableBody,
  TableHead,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import ja from 'dayjs/locale/ja';
import CloseIcon from '@mui/icons-material/Close';

const ModalContent: FC = () => {
  return (
    <Stack alignItems="flex-start" spacing={2.5}>
      <Stack spacing={2}>
        {EVENT_DAY_INFO.map((item, index) => {
          const dayLabel = index + 1;
          return (
            <Stack key={item.day} direction="row" alignItems="center" spacing={1.5}>
              <Typography
                sx={{
                  p: 1.5,
                  border: 'solid 1px',
                  borderRadius: '5px',
                }}
              >
                Day{dayLabel}
              </Typography>
              <Stack alignContent="flex-start">
                <Typography>{dayjs(item.day).locale(ja).format('MM/DD (dd)')}</Typography>
                <Typography>
                  {dayjs(item.startTime).format('HH:mm')} 〜 {dayjs(item.endTime).format('HH:mm')}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export const ScheduleModal: FC = () => {
  const [isOpenModal, isOpenModalToggle] = discloserWrapper(useRecoilState(isOpenScheduleState));

  return (
    <Modal open={isOpenModal} onClose={isOpenModalToggle}>
      <Box sx={{ ...modalStyle, width: '90vw', px: 3, pb: 3 }}>
        <Grid container>
          <Grid container xs={10} alignContent="center">
            <Typography variant="h6">名学祭2023開催日程</Typography>
          </Grid>
          <Grid container xs={2}>
            <IconButton onClick={isOpenModalToggle}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <ModalContent />
      </Box>
    </Modal>
  );
};
