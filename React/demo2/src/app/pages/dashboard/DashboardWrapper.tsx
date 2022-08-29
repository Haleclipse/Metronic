import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget10,
  MixedWidget8,
  TilesWidget1,
  TilesWidget4,
  TilesWidget2,
  TilesWidget5,
  TilesWidget3,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>

      <div className='col-xl-8'>
        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
          <div className='col-xl-3'>
            <TilesWidget1 className='card-xl-stretch' />
          </div>
          <div className='col-xl-9'>
            <TilesWidget4 className='card-xl-stretch' />
          </div>
        </div>

        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
          <div className='col-xl-6'>
            <TilesWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
            <div className='row gx-5 gx-xl-8'>
              <div className='col-xl-6'>
                <TilesWidget5
                  className='card-xxl-stretch bg-primary'
                  svgIcon='/media/icons/duotune/general/gen025.svg'
                  titleClass='text-white'
                  descriptionClass='text-white'
                  iconClass='svg-icon-white'
                  title='790'
                  description='New Products'
                />
              </div>
              <div className='col-xl-6'>
                <TilesWidget5
                  className='card-xxl-stretch bg-body'
                  svgIcon='/media/icons/duotune/general/gen002.svg'
                  titleClass='text-dark'
                  descriptionClass='text-muted'
                  iconClass='svg-icon-success'
                  title='8,600'
                  description='New Customers'
                />
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <TilesWidget3 className='card-xl-stretch mb-5 mb-xl-8' />
          </div>
        </div>
      </div>
    </div>

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
