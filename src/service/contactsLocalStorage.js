import { LC_KEY } from './constants';
import { toast } from 'react-hot-toast';

const defaultValue = [];

const getData = () => {
  try {
    return JSON.parse(localStorage.getItem(LC_KEY));
  } catch (err) {
    console.log(err.message);
    toast.error('LocalStorage is corrupted :(');
    return defaultValue;
  }
};

const setData = data => {
  localStorage.setItem(LC_KEY, JSON.stringify(data));
};

export { getData, setData };
