'use client';

import {Button} from '@/components/ui/button';
import {track} from '@vercel/analytics';

export interface ContactButtonProps {
  className?: string;
  buttonLabel?: string;
}

const ContactButton = ({className, buttonLabel}: ContactButtonProps) => {
  const handleClick = async () => {
    track('Contact Button Clicked');
    window.open('https://l.linklyhq.com/l/23Sxz', '_blank');
  };

  return (
    <Button size="lg" className={className} onClick={handleClick}>
      {buttonLabel || '제작 상담 예약하기'}
    </Button>
  );
};

export default ContactButton;
