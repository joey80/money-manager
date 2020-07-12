export const Data = {
  menu: [
    {
      icon: 'CalendarOutlined',
      title: 'Monthly Bills',
      children: [
        {
          icon: 'FileDoneOutlined',
          title: 'View Bills',
          href: '/bills',
        },
        {
          icon: 'PlusCircleOutlined',
          title: 'Add A Payment',
          href: '/payment',
        },
      ],
    },
    {
      icon: 'DollarCircleOutlined',
      title: 'Monthly Spending',
      children: [
        {
          icon: 'ProfileOutlined',
          title: 'This Month',
          href: '/spending/month',
        },
        {
          icon: 'ProjectOutlined',
          title: 'All Time',
          href: '/spending/all',
        },
      ],
    },
    {
      icon: 'StockOutlined',
      title: 'Investments',
      href: '/investments',
    },
    {
      icon: 'UserOutlined',
      title: 'User',
      children: [
        {
          title: 'Profile',
          href: '/profile',
        },
        {
          title: 'Logout',
          href: '/logout',
        },
      ],
    },
  ],
};
