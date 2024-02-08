'use client';
import { Input } from '@/components/ui/input';

type Props = {
  type: string;
  placeholder?: string;
};

export function InputItem({ type, placeholder }: Props) {
  return <Input type={type} placeholder={placeholder} />;
}
