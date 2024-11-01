import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarks = [
    { name: "Alice", math: 78, physics: 82, chemistry: 88 },
    { name: "Bob", math: 85, physics: 90, chemistry: 79 },
    { name: "Charlie", math: 92, physics: 88, chemistry: 94 },
    { name: "Diana", math: 74, physics: 76, chemistry: 80 },
    { name: "Ethan", math: 88, physics: 91, chemistry: 86 },
    { name: "Fiona", math: 67, physics: 70, chemistry: 72 },
    { name: "George", math: 90, physics: 93, chemistry: 89 },
    { name: "Hannah", math: 81, physics: 84, chemistry: 78 },
    { name: "Isaac", math: 95, physics: 97, chemistry: 96 },
    { name: "Julia", math: 72, physics: 75, chemistry: 74 },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <LChart width={900} height={400} data={studentMarks}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red" />
        <Line dataKey="physics" stroke="purple" />
        <Line dataKey="chemistry" stroke="green" />
      </LChart>
    </div>
  );
};

export default LineChart;
