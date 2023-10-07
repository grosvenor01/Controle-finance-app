import Plastic from "react-plastic";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  return (
    <div className="bg-dominant p-8">
      <div className="flex overflow-x-scroll">
        {cards.map((card) => (
          <Plastic
            type={card}
            name="KEMMOUN RAMZY"
            key={card}
            expiry="10/24"
            number="15987654981254"
            cvc="765"
          />
        ))}
      </div>
      <div className="flex space-x-8">
        <div id="left-side" className="flex-[6] space-y-4">
          <div className="bg-white p-6 rounded-lg space-y-4">
            <h1 className="text-xl">Investing Box</h1>
            <div className="flex space-x-6 w-fit">
              {investingBox.map((el) => (
                <div
                  key={el.title}
                  className="flex flex-col items-center justify-center space-4"
                >
                  <h1 className="text-gray-400 text-sm">{el["title"]}</h1>
                  <h1 className="text-lg font-semibold">{el.percent}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Spending History</h1>
              <select className="select select-ghost">
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </div>
            <div className="">
              <Line options={options} data={data} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg space-y-4">
            <h1 className="text-xl font-semibold">Transaction History</h1>
            <div className="overflow-x-auto">
              <table className="table text-black">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" hover:text-white hover">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  <tr className=" hover:text-white hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  <tr className=" hover:text-white hover">
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          id="right-side"
          className="rounded-lg flex-[5] flex flex-col space-y-8"
        >
          <div className="flex items-center justify-center bg-white p-4 rounded-lg">
            <div className="flex flex-col items-center justify-center flex-1">
              <h1 className="text-xs text-gray-400">Average Daily spending</h1>
              <h1 className="text-xl font-semibold">$ 100</h1>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col items-center justify-center flex-1">
              <h1 className="text-xs text-gray-400">Score</h1>
              <h1 className="text-xl font-semibold">3189</h1>
            </div>
          </div>
          <div className="flex flex-col p-6 space-y-8 justify-center bg-white flex-1">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Spending By Category</h1>
              <select className="select select-ghost">
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </div>
            <div className="space-y-8">
              <Doughnut
                options={{
                  cutout: "70%",
                  responsive: true,
                }}
                data={{
                  datasets: [
                    {
                      label: "# of Votes",
                      labels: [
                        "Housing",
                        "Transportation",
                        "Food",
                        "Utilities",
                        "Insurance",
                        "Medical",
                      ],
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
              <div className="flex flex-col">
                {doghnutItems.map((item) => (
                  <div
                    className="flex justify-between space-x-12"
                    key={item.name}
                  >
                    <div className="flex space-x-2 justify-center items-center">
                      <div
                        className="rounded-full w-4 h-4"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />
                      <div>{item.name}</div>
                    </div>
                    <div>{item.percent}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
    },
  },
};

export const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Spending (USD.)",
      data: [125, 198, 236, 147, 98, 250],
      borderColor: "#6132EC",
      backgroundColor: "rgba(97,50,236, 0.5)",
    },
  ],
};

//const cards = ["visa", "mastercard"];
 const cards = ["visa", "mastercard", "amex",  "maestro"];
//

const investingBox = [
  { title: "monthly rate", percent: "10%" },
  { title: "platform", percent: "etoro" },
  { title: "total investment", percent: "$1500" },
  { title: "total revenue", percent: "$500" },
];

const _doghnutItems = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const doghnutItems = [
  {
    name: "Housing",
    precent: 17,
    color: "rgba(255, 99, 132, 1)",
  },
  {
    name: "Transportation",
    percent: 40,
    color: "rgba(54, 162, 235, 1)",
  },
  {
    name: "Food",
    percent: 20,
    color: "rgba(255, 206, 86, 1)",
  },
  {
    name: "Utilities",
    percent: 10,
    color: "rgba(75, 192, 192, 1)",
  },
  {
    name: "Insurance",
    percent: 5,
    color: "rgba(153, 102, 255, 1)",
  },
  {
    name: "Medical",
    percent: 8,
    color: "rgba(255, 159, 64, 1)",
  },
];
