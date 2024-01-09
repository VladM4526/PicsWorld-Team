import axios from 'axios';

const baseURL = 'https://trackerwaterapp.onrender.com/api';

axios.defaults.baseURL = baseURL;

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const removeToken = () => {
//   delete baseURL.defaults.headers.common['Authorization'];
//   localStorage.removeItem('token');
// };

export const signup = async body => {
  const { data } = await axios.post('/auth/signup', body);
  setToken(data.token);
  console.log(setToken(data.token));
  return data;
};

export const signin = async body => {
  const { data } = await axios.post('/auth/signin', body);
  setToken(data.user.token);
  return data;
};

export const refreshUser = async token => {
  setToken(token);
  const { data } = await axios.get('/users/current');
  return data;
};

export const addWaterRate = async waterRate => {
  const { data } = await axios.put(`/users/waterrate`, {
    waterRate: waterRate,
  });
  return data.waterRate;
};

export const updateAvatarUsers = async newPictureUser => {
  const {
    data: { avatarURL },
  } = await axios.patch('/users/avatars', newPictureUser, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return avatarURL;
};

export const updateUserAccount = async updateUser => {
  const datasForSend = {};
  const entries = Object.entries(updateUser);
  entries.forEach(([key, value]) => {
    if (value) {
      datasForSend[key] = value;
    }
  });
  if (!datasForSend.newPassword) {
    delete datasForSend.oldPassword;
  }
  const { data } = await axios.patch('/users/userinfo', datasForSend);
  return data;
};
