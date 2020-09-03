import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-1805e.firebaseio.com/'
})