import React from 'react';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Minhas contas',
    path: '/my_accounts',
    icon: <MdIcons.MdOutlineAccountBalanceWallet />,
    className: 'nav-text'
  },
  {
    title: 'Adicionar conta',
    path: '/add_account',
    icon: <MdIcons.MdAttachMoney />,
    className: 'nav-text'
  },
  {
    title: 'Família',
    path: '/family',
    icon: <RiIcons.RiHomeHeartFill />,
    className: 'nav-text'
  },
  {
    title: 'Controle seus dados',
    path: '/settings',
    icon: <GoIcons.GoSettings />,
    className: 'nav-text'
  },
];