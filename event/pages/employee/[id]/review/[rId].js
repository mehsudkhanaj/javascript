import { useRouter } from 'next/router'

export default function ReviewDetails () {
  const router = useRouter()
  const { id, rId } = router.query
  const empid = router.query.rId

  return (
    <div>
      Review {rId} for Employee {id}
    </div>
  )
}
