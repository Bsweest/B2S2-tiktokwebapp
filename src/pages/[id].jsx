import OpenEditProfileBtn from '@/components/account/OpenEditProfileBtn';
import TabList from '@/components/profile/TabList';
import SideBarHome from '@/components/sidebar/SideBarHome';
import { CheckAuth } from '@/templates/global/CheckAuth';
import useInteractNumber from '@/templates/hooks/useInteractNumber';
import { toastError } from '@/utils/createToast';
import getFirstLetter from '@/utils/getFirstLetter';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { useUser } from '@supabase/auth-helpers-react';
import useMutateFollow from 'backend/mutation/FollowMutate';
import { useMutateAvatar } from 'backend/mutation/ProfileMutation';
import { createRoom } from 'backend/services/ChatServices';
import { findRoomID } from 'backend/services/GetFriends';
import useQueryUserData, {
  useQueryCheckFollow,
  useQueryCheckFollowBack,
  useQueryInteractNumbers,
} from 'backend/services/ProfileServices';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Profile = () => {
  const router = useRouter();
  const user = useUser();
  const id = router.query.id;

  const [isClient, setIsClient] = useState(false);
  const [localAvatar, setLocalAvatar] = useState();

  const changeLocalAvatar = (str) => {
    setLocalAvatar(str);
  };

  const { data, isSuccess: cd1 } = useQueryUserData(id);

  const { data: isFL } = useQueryCheckFollow(id);
  const { data: isFLBack } = useQueryCheckFollowBack(id);

  const { data: interactNumer, isSuccess: cd2 } = useQueryInteractNumbers(id);
  const [total_hearts, follower, following] = useInteractNumber(interactNumer);

  const { mutate: mutateFL } = useMutateFollow();
  const { mutate: mutateAva } = useMutateAvatar(changeLocalAvatar);

  const updateFollow = () => {
    if (!CheckAuth()) return;

    mutateFL({ op_id: id, bool: !isFL });
  };

  const onChangeHandle = async (e) => {
    mutateAva(e.target.files[0]);
  };

  const clickChat = async () => {
    if (!CheckAuth()) return;
    if (!isFL || !isFLBack) {
      toastError("You two don't follow each other");
      return;
    }

    const roomID = await findRoomID(id);

    if (roomID) {
      router.push(`/messages/${roomID}`);
    } else {
      const newRoomID = await createRoom(id);
      router.push(`/messages/${newRoomID}`);
    }
  };

  useEffect(() => {
    if (!data) return;
    if (data.avatar_url) setLocalAvatar(data.avatar_url);
  }, [data]);

  useEffect(() => {
    if (!user) {
      setIsClient(false);
      return;
    }
    if (user.id === id) setIsClient(true);
  }, [user, id]);

  return (
    <Box
      className="flex row"
      sx={{
        flex: 1,
      }}
    >
      <SideBarHome />

      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          overflow: 'auto',
        }}
      >
        {cd1 && cd2 ? (
          <>
            <Box sx={{ width: '650px', marginBottom: '20px' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Avatar
                    sx={{
                      width: '150px',
                      height: '150px',
                    }}
                    src={localAvatar}
                  >
                    {getFirstLetter(data.displayname)}
                  </Avatar>
                  <label
                    htmlFor="input-avatar"
                    className="camera"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                  >
                    <IconButton
                      sx={{
                        display: 'flex',
                        width: '150px',
                        height: '150px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pointerEvents: 'none',
                      }}
                    >
                      <CameraAltRoundedIcon />
                    </IconButton>
                  </label>
                </Box>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 0px 0px 20px',
                  }}
                >
                  <Box
                    className="flex"
                    sx={{
                      width: '450px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#f1f1f1',
                      }}
                    >
                      {data.displayname}
                    </Typography>
                    {isClient ? (
                      <></>
                    ) : (
                      <IconButton sx={{ p: 0 }} onClick={clickChat}>
                        <EmailOutlined
                          sx={{
                            width: '35px',
                            height: '35px',
                          }}
                        />
                      </IconButton>
                    )}
                  </Box>
                  <Typography sx={{ color: '#f1f1f1' }}>
                    @{data.username}
                  </Typography>
                  {isClient ? (
                    <OpenEditProfileBtn data={data} />
                  ) : (
                    <Button
                      sx={{
                        height: '40px',
                        width: '250px',
                        marginTop: '28px',
                        textTransform: 'none',
                        p: '12px',
                        backgroundColor: isFL ? null : '#FE2C55',
                        '&:hover': {
                          backgroundColor: isFL ? '#313131' : '#a80022',
                        },
                        color: '#f1f1f1',
                        fontWeight: '700',
                        fontSize: '16px',
                      }}
                      variant={isFL ? 'outlined' : 'contained'}
                      onClick={updateFollow}
                    >
                      {isFL
                        ? isFLBack
                          ? 'Friend'
                          : 'Followed ✓'
                        : isFLBack
                        ? 'Follow Back'
                        : 'Follow'}
                    </Button>
                  )}
                  <input
                    type="file"
                    id="input-avatar"
                    hidden
                    onChange={onChangeHandle}
                    accept="image/png, image/jpeg"
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '15px 0px 15px 0px',
                  gap: '20px',
                }}
              >
                <Box className="flex row" sx={{ gap: '10px' }}>
                  <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
                    {following}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', marginTop: '6px' }}>
                    Following
                  </Typography>
                </Box>
                <Box className="flex row" sx={{ gap: '10px' }}>
                  <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
                    {follower}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', marginTop: '6px' }}>
                    Followers
                  </Typography>
                </Box>
                <Box className="flex row" sx={{ gap: '10px' }}>
                  <Typography sx={{ fontSize: '22px', fontWeight: 'bold' }}>
                    {total_hearts}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', marginTop: '6px' }}>
                    Likes
                  </Typography>
                </Box>
              </Box>

              <Typography>{data.bio}</Typography>
            </Box>

            <TabList uid={id} />
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
