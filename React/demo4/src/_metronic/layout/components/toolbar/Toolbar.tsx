/* eslint-disable jsx-a11y/anchor-is-valid */

import {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

/* eslint-disable no-unreachable */
const Toolbar = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('1')
  return (
    <div
      id='kt_layout_toolbar'
      className='card rounded-0 bgi-no-repeat bgi-position-x-end bgi-size-cover d-none'
      style={{
        backgroundColor: '#663259',
        backgroundSize: 'auto 100%',
        backgroundImage: `url('${toAbsoluteUrl('/media/misc/taieri.svg')}')`,
      }}
    >
      {/* begin::body */}
      <div className='card-body container-xxl pt-10 pb-8'>
        {/*begin::Title */}
        <div className=' d-flex align-items-center'>
          <h1 className='fw-bold me-3 text-white'>Search Jobs</h1>

          <span className='fw-bold text-white opacity-50'>Job Management System</span>
        </div>
        {/* end::Title */}

        {/* begin::Wrapper */}
        <div className='d-flex flex-column'>
          {/*begin::Block*/}
          <div className='d-lg-flex align-lg-items-center'>
            {/* begin::Simple form */}
            <div className='rounded d-flex flex-column flex-lg-row align-items-lg-center bg-body p-5 w-xxl-850px h-lg-60px me-lg-10 my-5'>
              {/* begin::Row */}
              <div className='row flex-grow-1 mb-5 mb-lg-0'>
                {/* begin::Col */}
                <div className='col-lg-4 d-flex align-items-center mb-3 mb-lg-0'>
                  <KTSVG
                    path='/media/icons/duotune/general/gen021.svg'
                    className='svg-icon-1 svg-icon-gray-400 me-1'
                  />
                  {/* begin::Input */}
                  <input
                    type='text'
                    className='form-control form-control-flush flex-grow-1'
                    name='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Your Search'
                  />
                  {/* end::Input */}
                </div>
                {/* end::Col */}

                {/* begin::Col */}
                <div className='col-lg-4 d-flex align-items-center mb-5 mb-lg-0'>
                  {/* begin::Desktop separartor */}
                  <div className='bullet bg-secondary d-none d-lg-block h-30px w-2px me-5'></div>
                  {/* end::Desktop separartor */}
                  <KTSVG
                    path='/media/icons/duotune/general/gen025.svg'
                    className='svg-icon-1 svg-icon-gray-400 me-1'
                  />
                  {/* begin::Select */}
                  <select
                    className='form-select border-0 flex-grow-1'
                    data-control='select2'
                    data-placeholder='Category'
                    data-hide-search='true'
                    defaultValue={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value=''></option>
                    <option value='1'>Category</option>
                    <option value='2'>In Progress</option>
                    <option value='3'>Done</option>
                  </select>
                  {/* end::Select */}
                </div>
                {/* end::Col */}

                {/* begin::Col */}
                <div className='col-lg-4 d-flex align-items-center'>
                  {/* begin::Desktop separartor */}
                  <div className='bullet bg-secondary d-none d-lg-block h-30px w-2px me-5'></div>
                  {/* end::Desktop separartor */}
                  <KTSVG
                    path='/media/icons/duotune/general/gen018.svg'
                    className='svg-icon-1 svg-icon-gray-400 me-3'
                  />
                  {/* begin::Link */}
                  <a
                    href='#'
                    className='btn btn-color-muted px-0 text-start rounded-0 py-1'
                    id='kt_modal_select_location_target'
                  >
                    Location
                  </a>
                  {/* end::Link */}
                </div>
              </div>
              {/* end::Row */}

              {/* begin::Action */}
              <div className='min-w-150px text-end'>
                <button type='submit' className='btn btn-dark' id='kt_advanced_search_button_1'>
                  Search
                </button>
              </div>
              {/* end::Action */}
            </div>
            {/* end::Simple form */}

            {/* begin::Action */}
            <div className='d-flex align-items-center'>
              <a className='fw-bold link-white fs-5' href='#'>
                Advanced Search
              </a>
            </div>
            {/*end::Action*/}
          </div>
          {/*end::Block*/}
        </div>
        {/*end::Wrapper*/}
      </div>
      {/*end::body*/}
    </div>
  )
}
export {Toolbar}
