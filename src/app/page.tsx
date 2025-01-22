import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Upload,
  MessageSquare,
  Share2,
  Clock,
  Target,
  MagnetIcon as Magic,
  Lock,
} from "lucide-react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"], // 사용할 굵기 지정
  subsets: ["latin"], // 사용할 서브셋 지정 (한글 사용 시 'korean' 추가)
  display: "swap", // 폰트 로딩 전략 (optional, 성능 최적화)
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h1
                className={`text-6xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent ${ubuntu.className} pb-2`}
              >
                AutoEgo
              </h1>
              <p className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                크리에이터의 지식이 24시간 일하는 곳.
              </p>
              <p className="text-xl text-gray-400">
                당신의 지식 기반 챗봇으로 수익을 극대화하세요.
              </p>
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                className="text-xl bg-purple-600 hover:bg-purple-700 w-full pt-8 pb-8 duration-500 ease-in-out font-bold"
              >
                <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfIEoy3R2w6hgj0S8ryXnr4jxwyGY3FB3BUKSYq-f_pi0272w/viewform?usp=sharing"}>제작 상담 예약하기</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/3qaYurEIf5s"
              title="AutoEgo 소개"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">무엇이 특별할까요?</h2>
          <p className="text-xl text-gray-400">
            당신의 시간은 소중합니다.
            <br />
            AutoEgo와 함께 더 효율적으로 일하고, 더 많은 고객을 확보하세요.
            <br />
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: "업무 자동화",
              description: "반복적인 질문에 대한 답변 시간 단축",
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "맞춤형 답변",
              description: "고객에게 질문 의도와 맥락에 맞는 최적의 답변 제공",
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: "보안",
              description: "강의 자료 유출 방지",
            },
            {
              icon: <Magic className="w-8 h-8" />,
              title: "초개인화 제작",
              description: "원하는대로 맞춤형 개발",
            },
          ].map((benefit, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="text-purple-400">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">제작 프로세스</h2>
          <p className="text-xl text-gray-400">
            간단한 3단계로 나만의 AI 챗봇을 만들어보세요.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Upload className="w-12 h-12" />,
              title: "자료 전달",
              description: "강의 대본, PDF, 영상 등 다양한 자료 가능",
            },
            {
              icon: <MessageSquare className="w-12 h-12" />,
              title: "전문 개발진 챗봇 제작",
              description: "전달받은 자료 기반으로 챗봇 제작",
            },
            {
              icon: <Share2 className="w-12 h-12" />,
              title: "공유",
              description: "생성된 챗봇을 웹이나 앱으로 공유",
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
      </section>

      {/* Use Cases Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            어떻게 활용할 수 있을까요?
          </h2>
          <p className="text-xl text-gray-400">
            AutoEgo는 다양한 분야에서 활용되어 당신의 업무 효율성을 높여줍니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "온라인 강의 강사",
              description: "강의 자료, FAQ 업로드 후 학생들에게 챗봇 제공",
              cta: "학생들의 반복 질문, 이제 AutoEgo에게 맡기세요!",
              image: "/undraw_teaching_58yg.svg",
            },
            {
              title: "콘텐츠 크리에이터",
              description: "콘텐츠 아카이브를 기반으로 팬들과의 소통 자동화",
              cta: "팬들에게 맞춤형 답변을 선물하세요.",
              image: "/undraw_fans_icv6.svg",
            },
            {
              title: "코치",
              description: "1대1 코칭 자동화",
              cta: "당신의 지식을 기반으로 코칭 업무를 자동 처리합니다.",
              image: "/undraw_chat-bot_44el.svg",
            },
          ].map((useCase, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 overflow-hidden"
            >
              <div className="w-full">
                <Image
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  width={400}
                  height={300}
                  style={{
                    height: "300px",
                    objectPosition: "top",
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
                {/* <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-400"
                >
                  자세히 알아보기
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24 mx-auto">
        <Card className="bg-gradient-to-r from-purple-900 to-pink-900 border-0 flex items-center justify-center">
          <CardContent className="p-12 text-center space-y-6 max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              AutoEgo와 함께 더 스마트하게 일하고, 더 많은 가치를 창출하세요.
            </p>
            <Button
              size="lg"
              className="pt-6 pb-6 w-full bg-white text-purple-900 hover:bg-gray-300 transition duration-500 ease-in-out"
            >
              <Link href={"https://bit.ly/3PJKpnA"} className="font-bold">
                제작 상담 예약하기
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
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
