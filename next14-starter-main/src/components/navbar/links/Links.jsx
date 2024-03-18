
import styles from './links.module.css'
import NavLink from "@/components/navbar/links/navLink/NavLink"

const Links = () => {
    
    const links = [
        {
            title: 'Homepage',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Blog',
            path: '/blog',
        },
    ];

   
    return (
        <div className={styles.links}>
            {links.map((item, i) => (
                // <Link key={i} href={item.path}>
                //     {item.title}
                // </Link>
                <NavLink item={item} key={i}/>
            ))}
        </div>
    );
};

export default Links;
