import CardList from "../../components/Cards/CardList";
import Header from "../../components/Header/Header";
import GetGroupedCharts from '../../components/Charts/getGroupedCharts'


function PageNoData () {

    return (

        <div>
           <div> <Header /></div>
           {/* main  */}
           <div>
            <CardList />
            <GetGroupedCharts />
           </div>
        </div>
    )
}

export default PageNoData;