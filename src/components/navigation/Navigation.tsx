import Segments from '../Segments/Segments';
import Tabs from '../Tabs/Tabs';

interface NavigationProps {
  type?: 'Segments' | 'Tabs';
  [prop:string]: any;
}

const Navigation: React.FC<NavigationProps> = ({ type = 'Tabs', props }) => {
  if (type === 'Segments') {
    return <Segments { ... props} />;
  }

  return <Tabs { ... props} />;
};

export default Navigation;
