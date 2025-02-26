'use client'

import React, { useState } from 'react';
import { LinkedList } from '../lib/LinkedList';

const LinkedListVisualizer: React.FC = () => {
  const [list] = useState(() => new LinkedList<number>());
  const [nodes, setNodes] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const updateNodes = () => {
    setNodes(list.toArray());
  };

  const handleInsertAtBeginning = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      list.insertAtBeginning(value);
      updateNodes();
      setInputValue('');
    }
  };

  const handleInsertAtEnd = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      list.insertAtEnd(value);
      updateNodes();
      setInputValue('');
    }
  };

  const handleInsertAfter = () => {
    const value = parseInt(inputValue);
    const target = parseInt(targetValue);
    if (!isNaN(value) && !isNaN(target)) {
      list.insertAfter(target, value);
      updateNodes();
      setInputValue('');
      setTargetValue('');
    }
  };

  const handleDelete = (value: number) => {
    list.delete(value);
    updateNodes();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista Enlazada Visualizador</h1>
      <div className="mb-4 space-y-2">
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 mr-2 rounded-lg"
            placeholder="Valor a insertar"
          />
          <button onClick={handleInsertAtBeginning} className="bg-blue-500 text-white p-2 mr-2 rounded-lg">
            Insertar al Inicio
          </button>
          <button onClick={handleInsertAtEnd} className="bg-green-500 text-white p-2 rounded-lg">
            Insertar al Final
          </button>
        </div>
        <div>
          <input
            type="number"
            value={targetValue}
            disabled={true}
            onChange={(e) => setTargetValue(e.target.value)}
            className="border p-2 mr-2 rounded-lg"
            placeholder="Valor después del cual insertar"
          />
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 mr-2 rounded-lg"
            placeholder="Valor a insertar"
          />
          <button onClick={handleInsertAfter} className="bg-yellow-500 text-white p-2 rounded-lg">
            Insertar Después
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4 flex-wrap">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <div className="bg-gray-200 p-4 rounded mb-2" >
              <button onClick={() => setTargetValue(node.toString())} className='font-bold'>{node}</button>
              <button
                onClick={() => handleDelete(node)}
                className="ml-2 text-red-500"
              >
                X
              </button>
            </div>
            {index < nodes.length - 1 && (
              <div className="text-gray-500 mb-2">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LinkedListVisualizer;