export let baseUrl = 'https://api.themoviedb.org/3';
export let apiKey = '?api_key=832a1964b71254f4652e3520b2ccb806';
export let ko = '&language=ko-KR';
export let en = '&language=en-US';

export let imgPaths = {
  original: 'https://image.tmdb.org/t/p/original',
  w500: 'https://image.tmdb.org/t/p/w500',
}; //imgPath

export let options = {
  playing: '/movie/now_playing', //현재상영작
  popular: '/movie/popular', //인기작
  trend: '/trending/all/week', //주간트렌드
  rated: '/movie/top_rated', //평점순
  upcoming: '/movie/upcoming', //최신개봉, 개봉예정
}; //options
