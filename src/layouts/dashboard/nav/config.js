// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'plot',
    path: '/dashboard/plot',
    icon: icon('ic_user'),
  },
  {
    title: 'installment',
    path: '/dashboard/installment',
    icon: icon('ic_cart'),
  },
  {
    title: 'installment details',
    path: '/dashboard/installment_details',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
