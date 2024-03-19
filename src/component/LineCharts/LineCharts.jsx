import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {

    const studentMarks = [
        { id: 1, name: "John", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Emily", math: 78, physics: 82, chemistry: 85 },
        { id: 3, name: "Michael", math: 92, physics: 88, chemistry: 92 },
        { id: 4, name: "Sophia", math: 70, physics: 75, chemistry: 68 },
        { id: 5, name: "William", math: 88, physics: 90, chemistry: 85 },
        { id: 6, name: "Emma", math: 95, physics: 92, chemistry: 98 },
        { id: 7, name: "Daniel", math: 62, physics: 65, chemistry: 70 },
        { id: 8, name: "Olivia", math: 80, physics: 85, chemistry: 75 },
        { id: 9, name: "Alexander", math: 75, physics: 72, chemistry: 80 },
        { id: 10, name: "Ava", math: 84, physics: 88, chemistry: 90 }
    ];


    return (
        <div>
            <LineChart width={800} height={400} data={studentMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='green'></Line>
                <Line dataKey={'physics'} stroke='yellow'></Line>
                <Line dataKey={'chemistry'}></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;