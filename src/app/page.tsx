import ArrayVisualization from "@/components/array-visualization";
import LinkedListVisualizer from "@/components/LinkedListVisualizer";
import StackVisualization from "@/components/stack-visualizations";
import TreeVisualization from "@/components/tree-visualization";

export default function Home() {
  return (
    < div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Estructuras de datos</h1>
      <ArrayVisualization />
      <StackVisualization />
      <LinkedListVisualizer />
      <TreeVisualization />
    </div>
  );
}
