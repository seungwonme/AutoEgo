'use client';

import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';

export interface ContactButtonProps {
  className?: string;
  buttonLabel?: string;
}

const ContactButton = ({className, buttonLabel}: ContactButtonProps) => {
  const router = useRouter();

  const handleClick = async () => {
    router.push('/contact');
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfIEoy3R2w6hgj0S8ryXnr4jxwyGY3FB3BUKSYq-f_pi0272w/viewform?usp=sharing',
      '_blank',
    );
    router.push('/');
  };

  return (
    <Button size="lg" className={className} onClick={handleClick}>
      {buttonLabel || '제작 상담 예약하기'}
    </Button>
  );
};

export default ContactButton;
