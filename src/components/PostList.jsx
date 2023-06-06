import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styles from '../pages/mypage/mypage.module.scss';
import locationIcon from '../assets/svg/location.svg';
import priceIcon from '../assets/svg/price2.svg';
import likeNullIcon from '../assets/svg/likeBlack.svg';
import profileIcon from '../assets/svg/profileSmall.svg';

function PostList({ post }) {
  const loc = useLocation();

  // 날짜 포맷 변경
  const stDate = new Date(post.startDate);
  const formattedStDate =
    stDate && format(stDate, 'yyyy. MM. dd(E)', { locale: ko });

  const edDate = new Date(post.endDate);
  const formattedEdDate =
    edDate && format(edDate, 'yyyy. MM. dd(E)', { locale: ko });

  return (
    <Link to={`/detail/${post.id}`}>
      <div className={styles.listWrap}>
        <div className={styles.listPhotoFrame}>
          <img src={post.imageUrl} alt='오피스이미지' />
        </div>
        {loc.pathname === '/myreservations' ? (
          <div className={styles.listTextWrap}>
            <p className={styles.listTitle}>{post.title}</p>
            <p className={styles.resListText}>{post.location}</p>
            <p className={styles.resListText}>
              {formattedStDate} ~ {` ${formattedEdDate}`}
            </p>
          </div>
        ) : (
          <div className={styles.listTextWrap}>
            <p className={styles.listTitle}>{post.title}</p>
            <p className={styles.listText}>
              <img src={locationIcon} alt='위치 아이콘' /> {post.location}
            </p>
            <p className={styles.listText}>
              <img src={priceIcon} alt='금액 아이콘' />
              <span className={styles.priceText}>
                {post.price.toLocaleString()}
              </span>
              &nbsp;원/일
            </p>
            <div className={styles.listFlexWrap}>
              <p className={styles.listText}>
                <img src={likeNullIcon} alt='좋아요 아이콘' />
                {post.likeCount}
              </p>
              <p className={styles.capaText}>
                <img src={profileIcon} alt='인원수 아이콘' />
                최대 {post.capacity}명
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default PostList;
