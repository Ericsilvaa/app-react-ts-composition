import { loremIpsum } from 'lorem-ipsum'
import { Suspense } from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import List from 'react-virtualized/dist/commonjs/List'
//blog.logrocket.com/rendering-large-lists-react-virtualized/

const rowCount = 5000
const listHeight = 600
const rowHeight = 60
// const rowWidth = 700

const list = Array(rowCount)
  .fill(null)
  .map((val, idx) => {
    return {
      id: idx,
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text: loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      }),
      description: loremIpsum({
        count: 5,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    }
  })

const renderRow = ({
  index,
  key,
  style
}: {
  index: number
  key: string
  style: React.CSSProperties
}) => {
  return (
    <div key={key} style={style} className='border-b text-left flex '>
      <div className='mr-2'>
        <Suspense fallback={<div>Loading...</div>}>
          <img src={list[index].image} alt='' />
        </Suspense>
      </div>
      <div className='flex '>
        <div className=''>
          <div>{list[index].name}</div>
          <div>{list[index].text}</div>
        </div>
        <button
          onClick={() =>
            alert(list[index].name + '\n\n' + list[index].description)
          }
        >
          Read more...
        </button>
      </div>
    </div>
  )
}

const VirtualizationRoot = () => {
  return (
    <>
      <div className='p-3 '>
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              width={width}
              height={listHeight}
              rowHeight={rowHeight}
              rowRenderer={renderRow}
              rowCount={list.length}
              overscanRowCount={3}
            />
          )}
        </AutoSizer>
      </div>
    </>
  )
}

export default VirtualizationRoot
