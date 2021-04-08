import '../App.scss'
import Graph from './areaGraph'
import Column from './columnGraph'


export default function Dashboard() {
    return(
       <>
         <div className="section-heading">
            Dashboard
        </div>
        <div className="card-1">
            <div className="card-content">Patients</div>
        </div>
        <div className="card-2">
             <div className="card-content">Tests</div>
        </div>
        <div className="card-3">
             <div className="card-content">Procedure</div>
        </div>
        <div className="card-4">
            <div className="card-content">Medicines</div>        
        </div>
        <div className="graph-box">
            <Graph/>
        </div>
        <div className="barGraph-box">
            <Column/>
        </div>
        <div className="record-box">

        </div>
       </>
    )
}