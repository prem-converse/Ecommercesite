'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { TiTick } from 'react-icons/ti'
import { MdNavigateNext } from 'react-icons/md'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel (props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            label='Description'
            {...a11yProps(0)}
            className='capitalize interFont font-semibold text-[12px]  lg:text-[13px] xl:text-[14px] text-[#293341]  2xl:text-[16px] ml-3  hover:text-[#099DBD] pb-1.5  border-[#099DBD]'
          />
          <Tab
            label='Item Details'
            {...a11yProps(1)}
            className=' capitalize interFont lg:ml-2 xl:ml-6 2xl:ml-[106px] font-semibold text-[12px] text-[#293341] lg:text-[13px] xl:text-[14px]  2xl:text-[16px]  hover:text-[#099DBD]  border-[#099DBD]'
          />
          <Tab
            label='Specifications'
            {...a11yProps(2)}
            className='capitalize interFont lg:ml-2 xl:ml-6 2xl:ml-[94px] font-semibold text-[12px] text-[#293341] lg:text-[13px] xl:text-[14px]  2xl:text-[16px]  hover:text-[#099DBD]  border-[#099DBD]'
          />
          <Tab
            label='Quick Links'
            {...a11yProps(3)}
            className='capitalize interFont lg:ml-2 xl:ml-6 2xl:ml-[98px] font-semibold text-[12px] text-[#293341] lg:text-[13px] xl:text-[14px]  2xl:text-[16px]  hover:text-[#099DBD]  border-[#099DBD]'
          />
          <Tab
            label='Legal Information'
            {...a11yProps(4)}
            className='capitalize interFont lg:ml-2 xl:ml-6 2xl:ml-[83px] font-semibold text-[12px] text-[#293341] lg:text-[13px] xl:text-[14px]  2xl:text-[16px]  hover:text-[#099DBD]  border-[#099DBD]'
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='w-[75%] h-full 2xl:pl-1'>
          <div className=' pl-3 pt-3 pb-4 2xl:pb-10'>
            <h2 className='interFont font-semibold text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#293341] pb-2.5 2xl:pb-6'>
              Product Description
            </h2>
            <p className='interFont font-normal text-[12px] lg:text-[13px] xl:text-[14px]  2xl:text-[16px] text-[#29334199] 2xl:w-[82%] '>
              When it&apos;s colder than the far side of the moon and spitting
              rain too, you&apos;ve still got to look good. From water-repellent
              leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style,
              so you can keep your flame burning when the weather hits. Metal
              lace hardware and extended tongue bring mountain boot toughness,
              while the star-studded toe design gives your look the edge
            </p>
          </div>

          <div className='pl-3 pb-3 2xl:pb-6'>
            <h2 className='interFont font-semibold text-[13px] lg:text-[15px] xl:text-[16px]  2xl:text-[18px] pb-2 2xl:pb-8'>
              Benefits
            </h2>
            <div className=''>
              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>

              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Water-repellent finish and internal membrane help keep your
                  feet dry.
                </p>
              </div>
              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Toe piece with star pattern adds durability.
                </p>
              </div>
              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Synthetic insulation helps keep you warm.
                </p>
              </div>
              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Originally designed for performance hoops, the Air unit
                  delivers lightweight cushioning.
                </p>
              </div>
              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Plush tongue wraps over the ankle to help keep out the
                  moisture and cold.
                </p>
              </div>
              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Rubber outsole with aggressive traction pattern adds durable
                  grip.
                </p>
              </div>
              <div className='flex pb-1.5 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                  Durable leather is easily cleanable so you can keep your look
                  fresh.
                </p>
              </div>
            </div>
          </div>

          <div className='pl-3 pb-3 2xl:pb-6'>
            <h2 className='interFont font-semibold text-[13px] lg:text-[15px] xl:text-[16px]  2xl:text-[18px] 2xl:pb-7  pb-2'>
              Product Details
            </h2>
            <div className='flex pb-1.5 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                Not intended for use as Personal Protective Equipment (PPE)
              </p>
            </div>

            <div className='flex pb-1.5  2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5  2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px]  text-[#29334199]'>
                Water-repellent finish and internal membrane help keep your feet
                dry.
              </p>
            </div>
          </div>

          <div className='pl-3 2xl:pb-4'>
            <h2 className='interFont font-semibold text-[13px] lg:text-[15px] xl:text-[16px]  2xl:text-[18px] 2xl:pb-7 pb-2'>
              More Details
            </h2>
            <div className='flex pb-1.5 2xl:pb-4 '>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5  text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                Lunarlon midsole delivers ultra-plush responsiveness
              </p>
            </div>

            <div className='flex pb-1.5 2xl:pb-4 '>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                Encapsulated Air-Sole heel unit for lightweight cushioning
              </p>
            </div>

            <div className='flex pb-1.5 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                Colour Shown: Ale Brown/Black/Goldtone/Ale Brown
              </p>
            </div>

            <div className='flex pb-1.5 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-[#29334199]'>
                Style: 805899-202
              </p>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='w-[75%] h-full 2xl:pl-3'>
          <div className=''>
            <h2 className='interFont font-semibold text-[14px] lg:text-[15px] 2xl:text-[18px] pb-2 xl:pb-2.5 2xl:pb-5'>
              Size
            </h2>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px]  pb-1 2xl:pb-2 '>
              XS :
              <span className='text-[#29334199]'>
                Width: 94 cm, Length: 67 cm
              </span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pb-1 2xl:pb-2 '>
              S :
              <span className='text-[#29334199]'>
                Width: 1.02 m, Length: 69 cm
              </span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pb-1 2xl:pb-2  '>
              M :
              <span className='text-[#29334199]'>
                Width: 1.10 m, Length: 70 cm
              </span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pb-1  2xl:pb-2'>
              L :
              <span className='text-[#29334199]'>
                Width: 1.18 m, Length: 72 cm
              </span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px]  2xl:text-[16px] pb-1 2xl:pb-2'>
              XL :
              <span className='text-[#29334199]'>
                Width: 1.26 m, Length: 73 cm
              </span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pb-1  2xl:pb-2'>
              XXL :
              <span className='text-[#29334199]'>
                Width: 1.34 m, Length: 74 cm
              </span>
            </h3>

           

          </div>
          <div>
            <h2 className='interFont font-semibold text-[14px] lg:text-[15px] 2xl:text-[18px] pb-2 pt-3 2xl:pt-7 xl:pb-2.5 2xl:pb-6'>
              About this Item
            </h2>
            <div className=''>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Neck Type :
                  <span className='text-[#29334199]'> Polo Collar</span>
                </p>
              </div>

              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Sleeves :{' '}
                  <span className='text-[#29334199]'>Half Sleeve </span>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Fit Type :{' '}
                  <span className='text-[#29334199]'>Regular Fit </span>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Pattern : <span className='text-[#29334199]'>Solid </span>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Fabric Type :
                  <span className='text-[#29334199]'> Cotton Blend </span>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Pattern Coverage :
                  <span className='text-[#29334199]'> All Over</span>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Wash Care:{' '}
                  <span className='text-[#29334199]'>
                    Machine Wash & Hand Wash{' '}
                  </span>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Season : <span className='text-[#29334199]'>Summer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='w-[75%] h-full 2xl:pl-3'>
          <div className=''>
            <h2 className='interFont font-semibold text-[14px] lg:text-[15px] 2xl:text-[18px] pb-3 xl:pb-3 2xl:pb-5'>
              Key Feature
            </h2>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px]  pb-1 2xl:pb-2 '>
              Lifestyle :
              <span className='text-[#29334199] pl-1'>Everyday Use</span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pb-1 2xl:pb-2 '>
              Brand :<span className='text-[#29334199] pl-1'>Allen Solly</span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pb-1 2xl:pb-2  '>
              Model ID :
              <span className='text-[#29334199] pl-1'>LE01TPLAINMULTI</span>
            </h3>
            <h3 className='interFont font-medium text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] pb-1  2xl:pb-2'>
              Part Number :
              <span className='text-[#29334199] pl-1'>LE01TPLAINMULTI</span>
            </h3>
          </div>
          <div>
            <h2 className='interFont font-semibold text-[14px] lg:text-[15px] 2xl:text-[18px] pb-3 pt-3 2xl:pt-7 xl:pb-5 2xl:pb-6'>
              Specification
            </h2>
            <div className=''>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Ideal Specification <br />
                  <p className='2xl:mt-1 font-normal'>Ideal For :{' '}
                  <span className='text-[#29334199]'>Men, Unisex, Boy</span></p>
                </p>
              </div>

              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Occasion Specification <br />
                 <p className='2xl:mt-1 font-normal'> Occasion : <span className='text-[#29334199]'>Casual </span></p>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Prints & Patterns Details <br />
                 <p className='2xl:mt-1 font-normal'> Prints & Patterns :{' '}
                  <span className='text-[#29334199]'>Solid </span></p>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Wash Care Detail <br />
                 <p className='2xl:mt-1 font-normal'> Wash Care :{' '}
                  <span className='text-[#29334199]'>
                    Machine Wash & Hand Wash{' '}
                  </span></p>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Color Set Details <br />
                  <p className='2xl:mt-1 font-normal'>Color Family:{' '}
                  <span className='text-[#29334199]'>
                    {' '}
                    Black, Green, Maroon, Multicolor, Red, White{' '}
                  </span></p>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Fabric Specification for Western <br />
                 <p className='2xl:mt-1 font-normal'> Fabric: <span className='text-[#29334199]'> 100% Cotton</span></p>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Combo Attribute for Men&apos;s Apparel <br />
                <p className='2xl:mt-1 font-normal'>  Combo: <span className='text-[#29334199]'>Pack of 1 </span></p>
                </p>
              </div>
              <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
                <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                  <TiTick />
                </span>
                <p className='interFont font-medium pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Collar Specification <br />
                 <p className='2xl:mt-1 font-normal'> Collar: <span className='text-[#29334199]'>Round Neck</span></p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className='2xl:pl-2'>
          <h2 className='interFont font-semibold text-[14px] lg:text-[15px] 2xl:text-[18px] pb-2.5 lg:pb-3 xl:pb-4 2xl:pt-2  2xl:pb-6'>
            Quick Links
          </h2>
          <div className=''>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>

              <div className='flex  w-full'>
                <p className='   interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                  Product Type :{' '}
                </p>

                <span className='text-[#29334199] hover:text-[#099DBD] hover:translate-y-[-5px] duration-500  text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2'>
                  Men&apos;s T-Shirts & Polos{' '}
                </span>
                <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                  <MdNavigateNext />{' '}
                </span>
                <span className='text-[#29334199] hover:text-[#099DBD] hover:translate-y-[-5px] duration-500  text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2'>
                  T-Shirt for Men&apos;s
                </span>
              </div>
            </div>

            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Brand :{' '}
                <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-1 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500 '>
                  Allen Solly{' '}
                </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Color :{' '}
              </p>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                White{' '}
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />{' '}
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                Black
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />{' '}
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                Pink{' '}
              </span>
              <span className='text-[#29334199]text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                Grey{' '}
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                Blue{' '}
              </span>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Fabric :{' '}
                <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-1 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                  Cotton{' '}
                </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Fit :{' '}
                <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-1 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                  {' '}
                  Regular Fit{' '}
                </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Sleeves length :{' '}
                <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-1 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                  {' '}
                  Half Sleeves
                </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Pattern :{' '}
                <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-1 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                  Solid{' '}
                </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Size :{' '}
              </p>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                XS{' '}
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />{' '}
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                S
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />{' '}
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                M{' '}
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                L{' '}
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                XL{' '}
              </span>
              <span className='text-[#29334199] text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[18px] pl-2'>
                <MdNavigateNext />
              </span>
              <span className='text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-2 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                XXL{' '}
              </span>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Neck Shape :{' '}
                <span className=' text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-1 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                  Round
                </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Pack :{' '}
                <span className=' text-[#29334199] text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pl-1 hover:text-[#099DBD] hover:translate-y-[-5px] duration-500'>
                  Pack of 1
                </span>
              </p>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className='2xl:pl-2'>
          <h2 className='interFont font-semibold text-[14px] lg:text-[15px] 2xl:text-[18px] pb-4   xl:pb-5 2xl:pb-7'>
            More Details
          </h2>
          <div className=''>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Maximum Retail Price (inclusive of all taxes) :{' '}
                <span className='text-[#29334199]'>Rs.699</span>
              </p>
            </div>

            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Common or Generic Name :{' '}
                <span className='text-[#29334199]'>
                  Men&apos;s Round Neck Plain Cotton (Multicolor) Regular Fit
                  T-Shirt.
                </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Net Contents / Net Quantity :{' '}
                <span className='text-[#29334199]'>1</span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Manufacturer&apos;s Name and Address :{' '}
                <span className='text-[#29334199]'>Allen Solly </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Packer&apos;s Name and Address :{' '}
                <span className='text-[#29334199]'>-</span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Marketer&apos;s name and Address :{' '}
                <span className='text-[#29334199]'> NA (Not Applicable)</span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Importer&apos;s Name and Address :{' '}
                <span className='text-[#29334199]'>NA (Not Applicable) </span>
              </p>
            </div>
            <div className='flex pb-1.5 lg:pb-2 2xl:pb-4'>
              <span className='text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 2xl:h-4.5 2xl:w-5 2xl:rounded-[50%] flex justify-center items-center text-gray-600'>
                <TiTick />
              </span>
              <p className='interFont font-normal pl-1.5 2xl:pl-3.5 text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] '>
                Country of Origin / Manufacture / Assembly :{' '}
                <span className='text-[#29334199]'>India</span>
              </p>
            </div>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  )
}
