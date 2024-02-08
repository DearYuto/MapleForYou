import React from 'react';
import SelectMenu from '../NavigationMenu/SelectMenu';
import Menu from '../Menu/Menu';
import { InputItem } from '@/components/input/Input';

export default function TopNav() {
  return (
    <header>
      <div className='flex items-center h-[64px] pt-0 pl-4 pr-4'>
        <div>
          <h1>MapleForYou</h1>
        </div>
        <div>
          <SelectMenu></SelectMenu>
        </div>
        <div className='flex-1'></div>
        <div>
          <InputItem type='input' placeholder='캐릭터명'></InputItem>
        </div>
      </div>
      <div>
        <nav>
          <ul className='flex h-full w-full items-center gap-[20px]'>
            <Menu />
          </ul>
        </nav>
      </div>
    </header>
  );
}
