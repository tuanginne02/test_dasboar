import Column from "./Column";
import Rows from "./Rows";
import MaterialTable from "./MaterialTable";
import ChartList from "./ChartList";
import Pie from "./Pie";

function getGroupedCharts() {
  return (
    <div>
      {/* Chart Top */}
      <div className="flex justify-between m-4">
        {/* Chart Kế Hoạch Sản Xuất  */}
        <Column />
        {/* Chart Top 5 KH  */}
        <Rows />
      </div>
      <div className="flex justify-between items-center mt-16">
        {/* Chart Kế Hoạch Sản Xuất  */}
        <div className="h-96 mx-4 w-[30rem]">
          <Pie />
        </div>
        <div className="h-96 mx-4 w-[30rem]">
          <ChartList />
        </div>
        <div className="h-96 mx-4 w-[30rem]">
          <MaterialTable />
        </div>
      </div>
    </div>
  );
}

export default getGroupedCharts;
