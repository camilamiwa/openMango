import React from 'react';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Adicionar conta',
    path: '/addAccount',
    icon: <MdIcons.MdOutlineAccountBalanceWallet />,
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