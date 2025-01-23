import { Button } from "./Button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./Select"
import { usePagination } from "../model/usePagination"

type PageNationProps = {
  totalPage: number
}
function Pagination({ totalPage }: PageNationProps) {
  const { skip, limit, total, nextPage, prevPage, updateLimit } = usePagination(totalPage)
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <Select value={limit.toString()} onValueChange={(value) => updateLimit(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectContent>
        </Select>
        <span>항목</span>
      </div>
      <div className="flex gap-2">
        <Button disabled={skip === 0} onClick={prevPage}>
          이전
        </Button>
        <Button disabled={skip + limit >= total} onClick={nextPage}>
          다음
        </Button>
      </div>
    </div>
  )
}

export { Pagination }
