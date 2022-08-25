import { string, shape, arrayOf } from 'prop-types';
import { Link, SkipToContent } from 'components';
import styles from './Navigation.module.scss';
import { classNames } from 'utils';

/* -------------------------------------------------------------------------- */

export function Navigation({ list, className, currentPage, ...restProps }) {
  return (
    <>
      <SkipToContent currentPage={currentPage} />
      {list && (
        <nav className={classNames(styles.container)(className)} {...restProps}>
          <ul className={classNames(styles.list)('resetList')}>
            {list.map((item) => (
              <Navigation.Item key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

Navigation.defaultProps = {
  currentPage: '',
};

const NavigationItemType = shape({
  id: string,
  href: string,
  text: string,
});

Navigation.propTypes = {
  list: arrayOf(NavigationItemType),
  className: string,
  currentPage: string,
};

/* -------------------------------------------------------------------------- */

Navigation.Item = function NavigationItem({ item, ...restProps }) {
  return (
    <li className={styles.item} {...restProps}>
      <Link to={item.href} className={styles.link}>
        {item.text}
      </Link>
    </li>
  );
};

Navigation.Item.propTypes = {
  item: NavigationItemType.isRequired,
};
