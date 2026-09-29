import styles from './AnnouncementBar.module.css';

const announcements = ['New Collection Just Dropped Burqas, Dupattas & Stoles', 'Modesty. Elegance. Grace. — Explore the CITY QUEENÉ Collection', 'Get 10% Off Your First Order  Use Code: QUEENE10',];


const AnnouncementBar = () => {

  const items = [...announcements, ...announcements];

  return (
    <div className={`${styles.announcementBar} items-center flex`}>
      <div className={`${styles.track} text-muted text-center flex items-center gap-12`}>   {/* Announcement Track */}
        {items.map((text, index) => (
          <span key={index} className={`${styles.item} `}>
            {text}
          </span>
        ))};
      </div>
    </div>
  );
}
export default AnnouncementBar;