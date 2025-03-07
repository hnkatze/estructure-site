import ArrayVisualization from "@/components/array-visualization";
import GraphVisualization from "@/components/graph-visualization";
import LinkedListVisualizer from "@/components/LinkedListVisualizer";
import MapVisualization from "@/components/map-visualization";
import QueueVisualization from "@/components/queue-visualization";
import SetVisualization from "@/components/set-visualization";
import StackVisualization from "@/components/stack-visualizations";
import TreeVisualization from "@/components/tree-visualization";


export default function Home() {
  return (
    < div className="w-full h-max flex flex-col gap-10 justify-center items-center">
      <h1 className="text-4xl font-bold my-10 underline">Estructuras de datos</h1>
      <ArrayVisualization />
      <StackVisualization />
      <QueueVisualization />
      <LinkedListVisualizer />
      <TreeVisualization />
      <GraphVisualization />
      <MapVisualization />
      <SetVisualization />

 
    </div>
  );
}
