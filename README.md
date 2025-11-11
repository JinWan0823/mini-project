# 🧩 React 19 New Hooks Playground  
> Next.js 15 + React 19 의 새로운 훅(`use`, `useActionState`, `useFormStatus`, `useOptimistic`, `useTransition`)을 활용한 실습 프로젝트

---

## 🚀 프로젝트 개요

이 프로젝트는 **React 19의 신규 훅들과 Next.js 서버 액션** 을 함께 사용해보는 예제입니다.  
**댓글 시스템** 을 예시로 하여, 클라이언트와 서버 간의 상호작용을 구현합니다.

## 📁 프로젝트 구조
```
app/
├─ actions/
│  ├─ addComment.ts         # 댓글 작성 server action
│  ├─ updateLiked.ts        # 좋아요 토글 server action
│
├─ api/
│  └─ comments/
│     ├─ route.ts           # Mock API (GET, POST, PATCH)
│
├─ components/
│  ├─ CommentList.tsx       # use() 로 댓글 리스트 렌더링
│  ├─ CommentForm.tsx       # useActionState 기반 폼
│  ├─ CommentLi.tsx         # useOptimistic 기반 낙관적 업데이트
│
├─ types/
│  └─ commentTypes.ts       # Comment 타입 정의
│
└─ page.tsx                 # Suspense 및 컴포넌트 조합

```

## 🧠 브랜치 전략

| 브랜치명 | 설명 |
|-----------|-----------------------------|
| `feature/setup-project` | Next.js + Tailwind 초기 세팅 |
| `feature/api-mock` | Mock API (`/api/comments`) 추가 |
| `feature/use-promise` | `use()` + Suspense 실습 |
| `feature/use-actionstate` | `useActionState()` 기반 form 전송 |
| `feature/use-formstatus` | `useFormStatus()`로 submit 상태 표시 |
| `feature/use-optimistic` | 낙관적 업데이트 (좋아요 버튼) |

