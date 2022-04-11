import axios from 'axios';

axios.get('https://api.themoviedb.org/3/movie/12?api_key=df8d2d90ff4e6f4a0f1e460dda3a4a35').then(resp => resp.data).then(data => console.log(data));