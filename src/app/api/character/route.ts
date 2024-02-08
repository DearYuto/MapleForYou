import { getDate } from '@/app/utils/getDate';
import { commonNXHeaders } from './../../../constants/headers/index';

export type CharacterResponse = {
  date: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: number;
  character_exp: number;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
};

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const characterName = searchParams.get('name') ?? null;

  try {
    // ocid 조회
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_OPEN_API_URL}/id?character_name=${characterName}`,
      {
        headers: {
          ...commonNXHeaders,
        },
      }
    );

    const { ocid } = await res.json();

    if (!ocid) throw new Error('ocid가 존재하지 않습니다.');

    const date = getDate();

    // 기본 정보 조회
    const characterBasic = await fetch(
      `${process.env.NEXT_PUBLIC_OPEN_API_URL}/character/basic?ocid=${ocid}&date=${date}`,
      {
        headers: {
          ocid,
          ...commonNXHeaders,
        },
      }
    );
    const characterBasicInfo: CharacterResponse = await characterBasic.json();

    console.log(characterBasicInfo);
    return Response.json(characterBasicInfo);
  } catch (err) {
    console.error(err);
    throw new Error('캐릭터 정보 불러오기 실패');
  }
}
