import {
  CalendarOutlined,
  DollarCircleOutlined,
  FileDoneOutlined,
  PlusCircleOutlined,
  ProfileOutlined,
  ProjectOutlined,
  StockOutlined,
  UserOutlined,
} from '@ant-design/icons';

// switch to dynamic imports
export const IconBuilder = (elm) => {
  switch (elm) {
    case 'CalendarOutlined': {
      return <CalendarOutlined />;
    }
    case 'DollarCircleOutlined': {
      return <DollarCircleOutlined />;
    }
    case 'FileDoneOutlined': {
      return <FileDoneOutlined />;
    }
    case 'PlusCircleOutlined': {
      return <PlusCircleOutlined />;
    }
    case 'ProfileOutlined': {
      return <ProfileOutlined />;
    }
    case 'ProjectOutlined': {
      return <ProjectOutlined />;
    }
    case 'StockOutlined': {
      return <StockOutlined />;
    }
    case 'UserOutlined': {
      return <UserOutlined />;
    }
    default:
      return null;
  }
};

export default IconBuilder;
