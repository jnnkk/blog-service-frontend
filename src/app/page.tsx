import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import UserMenu from '@/components/usermenu'

export default function BlogHome() {

  const posts = [
    {
      title: "React 훅스 완벽 가이드",
      summary: "React 훅스의 모든 것: useState, useEffect, useContext 등 상세히 알아보기",
      author: "김코딩",
      date: "2023-06-15",
      tags: ["React", "Hooks", "JavaScript"],
      image: ""
    },
    {
      title: "Next.js로 블로그 만들기",
      summary: "Next.js를 사용하여 SEO에 최적화된 블로그를 만드는 방법",
      author: "이개발",
      date: "2023-06-10",
      tags: ["Next.js", "React", "Blog"],
      image: ""
    },
    {
      title: "TypeScript 기초부터 고급까지",
      summary: "TypeScript의 기본 문법부터 고급 기능까지 상세히 설명합니다.",
      author: "박타입",
      date: "2023-06-05",
      tags: ["TypeScript", "JavaScript"],
      image: ""
    },
    {
      title: "CSS-in-JS 라이브러리 비교",
      summary: "Styled-components, Emotion, CSS Modules 등 CSS-in-JS 라이브러리 비교 분석",
      author: "최스타일",
      date: "2023-06-01",
      tags: ["CSS", "JavaScript", "React"],
      image: ""
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800">MyBlog</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Input
                  type="search"
                  placeholder="검색..."
                  className="w-full sm:w-64"
                />
              </div>
              <Button variant="ghost" size="icon" className="ml-3">
                <Bell className="h-5 w-5" />
              </Button>
              <UserMenu />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-sm rounded-lg">
                <Image className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-1">·</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}