'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import ContactButton from '@/components/contact-button';
import Section from '@/components/section';
import {
  Upload,
  MessageSquare,
  Share2,
  Clock,
  Target,
  MagnetIcon as Magic,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'], // 사용할 굵기 지정
  subsets: ['latin'], // 사용할 서브셋 지정 (한글 사용 시 'korean' 추가)
  display: 'swap', // 폰트 로딩 전략 (optional, 성능 최적화)
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section>
        <div className="flex flex-col justify-center min-h-[70vh]">
          <div className="space-y-8 text-center">
            <h1
              className={`text-7xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent ${ubuntu.className} pb-2`}
            >
              AutoEgo
            </h1>
            <p className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              수익창출 없는 GPTs는 이제 그만!
              <br />
              당신의 지식 기반 챗봇으로 수익을 창출하세요
            </p>
            <div className="mt-12 flex justify-center">
              <ContactButton
                className="text-xl bg-purple-600 hover:bg-purple-700 px-16 py-6 duration-500 ease-in-out font-bold"
                buttonLabel="수익화 챗봇 제작 예약하기"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            GPTs와 무엇이 다를까요?
          </h2>
          <p className="text-xl text-gray-400">
            GPTs는 수익창출이 없습니다.
            <br />
            AutoEgo와 함께 만들고, 수익을 창출하세요.
            <br />
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: '결제',
              description: '구독형 결제 모듈 제공',
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: '질문 데이터',
              description: '질문 데이터 관리 대시보드',
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: '보안',
              description: '학습 데이터 유출 방지',
            },
            {
              icon: <Magic className="w-8 h-8" />,
              title: '초개인화 제작',
              description: '앱/웹 맞춤형 개발',
            },
          ].map((benefit, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={index}
            >
              <Card className="bg-gray-900 border-gray-800 transform transition-all duration-300 hover:bg-gray-800">
                <CardContent className="p-6 space-y-4">
                  <div className="text-purple-400">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">제작 프로세스</h2>
          <p className="text-xl text-gray-400">
            간단한 3단계로 수익화 AI 챗봇을 만들어보세요.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Upload className="w-12 h-12" />,
              title: '자료 전달',
              description: '강의 대본, PDF, 영상 등 학습데이터',
            },
            {
              icon: <MessageSquare className="w-12 h-12" />,
              title: '전문 개발진 챗봇 제작',
              description: '신속한 챗봇 제작',
            },
            {
              icon: <Share2 className="w-12 h-12" />,
              title: '공유',
              description: '생성된 챗봇을 웹이나 앱으로 공유',
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center space-y-4 p-6">
                <div className="text-purple-400 bg-purple-400/10 p-4 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
              {index <= 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            어떻게 수익화 할까요?
          </h2>
          <p className="text-xl text-gray-400">
            AutoEgo는 다양한 상품과 함께 수익을 창출할 수 있습니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '온라인 강의 강사',
              description: '수강생에게 챗봇 제공',
              cta: '강의와 함께 팔 수 있습니다.',
              image: '/undraw_teaching_58yg.svg',
            },
            {
              title: '크리에이터',
              description: '팬들과의 소통 자동화',
              cta: '팬들에게 개인화 커뮤니티을 선물하세요.',
              image: '/undraw_fans_icv6.svg',
            },
            {
              title: '코치',
              description: '1대1 코칭 자동화',
              cta: '코칭 상품에 추가되어 판매할 수 있습니다.',
              image: '/undraw_chat-bot_44el.svg',
            },
          ].map((useCase, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={index}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20">
                <div className="w-full">
                  <Image
                    src={useCase.image || '/placeholder.svg'}
                    alt={useCase.title}
                    width={400}
                    height={300}
                    style={{
                      height: '300px',
                      objectPosition: 'top',
                    }}
                    className="w-full object-cover pt-12 pb-12 pl-8 pr-8"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">{useCase.description}</p>
                  <p className="text-sm text-purple-400">{useCase.cta}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Card className="bg-gradient-to-r from-purple-900 to-pink-900 border-0 flex items-center justify-center">
            <CardContent className="p-12 text-center space-y-6 max-w-xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                지금 바로 시작하세요
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                AutoEgo와 함께 수익화에 도전하세요.
              </p>
              <ContactButton
                className="pt-6 pb-6 w-full bg-white text-purple-900 hover:bg-gray-300 transition duration-500 ease-in-out font-bold"
                buttonLabel="제작 상담 예약하기"
              />
            </CardContent>
          </Card>
        </motion.div>
      </Section>
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 AutoEgo. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact: 010-4718-8591 고성현</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
