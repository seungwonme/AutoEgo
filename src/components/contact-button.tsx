'use client';

import {Button} from '@/components/ui/button';
import {track} from '@vercel/analytics';

export interface ContactButtonProps {
  className?: string;
  buttonLabel?: string;
  trackLabel?: string;
}

const ContactButton = ({
  className,
  buttonLabel,
  trackLabel,
}: ContactButtonProps) => {
  return (
    <Button
      size="lg"
      className={className}
      onClick={() => {
        track(trackLabel || 'Contact Link Clicked');
        window.open(
          'https://docs.google.com/forms/d/e/1FAIpQLSfIEoy3R2w6hgj0S8ryXnr4jxwyGY3FB3BUKSYq-f_pi0272w/viewform?usp=sharing',
          '_blank',
        );
      }}
    >
      {buttonLabel || '제작 상담 예약하기'}
    </Button>
  );
};

export default ContactButton;
