'use client';

import { useState } from 'react';
import NextImage from 'next/image';

import { CharacterResponse } from './api/character/route';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { characterAPI } from '@/constants/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const [nickname, setNickname] = useState('');
  const [character, setCharacter] = useState<CharacterResponse | null>(null);

  const searchNickname = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${characterAPI.characterInfo}?name=${nickname}`
      );

      const data: CharacterResponse = await res.json();

      console.log(data);

      setCharacter(() => ({
        ...data,
      }));
    } catch (err) {
      window.alert(
        '잘못된 요청입니다. \n캐릭터 닉네임을 다시 확인해주세요. (대소문자 구분)'
      );
      console.error(err, '캐릭터 조회 실패');
    }
  };

  return (
    <main>
      <div className='flex'>
        <Input type='text' onChange={(e) => setNickname(e.target.value)} />
        <Button variant='outline' onClick={searchNickname}>
          검색
        </Button>
      </div>
      {character && (
        <div className='flex justify-center items-center h-full p-4 pb-12'>
          <Card className='rounded-xl border-[1px] border-slate-50 shadow-slate-100 shadow-2xl bg-white'>
            <CardContent className='pt-4 flex flex-col gap-2 justify-center items-center'>
              <div className='bg-mask-gradient rounded-full bg-slate-100 p-4 border-slate-200'>
                <NextImage
                  className='pr-2'
                  width={120}
                  height={120}
                  quality={100}
                  alt='캐릭터'
                  src={character.character_image}
                ></NextImage>
              </div>
            </CardContent>
            <CardContent className='flex flex-col gap-2 text-slate-700'>
              <CardTitle className='text-center text-slate-600'>
                {character.character_name}
              </CardTitle>
              <CardDescription className='text-center'>
                Lv. {character.character_level}
              </CardDescription>
              <hr className='m-2' />
              <CardDescription>
                <span className='font-bold text-slate-700'>직업 | </span>
                {character.character_class}
              </CardDescription>
              <CardDescription>
                <span className='font-bold text-slate-700'>경험치 | </span>
                {character.character_exp?.toLocaleString()} (
                {character.character_exp_rate}%)
              </CardDescription>
              <CardDescription>
                <span className='font-bold text-slate-700'>서버 | </span>
                {character.world_name}
              </CardDescription>
              <CardDescription>
                <span className='font-bold text-slate-700'>길드 | </span>
                {character.character_guild_name ?? '없음'}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
