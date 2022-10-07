import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { ResponsivePie } from '@nivo/pie'
import React from 'react';


const data = [
  {
    "id": "php",
    "label": "php",
    "value": 212,
    "color": "hsl(322, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 213,
    "color": "hsl(61, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 439,
    "color": "hsl(151, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 542,
    "color": "hsl(226, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 438,
    "color": "hsl(220, 70%, 50%)"
  }
];

const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  0.2
              ]
          ]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  2
              ]
          ]
      }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'ruby'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'c'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'go'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'python'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'scala'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'lisp'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'elixir'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'javascript'
              },
              id: 'lines'
          }
      ]}
      legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}
  />
);

const ChartPage = () => {
  return (
    <>
      <MetaTags title="Chart" description="Chart page" />

      <h1>ChartPage</h1>

      <p>
        Find me in
        <code>./web/src/pages/ChartPage/ChartPage.js</code>
      </p>

      <p>
        My default route is named
        <code>chart</code>, link to me with `
        <Link to={routes.chart()}>Chart</Link>`
      </p>

      <div className='p-4 bg-black flex flex-col items-center text-white'>
        <div
          className='bg-blue-600 text-white'
          style={{ width: 800, height: 500 }}>
          <MyResponsivePie data={data} />
        </div>
    </div>


    </>
  )
}

export default ChartPage
