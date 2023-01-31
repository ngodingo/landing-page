import { Button } from "@components/ui"
import { useRouter } from 'next/router'


export function ComingSoon () {
  const router = useRouter()

  function handleClick (e) {
    e.preventDefault()
    router.back()
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-heading-1 font-semibold">Coming Soon</h1>
      <p className="text-body-2">This page is under construction..🛠️</p>
      <Button variant="primary" href="" className="mt-4" onClick={handleClick}>
      Go Back
      </Button>
    </div>
  )
}