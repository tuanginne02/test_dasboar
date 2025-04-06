import Column from "./Column";
import Rows from "./Rows";
import MaterialTable from "./MaterialTable";
import ChartList from "./ChartList";
import Pie from "./Pie";

function getGroupedCharts() {
  return (
    <div className="p-4">
      {/* Chart Top */}
      <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-4">
        {/* Chart Kế Hoạch Sản Xuất */}
        <div className="flex-1">
          <Column />
        </div>
        {/* Chart Top 5 KH */}
        <div className="flex-1">
          <Rows />
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="flex justify-between flex-col md:flex-col lg:flex-row mt-10">
        <div className="h-96">
          <Pie />
        </div>
        <div className="  h-96">
          <ChartList />
        </div>
        <div className=" h-96">
          <MaterialTable />
        </div>
      </div>
    </div>
  );
}

export default getGroupedCharts;
