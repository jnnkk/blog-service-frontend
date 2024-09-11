'use client'

import { useState } from 'react'
import { User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function UserMenu() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  return (
    <Popover open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-3">
          <User className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="flex flex-col space-y-2">
          <Button variant="outline" onClick={() => setIsUserMenuOpen(false)}>
            로그인
          </Button>
          <Button onClick={() => setIsUserMenuOpen(false)}>
            회원가입
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}