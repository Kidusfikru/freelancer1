import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { mediumTypographyProps } from "../../../../Constants";

const LineChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      id: "Earnings",
      data: [
        { x: "Jan", y: 1000 },
        { x: "Feb", y: 1500 },
        { x: "Mar", y: 1200 },
        { x: "Apr", y: 1800 },
        { x: "May", y: 1400 },
        { x: "Jun", y: 2000 },
        { x: "Jul", y: 1700 },
        { x: "Aug", y: 1900 },
        { x: "Sep", y: 1600 },
        { x: "Oct", y: 2200 },
        { x: "Nov", y: 2100 },
        { x: "Dec", y: 2300 },
      ],
    },
  ];

  return (
    <>
      <Typography {...mediumTypographyProps}>Earnings </Typography>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "month",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableArea={true}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default LineChart;
