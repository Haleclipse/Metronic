import {FC} from 'react'

type Props = {
  last_login?: string
}

const UserLastLoginCell: FC<Props> = ({last_login}) => (
  <div className='badge badge-light fw-bold'>{last_login}</div>
)

export {UserLastLoginCell}
