'use client';

import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

export default function Menu() {
  return (
    <Menubar className='w-full'>
      <MenubarMenu>
        <MenubarTrigger>메인</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>캐릭터</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>정보 조회</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
