import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/main/MainPage';
import 'styles/scss/reset.scss';
import Layout from 'components/common/layout/Layout';
import IntroPage from 'pages/intro/IntroPage';
import LoginPage from 'pages/login/LoginPage';
import RedirectKakaoPage from 'pages/redirectKakao/RedirectKakaoPage';
import SearchLocationPage from 'pages/searchLocation/SearchLocationPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<IntroPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/oauth/kakao' element={<RedirectKakaoPage />}></Route>
          <Route path='/search/map' element={<SearchLocationPage />}></Route>
        </Route>
        {/* 그 밖의 요청시 404 페이지로 보내주기 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
